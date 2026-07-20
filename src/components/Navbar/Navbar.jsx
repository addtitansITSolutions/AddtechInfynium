import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },

  { name: "About", path: "/about" },

  {
    name: "Services",
    path: "/services",
    megaMenu: [
      {
        title: "Affiliate Marketing",
        items: [
          {
            name: "Affiliate Marketing",
            path: "/services/affiliate-marketing",
          },
          {
            name: "Performance Marketing",
            path: "/services/performance-marketing",
          },
        ],
      },

      {
        title: "Digital Marketing",
        items: [
          {
            name: "Digital Marketing",
            path: "/services/digital-marketing",
          },
          {
            name: "SEO",
            path: "/services/seo",
          },
        ],
      },

      {
        title: "Influencer Marketing",
        items: [
          {
            name: "Influencer Marketing",
            path: "/services/influencer-marketing",
          },
        ],
      },

      {
        title: "Ecommerce",
        items: [
          {
            name: "Ecommerce Marketing",
            path: "/services/ecommerce-marketing",
          },
        ],
      },

      {
        title: "Mobile",
        items: [
          {
            name: "Mobile Services",
            path: "/services/mobile-services",
          },
        ],
      },
    ],
  },

  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu automatically if the window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center justify-center z-50"
            >
              {/* Addtech<span className="text-black">Infinium</span> */}
              <img src="/addtitanslogo.png" alt="Addtech Infinium Logo" className="max-h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">
                {navLinks.map((item) => {
                  if (item.megaMenu) {
                    return (
                      <div
                        key={item.name}
                        className="relative group"
                      >
                        <Link
                          to={item.path}
                          className="flex items-center gap-1 font-medium text-gray-600 hover:text-[#053d27] transition"
                        >
                          {item.name}

                          <ChevronDown
                            size={16}
                            className="transition-transform duration-300 group-hover:rotate-180"
                          />
                        </Link>
                        <div
                          className="
                          absolute
                          left-1/2
                          -translate-x-1/2
                          top-full
                          pt-6
                          opacity-0
                          invisible
                          group-hover:opacity-100
                          group-hover:visible
                          transition-all
                          duration-300
                          "
                        >

                          <div
                            className="
                            bg-white
                            rounded-3xl
                            shadow-2xl
                            border
                            border-gray-100
                            p-8
                            w-[850px]
                            grid
                            grid-cols-4
                            gap-8
                            "
                          >

                            {item.megaMenu.map((category) => (

                              <div key={category.title}>

                                <h3 className="font-bold text-[#053d27] mb-4">

                                  {category.title}

                                </h3>

                                <div className="space-y-3">

                                  {category.items.map((sub) => (

                                    <Link
                                      key={sub.name}
                                      to={sub.path}
                                      className="block text-gray-600 hover:text-[#053d27] transition"
                                    >
                                      {sub.name}
                                    </Link>

                                  ))}

                                </div>

                              </div>

                            ))}

                          </div>

                        </div>
                      </div>
                    );
                  }

                  const isActive = location.pathname === item.path;

                  return (

                    <Link
                      key={item.name}
                      to={item.path}
                      className={`font-medium transition ${
                        isActive
                          ? "text-[#053d27]"
                          : "text-gray-600 hover:text-[#053d27]"
                      }`}
                    >
                      {item.name}
                    </Link>

                  );

                })}

            </nav>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 rounded-full bg-[#053d27] text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#053d27]/20"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden z-50 text-gray-800 hover:text-[#053d27] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay / Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-out Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] sm:w-[320px]
        bg-white shadow-2xl z-40 lg:hidden
        transform transition-transform duration-300 ease-in-out
        overflow-y-auto overscroll-contain
        ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="min-h-full flex flex-col pt-28 px-8 pb-8">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-6">
            {navLinks.map((item) => {

              if (item.megaMenu) {

                return (

                  <div key={item.name}>

                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between text-lg font-medium text-gray-700 hover:text-[#053d27]"
                    >
                      <span>{item.name}</span>

                      <span
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>

                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        servicesOpen
                          ? "max-h-[600px] mt-4"
                          : "max-h-0"
                      }`}
                    >

                      {item.megaMenu.map((category) => (

                        <div key={category.title} className="ml-4 mb-5">

                          <h4 className="font-semibold text-[#053d27]">

                            {category.title}

                          </h4>

                          <div className="mt-2 ml-4 flex flex-col gap-2">

                            {category.items.map((sub) => (

                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={() => {
                                  setOpen(false);
                                  setServicesOpen(false);
                                }}
                                className="text-gray-600 hover:text-[#053d27] text-sm"
                              >
                                • {sub.name}
                              </Link>

                            ))}

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                );

              }

              const isActive = location.pathname === item.path;

              return (

                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition-colors duration-200 hover:text-[#053d27] ${
                    isActive
                      ? "text-[#053d27] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>

              );

            })}
        </nav>

          {/* Mobile Button at the Bottom */}
          <div className="pt-8 mt-auto">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full bg-[#053d27] text-white py-3 rounded-xl text-center font-medium transition-all hover:bg-[#085235]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;