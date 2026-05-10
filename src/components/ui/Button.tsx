type ButtonProps = {
  text: string
  variant?: "primary" | "secondary"
  className?: string
}

const Button = ({
  text,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const styles =
    variant === "primary"
      ? "bg-[var(--secondary)] text-white hover:bg-red-600"
      : variant === "secondary"
      ? "bg-white text-black border border-gray-300 hover:bg-gray-100"
      : "bg-[var(--primary)] text-white hover:bg-blue-600"

  return (
    <button
	className={`px-10 py-4 rounded-full transition ${styles} ${className}`}
    >
      {text}
    </button>
  )
}

export default Button