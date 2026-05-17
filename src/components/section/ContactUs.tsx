import React from 'react';

const ContactUs: React.FC = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
  };

  return (
    <section className="bg-[#031637] rounded-4xl max-w-6xl mx-auto px-12 py-12 my-12 flex flex-col md:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="flex-1 text-white">
        <h2 className="text-6xl font-bold mb-6 leading-tight">
          Get Involved<br />Today
        </h2>
        <p className="text-2xl font-medium max-w-md text-[#FFFFFF]/80">
          Whether you wish to volunteer, donate, or partner with us, give suggestion,
          your journey as a 'Royals' Loyal' starts here.
        </p>
      </div>
      {/* Form Content */}
      <div className="flex-1 bg-white rounded-2xl p-8 shadow-md w-full max-w-md">
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-[#031637] mb-1" htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="w-full rounded-md bg-[#F4F3F7] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#031637] transition"
              placeholder="Enter Your Name"
              required
            />
          </div>
          {/* Email & Contact */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold text-[#031637] mb-1" htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-md bg-[#F4F3F7] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#031637] transition"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold text-[#031637] mb-1" htmlFor="contact">Contact Number</label>
              <input
                id="contact"
                name="contact"
                type="tel"
                className="w-full rounded-md  bg-[#F4F3F7] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#031637] transition"
                placeholder="Enter Your Number"
                required
              />
            </div>
          </div>
          {/* How to help */}
          <div>
            <label className="block text-sm font-semibold text-[#031637] mb-1" htmlFor="helpType">How Would You Like To Help?</label>
            <select
              id="helpType"
              name="helpType"
              className="w-full rounded-md text-[#44474D] bg-[#F4F3F7] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#031637] transition"
              defaultValue="Volunteer Program"
              required
            >
              <option>Volunteer Program</option>
              <option>Donation</option>
              <option>Partner with Us</option>
              <option>Suggestion</option>
            </select>
          </div>
          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#031637] mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded-md bg-[#F4F3F7] px-4 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-[#031637] transition"
              placeholder="Comment Here"
              required
            />
          </div>
          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#B8242B] hover:bg-[#a41f24] text-white font-semibold rounded-full py-2 transition"
              onClick={handleButtonClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;