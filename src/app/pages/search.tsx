import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search as SearchIcon, Play, Music, User, Disc } from 'lucide-react';
import { songs, artists, albums } from '../data/music-data';
import { usePlayer } from '../context/player-context';
import { Link } from 'react-router';

export function Search() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'songs' | 'artists' | 'albums'>('all');
  const { playSong } = usePlayer();

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase()) ||
      song.genre.toLowerCase().includes(query.toLowerCase())
  );

  const filteredArtists = artists.filter(
    (artist) =>
      artist.name.toLowerCase().includes(query.toLowerCase()) ||
      artist.genre.toLowerCase().includes(query.toLowerCase())
  );

  const filteredAlbums = albums.filter(
    (album) =>
      album.title.toLowerCase().includes(query.toLowerCase()) ||
      album.artist.toLowerCase().includes(query.toLowerCase())
  );

  const tabs = [
    { id: 'all' as const, label: 'All', icon: Music },
    { id: 'songs' as const, label: 'Songs', icon: Music },
    { id: 'artists' as const, label: 'Artists', icon: User },
    { id: 'albums' as const, label: 'Albums', icon: Disc },
  ];

  const browseCategories = [
    { name: 'Rock', color: 'from-red-500 to-orange-500', songs: songs.filter(s => s.genre === 'Rock') },
    { name: 'Hip-Hop', color: 'from-yellow-500 to-green-500', songs: songs.filter(s => s.genre === 'Hip-Hop') },
    { name: 'Jazz', color: 'from-blue-500 to-purple-500', songs: songs.filter(s => s.genre === 'Jazz') },
    { name: 'EDM', color: 'from-pink-500 to-purple-500', songs: songs.filter(s => s.genre === 'EDM') },
    { name: 'Indie', color: 'from-green-500 to-teal-500', songs: songs.filter(s => s.genre === 'Indie') },
    { name: 'Pop', color: 'from-purple-500 to-pink-500', songs: songs.filter(s => s.genre === 'Pop') },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Search Header */}
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for songs, artists, or albums..."
            className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-full pl-14 pr-6 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </motion.div>
      </div>

      {query ? (
        <>
          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Results */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Songs */}
              {(activeTab === 'all' || activeTab === 'songs') && filteredSongs.length > 0 && (
                <section>
                  <h2 className="text-2xl text-white mb-4">Songs</h2>
                  <div className="space-y-2">
                    {filteredSongs.map((song, index) => (
                      <motion.div
                        key={song.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => playSong(song, filteredSongs)}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 cursor-pointer group"
                      >
                        <img
                          src={song.cover}
                          alt={song.title}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-white truncate">{song.title}</p>
                          <p className="text-white/60 text-sm truncate">{song.artist}</p>
                        </div>
                        <div className="text-white/40 text-sm">{song.genre}</div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-purple-500 p-2 rounded-full">
                            <Play className="w-4 h-4 text-white" fill="currentColor" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Artists */}
              {(activeTab === 'all' || activeTab === 'artists') && filteredArtists.length > 0 && (
                <section>
                  <h2 className="text-2xl text-white mb-4">Artists</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filteredArtists.map((artist, index) => (
                      <motion.div
                        key={artist.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={`/artist/${artist.id}`}
                          className="block text-center group"
                        >
                          <div className="aspect-square rounded-full overflow-hidden mb-3 bg-white/5">
                            <img
                              src={artist.image}
                              alt={artist.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-white text-sm truncate">{artist.name}</h3>
                          <p className="text-white/60 text-xs">{artist.genre}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Albums */}
              {(activeTab === 'all' || activeTab === 'albums') && filteredAlbums.length > 0 && (
                <section>
                  <h2 className="text-2xl text-white mb-4">Albums</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filteredAlbums.map((album, index) => (
                      <motion.div
                        key={album.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
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
                          <p className="text-white/60 text-xs truncate">{album.artist}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* No Results */}
              {filteredSongs.length === 0 &&
                filteredArtists.length === 0 &&
                filteredAlbums.length === 0 && (
                  <div className="text-center py-12">
                    <SearchIcon className="w-16 h-16 text-white/20 mx-auto mb-4" />
                    <p className="text-white/60 text-lg">No results found for "{query}"</p>
                  </div>
                )}
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        /* Browse Categories */
        <section>
          <h2 className="text-3xl text-white mb-6">Browse All</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {browseCategories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setQuery(category.name)}
                className={`aspect-square rounded-lg bg-gradient-to-br ${category.color} p-6 text-left relative overflow-hidden group`}
              >
                <h3 className="text-white text-2xl relative z-10">{category.name}</h3>
                <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform">
                  <Music className="w-24 h-24 text-white/20" />
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
