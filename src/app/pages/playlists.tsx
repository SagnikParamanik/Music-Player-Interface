import { motion } from 'motion/react';
import { Music } from 'lucide-react';
import { playlists } from '../data/music-data';
import { Link } from 'react-router';

export function Playlists() {
  return (
    <div className="p-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl text-white mb-2">Playlists</h1>
        <p className="text-white/60">Curated collections for every mood</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <Music className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-white mb-1 truncate">{playlist.title}</h3>
              <p className="text-white/60 text-sm line-clamp-2 mb-2">{playlist.description}</p>
              <p className="text-white/40 text-xs">{playlist.songs.length} songs • {playlist.curator}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
