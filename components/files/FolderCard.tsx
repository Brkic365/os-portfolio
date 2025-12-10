'use client';

import { Folder } from 'lucide-react';
import { motion } from 'framer-motion';

interface FolderCardProps {
    name: string;
    onClick?: () => void;
    isSelected?: boolean;
    folderType?: 'generic' | 'code' | 'docs';
}

const FolderCard = ({ name, onClick, isSelected, folderType = 'generic' }: FolderCardProps) => {
    // Determine folder color based on type
    const getFolderColor = () => {
        switch (folderType) {
            case 'code':
                return 'text-purple-400';
            case 'docs':
                return 'text-green-400';
            default:
                return 'text-blue-400';
        }
    };

    const folderColor = getFolderColor();

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`
                relative flex flex-col items-center justify-center gap-5
                bg-white/5 border border-white/10 rounded-2xl
                p-10 md:p-12 min-h-[160px] md:min-h-[180px] w-full
                transition-all duration-300 cursor-pointer
                ${isSelected 
                    ? 'ring-2 ring-blue-500 border-blue-500/50 shadow-lg shadow-blue-500/20' 
                    : 'hover:shadow-lg hover:shadow-blue-500/20 hover:border-white/20'
                }
            `}
        >
            {/* Large central icon */}
            <div className="relative flex items-center justify-center">
                <Folder
                    size={64}
                    className={folderColor}
                    fill="currentColor"
                    fillOpacity={0.15}
                />
            </div>

            {/* Folder name at bottom */}
            <span className="text-sm text-slate-200 font-medium text-center max-w-full truncate px-2">
                {name}
            </span>
        </motion.button>
    );
};

export default FolderCard;

