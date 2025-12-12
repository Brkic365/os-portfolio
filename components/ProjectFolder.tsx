'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectFolderProps {
  project: Project;
  onClick: () => void;
}

const ProjectFolder = ({ project, onClick }: ProjectFolderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass-panel rounded-2xl overflow-hidden cursor-pointer group flex flex-col"
    >
      {/* Cover Image - 16:9 Aspect Ratio */}
      <div className="w-full aspect-video bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-blue-950/30 flex items-center justify-center text-7xl border-b border-white/5 relative overflow-hidden">
        {project.coverImage?.startsWith('/') ? (
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <span>{project.coverImage || '📦'}</span>
        )}
      </div>

      {/* Glass Footer Strip */}
      <div className="p-4 flex items-center justify-between gap-3 bg-black/20 backdrop-blur-sm">
        <h3 className="text-base font-semibold text-slate-100 truncate flex-1">{project.name}</h3>
        {project.techStack.length > 0 && (
          <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-300 font-[family-name:var(--font-jetbrains-mono)] whitespace-nowrap">
            {project.techStack[0]}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectFolder;

