"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
    name: string;
    age: number;
    location: string;
    content: React.ReactNode;
    imageSrc?: string; // Placeholder
    highlight?: boolean;
    delay?: number;
    quote?: string;
    badge?: string;
}

export const TestimonialCard = ({
    name,
    age,
    location,
    content,
    imageSrc,
    highlight = false,
    delay = 0,
    quote,
    badge
}: TestimonialCardProps) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -5 }}
            className={cn(
                "relative p-6 rounded-[var(--radius-lg)] border transition-all duration-300 h-full flex flex-col",
                highlight
                    ? "bg-[var(--surface-card)] border-[var(--action-strong)] shadow-[var(--shadow-cta)]"
                    : "bg-[var(--surface-card)] border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
            )}
        >
            {/* Quote Icon Background */}
            <Quote className="absolute top-4 right-4 w-12 h-12 text-[var(--action-primary)]/10" />

            {/* Header: Image & Info */}
            <div className="flex items-center gap-4 mb-4">
                <div className={cn(
                    "relative w-16 h-16 rounded-full overflow-hidden bg-neutral-200 border-2",
                    highlight ? "border-[var(--action-strong)]" : "border-[var(--surface-subtle)]"
                )}>
                    {/* Placeholder Avatar */}
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-neutral-400">
                        {name.charAt(0)}
                    </div>
                    {/* <Image src={imageSrc} alt={name} fill className="object-cover" /> */}
                </div>
                <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-lg leading-tight">
                        {name}, {age} anos
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">{location}</p>
                    {badge && (
                        <span className="inline-block mt-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--surface-subtle)] text-[var(--action-primary-active)]">
                            {badge}
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="text-[var(--text-primary)] leading-relaxed italic relative z-10 flex-grow">
                "{content}"
            </div>

            {/* Footer Quote (Optional Highlight) */}
            {quote && (
                <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
                    <p className="font-bold text-sm text-[var(--action-primary-active)]">
                        — {quote}
                    </p>
                </div>
            )}
        </motion.div>
    );
};
