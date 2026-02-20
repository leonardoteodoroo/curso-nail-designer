import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "p";
}

export const BlurText: React.FC<BlurTextProps> = ({
    text,
    className,
    as: Tag = "h2",
}) => {
    return (
        <motion.div
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Tag
                className={cn(
                    "font-bold text-zinc-900",
                    className
                )}
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                {text}
            </Tag>
        </motion.div>
    );
};
