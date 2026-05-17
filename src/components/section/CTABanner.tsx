import Button from "../ui/Button";
import Container from "../common/Container";

const CTABanner = () => {
  return (
    <section className="relative h-[420px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="src/assets/image/cta.png"
        alt="CTA Banner"
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <Container className="absolute inset-0 flex flex-col items-center justify-center py-16 text-center">

        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold italic leading-tight">
          “Make a donation and help us bring change where it’s needed most.”
        </h2>

        <div className="mt-10">
          <Button text="Donate Now" />
        </div>

      </Container>
    </section>
  );
};

export default CTABanner;