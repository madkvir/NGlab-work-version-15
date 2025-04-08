"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "../../i18n/routing";

interface GlowingButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  to,
  onClick,
  children,
  className = "",
  icon = (
    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
  ),
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
}) => {
  const baseClasses = `
    relative 
    ${fullWidth ? "w-full" : "w-auto"} 
    inline-flex items-center justify-center gap-2
    font-semibold rounded-lg
    transition-all duration-300
    ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"}
    group
    ${className}
  `;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-emerald-400 to-green-300 
      text-white
      hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]
      ${!disabled && "hover:animate-glow"}
    `,
    secondary: `
      bg-gray-900/50 
      text-gray-300
      hover:text-white
      border border-gray-700
      hover:border-emerald-400/50
      hover:bg-gray-800/70
    `,
    outline: `
      border border-emerald-400/50
      text-emerald-400
      hover:bg-emerald-400/10
    `,
  };

  const buttonContent = (
    <>
      <span>{children}</span>
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
  `;

  if (to && !disabled) {
    return (
      <Link href={to} className={combinedClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default GlowingButton;
