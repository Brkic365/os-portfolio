// File system data structure

export interface FileItem {
    id: string;
    name: string;
    type: 'file' | 'folder' | 'app';
    extension?: string;
    path: string;
    description?: string;
    techStack?: string[];
    size?: string;
    liveUrl?: string;
    githubUrl?: string;
    image?: string;
}

export interface Directory {
    path: string;
    items: FileItem[];
}

// File system structure
export const filesystem: Directory[] = [
    {
        path: '/',
        items: [
            { id: 'home', name: 'Home', type: 'folder', path: '/home' },
            { id: 'projects', name: 'Projects', type: 'folder', path: '/projects' },
            { id: 'lab', name: 'Lab', type: 'folder', path: '/lab' },
            { id: 'bio', name: 'Bio', type: 'folder', path: '/bio' },
        ],
    },
    {
        path: '/home',
        items: [
            {
                id: 'welcome',
                name: 'WELCOME.md',
                type: 'file',
                extension: 'md',
                path: '/home/welcome',
                description: 'Welcome to my digital workspace. Navigate through the folders to explore my work.',
            },
        ],
    },
    {
        path: '/projects',
        items: [
            {
                id: 'ecommerce',
                name: 'E-Commerce Platform',
                type: 'app',
                path: '/projects/ecommerce',
                description: 'A full-stack e-commerce solution built with Next.js and Stripe. Features include product management, shopping cart, secure checkout, and admin dashboard.',
                techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
                size: '2.4 MB',
                liveUrl: 'https://example.com',
                githubUrl: 'https://github.com/yourusername/ecommerce',
                image: '🛍️',
            },
            {
                id: 'portfolio',
                name: 'Portfolio System',
                type: 'app',
                path: '/projects/portfolio',
                description: 'This very portfolio - a System Interface inspired by macOS Finder. Built with Next.js and Framer Motion.',
                techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
                size: '1.8 MB',
                githubUrl: 'https://github.com/yourusername/portfolio',
                image: '💼',
            },
        ],
    },
    {
        path: '/lab',
        items: [
            {
                id: 'game-engine',
                name: 'game_engine.py',
                type: 'file',
                extension: 'py',
                path: '/lab/game-engine',
                description: 'A 2D game engine built from scratch using Python and Pygame. Includes physics simulation, collision detection, and particle systems.',
                techStack: ['Python', 'Pygame', 'NumPy', 'OpenGL'],
                size: '856 KB',
                githubUrl: 'https://github.com/yourusername/game-engine',
            },
            {
                id: 'ai-experiment',
                name: 'neural_net.py',
                type: 'file',
                extension: 'py',
                path: '/lab/ai-experiment',
                description: 'Experimental neural network implementation for image classification. Built as a learning project.',
                techStack: ['Python', 'TensorFlow', 'NumPy'],
                size: '423 KB',
                githubUrl: 'https://github.com/yourusername/neural-net',
            },
        ],
    },
    {
        path: '/bio',
        items: [
            {
                id: 'readme',
                name: 'README.md',
                type: 'file',
                extension: 'md',
                path: '/bio/readme',
                description: `# Antonio Brkić

## About Me

I'm a 3rd-year Computer Science student at TVZ (Tehničko veleučilište u Zagrebu) with a passion for building beautiful, functional web applications.

I specialize in Next.js and modern frontend technologies, with a growing interest in game development and Python.

## Education

**Tehničko veleučilište u Zagrebu (TVZ)**
- Bachelor of Computer Science
- Expected Graduation: 2026
- Focus: Web Development & Software Engineering

## Skills

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, PostgreSQL, Stripe Integration
- **Tools**: Git, Framer Motion, Three.js
- **Learning**: Python, Game Development, AI/ML

## Currently

- Building innovative web applications
- Exploring creative tech solutions
- Contributing to open-source projects
- Experimenting with game development

---

*Feel free to explore my projects and reach out!*`,
                size: '2.1 KB',
            },
        ],
    },
];

export const getDirectoryContents = (path: string): FileItem[] => {
    const dir = filesystem.find((d) => d.path === path);
    return dir?.items || [];
};

export const getFileById = (id: string): FileItem | undefined => {
    for (const dir of filesystem) {
        const file = dir.items.find((item) => item.id === id);
        if (file) return file;
    }
    return undefined;
};
