import {
ArrowUpRight,
Calendar,
MapPin,
} from "lucide-react";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

const events = [
{
title: "Free Health Camp",
description:
"A comprehensive free health camp providing general checkups, dental screening, and essential medicines to rural communities.",
image: "src/assets/image/event1.png",
date: "May 2026",
location: "Sudurpaschim, Nepal",
},

{
title: "Sports Training Camp",
description:
"This camp provides individuals with the opportunity to learn and grow in sports. We help build confidence, teamwork, and passion for game.",
image: "src/assets/image/event2.png",
date: "June 2026",
location: "Sudurpaschim, Nepal",
},
];

const UpcomingEvents = () => {
return (
<section className="bg-white py-16">
    <Container>

        {/* tittle */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

            <div className="space-y-7 max-w-[620px]">
                <SectionTitle title="Upcoming Events" />

                <p className="text-lg leading-relaxed text-[var(--body)]">
                    Explore what’s coming next in our journey of impact.
                </p>
            </div>

            <button type="button" className="flex items-center gap-2 font-semibold text-[var(--secondary)]">
                View All Events
                <ArrowUpRight size={18} />
            </button>
        </div>

        {/* events*/}
        <div className="mt-12 grid lg:grid-cols-2 gap-12">

            {events.map((event, index) => (
            <div key={index} className="overflow-hidden rounded-3xl border border-[#D9D9D9] bg-white shadow-sm">

                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">

                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />

                </div>

                {/* CONTENT */}
                <div className="px-7 py-6">

                    <div className="flex items-end justify-between gap-4 mb-4">

                        <h3 className="text-2xl font-bold text-[var(--primary)]">
                            {event.title}
                        </h3>

                        <div className="flex items-center gap-2 text-sm m-2 text-[var(--secondary)] whitespace-nowrap">

                            <Calendar size={16} />

                            {event.date}
                        </div>
                    </div>

                    <p className="text-[var(--body)] leading-relaxed text-base mb-7">
                        {event.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        {/* LOCATION */}
                        <div className="flex items-center gap-2 text-base font-semibold text-[var(--body)]">

                            <MapPin size={20} />

                            {event.location}
                        </div>

                        {/* BUTTON */}
                        <button type="button"
                            className="rounded-full border border-[var(--primary)] px-5 py-2 text-base text-[var(--primary)] transition-all duration-300 hover:bg-[var(--secondary)] hover:text-white">
                            Learn More
                        </button>

                    </div>
                </div>
            </div>
            ))}
        </div>
    </Container>
</section>
);
};

export default UpcomingEvents;