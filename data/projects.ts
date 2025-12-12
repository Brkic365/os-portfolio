export interface Project {
    id: string;
    name: string;
    description: string;
    coverImage?: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    category: 'web' | 'game' | 'python';
    previewVideo?: string;
}

export interface LabItem {
    id: string;
    name: string;
    description: string;
    icon: 'game' | 'python' | 'web';
    coverImage?: string;
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
    liveUrl?: string;
    previewVideo?: string;
}

export const projects: Project[] = [
    {
        id: 'stolarija-bm',
        name: 'Stolarija-BM',
        description: 'A modern, full-stack web application for a custom furniture manufacturing business. This project serves as a digital portfolio, a web shop for products, and includes a fully functional administrative dashboard for managing inventory, orders, and customer messages.',
        coverImage: '/projects/stolarija-bm.png',
        techStack: ['Next.js', 'TypeScript', 'Supabase'],
        liveUrl: 'https://stolarijabm.vercel.app',
        githubUrl: 'https://github.com/Brkic365/Stolarija-BM',
        category: 'web',
    },
    {
        id: 'rocketwizard',
        name: 'RocketWizard',
        description: 'Rocket Wizard is a SaaS website where you can subscribe to any of our talented traders, and they will to the trading for you! All you need to do choose a trader that you like, and then wait.',
        coverImage: '/projects/rocketwizard.png',
        techStack: ['Next.js', 'JavaScript', 'Express.js', 'Node.js', 'NowPayments'],
        liveUrl: 'https://rocket-wizard.vercel.app/',
        githubUrl: 'https://github.com/Brkic365/RocketWizard',
        category: 'web',
    },
    {
        id: 'stocks-royale',
        name: 'Stocks Royale',
        description: 'Stocks Royale is a real-time stock trading and betting platform that combines traditional market mechanics with gamified elements.',
        coverImage: '/projects/stocks-royale.png',
        techStack: ['Next.js', 'SCSS / Sass', 'Lightweight Charts', 'Recharts', 'Node.js', 'Express.js', 'PostreSQL', 'Socket.io'],
        liveUrl: 'https://stocks-royale.vercel.app/',
        githubUrl: 'https://github.com/Brkic365/Stocks-Royale',
        category: 'web',
    },
    {
        id: 'runtime',
        name: 'Runtime',
        description: 'A modern, real-time API monitoring and analytics platform built with Next.js 15, TypeScript, and NextAuth.js. RunTime provides comprehensive insights into your API performance, security, and usage patterns.',
        coverImage: '/projects/runtime.png',
        techStack: ['Next.js', 'TypeScript', 'SCSS/Sass', 'Framer Motion', 'Recharts', 'Ark UI', 'SWR'],
        liveUrl: 'https://runtime-rust.vercel.app/',
        githubUrl: 'https://github.com/Brkic365/RuntimeFrontend',
        category: 'web',
    },
    {
        id: 'digital-era',
        name: 'Digital Era',
        description: 'Digital Era is a freelance project made in Next.js made for a company that provides business advice and helps clients build their online business and presence.',
        coverImage: '/projects/digital-era.png',
        techStack: ['Next.js', 'TypeScript', 'Resend'],
        liveUrl: 'https://www.the-digital-era.com/',
        githubUrl: '',
        category: 'web',
    },
    {
        id: 'siteboost',
        name: 'SiteBoost',
        description: 'Recieve an audit of your website and ways you can improve it from our team of experts and unlock your full potential.',
        coverImage: '/projects/siteboost.png',
        techStack: ['Next.js', 'SCSS/Sass'],
        liveUrl: 'https://site-boost.vercel.app/',
        githubUrl: 'https://github.com/Brkic365/SiteBoost',
        category: 'web',
    },
    {
        id: 'eBankc',
        name: 'EBankc',
        description: 'EBankc is a modern Next.js web application designed for a Decentralized Finance (DeFi) banking platform. It serves as the frontend interface for users to explore crypto assets, earn interest, borrow against holdings, and learn about the ecosystem via a blog and FAQ.',
        coverImage: '/projects/ebankc.png',
        techStack: ['Next.js', 'TypeScript', 'SCSS/Sass', 'Framer Motion'],
        liveUrl: 'https://ebankc.vercel.app/',
        githubUrl: 'https://github.com/Brkic365/EBankc-Website',
        category: 'web',
    },
    {
        id: 'luxury-perspective',
        name: 'LuxuryPersective',
        description: 'Luxury Perspective is a personal project. It mocks a premium real estate web application built with Next.js. It features a dark, elegant aesthetic designed to showcase high-end properties with video backgrounds, smooth animations, and a responsive design.',
        coverImage: '/projects/luxury-perspective.png',
        techStack: ['Next.js', 'SCSS/Sass'],
        liveUrl: 'https://luxury-perspective.vercel.app/',
        githubUrl: 'https://github.com/Brkic365/LuxuryPersective',
        category: 'web',
    },
    {
        id: 'marro',
        name: 'by Marro',
        description: 'By Marro is a portfolio website for a local freelance photographer.',
        coverImage: '/projects/marro.png',
        techStack: ['Next.js', 'SCSS/Sass'],
        liveUrl: 'https://bymarro.vercel.app/',
        githubUrl: 'https://github.com/Brkic365/marro',
        category: 'web',
    },
    {
        id: 'dreamfinders',
        name: 'DreamFinders',
        description: 'Welcome to DreamFinders, a mockup real estate website where you can search for properties all over the world! DreamFinders was created as a personal project to showcase my skills in web development.',
        coverImage: '/projects/dreamfinders.png',
        techStack: ['Next.js', 'SCSS/Sass'],
        liveUrl: 'https://dream-finders.vercel.app/',
        githubUrl: 'https://github.com/Brkic365/DreamFinders',
        category: 'web',
    },
    {
        id: 'codeforgood',
        name: 'Code For Good',
        description: 'This is a personal project for a website that aims to promote coding for social good and inspire developers to create meaningful projects that benefit society. The website is developed using Next.js, a popular open-source framework for building React applications.',
        coverImage: '/projects/codeforgood.png',
        techStack: ['Next.js', 'SCSS/Sass'],
        liveUrl: 'https://codeforgood-hackathon.vercel.app/',
        githubUrl: 'https://github.com/Brkic365/CodeForGood',
        category: 'web',
    }
];

export const labItems: LabItem[] = [
    {
        id: 'route-master',
        name: 'RouteMaster.py',
        description: 'RouteMaster is a high-performance Python-based traffic simulation and navigation system designed for real-time pathfinding on OpenStreetMap (OSM) data. It features a custom Spatial Hashing engine for O(1) queries, dynamic A* rerouting, and an interactive visualizations dashboard.',
        icon: 'python',
        coverImage: '/projects/route-master.png',
        techStack: ['Python', 'Tkinter', 'NumPy', 'OpenStreetMap', 'A*'],
        githubUrl: 'https://github.com/Brkic365/routeMaster'
    },
    {
        id: 'ai-motion-metrics',
        name: 'AI_MotionMetrics.exe',
        description: 'Real-time computer vision application using TensorFlow.js (MoveNet). Implements geometric vector analysis to calculate joint angles and track fitness reps client-side.',
        icon: 'web',
        previewVideo: '/videos/motion-metrics-preview.mp4',
        techStack: ['Next.js', 'TensorFlow.js', 'MoveNet', 'Tailwind CSS'],
        liveUrl: 'https://ai-motion-metrics.vercel.app/',
        githubUrl: 'https://github.com/Brkic365/ai-motion-metrics'
    }
];
