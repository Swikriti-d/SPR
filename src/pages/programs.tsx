import Hero from "../components/section/Home/Hero";
import CorePrograms from "../components/section/Program/CoreProgram";
import Data from "../components/section/Program/DataDriven";

const Programs = () => {
  return (
    <div>
      <Hero
        title="Scalable Social Change"
        subtitle="Our core programs are designed as strategic interventions to create measurable, long-term impact across the"
        showButtons={false}
        height="sm"
      />
      <CorePrograms />
      <Data/>
    </div>
  );
};

export default Programs;