import Hero from "../components/section/Home/Hero";
import ImpactStats from "../components/section/Impact/StatCount";
import RealStories from "../components/section/Impact/RealStories";
import CTABanner from "../components/common/CTABanner";

const Impact = () => {
  return (
    <div>
      <Hero
        title="The Ripple Effect"
        subtitle="We don't just calculate reach; we measure systemic resilience. Our impact is defined by the stories of people"
        showButtons={false}
        height="sm"
      />
      <ImpactStats />
      <RealStories />
      <CTABanner
        title="Your contribution is the Catalyst for change."
        primaryText="Get Involved"  
        secondaryText="Donate Now"
        onPrimaryClick={() => {
        }}
        onSecondaryClick={() => {
        }}
        variant="blue"
      />
    </div>
  );
};

export default Impact;