import React from "react";
import Container from "../../../components/common/Container";
import SectionTitle from "../../../components/common/SectionTitle";
import ContactForm from "../../../components/common/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "contact@sprfoundation.org" },
  { icon: Phone, label: "Call Us", value: "+977 (01) 456-7890" },
  { icon: MapPin, label: "Visit Us", value: "Royal HQ, Dhangadhi-4,\nSudurpaschim, Nepal" },
];

const socials = [
  { name: "Facebook", icon: FaFacebookF },
  { name: "Instagram", icon: FaInstagram },
  { name: "Twitter", icon: FaTwitter },
  { name: "LinkedIn", icon: FaLinkedinIn },
];

const ContactPage: React.FC = () => {
  return (
    <div>
      <section className="py-16">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

            {/* LEFT — info */}
            <div className="flex-1 space-y-10">
              <SectionTitle title="Get In Touch" />

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--secondary)]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-[var(--body)] mb-1">
                        {label}
                      </p>
                      <p className="text-base font-bold text-[var(--primary)] whitespace-pre-line">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="border-gray-200" />

              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[var(--body)] mb-4">
                  Social Ecosystem
                </p>
                <div className="flex gap-3">
                  {socials.map(({ name, icon: Icon }) => (
                    <button
                      key={name}
                      aria-label={name}
                      className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:bg-[var(--secondary)] transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="flex-1 bg-white rounded-3xl shadow- p-6 sm:p-8 w-full border border-gray-200">
              <ContactForm />
            </div>

          </div>
        </Container>
      </section>

      {/* MAP */}
      <div className="w-full h-72 sm:h-96 overflow-hidden">
        <iframe
          title="SPR Foundation Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.123456789!2d80.5897!3d28.6969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzQ4LjgiTiA4MMKwMzUnMjIuOSJF!5e0!3m2!1sen!2snp!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(1)" }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactPage;