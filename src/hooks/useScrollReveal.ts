"use client";

import { useRef, useEffect, useCallback } from "react";

/**
 * Custom hook for GSAP ScrollTrigger-based reveal animations.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal() {
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = useCallback(
        (
            element: HTMLElement | null,
            options?: {
                y?: number;
                x?: number;
                delay?: number;
                duration?: number;
                stagger?: number;
                children?: boolean;
            }
        ) => {
            if (!element || prefersReducedMotion) return;

            const {
                y = 40,
                x = 0,
                delay = 0,
                duration = 0.8,
                stagger = 0,
                children = false,
            } = options || {};

            import("gsap").then(({ gsap }) => {
                import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                    gsap.registerPlugin(ScrollTrigger);

                    const targets = children ? element.children : element;

                    gsap.fromTo(
                        targets,
                        { opacity: 0, y, x },
                        {
                            opacity: 1,
                            y: 0,
                            x: 0,
                            duration,
                            delay,
                            stagger,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: element,
                                start: "top 85%",
                                toggleActions: "play none none none",
                            },
                        }
                    );
                });
            });
        },
        [prefersReducedMotion]
    );

    return { reveal };
}
