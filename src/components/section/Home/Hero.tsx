import { ArrowRight } from "lucide-react";
import Container from "../../common/Container";
import Button from "../../ui/Button";

type HeroProps = {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;

  showButtons?: boolean;
  height?: "sm" | "md" | "lg" | "full";
};

const heightMap = {
  sm: "min-h-[60vh]",
  md: "min-h-[65vh]",
  lg: "min-h-[85vh]",
  full: "min-h-screen",
};

const Hero = ({
  title,
  subtitle,
  image,
  showButtons = true,
  height = "lg",
}: HeroProps) => {
  return (
    <section
      className={`relative ${heightMap[height]} text-white flex items-center`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image || "src/assets/image/heroImage.png"}
          alt="hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <Container className="w-full">
          <div className="max-w-[1000px]">
            <h1 className="font-bold italic leading-tight text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 text-lg lg:text-xl text-gray-300 leading-relaxed">
                {subtitle}
              </p>
            )}

            {showButtons && (
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button text="Join the Royal Movement" />
                <Button
                  text="Our Vision"
                  variant="secondary"
                  icon={<ArrowRight size={20} />}
                />
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
