'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { LogoProps, SizeConfig } from './Logo.types';

const SIZE_MAP: Record<string, SizeConfig> = {
  base: { width: 288, height: 58.94 },
  sm: { width: 64, height: 13 },
  md: { width: 107, height: 22 },
  lg: { width: 128, height: 26 },
};

const getSizeConfig = (size?: LogoProps['size']): SizeConfig => {
  if (!size) return SIZE_MAP.base;
  if (typeof size === 'number') {
    return { width: size, height: size };
  }
  if (typeof size === 'string' && size in SIZE_MAP) {
    return SIZE_MAP[size as keyof typeof SIZE_MAP];
  }
  return { width: 288, height: 58.94 };
};

export default function Logo({
  size = 'base',
  className = '',
}: LogoProps) {
  const sizeConfig = getSizeConfig(size);
  const containerRef = useRef<SVGSVGElement>(null);

  return (
    <motion.svg
      ref={containerRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 58.94"
      width={sizeConfig.width}
      height={sizeConfig.height}
      className={`overflow-hidden ${className}`}
    >
      <g id="logo-v1">
        <motion.path
          d="M0,57.78V1.16h11.42v47.18h12.31v9.44H0Z"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M27.97,57.78V1.16h11.42v56.62h-11.42Z"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M57.37,1.16l.68,3.35c2.53-2.8,6.15-4.24,9.5-4.24,5.68,0,10.94,3.97,10.94,12.24v45.27h-11.42V13.61c0-2.39-1.71-4.17-4.51-4.17s-4.38,1.57-4.51,3.76v44.58h-11.42V1.16h10.73Z"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M117.16,34.29c-.02,1.22-.91,2.19-2,2.19h-15.03l11.82,13.27c.87.97.76,2.58-.23,3.39-2.01,1.65-4.6,3.56-7.4,5.47-.79.53-1.8.4-2.44-.33l-16.26-18.24c-.38-.42-.59-.99-.59-1.59v-17.98c0-.6.21-1.17.59-1.59L101.88.66c.65-.73,1.67-.87,2.46-.33,2.8,1.91,5.38,3.81,7.39,5.46.99.81,1.1,2.42.23,3.39l-11.82,13.27h15.03c1.09,0,1.98.97,2,2.19.08,3.16.08,6.48,0,9.65Z"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M160.68,57.78V13.4c0-2.33-1.16-3.97-3.62-3.97-2.19,0-3.49,1.37-3.49,3.42v44.92h-11.35V13.4c0-2.33-1.23-3.97-3.62-3.97s-3.49,1.57-3.49,3.76v44.58h-11.42V1.16h10.73l.68,3.35c2.53-2.8,5.13-4.24,8.48-4.24,3.62,0,6.63,1.71,8.41,4.92,3.08-3.83,7.11-4.92,10.12-4.92,5.61,0,9.98,3.97,9.98,12.24v45.27h-11.42Z"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M199.59,57.78c-.34-.68-.48-1.85-.62-3.21-2.53,2.6-6.43,4.1-9.64,4.1-5.68,0-10.94-3.97-10.94-12.24v-13.27c0-10.94,10.53-9.37,20.44-10.87v-8.75c0-2.39-1.64-4.1-4.51-4.1s-4.51,1.78-4.51,4.17v6.36h-11.42v-8.28c0-7.31,6.22-11.69,15.93-11.69s15.93,4.38,15.93,11.69v40.27c0,2.46.21,4.72.62,5.81h-11.28ZM198.84,31.72c-4.72.75-9.02.82-9.02,5.06v8.55c0,2.39,1.71,4.17,4.51,4.17s4.31-1.44,4.51-3.56v-14.22Z"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M238.43,57.78c-.75-1.78-.75-6.7-.75-10.32v-9.16c0-3.15-.89-4.99-3.76-4.99h-5.27v24.48h-11.42V1.16h22.22c9.44,0,9.64,6.7,9.64,12.58v1.64c0,5.61-.21,12.51-9.57,13.4,9.37.75,9.57,6.98,9.57,12.51v8.48c0,3.15.07,6.57.62,8h-11.28ZM237.68,15.52c0-3.15-.89-4.92-3.76-4.92h-5.27v13.26h5.27c2.87,0,3.76-1.78,3.76-4.92v-3.42Z"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.path
          d="M276.79,57.78c-.62-1.78-.75-6.7-.75-10.32v-9.98c0-2.33-1.78-4.17-4.58-4.17h-4.58v24.48h-11.42V1.16h11.42v22.84h4.65c2.8,0,4.51-1.78,4.51-4.1V1.16h11.35v17.78c0,4.72-2.6,7.93-6.97,9.57,4.38,1.64,6.97,4.79,6.97,9.5v11.76c0,3.15.07,6.57.62,8h-11.21Z"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </motion.svg>
  );
}
