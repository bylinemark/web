'use client';
import { useEffect, useState } from 'react';

export default function ClientTime() {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
    const updateTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        const offset = now.getTimezoneOffset();
        const sign = offset <= 0 ? '+' : '-';
        const absHours = Math.floor(Math.abs(offset) / 60);
        const timezone = `UTC${sign}${absHours}`;
        
        setTime(`${hours}:${minutes} ${timezone}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
    }, []);

    return time;
}