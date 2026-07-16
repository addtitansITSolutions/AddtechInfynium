import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-medium transition-colors duration-200 hover:text-[#053d27] ${
                      isActive ? "text-[#053d27]" : "text-gray-600"
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
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-8 justify-between">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-6">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition-colors duration-200 hover:text-[#053d27] ${
                    isActive ? "text-[#053d27] font-semibold" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Button at the Bottom */}
          <div className="mt-auto">
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