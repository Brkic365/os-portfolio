'use client';

import { FileText, FileCode, File as FileIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FileIconComponentProps {
    name: string;
    extension?: string;
    onClick?: () => void;
    isSelected?: boolean;
}

const FileIconComponent = ({
    name,
    extension,
    onClick,
    isSelected,
}: FileIconComponentProps) => {
    // Determine icon and color based on file extension
    const getFileStyle = () => {
        switch (extension) {
            case 'md':
                return {
                    Icon: FileText,
                    color: 'text-slate-400',
                    bgColor: 'bg-slate-700/30',
                };
            case 'py':
                return {
                    Icon: FileCode,
                    color: 'text-blue-400',
                    bgColor: 'bg-blue-500/20',
                };
            case 'js':
            case 'ts':
            case 'tsx':
                return {
                    Icon: FileCode,
                    color: 'text-yellow-400',
                    bgColor: 'bg-yellow-500/20',
                };
            case 'exe':
            case 'unity':
                return {
                    Icon: FileIcon,
                    color: 'text-red-400',
                    bgColor: 'bg-red-500/20',
                };
            default:
                return {
                    Icon: FileIcon,
                    color: 'text-slate-400',
                    bgColor: 'bg-slate-700/30',
                };
        }
    };

    const { Icon, color, bgColor } = getFileStyle();

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
            <div className={`relative p-4 rounded-lg ${bgColor} ${isSelected ? 'ring-2 ring-blue-500/50' : ''}`}>
                <Icon size={48} className={color} />
                {extension && (
                    <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] font-[family-name:var(--font-jetbrains-mono)] text-slate-400">
                        .{extension}
                    </div>
                )}
            </div>
            <span className="text-sm text-slate-200 font-medium text-center max-w-[120px] truncate">
                {name}
            </span>
        </motion.button>
    );
};

export default FileIconComponent;
