import Button from "../ui/Button";
import Container from "../common/Container";

type CTABannerProps = {
  title: string;
  titleClass?: string;

  primaryText?: string;
  secondaryText?: string;

  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;

  image?: string;
  showButtons?: boolean;
  variant?: "default" | "blue";
};

const CTABanner = ({
  title,
  titleClass = "",
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
  image,
  showButtons = true,
  variant = "default",
}: CTABannerProps) => {
  return (
    <section className="relative h-[420px] overflow-hidden">
      {/* BACKGROUND */}
      {variant === "default" && image && (
        <img
          src={image}
          alt="CTA Banner"
          className="w-full h-full object-cover"
        />
      )}

      {variant === "blue" && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-[var(--primary)]" />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <Container className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2
          className={`text-white text-3xl md:text-5xl lg:text-6xl font-bold italic leading-tight ${titleClass}`}
        >
          {title}
        </h2>

        {showButtons && (
          <div className="mt-10 flex gap-4">
            {/* PRIMARY BUTTON */}
            {primaryText && (
              <Button
                text={primaryText}
                variant="primary"
                onClick={onPrimaryClick}
              />
            )}

            {/* SECONDARY BUTTON */}
            {secondaryText && (
              <Button
                text={secondaryText}
                variant="secondary"
                onClick={onSecondaryClick}
              />
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default CTABanner;
