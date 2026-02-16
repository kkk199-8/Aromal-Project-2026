"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

export function ParallaxImage({ src, alt, className, priority }: ParallaxImageProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

    return (
        <div
            ref={ref}
            className={cn("relative overflow-hidden rounded-[2rem]", className)}
        >
            <motion.div style={{ y, scale }} className="absolute inset-[-10%] w-[120%] h-[120%]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority={priority}
                />
            </motion.div>
        </div>
    );
}
