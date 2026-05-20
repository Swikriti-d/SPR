import { Globe, UsersRound, Heart, TrendingUp } from "lucide-react";
import Container from "../../common/Container";

const stats = [
  { icon: Globe, value: "145+", label: "Village Connect", iconColor: "text-blue-500" },
  { icon: UsersRound, value: "2.5k", label: "Volunteers", iconColor: "text-green-500" },
  { icon: Heart, value: "100k", label: "Patient Reach", iconColor: "text-red-500" },
  { icon: TrendingUp, value: "12%", label: "Economic Growth", iconColor: "text-yellow-500", },
];

const ImpactStats = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-md transition-transform hover:-translate-y-1 duration-300 bg-[#faf6ee] hover:bg-[#f5e9c8] hover:shadow-[#e8d49a]`}
            >
              {/* ICON */}
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>

              {/* VALUE & LABEL */}
              <div className="space-y-2">
                <p className="text-3xl sm:text-4xl font-extrabold text-[var(--primary)]">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-sm uppercase tracking-widest text-[var(--body)] font-semibold mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ImpactStats;