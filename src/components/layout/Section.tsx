
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: "default" | "alternate" | "dark";
    noPadding?: boolean;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({ className, children, variant = "default", noPadding = false, ...props }, ref) => {
        const variants = {
            default: "bg-surface-page",
            alternate: "bg-surface-section",
            dark: "bg-text-primary text-text-on-dark",
        };

        return (
            <section
                ref={ref}
                className={cn(
                    "w-full relative overflow-hidden",
                    !noPadding && "py-12 md:py-20",
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </section>
        );
    }
);

Section.displayName = "Section";
