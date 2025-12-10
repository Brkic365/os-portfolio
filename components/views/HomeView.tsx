'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import StackWindow from '@/components/modals/StackWindow';
import TextEditorWindow from '@/components/modals/TextEditorWindow';
import DesktopItem from '../DesktopItem';
import DesktopClock from '../widgets/DesktopClock';
import { FileCode, Layers, User } from 'lucide-react';

// Module-level variable to track if README has been shown in this session (refresh resets this)
let hasShownReadme = false;

const HomeView = () => {
  const router = useRouter();
  const [isReadmeOpen, setIsReadmeOpen] = useState(false);
  const [isStackOpen, setIsStackOpen] = useState(false);

  useEffect(() => {
    // Open on first load (refresh), but not on subsequent navigations back to home
    if (!hasShownReadme) {
      setIsReadmeOpen(true);
      hasShownReadme = true;
    }
  }, []);

  return (
    <>
      {/* Desktop Surface - Free Layout */}
      <div className="relative grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-12 md:gap-16 lg:gap-20 auto-rows-min">
        {/* Ambient Widgets */}
        <DesktopClock />

        {/* README.md */}
        <DesktopItem
          icon="📝"
          label="README.md"
          onClick={() => setIsReadmeOpen(true)}
        />

        {/* System (formerly My_Stack) */}
        <DesktopItem
          icon="⚙️"
          label="System"
          onClick={() => setIsStackOpen(true)}
        />

        {/* Workspace (formerly Macintosh HD) */}
        <DesktopItem
          icon="💾"
          label="Workspace"
          onClick={() => router.push('?path=/projects')}
        />
      </div>

      {/* Windows */}
      <TextEditorWindow
        isOpen={isReadmeOpen}
        onClose={() => setIsReadmeOpen(false)}
        content="README.md"
      />

      <StackWindow
        isOpen={isStackOpen}
        onClose={() => setIsStackOpen(false)}
      />
    </>
  );
};

export default HomeView;

