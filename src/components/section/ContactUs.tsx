import React from "react";
import Container from "../common/Container";
import { ChevronDown } from "lucide-react";

const ContactUs: React.FC = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <section className="py-16">
      <Container>
        {/* INNER BOX */}
        <div className="bg-[#031637] rounded-4xl px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* LEFT CONTENT */}
          <div className="flex-1 text-white">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Get Involved Today
            </h2>

            <p className="text-lg sm:text-xl font-medium max-w-md text-white/80">
              Whether you wish to volunteer, donate, or partner with us, give
              suggestion, your journey as a "Royals Loyal" starts here.
            </p>
          </div>

          {/* FORM */}
          <div className="flex-1 bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-md w-full max-w-md">
            <form className="space-y-4">
              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-[#031637] mb-1"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  className="w-full rounded-md bg-[#F4F3F7] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#031637] transition"
                />
              </div>

              {/* EMAIL + CONTACT */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#031637] mb-1"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    className="w-full rounded-md bg-[#F4F3F7] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#031637] transition"
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="contact"
                    className="block text-sm font-semibold text-[#031637] mb-1"
                  >
                    Contact Number
                  </label>

                  <input
                    id="contact"
                    type="tel"
                    placeholder="Enter Your Number"
                    required
                    className="w-full rounded-md bg-[#F4F3F7] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#031637] transition"
                  />
                </div>
              </div>

              {/* SELECT */}
              <div>
                <label
                  htmlFor="helpType"
                  className="block text-sm font-semibold text-[#031637] mb-1"
                >
                  How Would You Like To Help?
                </label>

                <div className="relative">
                  <select
                    id="helpType"
                    defaultValue="Volunteer Program"
                    required
                    className="w-full appearance-none rounded-md bg-[#F4F3F7] text-[#44474D] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#031637] transition"
                  >
                    <option>Volunteer Program</option>
                    <option>Donation</option>
                    <option>Partner with Us</option>
                    <option>Suggestion</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#44474D]"
                    size={20}
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#031637] mb-1"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  placeholder="Comment Here"
                  required
                  className="w-full rounded-md bg-[#F4F3F7] px-4 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-[#031637] transition"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                onClick={handleButtonClick}
                className="w-full bg-[#B8242B] hover:bg-[#a41f24] text-white font-semibold rounded-full py-2 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
