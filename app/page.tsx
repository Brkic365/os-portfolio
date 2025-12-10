'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Shell from '@/components/layout/Shell';
import HomeView from '@/components/views/HomeView';
import DirectoryView from '@/components/views/DirectoryView';
import OSWindow from '@/components/modals/OSWindow';
import { projects, labItems, Project, LabItem } from '@/data/projects';

function HomeContent() {
  const searchParams = useSearchParams();
  const currentPath = searchParams.get('path') || '/';
  const [selectedItem, setSelectedItem] = useState<Project | LabItem | null>(null);

  const handleItemClick = (item: Project | LabItem) => {
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
            items={projects}
            type="projects"
            onItemClick={handleItemClick}
          />
        );
      case '/lab':
        return (
          <DirectoryView
            items={labItems}
            type="lab"
            onItemClick={handleItemClick}
          />
        );
      default:
        return <HomeView />;
    }
  };

  return (
    <Shell>
      {renderContent()}
      {selectedItem && (
        <OSWindow
          item={selectedItem}
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
