'use client';

import { Home, Briefcase, FlaskConical, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface MobileNavProps {
    currentPath: string;
}

const MobileNav = ({ currentPath }: MobileNavProps) => {
    const router = useRouter();

    const navItems = [
        { name: 'Home', path: '/home', icon: Home },
        { name: 'Projects', path: '/projects', icon: Briefcase },
        { name: 'Lab', path: '/lab', icon: FlaskConical },
    ];

    const handleNavigate = (path: string) => {
        router.push(`?path=${path}`);
    };

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-slate-800 safe-area-bottom">
            <div className="flex items-center justify-around px-4 py-3">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentPath === item.path;

                    return (
                        <button
                            key={item.path}
                            onClick={() => handleNavigate(item.path)}
                            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${isActive ? 'text-blue-400' : 'text-slate-400'
                                }`}
                        >
                            <Icon size={24} />
                            <span className="text-xs font-medium">{item.name}</span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileNav;
