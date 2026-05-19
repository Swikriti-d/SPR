import type { ReactNode } from "react";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "iconBtn";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
};

const Button = ({
  text,
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  onClick,
}: ButtonProps) => {
  const styles =
    variant === "primary"
      ? "bg-[var(--secondary)] text-white hover:bg-red-600"
      : variant === "secondary"
      ? "text-white border border-gray-300 hover:bg-white hover:text-black"
      : "bg-[var(--primary)] text-white hover:bg-blue-600";

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-full transition duration-300 ${styles} ${className}`}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}

      <span>{text}</span>

      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;