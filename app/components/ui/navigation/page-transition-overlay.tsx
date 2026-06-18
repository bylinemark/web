"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

// Module-level reference so TransitionLink can reach the overlay
// without needing a React context.
let overlayEl: HTMLDivElement | null = null;

const DURATION = 0.75;
const EASE = "cubic-bezier(0.87, 0, 0.13, 1)";

const HIDDEN = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
const COVERED = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
const GONE = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";

export function navigate(href: string, router: ReturnType<typeof useRouter>) {
  if (!overlayEl) {
    router.push(href);
    return;
  }

  gsap.to(overlayEl, {
    clipPath: COVERED,
    duration: DURATION,
    ease: EASE,
    onComplete: () => router.push(href),
  });
}

export function PageTransitionOverlay() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isFirstMount = useRef(true);

  useEffect(() => {
    overlayEl = ref.current;
    return () => {
      overlayEl = null;
    };
  }, []);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // New page has mounted — pull the overlay off the top.
    gsap.to(ref.current, {
      clipPath: GONE,
      duration: DURATION,
      ease: EASE,
    });
  }, [pathname]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        clipPath: HIDDEN,
        pointerEvents: "none",
        background: "var(--background)",
      }}
    />
  );
}
