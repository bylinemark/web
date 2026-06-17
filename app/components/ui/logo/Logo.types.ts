export type LogoSize = 'sm' | 'md' | 'lg' | 'navigation' | number | string;

export interface LogoProps {
  size?: LogoSize;
  className?: string;
}

export interface SizeConfig {
  width: number;
  height: number;
}
