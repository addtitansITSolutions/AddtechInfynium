import { useState } from "react";
import {
  Mail,
  Clock3,
  MapPin,
  CheckCircle,
} from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      form.subject || "Website Enquiry"
    );

    const body = encodeURIComponent(`
Name: ${form.name}

Company: ${form.company}

Email: ${form.email}

Phone: ${form.phone}

----------------------------------------

Message:

${form.message}
`);

    window.location.href = `mailto:info@addtechinfinium.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="pt-36 pb-24 bg-[#f8fbfa]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}

          <div>

            <span className="uppercase tracking-[4px] text-[#053d27] font-semibold">
              Contact Us
            </span>

            <h1 className="text-5xl font-bold mt-5 leading-tight">
              Let's Build Something
              <br />
              Great Together
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Whether you're looking to scale your marketing, launch a new
              campaign, or discuss your next digital initiative, our team is
              ready to help. Share your requirements, and we'll connect with
              you to explore the right solution for your business.
            </p>

            {/* Highlights */}

            <div className="mt-10 space-y-5">

              {[
                "Response within 24 hours",
                "Tailored solutions for your business"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle
                    size={22}
                    className="text-[#053d27]"
                  />

                  <p className="text-gray-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            {/* Contact Info */}

            <div className="mt-12 space-y-8">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#053d27]/10 flex items-center justify-center">
                  <Mail
                    size={22}
                    className="text-[#053d27]"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    info@addtechinfinium.com
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#053d27]/10 flex items-center justify-center">
                  <Clock3
                    size={22}
                    className="text-[#053d27]"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Business Hours
                  </h4>

                  <p className="text-gray-600">
                    Monday – Friday
                    <br />
                    9:00 AM – 6:00 PM (IST)
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#053d27]/10 flex items-center justify-center">
                  <MapPin
                    size={22}
                    className="text-[#053d27]"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Location
                  </h4>

                  <p className="text-gray-600">
                    India
                  </p>
                </div>

              </div>

            </div>

            

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">

            <h2 className="text-3xl font-bold">
              Send Us a Message
            </h2>

            <p className="text-gray-600 mt-3 mb-8">
              Fill out the form below and your default email app will open
              with your details ready to send.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#053d27]"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#053d27]"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#053d27]"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#053d27]"
                />

              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#053d27]"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Tell us about your project..."
                required
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none resize-none focus:border-[#053d27]"
              />

              <button
                type="submit"
                className="w-full bg-[#053d27] text-white py-4 rounded-xl font-semibold hover:bg-[#064b31] transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* CTA Card */}

            <div className="mt-12 bg-[#053d27] rounded-3xl p-8 text-white">

              <h3 className="text-2xl font-semibold">
                Have a Project in Mind?
              </h3>

              <p className="mt-4 text-white/80 leading-7">
                Tell us about your goals and we'll help you build a strategy
                focused on measurable business growth.
              </p>

            </div>

      </div>
    </section>
  );
};

export default ContactForm;