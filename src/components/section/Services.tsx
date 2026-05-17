import {
  GraduationCap,
  Trophy,
  Megaphone,
  ArrowUpRight,
  BriefcaseMedical,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const services = [
  {
    title: "Women & Child Education",
    description:
      "Building a stronger future by educating and uplifting women and children.",
    icon: <GraduationCap size={30} />,
    bg: "bg-[#F3F3F3]",
    text: "text-[var(--primary)]",
    features: [],
  },
  {
    title: "Sports",
    description:
      "Encouraging sports culture through growth, participation, and better facilities.",
    icon: <Trophy size={30} />,
    bg: "bg-[var(--secondary)]",
    text: "text-white",
    features: ["Cricket Growth", "Football Growth", "Sport Infrastructure"],
  },
  {
    title: "Social Awareness",
    description:
      "Creating awareness to support social change and protect vulnerable lives.",
    icon: <Megaphone size={30} />,
    bg: "bg-[#F3F3F3]",
    text: "text-[var(--primary)]",
    features: [
      "Ending Chaupadi",
      "Lowering Mortality",
      "Advocacy for Child Education",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <Container>

        {/* TITLE */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-6 max-w-2xl">
            <SectionTitle title="Our Services" />

            <p className="text-[var(--body)] leading-relaxed text-base sm:text-lg">
              Real-time initiatives currently transforming lives across the
              region. Explore our footprint of change.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 font-semibold text-[var(--secondary)]"
          >
            View All Services
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">

          {/* LEFT BIG CARD */}
          <div className="relative rounded-4xl overflow-hidden">

            <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-full">
              <img
                src="src/assets/image/health.png"
                alt="Free Health Camps"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
              <div className="mb-4">
                <BriefcaseMedical size={40} className="text-[var(--secondary)]" />
              </div>

              <p className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                Free Health Camps
              </p>

              <h3 className="text-sm sm:text-lg text-white/90">
                Providing solar-powered water filtration systems to 45 remote
                mountain villages by 2025.
              </h3>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-6">

            {/* TOP RIGHT CARD */}
            <div className="grid overflow-hidden rounded-4xl border border-[#C4C6D0] bg-[#E9E7EC] grid-cols-1 md:grid-cols-2">

              {/* TEXT */}
              <div className="flex flex-col items-start justify-center p-6 sm:p-8">

                <div className="mb-4">
                  <GraduationCap size={40} className="text-[var(--secondary)]" />
                </div>

                <h3 className="mb-4 text-xl sm:text-2xl font-bold leading-8 text-[var(--primary)]">
                  Women & Child Education
                </h3>

                <p className="mb-5 text-sm sm:text-lg leading-7 text-[var(--body)]">
                  Building a stronger future by educating and uplifting women
                  and children.
                </p>

                <button
                  type="button"
                  className="text-base font-bold text-[var(--primary)] underline underline-offset-4"
                >
                  EXPLORE PROJECT
                </button>

              </div>

              {/* IMAGE */}
              <div className="aspect-[4/3] md:aspect-auto">
                <img
                  src="src/assets/image/women & children.png"
                  alt="Children"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* BOTTOM GRID */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* SPORTS */}
              <div className="bg-[var(--secondary)] text-white rounded-4xl p-6 flex flex-col gap-6">

                <Trophy size={40} />

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    Sports
                  </h3>

                  <p className="text-sm sm:text-lg leading-relaxed mb-5">
                    Encouraging sports culture through growth, better facilities,
                    and participation.
                  </p>

                  <ul className="space-y-3">
                    {services[1].features.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm sm:text-lg">

                        <span className="w-5 h-5 p-3 flex items-center justify-center rounded-full bg-white/20">
                          ✓
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* SOCIAL AWARENESS */}
              <div className="border border-[#C4C6D0] bg-[#E9E7EC] rounded-4xl p-6 flex flex-col gap-6">

                <Megaphone size={40} className="text-[var(--secondary)]" />

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary)] mb-3">
                    Social Awareness
                  </h3>

                  <p className="text-sm sm:text-lg text-[var(--body)] leading-relaxed mb-5">
                    Creating awareness to support social change and protect
                    vulnerable lives.
                  </p>

                  <ul className="space-y-3">
                    {services[2].features.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm sm:text-lg text-[var(--body)]"
                      >
                        <span className="w-5 h-5 p-3 flex items-center justify-center rounded-full border border-red-400 text-red-500">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </div>

      </Container>
    </section>
  );
};

export default Services;