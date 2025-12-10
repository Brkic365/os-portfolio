'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface DesktopItemProps {
  icon: string;
  label: string;
  onClick?: () => void;
  onHover?: React.ReactNode;
}

const DesktopItem = ({ icon, label, onClick, onHover }: DesktopItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onClick}
        className="flex flex-col items-center gap-2 w-20 cursor-pointer group"
      >
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center text-5xl transition-transform group-hover:scale-110">
          {icon}
        </div>

        {/* Label */}
        <span className="text-xs text-white font-medium text-center px-1 py-0.5 rounded group-hover:bg-white/10 transition-colors max-w-[80px] truncate">
          {label}
        </span>
      </motion.button>

      {/* Hover Tooltip/Popout */}
      {isHovered && onHover && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-50 glass-panel rounded-xl p-4 border border-white/10 shadow-2xl min-w-[200px]"
        >
          {onHover}
        </motion.div>
      )}
    </div>
  );
};

export default DesktopItem;

