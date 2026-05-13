import {
Heart, Dumbbell, Megaphone, ArrowUpRight,
} from "lucide-react";

const services = [
{
title: "Women & Child Education",
description:
"Building a stronger future by educating and uplifting women and children.",
icon:
<Heart size={30} />,
bg: "bg-[#F3F3F3]",
text: "text-[var(--primary)]",
features: []
},
{
title: "Sports",
description:
"Encouraging sports culture through growth, participation, and better facilities.",
icon:
<Dumbbell size={30} />,
bg: "bg-[var(--secondary)]",
text: "text-white",
features: [
"Cricket Growth",
"Football Growth",
"Sport Infrastructure"
]
},
{
title: "Social Awareness",
description:
"Creating awareness to support social change and protect vulnerable lives.",
icon:
<Megaphone size={30} />,
bg: "bg-[#F3F3F3]",
text: "text-[var(--primary)]",
features: [
"Ending Chaupadi Pratha",
"Lowering Mortality",
"Advocacy for Child Education"
]
}
];

const Services = () => {
return (
<section className="bg-[#F5F5F5] px-6 sm:px-10 md:px-20 lg:px-30 py-16">
  <div className="container mx-auto">

    {/* TOP */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

      <div className="space-y-8 max-w-[560px] ">
        <h2 className="relative text-3xl md:text-4xl font-extrabold text-[var(--primary)] pb-4">
          Our Services
          <span className="absolute left-0 bottom-0 h-1 w-20 rounded-4xl bg-[var(--secondary)]"></span>
        </h2>

        <p className="text-[var(--body)] leading-relaxed text-lg">
          Real-time initiatives currently transforming lives across the region. Explore our footprint of change.
        </p>
      </div>

      <button type="button" className="flex items-center gap-2 text-(--secondary) font-semibold">
        View All Services
        <ArrowUpRight size={18} />
      </button>
    </div>

    {/* MAIN GRID */}
    <div className="mt-12 grid lg:grid-cols-2 gap-6">

      {/* LEFT BIG CARD */}
      <div className="relative rounded-3xl overflow-hidden h-auto">
        <img src="src/assets/image/health.png" alt="Free Health Camps" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-8 text-white">

          <p className="text-sm font-medium mb-2">
            Free Health Camps
          </p>

          <h3 className="text-3xl font-bold mb-4">
            Providing solar-powered water filtration systems to 45 remote
            mountain villages by 2025.
          </h3>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="grid grid-rows-[1fr_1fr] gap-6 h-auto">
        {/* TOP RIGHT CARD */}
        <div className="grid overflow-hidden rounded-3xl border border-[#C4C6D0] bg-[#E9E7EC] md:grid-cols-2">

          <div className="flex flex-col items-start justify-center rounded-l-3xl p-9">

            <div className="mb-4">
              <Heart size={30} className="text-(--secondary)" />
            </div>

            <h3 className="text-2xl leading-8 font-bold text-(--primary) mb-4">
              Women & Child Education
            </h3>

            <p className="text-lg text-(--body) leading-7 mb-5">
              Building a stronger future by educating and uplifting women and children.
            </p>

            <button type="button" className="font-bold text-base text-(--primary) underline underline-offset-4">
              EXPLORE PROJECT
            </button>
          </div>

          {/* IMAGE */}
          <div className="h-[284px] md:h-auto">
            <img src="src/assets/image/women & children.png" alt="Children" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid sm:grid-cols-2 gap-6">

          {/* SPORTS */}
          <div className="bg-[var(--secondary)] text-white rounded-3xl p-7 flex flex-col gap-5">

            <div>
              <Dumbbell size={30} />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Sports
              </h3>

              <p className="text-sm leading-relaxed mb-5">
                Encouraging sports culture through growth, participation, and better facilities.
              </p>

              {/* FEATURE LIST */}
              <ul className="space-y-3">
                {services[1].features.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">

                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">
                    ✓
                  </span>

                  {item}
                </li>
                ))}
              </ul>

            </div>
          </div>

          {/* SOCIAL AWARENESS */}
          <div className="border border-[#C4C6D0] bg-[#E9E7EC] rounded-3xl p-7 flex flex-col gap-5">

            <div>
              <Megaphone size={30} className="text-[var(--secondary)]" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">
                Social Awareness
              </h3>

              <p className="text-[var(--body)] text-sm leading-relaxed mb-5">
                Creating awareness to support social change and protect vulnerable lives.
              </p>

              {/* FEATURE LIST */}
              <ul className="space-y-3">
                {services[2].features.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-[var(--body)]">

                  <span
                    className="w-5 h-5 flex items-center justify-center rounded-full border border-red-400 text-red-500 text-xs">
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
  </div>
</section>
);
};

export default Services;