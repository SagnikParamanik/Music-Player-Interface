import { NavLink } from 'react-router';
import { Home, Search, Library } from 'lucide-react';
import { motion } from 'motion/react';

export function MobileNav() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/search', icon: Search, label: 'Search' },
    { to: '/library', icon: Library, label: 'Library' },
  ];

  return (
    <nav className="md:hidden fixed bottom-24 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 z-40">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                isActive ? 'text-white' : 'text-white/60'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`w-6 h-6 ${isActive ? 'text-purple-500' : ''}`} />
                <span className="text-xs">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
