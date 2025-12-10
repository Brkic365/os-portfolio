'use client';

import { Download, MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const HomeWidgets = () => {
    const skills = [
        'Next.js',
        'TypeScript',
        'React',
        'Python',
        'Tailwind CSS',
        'Node.js',
        'Framer Motion',
        'PostgreSQL',
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 auto-rows-auto">
            {/* Widget A: Bio Card - Large, Top Left */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2 glass-panel rounded-2xl p-12 md:p-16 border border-white/5 hover:border-white/10 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            >
                <div className="flex flex-col items-center text-center gap-8">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl flex-shrink-0">
                        👨‍💻
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-slate-100 mb-4">
                            Antonio Brkić
                        </h1>
                        <p className="text-slate-400 text-lg mb-6">
                            Creative Technologist & CS Student
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl">
                            I'm a 3rd-year Computer Science student at TVZ with a passion for building
                            beautiful, functional web applications. I specialize in Next.js and modern
                            frontend technologies, with a growing interest in game development and Python.
                        </p>
                        <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium mx-auto">
                            <Download size={18} />
                            Download Resume
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Widget B: The Stack - Tall, Right */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:row-span-2 glass-panel rounded-2xl p-10 md:p-12 border border-white/5 hover:border-white/10 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            >
                <h3 className="text-lg font-semibold text-slate-100 mb-8">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-slate-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Widget C: Current Status - Medium, Bottom Left */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2 glass-panel rounded-2xl p-10 md:p-12 border border-white/5 hover:border-white/10 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-100">Current Status</h3>
                        <div className="flex items-center gap-4 mt-2 text-slate-400">
                            <div className="flex items-center gap-2">
                                <GraduationCap size={16} />
                                <span>Student @ TVZ</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span>Zagreb, Croatia</span>
                            </div>
                            <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                                3rd Year
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="glass-panel rounded-lg p-6 border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                        <div className="text-2xl font-bold text-slate-100">15+</div>
                        <div className="text-sm text-slate-400 mt-2 leading-relaxed">Projects</div>
                    </div>
                    <div className="glass-panel rounded-lg p-6 border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                        <div className="text-2xl font-bold text-slate-100">3</div>
                        <div className="text-sm text-slate-400 mt-2 leading-relaxed">Years Coding</div>
                    </div>
                    <div className="glass-panel rounded-lg p-6 border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                        <div className="text-2xl font-bold text-slate-100">∞</div>
                        <div className="text-sm text-slate-400 mt-2 leading-relaxed">Learning</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HomeWidgets;
