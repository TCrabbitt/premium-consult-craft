
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white shadow-premium"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/hallmark-logo.png" alt="Hallmark" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#solutions" className="nav-link">Solutions</Link>
          <Link to="/#industries" className="nav-link">Industries</Link>
          <Link to="/#about" className="nav-link">About Us</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
          <Link to="/#contact">
            <Button variant="outline" className="ml-2 border-hallmark-dark-green text-hallmark-dark-green hover:bg-hallmark-dark-green hover:text-white">
              Get a Consultation
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-[60px] left-0 w-full h-auto bg-white shadow-md transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/#solutions" className="py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
          <Link to="/#industries" className="py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
          <Link to="/#about" className="py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/#contact" className="py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full mt-2 bg-hallmark-dark-green text-white">
              Get a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
