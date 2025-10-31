import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setIsMobileMenuOpen(false);
  };

  const handleOrderClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfCd_-H5o5S5sGm82WStA_Ji7FH7fXbbtm6aaHaJwYjsCX4SA/viewform?pli=1', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="font-playfair text-2xl md:text-3xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Soléa Bakes
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <Link
              to="/gallery"
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="font-inter text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={handleOrderClick}
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="font-inter text-foreground hover:text-primary transition-colors text-left px-4 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="font-inter text-foreground hover:text-primary transition-colors text-left px-4 py-2"
              >
                About
              </button>
              <Link
                to="/gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-inter text-foreground hover:text-primary transition-colors px-4 py-2"
              >
                Gallery
              </Link>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="font-inter text-foreground hover:text-primary transition-colors text-left px-4 py-2"
              >
                Testimonials
              </button>
              <div className="px-4 py-2">
                <Button
                  onClick={handleOrderClick}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
