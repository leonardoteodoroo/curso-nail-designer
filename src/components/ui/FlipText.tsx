"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FlipTextProps {
    children: string;
    className?: string;
    delay?: number;
}

export function FlipText({ children, className, delay = 0 }: FlipTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const letterVariants = {
        hidden: { rotateX: 90, opacity: 0 },
        visible: { rotateX: 0, opacity: 1 },
    };

    return (
        <motion.h2
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.03, delayChildren: delay }}
            className={cn("perspective-1000 inline-block", className)}
            aria-label={children} // Accessibility
        >
            <span className="sr-only">{children}</span> {/* Screen reader only */}
            <span aria-hidden="true" className="inline-block"> {/* Visual representation */}
                {children.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        transition={{
                            duration: 0.5,
                            ease: [0.05, 0.7, 0.1, 1.0], // ease-emphasized
                        }}
                        className="inline-block origin-bottom"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </span>
        </motion.h2>
    );
}
