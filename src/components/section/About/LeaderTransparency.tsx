import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

const team = [
  {
    name: "Dr. Sameer KC",
    role: "Executive Director",
    image: "src/assets/image/men2.jpg", // replace with actual path
  },
  {
    name: "Rashmi Shahi",
    role: "Project Coordinator",
    image: "src/assets/image/women1.jpg",
  },
  {
    name: "Anita Shahi",
    role: "Head of Operations",
    image: "src/assets/image/women2.jpg",
  },
  {
    name: "Rohan Thapa",
    role: "Strategic Advisor",
    image: "src/assets/image/men2.jpg",
  },
];

const LeadershipTransparency = () => {
  return (
    <section className="py-16">
      <Container>
        {/* HEADER */}
        <div className="mb-10 max-w-xl">
          <SectionTitle title="Leadership & Transparency" />
          <p className="text-[var(--body)] leading-relaxed text-base sm:text-lg mt-4">
            Our team brings together veterans from the humanitarian sector, sports
            management, and local administration. We pride ourselves on 100% financial
            transparency.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-3">
              {/* PHOTO CARD */}
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition duration-300"
                />
              </div>

              {/* NAME & ROLE */}
              <div className="text-center">
                <h4 className="font-bold text-[var(--primary)] text-base sm:text-lg">
                  {member.name}
                </h4>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-[var(--secondary)] font-semibold mt-0.5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LeadershipTransparency;