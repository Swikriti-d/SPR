// src/components/sections/Hero.tsx

import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center text-white px-6 sm:px-10 md:px-20 lg:px-30">

  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="src/assets/image/heroImage.png"
      alt="hero"
      className="h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto relative z-10 py-18">

    <div className="max-w-[1000px]">

      <h1 className="font-bold italic leading-tight text-5xl md:text-6xl lg:text-7xl">
        A Kinetic <br />
        <span className="text-[#E5C18B]">Legacy</span> of Hope
      </h1>

      <p className="mt-4 text-lg lg:text-xl text-gray-300 leading-relaxed">
        Rooted in the spirit of the game, dedicated to the heart of
        Sudurpaschim.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
  <Button text="Join the Royal Movement" className="w-auto self-start" />
  <Button
    text="Our Vision"
    variant="secondary"
    icon={<ArrowRight size={20} />}
    className="w-auto self-start"
  />
</div>
    </div>
  </div>
</section>
  );
};

export default Hero;