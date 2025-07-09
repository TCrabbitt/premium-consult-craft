
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const solutionItems = [
    { 
      name: "Talent Acquisition", 
      path: "/solutions/talent-acquisition",
      description: "Transform your hiring process with strategic talent acquisition solutions"
    },
    { 
      name: "Employee Engagement", 
      path: "/solutions/employee-engagement",
      description: "Build a thriving workplace culture where employees are motivated and committed"
    },
    { 
      name: "Leadership Development", 
      path: "/solutions/leadership-development",
      description: "Cultivate exceptional leaders who inspire teams and drive results"
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white shadow-premium"
          : "py-3 bg-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/hallmark.png" alt="Hallmark" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="nav-link flex items-center gap-1 hover:text-hallmark-dark-green transition-colors group">
                Solutions
                <ChevronDown size={16} className="transition-transform group-data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="w-80 bg-white border border-gray-100 shadow-xl mt-2 p-2"
              sideOffset={8}
            >
              <div className="py-2">
                <div className="px-4 py-2 border-b border-gray-100 mb-2">
                  <h3 className="font-semibold text-hallmark-dark text-sm">Our Solutions</h3>
                  <p className="text-xs text-gray-600 mt-1">Comprehensive workforce management solutions</p>
                </div>
                {solutionItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild className="p-0">
                    <Link 
                      to={item.path}
                      className="w-full px-4 py-3 text-left hover:bg-hallmark-off-white hover:text-hallmark-dark-green transition-colors cursor-pointer rounded-md block group"
                    >
                      <div>
                        <div className="font-medium text-hallmark-dark group-hover:text-hallmark-dark-green transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-600 mt-1 leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-3 px-4">
                  <Link 
                    to="/solutions" 
                    className="text-sm text-hallmark-dark-green hover:text-hallmark-green font-medium transition-colors"
                  >
                    View all solutions →
                  </Link>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/industries" className="nav-link">Industries</Link>
          <Link to="/about" className="nav-link">About Us</Link>
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
          <div className="border-b border-gray-100 pb-4">
            <span className="font-medium text-hallmark-dark mb-3 block">Solutions</span>
            <div className="space-y-3">
              {solutionItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className="block py-2 px-3 rounded-md hover:bg-hallmark-off-white hover:text-hallmark-dark-green transition-colors" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>
          <Link to="/industries" className="py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
          <Link to="/about" className="py-2 border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
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
