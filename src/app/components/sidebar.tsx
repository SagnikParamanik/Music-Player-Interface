import { NavLink } from 'react-router';
import { Home, Search, Library, Heart, Music, PlusCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Sidebar() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/search', icon: Search, label: 'Search' },
    { to: '/library', icon: Library, label: 'Your Library' },
  ];

  const libraryItems = [
    { to: '/liked', icon: Heart, label: 'Liked Songs' },
    { to: '/playlists', icon: Music, label: 'Playlists' },
  ];

  return (
    <aside className="w-64 bg-black/95 backdrop-blur-xl border-r border-white/10 flex flex-col h-full">
      {/* Logo */}
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Music className="w-8 h-8 text-purple-500" />
          <h1 className="text-2xl text-white">Soundwave</h1>
        </motion.div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className="w-6 h-6" />
                    <span className="font-medium">{item.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="my-6 border-t border-white/10" />

        {/* Library */}
        <ul className="space-y-2">
          {libraryItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <item.icon className="w-6 h-6" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
          
          <li>
            <button className="flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-white/60 hover:text-white hover:bg-white/5 w-full">
              <PlusCircle className="w-6 h-6" />
              <span className="font-medium">Create Playlist</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <div className="text-xs text-white/40 space-y-1">
          <p>Made with by Sagnik</p>
        </div>
      </div>
    </aside>
  );
}
