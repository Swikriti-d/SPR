import React from "react";
import { ChevronDown, Send } from "lucide-react";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-xs uppercase tracking-widest font-semibold text-[var(--primary)] mb-2">
            First Name
          </label>
          <input
            type="text" name="firstName" placeholder="John"required
            className="w-full rounded-xl bg-[#F4F3F7] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs uppercase tracking-widest font-semibold text-[var(--primary)] mb-2">
            Last Name
          </label>
          <input
            type="text"name="lastName" placeholder="Doe" required 
            className="w-full rounded-xl bg-[#F4F3F7] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-xs uppercase tracking-widest font-semibold text-[var(--primary)] mb-2">
            Phone Number
          </label>
          <input
            type="text" name="phone" placeholder="123-456-7890" required
            className="w-full rounded-xl bg-[#F4F3F7] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs uppercase tracking-widest font-semibold text-[var(--primary)] mb-2">
            Email Address
          </label>
          <input
            type="email" name="email" placeholder="john@example.com" required className="w-full rounded-xl bg-[#F4F3F7] px-4 py-3 text-sm focus:outline-none 
            focus:ring-2 focus:ring-[var(--primary)] transition"/>
        </div>
      </div>
      <div>
        <label htmlFor="collaborate" className="block text-xs uppercase tracking-widest font-semibold text-[var(--primary)] mb-2" >
          How would you like to collaborate?
        </label>
        <div className="relative">
          <select name="collaborationType" id="collaborate" defaultValue="General Support" className="w-full 
          appearance-none rounded-xl bg-[#F4F3F7] text-sm text-[#44474D] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          >
            <option>General Support</option>
            <option>Volunteer Program</option>
            <option>Donation</option>
            <option>Partner with Us</option>
            <option>Suggestion</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#44474D]"
            size={18}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest font-semibold text-[var(--primary)] mb-2">
          Brief Message
        </label>
        <textarea placeholder="Tell us how we can collaborate..." required
          className="w-full rounded-xl bg-[#F4F3F7] px-4 py-3 h-32 resize-none text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition" />
      </div>

      <button
        type="submit"
        className="w-full bg-[var(--secondary)] hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm rounded-full py-4 flex items-center justify-center gap-2 transition duration-300"
      >
        Submit Message <Send className="w-4 h-4" />
      </button>
    </form>
  );
};

export default ContactForm;
