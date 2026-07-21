import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/people/Addtechinfinium/61557504621988/?mibextid=LQQJ4d",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/addtechinfinium/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/yourcompany",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/yourprofile",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#053d27] text-white">

      {/* CTA */}

      <div className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <h2 className="text-4xl lg:text-5xl font-bold">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-8">
            Whether you're launching a startup, scaling your business,
            or transforming digitally, we're here to help.
          </p>

          <button className="mt-10 bg-white text-[#053d27] px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition cursor-pointer" onClick={() => {navigate("/contact")}}>

            Get In Touch

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

      {/* Footer */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h3 className="text-3xl font-bold">

              Addtech<span className="text-green-300">Infinium</span>

            </h3>

            <p className="mt-6 text-gray-300 leading-8">

              Addtech Infinium Private Limited is a leading performance marketing company with a strong footing
              across Southeast Asia and the Middle East. We offer an umbrella of marketing solutions, including
              affiliate, digital, influencer, and e-commerce.


            </p>

            <div className="flex gap-4 mt-8">

              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#053d27] transition flex items-center justify-center"
                >
                  <Icon size={20} />
                </a>
              ))}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="font-semibold text-xl mb-6">

              Quick Links

            </h4>

            <div className="space-y-4">

              <Link to="/" className="block">
                Home
              </Link>

              <Link to="/about" className="block">
                About
              </Link>

              <Link to="/services/affiliate-marketing" className="block">
                Services
              </Link>

              <Link to="/contact" className="block">
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h4 className="font-semibold text-xl mb-6">

              Services

            </h4>

            <div className="space-y-4 text-gray-300">

              <Link to="/services/affiliate-marketing" className="block">
                Affiliate Marketing
              </Link>

              <Link to="/services/digital-marketing" className="block">
                Digital Marketing
              </Link>


              <Link to="/services/performance-marketing" className="block">
                Performance Marketing
              </Link>
              
              <Link to="/services/influencer-marketing" className="block">
                Influencer Marketing
              </Link>

              <Link to="/services/ecommerce-marketing" className="block">
                E-Commerce Solutions
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="font-semibold text-xl mb-6">

              Contact

            </h4>

            <div className="space-y-5 text-gray-300">

              <p>📧 info@addtechinfinium.com</p>

              <p>📞 +91-</p>

              <p>
                 <h2>📍 HQ Address</h2>
                <p>
                  35-B-88 EPDP Colony, Chitranjan Park, Chitranjan Park, New Delhi, South Delhi- 110019, Delhi
                </p>
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">

            © 2022 - 2026 Addtech Infinium. All Rights Reserved.

          </p>

          <div className="flex gap-6 text-sm text-gray-400">

            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <a href="/gdpr-compliance">
              GDPR-Compliance
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;