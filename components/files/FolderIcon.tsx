'use client';

import { Folder } from 'lucide-react';
import { motion } from 'framer-motion';

interface FolderIconProps {
    name: string;
    onClick?: () => void;
    isSelected?: boolean;
}

const FolderIcon = ({ name, onClick, isSelected }: FolderIconProps) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={onClick}
            className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all cursor-pointer ${isSelected ? 'item-selected' : 'item-hover'
                }`}
        >
            <div className="relative">
                <Folder
                    size={64}
                    className="text-blue-500"
                    fill="currentColor"
                    fillOpacity={0.2}
                />
            </div>
            <span className="text-sm text-slate-200 font-medium text-center max-w-[100px] truncate">
                {name}
            </span>
        </motion.button>
    );
};

export default FolderIcon;
