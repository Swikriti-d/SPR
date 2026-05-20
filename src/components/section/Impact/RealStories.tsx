import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

const stories = [
  {
    tag: "Financial Empowerment",
    title: "Sunita's path to self-reliance through local manufacturing.",
    description:
      "Provided with a solar-powered loom and business training, Sunita now leads a cooperative of 15 women in Bajhang, exporting artisanal goods across Nepal.",
    image: "src/assets/image/women1.jpg",
  },
  {
    tag: "Specialized Healthcare",
    title: "Bringing specialized surgery to the foothills of Doti.",
    description:
      "Our mobile surgical unit completed 50 successful cataract surgeries in a single weekend expedition, restoring sight to three generations of the local community.",
    image: "src/assets/image/group.jpg",
  },
];

const RealStories = () => {
  return (
    <section className="py-16">
      <Container>
        {/* HEADER */}
        <div>
          <SectionTitle title="Real Stories Real People" />
          <p className="text-[var(--body)] leading-relaxed text-base sm:text-lg mt-8">
            Systemic change happens one life at a time. Explore the long-term
            impact of our localized initiatives.
          </p>
        </div>

        {/* STORY CARDS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div
              key={story.title}
              className="flex rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-transform hover:scale-104 grayscale hover:grayscale-0 transition-filter duration-300 "
            >
              {/* IMAGE */}
              <div className="w-36 sm:w-50 shrink-0 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover 0"
                />
              </div>

              {/* CONTENT */}
              <div className="px-5 py-8 flex flex-col justify-between gap-3">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--secondary)] font-bold">
                    {story.tag}
                  </p>
                  <h4 className="text-base sm:text-lg font-extrabold text-[var(--primary)] leading-snug">
                    {story.title}
                  </h4>
                  <p className="text-sm text-[var(--body)] leading-relaxed">
                    {story.description}
                  </p>
                </div>

                <button className="text-xs uppercase tracking-widest font-bold text-[var(--primary)] underline underline-offset-4 text-left hover:text-[var(--secondary)] transition-colors">
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RealStories;
