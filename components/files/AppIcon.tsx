'use client';

import { motion } from 'framer-motion';

interface AppIconProps {
    name: string;
    image: string;
    onClick?: () => void;
    isSelected?: boolean;
}

const AppIcon = ({ name, image, onClick, isSelected }: AppIconProps) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
                flex flex-col items-center gap-4 p-6 rounded-lg transition-all cursor-pointer w-full
                ${isSelected 
                    ? 'ring-2 ring-blue-500' 
                    : ''
                }
            `}
        >
            <div className={`
                w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 
                border border-slate-700 flex items-center justify-center text-4xl shadow-lg
                ${isSelected ? 'ring-2 ring-blue-500/50' : ''}
            `}>
                {image}
            </div>
            <span className="text-sm text-slate-200 font-medium text-center max-w-[120px] truncate">
                {name}
            </span>
        </motion.button>
    );
};

export default AppIcon;
