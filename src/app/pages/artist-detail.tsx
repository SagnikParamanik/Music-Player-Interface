import { useParams } from 'react-router';
import { motion } from 'motion/react';
import { Play, Users } from 'lucide-react';
import { artists, songs, albums } from '../data/music-data';
import { usePlayer } from '../context/player-context';
import { Link } from 'react-router';

export function ArtistDetail() {
  const { id } = useParams();
  const { playSong } = usePlayer();
  
  const artist = artists.find((a) => a.id === Number(id));
  
  if (!artist) {
    return (
      <div className="p-8">
        <p className="text-white">Artist not found</p>
      </div>
    );
  }

  const artistSongs = songs.filter((song) => song.artistId === artist.id);
  const artistAlbums = albums.filter((album) => album.artistId === artist.id);

  const formatFollowers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count.toString();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${artist.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div className="absolute inset-0 flex items-end p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 p-2 rounded-full">
                <Users className="w-5 h-5 text-white" />
              </div>
              <p className="text-white/80">Artist</p>
            </div>
            <h1 className="text-7xl text-white mb-4">{artist.name}</h1>
            <p className="text-white/80 text-lg">{formatFollowers(artist.followers)} followers</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-12">
        {/* Play Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => playSong(artistSongs[0], artistSongs)}
          className="bg-purple-500 hover:bg-purple-600 p-4 rounded-full transition-colors"
        >
          <Play className="w-8 h-8 text-white" fill="currentColor" />
        </motion.button>

        {/* Popular Tracks */}
        <section>
          <h2 className="text-2xl text-white mb-6">Popular Tracks</h2>
          <div className="space-y-2">
            {artistSongs.slice(0, 5).map((song, index) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.01 }}
                onClick={() => playSong(song, artistSongs)}
                className="grid grid-cols-[auto_auto_1fr_auto] gap-4 items-center px-4 py-3 rounded-lg hover:bg-white/10 cursor-pointer group"
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
                  <p className="text-white/60 text-sm">{song.plays.toLocaleString()} plays</p>
                </div>
                <button className="text-white/60 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Albums */}
        {artistAlbums.length > 0 && (
          <section>
            <h2 className="text-2xl text-white mb-6">Albums</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {artistAlbums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Link
                    to={`/album/${album.id}`}
                    className="block group"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-white/5">
                      <img
                        src={album.cover}
                        alt={album.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-white text-sm truncate">{album.title}</h3>
                    <p className="text-white/60 text-xs">{album.releaseDate}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* About */}
        <section>
          <h2 className="text-2xl text-white mb-6">About</h2>
          <div className="bg-white/5 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-6">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="text-white/80 mb-4">{artist.bio}</p>
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="text-white/60">Followers</p>
                    <p className="text-white text-xl">{formatFollowers(artist.followers)}</p>
                  </div>
                  <div>
                    <p className="text-white/60">Genre</p>
                    <p className="text-white text-xl">{artist.genre}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
