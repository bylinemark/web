"use client";

import { useTranslations } from "next-intl";
import { Logo } from "../logo";
import { TransitionLink } from "./transition-link";

export default function NavigationBar() {
  const t = useTranslations("navigation");

  return (
        <div className="flex items-center justify-start h-full w-full space-x-4">
          <div className="flex items-center justify-center w-auto">
            <TransitionLink href="/" className="h-full w-full cursor-pointer">
              <Logo size="md" />
            </TransitionLink>
          </div>
          <div className="group/links hidden sm:flex items-center justify-center space-x-4 w-auto">
            <TransitionLink
              href="/work"
              className="cursor-pointer group-hover/links:opacity-50 hover:group-hover/links:opacity-100 transition-all duration-150 ease-linear"
            >
              <span className="px-2 py-2 block">
                <span className="t-label font-mono relative">
                  {t("work")}
                </span>
              </span>
            </TransitionLink>
            <TransitionLink
              href="/about"
              className="cursor-pointer group-hover/links:opacity-50 hover:group-hover/links:opacity-100 transition-all duration-150 ease-linear"
            >
              <span className="px-2 py-2 block">
                <span className="t-label font-mono relative">
                  {t("about")}
                </span>
              </span>
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="cursor-pointer group-hover/links:opacity-50 hover:group-hover/links:opacity-100 transition-all duration-150 ease-linear"
            >
              <span className="px-2 py-2 block">
                <span className="t-label font-mono relative">
                  {t("contact")}
                </span>
              </span>
            </TransitionLink>
          </div>
        </div>
  );
}
