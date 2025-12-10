'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Window from '../ui/Window';

interface TextEditorWindowProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const TextEditorWindow = ({ isOpen, onClose }: TextEditorWindowProps) => {
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: Math.min(800, window.innerWidth - 100),
        height: Math.min(600, window.innerHeight - 100),
      });
    }
  }, []);

  // Simple markdown-like syntax highlighting
  const highlightText = (text: string) => {
    const parts = text.split(/(TVZ|Student|Next\.js|Python|Game Dev|CS)/g);
    return parts.map((part, index) => {
      if (['TVZ', 'Student', 'Next.js', 'Python', 'Game Dev', 'CS'].includes(part)) {
        return (
          <span key={index} className="text-blue-400 font-semibold">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <Window
      title="README.md — Edited"
      isOpen={isOpen}
      onClose={onClose}
      initialPosition={{ x: 0, y: 0 }}
      center
      initialSize={windowSize}
    >
      <div className="h-full bg-slate-900 text-slate-200 font-[family-name:var(--font-jetbrains-mono)] text-sm overflow-y-auto">
        <div className="p-8 space-y-6">
          <div className="text-slate-400"># Antonio Brkić</div>
          <div className="text-slate-400">## About</div>
          <div className="text-slate-300 leading-relaxed">
            {highlightText(
              "I'm a 3rd-year CS Student at TVZ (Tehničko veleučilište u Zagrebu) with a passion for building beautiful, functional web applications."
            )}
          </div>
          <div className="text-slate-300 leading-relaxed">
            {highlightText(
              'I specialize in Next.js and modern frontend technologies, with a growing interest in Game Dev and Python.'
            )}
          </div>
          <div className="text-slate-400">## Skills</div>
          <div className="text-slate-300">
            <div>- Next.js</div>
            <div>- TypeScript</div>
            <div>- React</div>
            <div>- Python</div>
            <div>- Tailwind CSS</div>
            <div>- Unity</div>
            <div>- Framer Motion</div>
          </div>
          <div className="text-slate-400">## Status</div>
          <div className="text-slate-300">
            {highlightText('Currently: 3rd Year Student @ TVZ')}
          </div>
          <div className="flex items-center gap-2 mt-8">
            <span className="text-slate-500">_</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-5 bg-blue-400 inline-block"
            />
          </div>
        </div>
      </div>
    </Window>
  );
};

export default TextEditorWindow;

