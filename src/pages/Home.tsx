import Hero from "../components/section/Home/Hero.tsx";
import Stats from "../components/section/Home/Stats.tsx";
import FoundationStrategy from "../components/section/Home/FoundationStrategy.tsx";
import Services from "../components/section/Home/Services.tsx";
import UpcomingEvents from "../components/section/Home/UpcomingEvent.tsx";
import CTABanner from "../components/section/Home/CTABanner.tsx";
import CommunityStories from "../components/section/Home/CommunityStories.tsx";
import Partners from "../components/section/Home/OurPartners.tsx";
import ContactUs from "../components/section/Home/ContactUs.tsx";
const Home= () => {
  return (
    <div>
      <Hero />
      <Stats />
      <FoundationStrategy />
      <Services />
      <UpcomingEvents />
      <CTABanner />
      <CommunityStories />
      <Partners />
      <ContactUs />
    </div>
  );
};

export default Home;
