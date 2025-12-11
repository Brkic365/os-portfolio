'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Window from '../ui/Window';

interface TextEditorWindowProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const TextEditorWindow = ({ isOpen, onClose, content }: TextEditorWindowProps) => {
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: Math.min(800, window.innerWidth - 100),
        height: Math.min(600, window.innerHeight - 100),
      });
    }
  }, []);



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
          {content.split('\n').map((line, index) => {
            // Handle simple headers
            if (line.startsWith('# ')) {
              return <h1 key={index} className="text-2xl font-bold text-slate-100">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
              return <h2 key={index} className="text-xl font-semibold text-slate-400 mt-4">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
              return <h3 key={index} className="text-lg font-semibold text-slate-500 mt-2">{line.replace('### ', '')}</h3>;
            }

            // Handle blockquotes
            const isBlockquote = line.trim().startsWith('>');
            const cleanLine = isBlockquote ? line.replace(/^>\s?/, '') : line;

            if (cleanLine.trim() === '') {
              return <br key={index} />;
            }

            // Allow parsing of bold syntax **text**
            const parseBold = (text: string) => {
              const parts = text.split(/(\*\*.*?\*\*)/g);
              return parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={i} className="font-bold text-slate-100">{part.slice(2, -2)}</strong>;
                }
                return <span key={i} className="text-slate-300">{part}</span>;
              });
            };

            return (
              <div key={index} className={`${isBlockquote ? 'pl-4 border-l-2 border-slate-700 my-1' : 'my-1'}`}>
                <p className="leading-relaxed">
                  {parseBold(cleanLine)}
                </p>
              </div>
            );
          })}

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

