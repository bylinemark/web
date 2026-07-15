'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ClientTime from './client-time';

export default function SpacesBar () {
    const [isHovered, setIsHovered] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!overlayRef.current) return;
        gsap.to(overlayRef.current, { opacity: isHovered ? 1 : 0.5, duration: 0.15, ease: 'none' });
    }, [isHovered]);

    return (
        <div className="flex space-x-4 items-center justify-center">
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Overlay first in DOM — sits below button in paint order, no negative z-index needed */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0 rounded-sm bg-white/15 pointer-events-none"
                    style={{ opacity: 0 }}
                />
                <div className="relative h-14 w-auto rounded-sm">
                    <div className="flex items-center justify-center h-full w-full space-x-4">
                        <SpacesBarButton isHovered={isHovered} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export function SpacesBarButton ({ isHovered }: { isHovered: boolean }) {
    const c1Ref = useRef<SVGCircleElement>(null);
    const c2Ref = useRef<SVGCircleElement>(null);
    const c3Ref = useRef<SVGCircleElement>(null);
    const c4Ref = useRef<SVGCircleElement>(null);

    useEffect(() => {
        const targets = [
            { ref: c1Ref, x: -1.9, y: -1.9 },
            { ref: c2Ref, x:  1.9, y: -1.9 },
            { ref: c3Ref, x: -1.9, y:  1.9 },
            { ref: c4Ref, x:  1.9, y:  1.9 },
        ];
        targets.forEach(({ ref, x, y }) => {
            gsap.to(ref.current, {
                x: isHovered ? x : 0,
                y: isHovered ? y : 0,
                duration: 0.15,
                ease: 'none',
            });
        });
    }, [isHovered]);

    return (
        <button className="h-full w-full cursor-pointer">
            <span className="flex items-center justify-center space-x-2 px-4 sm:px-2 w-auto">
                <span className="t-label font-mono relative hidden sm:block">
                    <ClientTime />
                </span>
                <span className="flex h-6 w-6 items-center justify-center">
                    <span className="flex items-center justify-center">
                        <svg className="h-2.5 w-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle ref={c1Ref} cx="3" cy="3" r="1" fill="currentColor" />
                            <circle ref={c2Ref} cx="7" cy="3" r="1" fill="currentColor" />
                            <circle ref={c3Ref} cx="3" cy="7" r="1" fill="currentColor" />
                            <circle ref={c4Ref} cx="7" cy="7" r="1" fill="currentColor" />
                        </svg>
                    </span>
                </span>
            </span>
        </button>
    )
}
