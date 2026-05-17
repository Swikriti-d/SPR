import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const partners = [
  { name: "Sudurpaschim Royals", logo: "src/assets/image/partner1.png" },
  { name: "Empire Educations", logo: "src/assets/image/partner1 (1).png" },
  // Uncomment to see scrolling:
  // { name: "Third Partner", logo: "src/assets/image/partner3.png" },
];

const Partners = () => {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* TITLE */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-6 max-w-2xl">
            <SectionTitle title="Our Partners" />
            <p className="text-[var(--body)] leading-relaxed text-base sm:text-lg">
              Standing together to create change where it matters most.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 font-semibold text-[var(--secondary)]"
          >
            View All partners
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* LOGO CAROUSEL */}
        <div className="mt-12 w-full">
          <Swiper
            slidesPerView={2}
            spaceBetween={24}
            modules={[Navigation]}
            navigation={partners.length > 2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
            }}
            style={{
              width: "100%",
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="pb-2">
                <div className="w-full flex flex-col items-center justify-center bg-white rounded-xl border border-gray-100 h-40 shadow-md transition duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-28 py-2 object-contain"
                  />
                  <p className="pb-3 text-lg font-semibold text-[var(--primary)] text-center">
                    {partner.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;