// src/components/ui/Button.tsx

import type { ReactNode } from "react";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "iconBtn";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
};

const Button = ({
  text,
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
}: ButtonProps) => {
  const styles =
    variant === "primary"
      ? "bg-[var(--secondary)] text-white hover:bg-red-600"
      : variant === "secondary"
      ? "text-white border border-gray-300 hover:bg-white hover:text-black"
      : "bg-[var(--primary)] text-white hover:bg-blue-600";

  return (
    <button
      className={`inline-flex items-center gap-2 text-lg sm:text-lg md:text-xl font-semibold px-8 sm:px-8 md:px-10
      py-3 sm:py-4 rounded-full transition duration-300 ${styles} ${className}`} >
        
      {/* Left Icon */}
      {icon && iconPosition === "left" && (
        <span className="text-xl">{icon}</span>
      )}

      <span>{text}</span>

      {/* Right Icon */}
      {icon && iconPosition === "right" && (
        <span className="text-xl">{icon}</span>
      )}
    </button>
  );
};

export default Button;