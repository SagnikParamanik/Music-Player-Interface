import { Outlet } from 'react-router';
import { Sidebar } from '../components/sidebar';
import { PlayerBar } from '../components/player-bar';
import { MobileNav } from '../components/mobile-nav';

export function Root() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pb-24 md:pb-0">
          <Outlet />
        </main>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Player Bar */}
      <PlayerBar />
    </div>
  );
}