import React from "react";
import Container from "../common/Container";
import { Globe, Share2, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Explore",
    links: ["Home", "About Our Mission", "Impact Stories", "Current Programs"],
  },
  {
    title: "Quick Links",
    links: ["Privacy Policy", "Terms of Service", "FAQ", "Careers"],
  },
  {
    title: "Transparency",
    links: ["Annual Report 2023", "Audit Statements", "Partner With Us"],
  },
];

const socialIcons = [
  { icon: Globe, label: "Website" },
  { icon: Share2, label: "Share" },
  { icon: Mail, label: "Mail" },
];

const Footer: React.FC = () => {
  return (
    <footer>
      {/* MAIN FOOTER */}
      <section className="bg-[#FFDEAE] py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* LEFT SECTION */}
            <div className="lg:w-1/3">
              <img
                src="src/assets/image/logo.png"
                alt="SPR Logo"
                className="w-28 h-auto mb-3 -ml-5"
              />

              <p className="text-base leading-relaxed mb-5">
                Building a legacy of impact, empowerment, and excellence in
                Nepal’s Far West region through the power of cricket and
                community.
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4">
                {socialIcons.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="bg-white/50 p-2 rounded-full shadow hover:bg-gray-100 transition"
                  >
                    <Icon className="w-5 h-5 text-[#222]" />
                  </a>
                ))}
              </div>
            </div>

            {/* FOOTER LINKS */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="font-bold mb-5 text-(--primary) uppercase tracking-wide text-base">
                    {section.title}
                  </h4>

                  <ul className="space-y-4 text-base">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="hover:underline hover:text-[#DF4444] transition"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* BOTTOM BAR */}
      <section className="bg-(--primary) py-5">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
            <span className="text-white text-sm">
              © {new Date().getFullYear()} Sudurpaschim Royals Foundation. All
              rights reserved.
            </span>

            <span className="text-white text-sm">Developed by Krizmatic</span>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
