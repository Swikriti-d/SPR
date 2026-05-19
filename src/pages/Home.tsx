import React from "react";
import Hero from "../components/section/Home/Hero.tsx";
import Stats from "../components/section/Home/Stats.tsx";
import FoundationStrategy from "../components/section/Home/FoundationStrategy.tsx";
import Services from "../components/section/Home/Services.tsx";
import UpcomingEvents from "../components/section/Home/UpcomingEvent.tsx";
import CTABanner from "../components/common/CTABanner.tsx";
import CommunityStories from "../components/section/Home/CommunityStories.tsx";
import Partners from "../components/section/Home/OurPartners.tsx";
import ContactUs from "../components/section/Home/ContactUs.tsx";
const Home: React.FC = () => {
  return (
    <div>
      <Hero
        title={
          <>
            A Kinetic <br />
            <span className="text-[#E5C18B]">Legacy</span> of Hope
          </>
        }
        subtitle="Rooted in the spirit of the game, dedicated to the heart of Sudurpaschim."
        showButtons={true}
        height="lg"
      />
      <Stats />
      <FoundationStrategy />
      <Services />
      <UpcomingEvents />
      <CTABanner
        title="Make a donation and help us bring change where it’s needed most."
        primaryText="Donate Now"
        image="src/assets/image/cta.png"
        showButtons={true}
      />
      <CommunityStories />
      <Partners />
      <ContactUs />
    </div>
  );
};

export default Home;
