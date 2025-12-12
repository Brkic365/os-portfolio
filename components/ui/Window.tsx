'use client';

import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { X, Minimize2, Maximize2 } from 'lucide-react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
}

const Window = ({
  title,
  isOpen,
  onClose,
  children,
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 800, height: 600 },
  center = false,
}: WindowProps & { center?: boolean }) => {
  // We no longer need 'position' state for initial render if we use CSS centering.
  // The 'size' state is kept for potential future resizing features.
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartOffset, setDragStartOffset] = useState({ x: 0, y: 0 }); // Renamed to avoid confusion with Framer Motion's dragStart
  const [isMobile, setIsMobile] = useState(false);

  const windowRef = useRef<HTMLDivElement>(null);
  const hasMoved = useRef(false); // Track if user moved it manually

  // Initialize MotionValues with strings ("-50%") if centering, or pixels if not.
  const x = useMotionValue(center ? '-50%' : initialPosition.x);
  const y = useMotionValue(center ? '-50%' : initialPosition.y);

  // Sync size if prop changes (e.g. responsive resize in parent)
  useEffect(() => {
    setSize(initialSize);
  }, [initialSize.width, initialSize.height]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    if ((e.target as HTMLElement).closest('button')) return;

    // If the window was initially centered via CSS, convert its current position
    // to absolute pixel values before starting the drag.
    if (center && !hasMoved.current && windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      // Set x/y motion values to the current pixel position
      x.set(rect.left);
      y.set(rect.top);
    }

    setIsDragging(true);
    hasMoved.current = true; // Mark as manually moved

    // Calculate offset from mouse click to window's current top-left corner
    setDragStartOffset({
      x: e.clientX - (x.get() as number), // x.get() will be pixel value after conversion
      y: e.clientY - (y.get() as number), // y.get() will be pixel value after conversion
    });
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX - dragStartOffset.x;
      const newY = e.clientY - dragStartOffset.y;
      x.set(newX);
      y.set(newY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStartOffset, x, y]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />

          {/* Window */}
          <motion.div
            ref={windowRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={isMobile ? {
              position: 'fixed',
              top: '12px',
              left: '2.5%',
              width: '95%',
              height: 'calc(100% - 130px)', // Leave >80px for dock + safe area
              x: 0,
              y: 0
            } : {
              x, // Motion value drives this
              y, // Motion value drives this
              width: size.width,
              height: size.height,
              position: 'fixed',
              // Use CSS for initial centering if 'center' is true and it hasn't been moved
              left: center && !hasMoved.current ? '50%' : 0,
              top: center && !hasMoved.current ? '50%' : 0,
            }}
            className="fixed z-50 glass-panel overflow-hidden border border-white/10 shadow-2xl flex flex-col rounded-2xl"
          >
            {/* Header */}
            <div
              onMouseDown={handleMouseDown}
              className={`flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/20 ${isMobile ? '' : 'cursor-move'}`}
            >
              <div className="flex items-center gap-3">
                {/* Traffic Lights */}
                <div className="flex gap-2">
                  <button
                    onClick={onClose}
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                  />
                  {!isMobile && (
                    <>
                      <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
                      <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
                    </>
                  )}
                </div>
                <span className="text-sm font-medium text-slate-200 font-[family-name:var(--font-jetbrains-mono)]">
                  {title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {!isMobile && (
                  <>
                    <button className="p-1 hover:bg-white/10 rounded transition-colors">
                      <Minimize2 size={14} className="text-slate-400" />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded transition-colors">
                      <Maximize2 size={14} className="text-slate-400" />
                    </button>
                  </>
                )}
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <X size={14} className="text-slate-400 cursor-pointer" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Window;

