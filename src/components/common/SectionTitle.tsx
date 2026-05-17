type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <h2
      className={`relative pb-4 text-3xl font-extrabold text-[var(--primary)] md:text-4xl ${className}`}
    >
      {title}
      <span className="absolute bottom-0 left-0 h-1 w-20 rounded-full bg-[var(--secondary)]" />
    </h2>
  );
};

export default SectionTitle;
