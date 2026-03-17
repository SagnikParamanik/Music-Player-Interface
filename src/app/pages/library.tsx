import { motion } from 'motion/react';
import { Music, Clock, Play } from 'lucide-react';
import { playlists, songs, albums } from '../data/music-data';
import { usePlayer } from '../context/player-context';
import { Link } from 'react-router';

export function Library() {
  const { playSong } = usePlayer();

  const recentlyPlayed = songs.slice(0, 8);

  return (
    <div className="p-8 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl text-white mb-2">Your Library</h1>
        <p className="text-white/60">Your music collection</p>
      </motion.div>

      {/* Recently Played */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl text-white">Recently Played</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {recentlyPlayed.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => playSong(song, songs)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-white/5">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Play className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="text-white text-sm truncate">{song.title}</h3>
              <p className="text-white/60 text-xs truncate">{song.artist}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Playlists */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Music className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl text-white">Your Playlists</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {playlists.map((playlist, index) => (
            <motion.div
              key={playlist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to={`/playlist/${playlist.id}`}
                className="block bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={playlist.cover}
                    alt={playlist.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white mb-1 truncate">{playlist.title}</h3>
                <p className="text-white/60 text-sm line-clamp-2">{playlist.description}</p>
                <p className="text-white/40 text-xs mt-2">{playlist.songs.length} songs</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Albums */}
      <section>
        <h2 className="text-2xl text-white mb-6">Albums</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to={`/album/${album.id}`}
                className="block bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors group"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white mb-1 text-sm truncate">{album.title}</h3>
                <p className="text-white/60 text-xs truncate">{album.artist}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
