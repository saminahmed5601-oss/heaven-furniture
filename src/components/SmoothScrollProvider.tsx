"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (
    target: string | HTMLElement | number,
    options?: {
      offset?: number;
      duration?: number;
      immediate?: boolean;
      lock?: boolean;
    }
  ) => void;
  stopScroll: () => void;
  startScroll: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
  stopScroll: () => {},
  startScroll: () => {},
});

export function useLenisScroll() {
  return useContext(SmoothScrollContext);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.01 : 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,       // Syncs touch momentum across mobile
      touchMultiplier: 1.2,
      autoRaf: true,
      anchors: false,
    });

    lenisRef.current = lenis;
    if (typeof window !== "undefined") {
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }
    const frame = window.requestAnimationFrame(() => {
      setLenisInstance(lenis);
    });

    // Global in-page anchor delegation with header offset compensation (-88px)
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      // Allow mobile drawer or elements marked with data-lenis-prevent to execute native click and React handlers cleanly
      if (anchor.closest("[data-lenis-prevent]")) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href === "#!") return;

      const targetSelector = href;

      try {
        const targetElement = document.querySelector<HTMLElement>(targetSelector);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, {
            offset: 0,
            duration: prefersReducedMotion ? 0.01 : 1.1,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });

          // Maintain accessible URL hash without harsh jumping
          if (window.history.pushState) {
            window.history.pushState(null, "", href);
          }
        }
      } catch {
        // In case of invalid selector, let browser handle natively
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  const scrollTo = (
    target: string | HTMLElement | number,
    options?: {
      offset?: number;
      duration?: number;
      immediate?: boolean;
      lock?: boolean;
    }
  ) => {
    if (!lenisRef.current) {
      if (typeof target === "string") {
        const el = document.querySelector<HTMLElement>(target);
        el?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    const resolvedTarget: string | HTMLElement | number = target;
    lenisRef.current.scrollTo(resolvedTarget, {
      offset: options?.offset ?? 0,
      duration: options?.duration ?? 1.1,
      immediate: options?.immediate ?? false,
      lock: options?.lock ?? false,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  const stopScroll = () => {
    lenisRef.current?.stop();
  };

  const startScroll = () => {
    lenisRef.current?.start();
  };

  return (
    <SmoothScrollContext.Provider
      value={{
        lenis: lenisInstance,
        scrollTo,
        stopScroll,
        startScroll,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
}
