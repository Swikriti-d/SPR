import React from "react";
import Container from "../../common/Container";
import ContactForm from "../../common/Form";

const ContactUs: React.FC = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="bg-[#031637] rounded-4xl px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* LEFT — dark */}
          <div className="flex-1 text-white">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Get Involved Today
            </h2>
            <p className="text-lg sm:text-xl font-medium max-w-md text-white/80">
              Whether you wish to volunteer, donate, or partner with us, give
              suggestion, your journey as a "Royals Loyal" starts here.
            </p>
          </div>

          {/* RIGHT — form */}
          <div className="flex-1 bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-md w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;