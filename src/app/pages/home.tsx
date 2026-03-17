import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Link } from 'react-router';
import { playlists, songs, albums } from '../data/music-data';
import { usePlayer } from '../context/player-context';

export function Home() {
  const { playSong } = usePlayer();

  const featuredSongs = songs.slice(0, 6);
  const trendingAlbums = albums.slice(0, 4);
  const featuredPlaylists = playlists.slice(0, 4);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-4 md:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-64 md:h-96 rounded-2xl overflow-hidden"
      >
        <img
          src={songs[7].cover}
          alt="Featured"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
          <div className="p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-purple-400 mb-2 text-sm md:text-base">Featured Track</p>
              <h1 className="text-3xl md:text-6xl text-white mb-2 md:mb-4">{songs[7].title}</h1>
              <p className="text-white/80 text-base md:text-xl mb-4 md:mb-6">{songs[7].artist}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => playSong(songs[7], songs)}
                className="bg-purple-500 hover:bg-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-white flex items-center gap-2 transition-colors text-sm md:text-base"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
                Play Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trending Now */}
      <section>
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl text-white">Trending Now</h2>
          <Link to="/search" className="text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base">
            See all
          </Link>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {featuredSongs.map((song) => (
            <motion.div
              key={song.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
              onClick={() => playSong(song, songs)}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-2 md:mb-3 bg-white/5">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-purple-500 p-2 md:p-3 rounded-full">
                    <Play className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="text-white text-xs md:text-sm truncate">{song.title}</h3>
              <p className="text-white/60 text-[10px] md:text-xs truncate">{song.artist}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Playlists */}
      <section>
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl text-white">Featured Playlists</h2>
          <Link to="/playlists" className="text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base">
            See all
          </Link>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {featuredPlaylists.map((playlist) => (
            <motion.div
              key={playlist.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to={`/playlist/${playlist.id}`}
                className="block bg-white/5 hover:bg-white/10 rounded-lg p-3 md:p-4 transition-colors group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-3 md:mb-4">
                  <img
                    src={playlist.cover}
                    alt={playlist.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white mb-1 truncate text-sm md:text-base">{playlist.title}</h3>
                <p className="text-white/60 text-xs md:text-sm line-clamp-2">{playlist.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* New Releases */}
      <section>
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl text-white">New Releases</h2>
          <Link to="/search" className="text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base">
            See all
          </Link>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {trendingAlbums.map((album) => (
            <motion.div
              key={album.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to={`/album/${album.id}`}
                className="block bg-white/5 hover:bg-white/10 rounded-lg p-3 md:p-4 transition-colors group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-3 md:mb-4">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white mb-1 truncate text-sm md:text-base">{album.title}</h3>
                <p className="text-white/60 text-xs md:text-sm truncate">{album.artist}</p>
                <p className="text-white/40 text-[10px] md:text-xs">{album.releaseDate}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}