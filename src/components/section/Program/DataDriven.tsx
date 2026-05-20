import { TrendingUp, Heart, Play } from "lucide-react";
import Container from "../../common/Container";

const stats = [
  {
    icon: TrendingUp,
    value: "85%",
    label: "Rural Growth Activity",
  },
  {
    icon: Heart,
    value: "100k+",
    label: "Medical Sessions",
  },
];

const Data = () => {
  return (
    <section className="bg-[var(--primary)] py-16">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 md:items-center">

          {/* LEFT */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Driven by Data Fuelled by Passion.
              </h2>
              <p className="text-blue-200 text-base sm:text-lg leading-relaxed max-w-md">
                Every program we launch is subjected to rigorous quarterly audits. We
                measure success not just in rupees spent, but in lives resiliently changed.
              </p>
            </div>

            {/* STAT CARDS */}
            <div className="flex gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 bg-white/10 rounded-2xl p-6 space-y-4"
                >
                  <stat.icon className="w-6 h-6 text-[var(--secondary)]" />
                  <div>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — VIDEO THUMBNAIL */}
          <div className="flex-1 space-y-3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video cursor-pointer group">
              <img
                src="src/assets/image/event1.png"
                alt="2026 Impact Documentary"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-[var(--primary)] fill-[var(--primary)] ml-1" />
                </div>
              </div>
            </div>

            <p className="text-center text-xs uppercase tracking-[0.2em] text-blue-300 font-semibold">
              Watch the 2026 Impact Documentary
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Data;