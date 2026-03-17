import { useParams } from 'react-router';
import { motion } from 'motion/react';
import { Play, Clock } from 'lucide-react';
import { playlists, songs } from '../data/music-data';
import { usePlayer } from '../context/player-context';

export function PlaylistDetail() {
  const { id } = useParams();
  const { playSong } = usePlayer();
  
  const playlist = playlists.find((p) => p.id === Number(id));
  
  if (!playlist) {
    return (
      <div className="p-8">
        <p className="text-white">Playlist not found</p>
      </div>
    );
  }

  const playlistSongs = songs.filter((song) => playlist.songs.includes(song.id));
  const totalDuration = playlistSongs.reduce((acc, song) => acc + song.duration, 0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatTotalTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours} hr ${minutes} min`;
    }
    return `${minutes} min`;
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative h-96 bg-gradient-to-b from-purple-900/40 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
        <div className="absolute inset-0 flex items-end p-8">
          <div className="flex gap-6 items-end w-full">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={playlist.cover}
              alt={playlist.title}
              className="w-64 h-64 rounded-lg shadow-2xl object-cover"
            />
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white/80 text-sm mb-2">Playlist</p>
                <h1 className="text-6xl text-white mb-4">{playlist.title}</h1>
                <p className="text-white/80 mb-4">{playlist.description}</p>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span>{playlist.curator}</span>
                  <span>•</span>
                  <span>{playlistSongs.length} songs</span>
                  <span>•</span>
                  <span>{formatTotalTime(totalDuration)}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* Play Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => playSong(playlistSongs[0], playlistSongs)}
          className="bg-purple-500 hover:bg-purple-600 p-4 rounded-full transition-colors"
        >
          <Play className="w-8 h-8 text-white" fill="currentColor" />
        </motion.button>

        {/* Song List */}
        <div className="space-y-1">
          {/* Header */}
          <div className="grid grid-cols-[auto_auto_1fr_auto_auto] gap-4 px-4 py-2 text-white/60 text-sm border-b border-white/10">
            <div className="w-8 text-center">#</div>
            <div className="w-12"></div>
            <div>Title</div>
            <div>Album</div>
            <div className="w-16 text-center">
              <Clock className="w-4 h-4 mx-auto" />
            </div>
          </div>

          {/* Songs */}
          {playlistSongs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => playSong(song, playlistSongs)}
              className="grid grid-cols-[auto_auto_1fr_auto_auto] gap-4 px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer group items-center"
            >
              <div className="w-8 text-center text-white/60 group-hover:text-white flex items-center justify-center">
                <span className="group-hover:hidden">{index + 1}</span>
                <Play className="w-4 h-4 hidden group-hover:block" fill="currentColor" />
              </div>
              <img
                src={song.cover}
                alt={song.title}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="text-white">{song.title}</p>
                <p className="text-white/60 text-sm">{song.artist}</p>
              </div>
              <div className="text-white/60 text-sm truncate">{song.album}</div>
              <div className="w-16 text-center text-white/60">
                {formatTime(song.duration)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
