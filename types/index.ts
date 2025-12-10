// Type definitions for the Voxel Architect portfolio

export interface VoxelBlockProps {
    position: [number, number, number];
    color?: string;
    variant?: 'default' | 'red' | 'white' | 'player';
    onClick?: () => void;
    label?: string;
}

export interface ProjectData {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    position: [number, number, number];
}

export interface CameraState {
    position: [number, number, number];
    target: [number, number, number];
    isTransitioning: boolean;
}

export interface CameraStore extends CameraState {
    setPosition: (position: [number, number, number]) => void;
    setTarget: (target: [number, number, number]) => void;
    startTransition: () => void;
    endTransition: () => void;
    zoomToProject: (position: [number, number, number]) => void;
    resetCamera: () => void;
}
