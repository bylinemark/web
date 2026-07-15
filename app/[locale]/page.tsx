"use client";

import ReactLenis from "@studio-freight/react-lenis";
import { useTranslations } from "next-intl";
import { Logo } from "../components/ui/logo";
import { TransitionLink } from "../components/ui/navigation/transition-link";

export default function Home() {
  const t = useTranslations();

  return (
    <ReactLenis root>
      <div className="relative h-svh w-full">
        <div className="site-max relative h-full pt-40 pb-23 flex flex-col justify-between">
          <div className="max-s:w-full s:-mx-20 h-auto mb-35">
            <Logo size="hero" />
          </div>
          <div className="relative flex justify-between items-end w-full">
            <div className="flex flex-col items-start w-full">
              <h1 className="t-h1 w-full max-w-100 sm:max-w-240">{t("hero.title")}</h1>
              <TransitionLink className="t-label mt-16 xline-double" href="/">{t("hero.cta")}</TransitionLink>
            </div>
            <span className="t-label hidden sm:block">{t("hero.alt")}</span>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
