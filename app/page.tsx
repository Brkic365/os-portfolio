'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Shell from '@/components/layout/Shell';
import HomeView from '@/components/views/HomeView';
import DirectoryView from '@/components/views/DirectoryView';
import OSWindow from '@/components/modals/OSWindow';
import { FileItem, getDirectoryContents } from '@/data/filesystem';
import { Project, LabItem } from '@/data/projects'; // Keep generic types for now if needed, but OSWindow might need FileItem check

function HomeContent() {
  const searchParams = useSearchParams();
  const currentPath = searchParams.get('path') || '/';
  const [selectedItem, setSelectedItem] = useState<FileItem | null>(null);

  const handleItemClick = (item: FileItem) => {
    setSelectedItem(item);
  };

  const handleCloseWindow = () => {
    setSelectedItem(null);
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <HomeView />;
      case '/projects':
        return (
          <DirectoryView
            items={getDirectoryContents('/projects')}
            type="projects"
            onItemClick={handleItemClick}
          />
        );
      case '/prototypes':
        return (
          <DirectoryView
            items={getDirectoryContents('/prototypes')}
            type="prototypes"
            onItemClick={handleItemClick}
          />
        );
      default:
        // Attempt to find if it's a known path
        const contents = getDirectoryContents(currentPath);
        if (contents.length > 0) {
          // It's a directory
          // Determine type (hacky heuristic or should pass it via state? For now default to projects view as fallback or create a generic one)
          // But actually we only support these 2 specific views right now.
          return <HomeView />;
        }
        return <HomeView />;
    }
  };

  return (
    <Shell>
      {renderContent()}
      {selectedItem && (
        <OSWindow
          item={selectedItem as unknown as (Project | LabItem)}
          isOpen={!!selectedItem}
          onClose={handleCloseWindow}
        />
      )}
    </Shell>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-[#0a0a0a]">
          <div className="text-slate-400">Loading...</div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
