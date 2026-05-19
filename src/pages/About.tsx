import Hero from "../components/section/Home/Hero";
import Vission from "../components/section/About/Vission";
import LeadershipTransparency from "../components/section/About/LeaderTransparency";
import CTABanner from "../components/common/CTABanner";

const About = () => {

  const handleJoin = () => {
    alert("Thanks for joining!");
  };

  const handleLearnMore = () => {
    alert("Redirecting to more info...");
  };

  return (
    <div>
      <Hero
        title="About Us"
        subtitle="We are building a legacy through sports and community impact."
        showButtons={false}
        height="sm"
      />

      <Vission />
      <LeadershipTransparency />

      <CTABanner
        title="Join our community and become a volunteer today."
        titleClass="text-lg md:text-3xl lg:text-4xl font-medium drop-shadow-xl"
        primaryText="Join Us"
        secondaryText="Learn More"
        onPrimaryClick={handleJoin}
        onSecondaryClick={handleLearnMore}
        variant="blue"
      />
    </div>
  );
};

export default About;