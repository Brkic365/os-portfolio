import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import Window from '../ui/Window';

interface ContactWindowProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactWindow = ({ isOpen, onClose }: ContactWindowProps) => {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [formData, setFormData] = useState({
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSent(true);
                setFormData({ subject: '', message: '' }); // Reset form
                setTimeout(() => setIsSent(false), 3000);
            } else {
                console.error('Failed to send message');
                // You might want to show an error state here too
            }
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsSending(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Window
            title="Mail — New Message"
            isOpen={isOpen}
            onClose={onClose}
            initialSize={{ width: 850, height: 600 }}
            center
        >
            <div className="flex flex-col md:flex-row bg-slate-900/40 h-full overflow-y-auto md:overflow-hidden">

                {/* LEFT COLUMN: Profile */}
                <div className="w-full md:w-[300px] bg-black/20 border-b md:border-b-0 md:border-r border-white/10 p-4 md:p-8 flex flex-row md:flex-col items-center md:items-center justify-between md:justify-start text-left md:text-center gap-4 shrink-0">

                    {/* Left Side (Mobile) / Top (Desktop) */}
                    <div className="flex flex-row md:flex-col items-center gap-4 md:gap-0">
                        {/* Avatar Ring */}
                        <div className="relative mb-0 md:mb-6 shrink-0">
                            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-700 ring-2 ring-white/10 overflow-hidden shadow-2xl">
                                {/* Placeholder Avatar */}
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-2xl md:text-3xl">
                                    👨‍💻
                                </div>
                            </div>
                            {/* Status Indicator */}
                            <div className="absolute bottom-1 right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-black/50 shadow-sm" title="Available for work" />
                        </div>

                        <div className="flex flex-col md:items-center">
                            <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-0 md:mb-1">Antonio Brkić</h3>
                            <p className="text-xs md:text-sm text-slate-400 font-medium md:mb-6">Full-Stack Engineer</p>

                            {/* Mobile Socials */}
                            <div className="flex md:hidden gap-2 mt-1.5">
                                <a href="https://github.com/Brkic365" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-slate-300 hover:text-white" title="GitHub">
                                    <Github size={18} />
                                </a>
                                <a href="https://linkedin.com/in/antonio-brkic" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-slate-300 hover:text-blue-400" title="LinkedIn">
                                    <Linkedin size={18} />
                                </a>
                                <a href="mailto:antonio@vectraxr.com" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-slate-300 hover:text-green-400" title="Email">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Mobile) / Details (Desktop) */}
                    <div className="flex flex-col items-end md:items-center gap-2 md:gap-3 md:w-full md:mb-8 md:mt-1.5">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 md:bg-white/5 p-1 md:p-2.5 rounded-lg md:border border-white/5">
                            <MapPin size={14} className="text-blue-400" />
                            <span>Zagreb, HR</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 md:bg-white/5 p-1 md:p-2.5 rounded-lg md:border border-white/5">
                            <CheckCircle2 size={14} className="text-green-400" />
                            <span>Available for work</span>
                        </div>
                    </div>

                    {/* Social Row - Desktop Only */}
                    <div className="hidden md:flex gap-4 mt-auto">
                        <a href="https://github.com/Brkic365" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-slate-300 hover:text-white" title="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/antonio-brkic" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-slate-300 hover:text-blue-400" title="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:antonio@vectraxr.com" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-slate-300 hover:text-green-400" title="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN: Composer */}
                <div className="flex-1 flex flex-col p-6 md:p-8 bg-slate-900/30 overflow-y-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            New Message
                        </h2>
                        {isSent && <span className="text-green-400 text-sm font-medium animate-pulse">Message Sent!</span>}
                    </div>

                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
                        <div className="group">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Project/Work Inquiry..."
                                className="w-full bg-transparent border-b border-white/10 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors font-medium text-lg font-[family-name:var(--font-jetbrains-mono)]"
                                required
                            />
                        </div>

                        <div className="flex-1 flex flex-col group">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Hi Antonio, I'd like to talk about..."
                                className="flex-1 w-full bg-transparent border-none resize-none text-slate-300 placeholder-slate-600 focus:outline-none focus:ring-0 text-base leading-relaxed font-[family-name:var(--font-jetbrains-mono)]"
                                required
                            />
                        </div>

                        <div className="flex justify-end pt-4 border-t border-white/10">
                            <button
                                type="submit"
                                disabled={isSending || isSent}
                                className={`
                        flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
                        ${isSent
                                        ? 'bg-green-500 text-white cursor-default'
                                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 active:scale-95'
                                    }
                    `}
                            >
                                {isSending ? (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin cursor-not-allowed" />
                                ) : isSent ? (
                                    <span className="cursor-not-allowed flex items-center gap-2">Sent <CheckCircle2 size={18} /></span>
                                ) : (
                                    <span className="cursor-pointer text-white flex items-center gap-2">Send Message <Send size={18} /></span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </Window>
    );
};

export default ContactWindow;
