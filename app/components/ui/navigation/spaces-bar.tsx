'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ClientTime from './client-time';

export default function SpacesBar () {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <motion.div className="fixed top-4 right-4 z-40" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <div className="h-14 w-auto rounded-sm">
                    <div className="flex items-center justify-center h-full w-full gap-4">
                        <SpacesBarButton isHovered={isHovered} />
                    </div>
                </div>
                <motion.div className="absolute top-0 left-0 -z-1 h-full w-full rounded-sm bg-white/5 pointer-events-none" animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.15, ease: 'linear' }} />
            </motion.div>
        </div>
    )
}

export function SpacesBarButton ({isHovered}: {isHovered: boolean}) {

    return (
        <button 
            className="h-full w-full cursor-pointer"
        >
            <span className="flex items-center justify-center gap-x-2 px-2 w-auto">
                <span className="pl-2 block">
                    <span className="font-mono text-sm leading-4 tracking-normal uppercase relative" >
                        <ClientTime />
                    </span>
                </span>
                <span className="flex h-6 w-6 items-center justify-center">
                    <span className="flex items-center justify-center">
                        <svg className="h-2.5 w-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.circle 
                                cx="3" cy="3" r="1" fill="currentColor"
                                animate={isHovered ? { x: -1.9, y: -1.9 } : { x: 0, y: 0 }}
                                transition={{ duration: 0.15, ease: 'linear' }}
                            />
                            <motion.circle 
                                cx="7" cy="3" r="1" fill="currentColor"
                                animate={isHovered ? { x: 1.9, y: -1.9 } : { x: 0, y: 0 }}
                                transition={{ duration: 0.15, ease: 'linear' }}
                            />
                            <motion.circle 
                                cx="3" cy="7" r="1" fill="currentColor"
                                animate={isHovered ? { x: -1.9, y: 1.9 } : { x: 0, y: 0 }}
                                transition={{ duration: 0.15, ease: 'linear' }}
                            />
                            <motion.circle 
                                cx="7" cy="7" r="1" fill="currentColor"
                                animate={isHovered ? { x: 1.9, y: 1.9 } : { x: 0, y: 0 }}
                                transition={{ duration: 0.15, ease: 'linear' }}
                            />
                        </svg>
                    </span>
                </span>
            </span>
        </button>
    )
}