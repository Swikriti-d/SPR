import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

const VisionSection = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 items-stretch">

          {/* LEFT SIDE */}
          <div className="flex-1 space-y-8">

            <div>
              <SectionTitle title="Our Vision" />

              <p className="text-[var(--body)] leading-relaxed text-base sm:text-lg mt-8">
                "We envision a Sudurpaschim where every citizen has access to world-class
                healthcare, every child has the tools to dream big, and the spirit of
                sportsmanship unites us toward a common goal of excellence."
              </p>
            </div>

            {/* QUOTE CARD */}
            <div className="relative bg-white shadow-md rounded-xl p-6 border-l-4 border-[var(--secondary)]">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary)] italic">
                “The game ends, the impact shouldn’t.”
              </h3>
              <p className="text-sm text-[var(--body)] mt-2 uppercase tracking-wide">
                — Foundation Creed
              </p>
            </div>

            {/* MISSION TEXT */}
            <p className="text-[var(--body)] text-base sm:text-lg leading-relaxed">
              Our mission is to leverage regional pride associated with Sudurpaschim Royals
              to channel resources, visibility, and professional expertise into projects that
              matter. We don’t just provide aid; we build infrastructure for long-term resilience.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE (MATCH FOUNDATION STYLE) */}
          <div className="flex-1">
            <div className="h-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src="src/assets/image/vision.avif" 
                alt="Child playing with joy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default VisionSection;