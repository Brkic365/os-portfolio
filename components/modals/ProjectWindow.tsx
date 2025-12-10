'use client';

import { X, ExternalLink, Github, Download } from 'lucide-react';
import { FileItem } from '@/data/filesystem';
import { motion, AnimatePresence } from 'framer-motion';
import DraggableWindow from '../ui/Window'; // Assuming Window is in same dir mostly

interface ProjectWindowProps {
    file: FileItem | null;
    onClose: () => void;
}

const ProjectWindow = ({ file, onClose }: ProjectWindowProps) => {
    if (!file) return null;

    const isMarkdown = file.extension === 'md';

    // Simple markdown to HTML conversion
    const renderMarkdown = (text: string) => {
        return text
            .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-slate-100 mt-6 mb-3">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-slate-100 mt-8 mb-4">$1</h2>')
            .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-slate-100 mt-8 mb-4">$1</h1>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-200">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="italic text-slate-300">$1</em>')
            .replace(/^- (.*$)/gim, '<li class="ml-4 text-slate-300">$1</li>')
            .replace(/\n\n/g, '</p><p class="text-slate-300 leading-relaxed mb-4">')
            .replace(/^(?!<[h|l|p])(.*$)/gim, '<p class="text-slate-300 leading-relaxed mb-4">$1</p>')
            .replace(/---/g, '<hr class="border-slate-700 my-6" />');
    };

    return (
        <DraggableWindow
            title={file.name}
            isOpen={!!file}
            onClose={onClose}
            initialSize={{ width: 800, height: 600 }}
            center
        >
            <div className="h-full flex flex-col overflow-y-auto bg-slate-900/50">
                {/* Content */}
                <div className="flex-1 p-6 space-y-6">
                    {/* Preview */}
                    {file.type === 'app' && file.image && (
                        <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/5 flex items-center justify-center text-8xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                            {file.image}
                        </div>
                    )}

                    {/* File Info */}
                    {file.size && (
                        <p className="text-sm text-slate-500 font-[family-name:var(--font-jetbrains-mono)]">
                            {file.size}
                        </p>
                    )}

                    {/* Description */}
                    {file.description && (
                        <div>
                            <h4 className="text-xs font-semibold text-slate-400 uppercase mb-3">
                                {isMarkdown ? 'Content' : 'Description'}
                            </h4>
                            {isMarkdown ? (
                                <div
                                    className="prose prose-invert prose-sm max-w-none prose-headings:text-slate-100 prose-p:text-slate-300 prose-p:leading-relaxed prose-strong:text-slate-200 prose-li:text-slate-300"
                                    dangerouslySetInnerHTML={{ __html: renderMarkdown(file.description) }}
                                />
                            ) : (
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    {file.description}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Tech Stack */}
                    {file.techStack && file.techStack.length > 0 && (
                        <div>
                            <h4
                                className="text-xs font-semibold text-slate-400 uppercase"
                                style={{ marginBottom: '1.5rem' }} // Force spacing
                            >
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {file.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-slate-300 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                        {file.liveUrl && (
                            <a
                                href={file.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
                            >
                                <ExternalLink size={18} />
                                Launch
                            </a>
                        )}
                        {file.githubUrl && (
                            <a
                                href={file.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-white/5 text-slate-200 rounded-lg transition-colors font-medium"
                            >
                                <Github size={18} />
                                View Source
                            </a>
                        )}
                        {file.extension === 'md' && file.id === 'readme' && (
                            <button className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-white/5 text-slate-200 rounded-lg transition-colors font-medium">
                                <Download size={18} />
                                Download Resume
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </DraggableWindow>
    );
};

export default ProjectWindow;
