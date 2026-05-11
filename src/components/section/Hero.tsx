// src/components/sections/Hero.tsx

import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-start text-white pb-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="src/assets/image/heroImage.png" alt="hero" className="h-full w-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1000px] px-6 sm:px-10 md:px-20 lg:px-32">
        {/* Heading */}
        <h1 className="font-bold italic leading-tight text-5xl md:text-6xl lg:text-7xl">
          A Kinetic <br />
          <span className="text-[#E5C18B]">Legacy</span> of Hope
        </h1>

        {/* Paragraph */}
        <p className="mt-4 font-medium text-gray-300 
        text-lg sm:text-lg md:text-lg lg:text-xl">
          Rooted in the spirit of the game, dedicated to the heart of
          Sudurpaschim. We bridge the gap between professional excellence and
          grassroots empowerment.
        </p>

        {/* Buttons */}
       <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
          <Button text="Join the Royal Movement"/>

          <Button text="Our Vision" variant="secondary" 
          icon={<ArrowRight size={20} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;