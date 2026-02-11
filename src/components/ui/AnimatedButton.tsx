"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative overflow-hidden group btn-cta px-8 py-4 text-lg", // Uses btn-cta base styles
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1000 ease-in-out skew-y-12" />
                <span className="relative z-10">{children}</span>
            </motion.button>
        );
    }
);

AnimatedButton.displayName = "AnimatedButton";
