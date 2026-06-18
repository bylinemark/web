"use client";

import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { locales } from "@/i18n/config";

interface TransitionLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

function slideInOut() {
  document.documentElement.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0.2, transform: "translateY(-35%)" },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  document.documentElement.animate(
    [
      { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
      { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
}

export function TransitionLink({ href, className, children }: TransitionLinkProps) {
  // usePathname returns the full path (e.g. "/cs/work" or "/work" for the default locale).
  // Strip the locale segment only if one is present, so it can be compared against bare hrefs like "/work".
  const rawPathname = usePathname();
  const parts = rawPathname.split("/").filter(Boolean);
  const hasLocalePrefix = (locales as readonly string[]).includes(parts[0]);
  const pathname = "/" + (hasLocalePrefix ? parts.slice(1) : parts).join("/");

  const router = useTransitionRouter();

  const isActive = pathname === href;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (isActive) return;
    router.push(href, { onTransitionReady: slideInOut });
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
