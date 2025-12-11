'use client';

import { motion } from 'framer-motion';
import { Project, LabItem } from '@/data/projects';
import { FileItem } from '@/data/filesystem';
import ProjectFolder from '../ProjectFolder';
import FileCard from '../FileCard';

interface DirectoryViewProps {
  items: FileItem[];
  type: 'projects' | 'prototypes';
  onItemClick: (item: FileItem) => void;
}

const DirectoryView = ({ items, type, onItemClick }: DirectoryViewProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (

    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`grid grid-cols-1 sm:grid-cols-2 ${type === 'prototypes' ? 'md:grid-cols-2 gap-6' : 'md:grid-cols-3 gap-10 md:gap-14'
        }`}
    >
      {items.map((item) => {
        if (type === 'projects') {
          return (
            <ProjectFolder
              key={item.id}
              project={item as unknown as Project}
              onClick={() => onItemClick(item)}
            />
          );
        } else {
          return (
            <FileCard
              key={item.id}
              labItem={item as unknown as LabItem}
              onClick={() => onItemClick(item)}
            />
          );
        }
      })}
    </motion.div>
  );
};

export default DirectoryView;

