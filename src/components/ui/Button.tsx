import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "primary" | "cta";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50";
  const variants: Record<string, string> = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700",
    primary: "bg-emerald-600 text-white hover:bg-emerald-700",
    cta: "bg-rose-500 text-white hover:bg-rose-600 font-bold shadow-lg",
    outline: "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",
    ghost: "text-emerald-600 hover:bg-emerald-50",
  };
  const sizes: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant] ?? variants.default} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
