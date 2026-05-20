import { ArrowUpRight, Share2, Calendar } from "lucide-react";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

const news = [
  {
    tag: "Partnership",
    tagColor: "bg-[var(--secondary)]",
    date: "May 26, 2026",
    title: "Royals Foundation Announces Partnership with Global Health Alliance",
    image: "src/assets/image/event2.png",
    row: 1,
  },
  {
    tag: "Announcement",
    tagColor: "bg-[var(--secondary)]",
    date: "April 18, 2026",
    title: "Impact Report Q1 2026: 50,000 Lives Touched Across 9 Districts",
    image: "src/assets/image/event1.png",
    row: 1,
  },
  {
    tag: "Success Story",
    tagColor: "bg-[var(--secondary)]",
    date: "March 22, 2026",
    title: "Rising Star: 16-Year-Old Rohan Joins National Selection Camp",
    image: "src/assets/image/stadium.png",
    row: 1,
  },
  {
    tag: "Project Update",
    tagColor: "bg-[var(--secondary)]",
    date: "February 10, 2026",
    title: "Dhangadhi Stadium Renovation Project: Phase 2 Begins",
    image: "src/assets/image/event2.png",
    row: 2,
  },
  {
    tag: "Community Aid",
    tagColor: "bg-[var(--secondary)]",
    date: "January 05, 2026",
    title: "Winter Relief Campaign: Distributing 10,000 Blankets in High Altitudes",
    image: "src/assets/image/stadium.png",
    row: 2,
  },
];

const NewsCard = ({ item }: { item: (typeof news)[0] }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-trandform hover:scale-104 duration-300">
    {/* IMAGE */}
    <div className="relative h-44 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      {/* TAG */}
      <span
        className={`absolute top-3 left-3 ${item.tagColor} text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full`}
      >
        {item.tag}
      </span>
    </div>

    {/* CONTENT */}
    <div className="p-4 flex flex-col gap-3 flex-1">
      {/* DATE */}
      <div className="flex items-center gap-1.5 text-[var(--secondary)]">
        <Calendar className="w-3.5 h-3.5" />
        <p className="text-xs uppercase tracking-widest font-semibold">
          {item.date}
        </p>
      </div>

      {/* TITLE */}
      <h4 className="text-[var(--primary)] font-extrabold text-base sm:text-lg leading-snug flex-1">
        {item.title}
      </h4>

      {/* FOOTER */}
      <div className="flex items-center justify-between border-t border-gray-100">
        <button className="inline-flex items-center gap-2 rounded-full pt-3 text-sm font-bold text-[var(--body)] transition-colors duration-300 hover:text-(--secondary) group">
          Read Story <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </div>
);

const LatestUpdates = () => {
  const row1 = news.filter((n) => n.row === 1);
  const row2 = news.filter((n) => n.row === 2);

  return (
    <section className="py-16">
      <Container>
        {/* HEADER */}
        <div className="mb-10 max-w-xl">
          <SectionTitle title="Latest Updates" />
          <p className="text-[var(--body)] text-base sm:text-lg mt-4">
            Our narrative is shaped by the communities we serve. Read about our
            most recent milestones.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {row1.map((item) => (
            <NewsCard key={item.title} item={item} />
          ))}
        </div>

        {/* ROW 2 — 2 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {row2.map((item) => (
            <NewsCard key={item.title} item={item} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="border-2 border-[var(--primary)] text-[var(--primary)] text-xs uppercase tracking-widest font-bold px-8 py-3 rounded-full hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
            Load More Dispatches
          </button>
        </div>
      </Container>
    </section>
  );
};

export default LatestUpdates;