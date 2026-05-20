import { ArrowUpRight, UsersRound, MapPin, GraduationCap } from "lucide-react";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

const programs = [
  {
    tag: "Sports",
    title: "Royal Cricket Academy",
    description:
      "Identifying and nurturing talent from the grassroots of Sudurpaschim through professional coaching, modern equipment, and data-backed performance tracking.",
    image: "src/assets/image/stadium.png",
    imageLeft: false,
    badge: { icon: UsersRound, label: "Impact Radius", value: "500+ Trainees" },
  },
  {
    tag: "Healthcare",
    title: "Health Connect Units",
    description:
      "Deploying solar-powered mobile health clinics to bring primary care, vaccines, and maternal health services to the most remote mountainous regions.",
    image: "src/assets/image/health.png",
    imageLeft: true,
    badge: { icon: MapPin, label: "Impact Radius", value: "12 Districts" },
  },
  {
    tag: "Education",
    title: "Future Royals Scholarship",
    description:
      "Full-tuition scholarships for gifted students from underprivileged backgrounds, focusing on STEM education and community leadership development.",
    image: "src/assets/image/event2.png",
    imageLeft: false,
    badge: {
      icon: GraduationCap,
      label: "Impact Radius",
      value: "250 Scholars",
    },
  },
];

const CorePrograms = () => {
  return (
    <section className="py-16 pb-26">
      <Container>
        {/* HEADER */}
        <div className="space-y-6 max-w-xl">
          <SectionTitle title="Our Core Programs" />
          <p className="text-[var(--body)] text-base sm:text-lg mt-4">
            We focus on pillars that define the quality of life: Health,
            Education, and the power of Sports.
          </p>
        </div>

        {/* PROGRAM ROWS */}
        <div className="mt-12 flex flex-col gap-18">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`flex flex-col gap-8 md:flex-row md:items-start ${
                program.imageLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE BLOCK */}
              <div className="flex-1 relative">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* BADGE */}
                <div className="absolute -bottom-9 right-5 bg-white rounded-xl shadow-xl px-6 py-6 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[var(--badge-2)] flex items-center justify-center">
                    <program.badge.icon className="w-4 h-4 text-[var(--badge-text)]" />
                  </div>
                  <div >
                    <p className="text-[16px] uppercase tracking-wide text-[var(--body)] font-semibold">
                      {program.badge.label}
                    </p>
                    <p className="text-lg font-bold text-[var(--primary)]">
                      {program.badge.value}
                    </p>
                  </div>
                </div>
              </div>

              {/* TEXT BLOCK */}
              <div className="flex-1 space-y-4 pt-6 mt-7 md:pt-0">
                {/* TAG */}
                <span className="inline-block bg-[var(--primary)] text-white text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                  {program.tag}
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--primary)] leading-tight">
                  {program.title}
                </h3>

                <p className="text-[var(--body)] text-base sm:text-lg leading-relaxed">
                  {program.description}
                </p>

                <button className="flex items-center gap-1 text-[var(--secondary)] font-bold text-sm uppercase tracking-widest hover:gap-2 transition-all">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CorePrograms;
