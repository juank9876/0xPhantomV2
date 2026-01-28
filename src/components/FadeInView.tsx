"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInViewProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}

export default function FadeInView({
    children,
    delay = 0,
    duration = 0.6,
    direction = "up",
    className = "",
}: FadeInViewProps) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
        none: { y: 0, x: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
