'use client';

import { useState, useEffect } from 'react';

const DesktopClock = () => {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date());
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!time) return null;

    return (
        <div className="hidden md:flex flex-col items-end pointer-events-none z-0 opacity-30 select-none absolute top-0 right-0">
            <h1 className="text-6xl md:text-8xl font-thin tracking-wider text-white font-[family-name:var(--font-jetbrains-mono)]">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </h1>
            <p className="text-sm md:text-xl text-slate-300 font-light mt-2 tracking-[0.2em] uppercase">
                {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
        </div>
    );
};

export default DesktopClock;
