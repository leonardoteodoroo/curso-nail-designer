import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "cta";
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", isLoading, children, ...props }, ref) => {
        const variants = {
            primary: "bg-[var(--action-primary)] text-[var(--text-on-brand)] rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] hover:bg-[var(--action-primary-hover)] active:bg-[var(--action-primary-active)] disabled:bg-[var(--action-primary-disabled)]",
            secondary: "bg-transparent border-2 border-[var(--border-default)] text-[var(--text-primary)] rounded-[var(--radius-md)] hover:bg-[var(--action-secondary-hover)] active:bg-[var(--action-secondary-active)]",
            cta: "bg-[image:var(--gradient-cta)] text-[var(--text-on-strong)] rounded-[var(--radius-xl)] font-bold shadow-[var(--shadow-cta)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(212,175,55,0.3)] active:translate-y-0 active:shadow-[var(--shadow-cta)] transition-all duration-[var(--transition-normal)] ease-[var(--ease-emphasized)]",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center px-6 py-3 text-base transition-all disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] focus:ring-offset-2",
                    variants[variant],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading ? (
                    <span className="mr-2 animate-spin">⏳</span> // Placeholder icon
                ) : null}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
