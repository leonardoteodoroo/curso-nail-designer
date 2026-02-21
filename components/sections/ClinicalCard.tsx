import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ClinicalCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const ClinicalCard: React.FC<ClinicalCardProps> = ({
  children,
  className,
  hoverEffect = false,
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl bg-white border border-zinc-200 shadow-sm p-6",
        "transition-all duration-300",
        className,
      )}
      whileHover={
        hoverEffect
          ? { y: -3, boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
};
