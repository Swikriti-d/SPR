import React from "react";
import Container from "../common/Container";
import { Globe, Share2, Mail } from "lucide-react";

const SPRLogo = () => (
  <img
    src="src/assets/image/logo.png"
    className="w-28 h-auto mb-3"
    alt="SPR Logo"
  />
);

const Footer: React.FC = () => {
  return (
    <footer>
      {/* MAIN FOOTER */}
      <section className="bg-[#FFE7BC] py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* LEFT SECTION */}
            <div className="lg:w-1/4 flex flex-col">
              <SPRLogo />

              <p className="text-[#222] text-sm leading-relaxed font-normal mt-1 mb-1">
                Building a legacy of impact, empowerment,
                <br />
                and excellence in Nepal’s Far West region
                <br />
                through the power of cricket and
                <br />
                community.
              </p>

              {/* ICONS (Lucide) */}
              <div className="flex gap-4 mt-5">
                <a
                  href="#"
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                  aria-label="Website"
                >
                  <Globe className="w-5 h-5 text-[#222]" />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                  aria-label="Share"
                >
                  <Share2 className="w-5 h-5 text-[#222]" />
                </a>
                <a
                  href="#"
                  className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                  aria-label="Mail"
                >
                  <Mail className="w-5 h-5 text-[#222]" />
                </a>
              </div>
            </div>

            {/* LINKS */}
            {/* LINKS */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* EXPLORE COLUMN */}
              <div>
                <h4 className="font-bold mb-3 text-[#222] uppercase tracking-tight text-base">
                  Explore
                </h4>
                <ul className="space-y-2 text-sm text-[#222] font-normal">
                  <li>
                    <a
                      className="hover:underline hover:text-[#DF4444] transition"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline hover:text-[#DF4444] transition"
                      href="#"
                    >
                      About Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline hover:text-[#DF4444] transition"
                      href="#"
                    >
                      Impact Stories
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline hover:text-[#DF4444] transition"
                      href="#"
                    >
                      Current Programs
                    </a>
                  </li>
                </ul>
              </div>

              {/* QUICK LINKS */}
              <div>
                <h4 className="font-bold mb-3 text-[#222] uppercase tracking-tight text-base">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm text-[#222] font-normal">
                  <li>
                    <a
                      className="hover:underline hover:text-[#DF4444] transition"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline hover:text-[#DF4444] transition"
                      href="#"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline hover:text-[#DF4444] transition"
                      href="#"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline hover:text-[#DF4444] transition"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              {/* TRANSPARENCY */}
              <div>
                <h4 className="font-bold mb-3 text-[#222] uppercase tracking-tight text-base">
                  Transparency
                </h4>
                <ul className="space-y-2 text-sm text-[#222] font-normal">
                  <li>
                    <a
                      className="hover:underline hover:text-[#DF4444] transition"
                      href="#"
                    >
                      Annual Report 2023
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline hover:text-[#DF4444] transition"
                      href="#"
                    >
                      Audit Statements
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#DF4444] font-normal hover:underline"
                      href="#"
                    >
                      Partner With Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BOTTOM BAR */}
      <div className="bg-[#011E41] py-3 px-4 sm:px-0">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
            <span className="text-white text-xs">
              © 2026 Sudurpaschim Royals Foundation. All rights reserved.
            </span>
            <span className="text-white text-xs">Developed by Krizmatic</span>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
