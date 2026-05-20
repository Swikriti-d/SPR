import Hero from "../components/section/Home/Hero";
import ContactPage from "../components/section/contact/ContactPage";
const Impact = () => {
  return (
    <div>
      <Hero
        title="Royal Dispatches"
        subtitle="Staying connected with our journey of change. Latest announcements, project updates, and success stories from the field."
        showButtons={false}
        height="sm"
      />
      <ContactPage />
    </div>
  );
};

export default Impact;