'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Home, Briefcase, FlaskConical, User, Mail } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import MobileDock from './MobileDock';
import Wallpaper from '../Wallpaper';
import ContactWindow from '../modals/ContactWindow';

interface ShellProps {
  children: React.ReactNode;
}

const Shell = ({ children }: ShellProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPath = searchParams.get('path') || '/';
  const [isDesktop, setIsDesktop] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home, action: () => router.push('?path=/') },
    { name: 'Projects', path: '/projects', icon: Briefcase, action: () => router.push('?path=/projects') },
    { name: 'Lab', path: '/lab', icon: FlaskConical, action: () => router.push('?path=/lab') },
    { name: 'Contact', path: '#contact', icon: Mail, action: () => setIsContactOpen(true) }, // Special action for Contact
  ];

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Animated Wallpaper */}
      <Wallpaper />

      {/* Desktop Bottom Dock */}
      <aside className="hidden lg:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50 h-16 px-6 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
        {/* Navigation - Horizontal Icons */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            // Active if path matches OR if contact window is open and this is the contact item
            const isActive = currentPath === item.path || (item.name === 'Contact' && isContactOpen);

            return (
              <button
                key={item.name}
                onClick={item.action}
                className={`flex items-center justify-center p-3 rounded-xl transition-all cursor-pointer ${isActive
                  ? 'bg-blue-500/30 text-blue-400'
                  : 'text-slate-400 hover:bg-white/10 hover:text-slate-200'
                  }`}
                title={item.name}
              >
                <Icon size={24} />
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Bar with Breadcrumbs */}
        <div className="glass-panel border-b border-white/10 px-6 lg:px-12 py-5">
          <Breadcrumbs path={currentPath} />
        </div>

        {/* Content Stage */}
        <div
          className="flex-1 overflow-y-auto relative z-10"
          style={{
            padding: isDesktop ? '48px' : '24px',
            paddingBottom: isDesktop ? '48px' : '80px'
          }}
        >
          {children}
        </div>
      </main>

      {/* Mobile Dock */}
      <MobileDock
        currentPath={currentPath}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Global Contact Window */}
      <ContactWindow
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default Shell;

