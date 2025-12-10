'use client';

import { motion } from 'framer-motion';
import { LabItem } from '@/data/projects';
import { Gamepad2, Code2 } from 'lucide-react';

interface FileCardProps {
  labItem: LabItem;
  onClick: () => void;
}

const FileCard = ({ labItem, onClick }: FileCardProps) => {
  const Icon = labItem.icon === 'game' ? Gamepad2 : Code2;
  const iconColor = labItem.icon === 'game' ? 'text-purple-400' : 'text-green-400';

  // Specific glow for retro feel
  const glowStyle = labItem.icon === 'game'
    ? 'drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]'
    : 'drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-slate-900/80 border-2 border-dashed border-white/20 rounded-xl p-6 flex items-center justify-between cursor-pointer group h-32 relative overflow-hidden hover:border-white/40 transition-colors"
    >
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      {/* Icon on Left with Glow */}
      <div className={`transition-transform duration-300 group-hover:scale-110 ${glowStyle}`}>
        <Icon size={48} className={iconColor} strokeWidth={1.5} />
      </div>

      {/* File Name on Right */}
      <div className="flex flex-col items-end z-10">
        <span className="text-xs text-slate-500 mb-1 font-mono uppercase tracking-wider">Executable</span>
        <h3 className="text-lg md:text-xl font-bold text-green-400 font-[family-name:var(--font-jetbrains-mono)] text-right group-hover:underline decoration-2 underline-offset-4">
          {labItem.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default FileCard;

