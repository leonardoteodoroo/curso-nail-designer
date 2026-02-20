import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerTextProps {
    text: string;
    className?: string;
    staggerDelay?: number;
}

export const StaggerText: React.FC<StaggerTextProps> = ({
    text,
    className,
    staggerDelay = 0.03,
}) => {
    const words = text.split(" ");

    return (
        <motion.p
            className={cn("flex flex-wrap", className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="mr-[0.3em]"
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: i * staggerDelay, duration: 0.3 },
                        },
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.p>
    );
};
