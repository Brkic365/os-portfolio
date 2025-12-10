export interface Project {
  id: string;
  name: string;
  description: string;
  coverImage?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'game' | 'python';
}

export interface LabItem {
  id: string;
  name: string;
  description: string;
  icon: 'game' | 'python';
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js and Stripe. Features include product management, shopping cart, secure checkout, and admin dashboard.',
    coverImage: '🛍️',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    category: 'web',
  },
  {
    id: 'portfolio-system',
    name: 'Portfolio System',
    description: 'This very portfolio - a Spatial Operating System inspired by VisionOS. Built with Next.js, Framer Motion, and Tailwind CSS.',
    coverImage: '💼',
    techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    category: 'web',
  },
  {
    id: 'task-manager',
    name: 'Task Manager Pro',
    description: 'A modern task management application with real-time collaboration, drag-and-drop, and advanced filtering.',
    coverImage: '📋',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'WebSockets', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/task-manager',
    category: 'web',
  },
];

export const labItems: LabItem[] = [
  {
    id: 'gravity-sim',
    name: 'GravitySim.exe',
    description: 'A 2D physics simulation engine built from scratch using Python and Pygame. Includes realistic gravity, collision detection, and particle systems.',
    icon: 'game',
    techStack: ['Python', 'Pygame', 'NumPy', 'OpenGL'],
    githubUrl: 'https://github.com/yourusername/gravity-sim',
    demoUrl: 'https://example.com',
  },
  {
    id: 'neural-net',
    name: 'neural_net.py',
    description: 'Experimental neural network implementation for image classification. Built as a learning project to understand deep learning fundamentals.',
    icon: 'python',
    techStack: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/yourusername/neural-net',
  },
  {
    id: 'game-engine',
    name: 'game_engine.py',
    description: 'A lightweight 2D game engine with entity-component-system architecture, scene management, and asset loading.',
    icon: 'game',
    techStack: ['Python', 'Pygame', 'NumPy'],
    githubUrl: 'https://github.com/yourusername/game-engine',
  },
];

