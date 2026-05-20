import Hero from "../components/section/Home/Hero";
import LatestUpdates from "../components/section/News/LatestUpdate";
import CTABanner from "../components/common/CTABanner";

const Impact = () => {
  return (
    <div>
      <Hero
        title="Royal Dispatches"
        subtitle="Staying connected with our journey of change. Latest announcements, project updates, and success stories from the field."
        showButtons={false}
        height="sm"
      />
      <LatestUpdates />
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