import { cn } from "@/lib/utils";
import React from "react";

interface ImpactBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const ImpactBox = React.forwardRef<HTMLDivElement, ImpactBoxProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "impact-box p-[var(--space-6)] my-[var(--space-8)] shadow-sm",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

ImpactBox.displayName = "ImpactBox";
