export type LogoSize = "sm" | "md" | "lg" | "base" | "hero" | "max" | number | string;

export interface LogoProps {
  size?: LogoSize;
  className?: string;
}

export interface SizeConfig {
  width: number | string;
  height: number | string;
}
