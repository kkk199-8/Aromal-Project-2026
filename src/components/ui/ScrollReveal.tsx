"use client";

import { useRef, useEffect, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
    children: ReactNode;
    /** Animate children individually with stagger */
    stagger?: number;
    /** Direction of entrance: 'up' | 'left' | 'right' */
    direction?: "up" | "left" | "right";
    /** Distance in pixels */
    distance?: number;
    /** Delay in seconds */
    delay?: number;
    /** Custom className for the wrapper */
    className?: string;
}

export function ScrollReveal({
    children,
    stagger = 0,
    direction = "up",
    distance = 40,
    delay = 0,
    className = "",
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { reveal } = useScrollReveal();

    const x = direction === "left" ? -distance : direction === "right" ? distance : 0;
    const y = direction === "up" ? distance : 0;

    useEffect(() => {
        reveal(ref.current, {
            y,
            x,
            delay,
            stagger: stagger > 0 ? stagger : undefined,
            children: stagger > 0,
        });
    }, [reveal, y, x, delay, stagger]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
