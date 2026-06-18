'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function ClientTime() {
    const [timeStr, setTimeStr] = useState<string>('');
    const [timezone, setTimezone] = useState<string>('');

    // 8 refs for H H : M M : S S
    const charRefs = useRef<(HTMLSpanElement | null)[]>(Array(8).fill(null));
    const prevTimeStr = useRef<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours   = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            const offset   = now.getTimezoneOffset();
            const sign     = offset <= 0 ? '+' : '-';
            const absHours = Math.floor(Math.abs(offset) / 60);
            const tz       = `UTC${sign}${absHours}`;

            const next = `${hours}:${minutes}:${seconds}`;

            setTimezone(tz);
            setTimeStr(next);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Animate changed characters
    useEffect(() => {
        if (!timeStr) return;

        const prev = prevTimeStr.current;
        timeStr.split('').forEach((char, i) => {
            if (char !== prev[i] && charRefs.current[i]) {
                gsap.fromTo(
                    charRefs.current[i],
                    { y: 5, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.2, ease: 'power2.out' }
                );
            }
        });

        prevTimeStr.current = timeStr;
    }, [timeStr]);

    if (!timeStr) return null;

    const chars = timeStr.split('');

    return (
        <span className="inline-flex items-center">
            {chars.map((char, i) => (
                <span
                    key={i}
                    style={{ display: 'inline-block', overflow: 'hidden', lineHeight: '1em' }}
                >
                    <span
                        ref={el => { charRefs.current[i] = el; }}
                        style={{ display: 'inline-block' }}
                    >
                        {char}
                    </span>
                </span>
            ))}
            {timezone && (
                <span className="ml-1">{timezone}</span>
            )}
        </span>
    );
}
