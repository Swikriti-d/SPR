import StoryCard from "../ui/StoryCard.tsx"
import {ArrowUpRight,} from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
const stories = [
{
image: "src/assets/image/story1.jpg",
title: "From Far-West Village to National Under-19s",
description:
"The journey of Ramesh who found his passion on a gravel pit and is now eyeing the national squad through SPR Foundation...",
badge: "SUCCESS STORY",
},

{
image: "src/assets/image/story2.png",
title: "Dhangadhi Ground Gets a Royal Makeover",
description:
"Our infrastructure initiative has successfully completed the renovation of the local training ground with modern floodlights...",
badge: "UPDATE",
},

{
image: "src/assets/image/story3.jpg",
title: "Empowering Dreams: Sunita's Cricket Journey",
description:
"Breaking stereotypes one six at a time. Sunita shares how the SPR Foundation gave her the confidence to lead her school team...",
badge: "INTERVIEW",
},
]

const CommunityStories = () => {
return (
<section className="bg-white py-16">  
    <Container>

        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            {/* LEFT SIDE */}
            <div className="space-y-7 max-w-[620px]">
                <SectionTitle title="Community Stories" />

                <p className="text-[var(--body)] text-lg leading-relaxed">
                    Real impact, told by the people who live it.
                </p>
            </div>

            {/* RIGHT SIDE */}
            <button type="button" className="flex items-center gap-2 font-semibold text-[var(--secondary)]">
                View All Stories
                <ArrowUpRight size={18} />
            </button>

        </div>

        {/* STORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            {stories.map((story, index) => (
            <StoryCard key={index} image={story.image} title={story.title} description={story.description}
                badge={story.badge} />
            ))}

        </div>
        </Container>
</section>
)
}

export default CommunityStories