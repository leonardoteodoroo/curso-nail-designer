import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className,
    hoverEffect = false,
    onClick,
}) => {
    return (
        <motion.div
            className={cn(
                "rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-100 shadow-sm",
                "transition-all duration-300",
                onClick && "cursor-pointer",
                className
            )}
            whileHover={
                hoverEffect
                    ? { y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }
                    : undefined
            }
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};
