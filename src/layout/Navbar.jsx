import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';


const navLinks = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link
            to="hero"
            smooth={true}
            duration={500}
            
          className="text-xl cursor-pointer font-bold  tracking-tight hover:text-primary transition-colors duration-300 ease-in-out"
        >
          A M<span className="text-primary">.</span>
        </Link>

      
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link 
                to={link.href}
                  smooth={true}
                  duration={500} 
                key={index}
                className="px-4 cursor-pointer py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

       
        <div className="hidden md:block">
          <a href="tel:+2001062577985"
          
          >
            <Button size="sm">
              Contact Me
            </Button>
          </a>
        </div>

        
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                to={link.href}
                smooth={true}
                duration={500}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg cursor-pointer text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </Link>
            ))}
            
            <Button onClick={() => setIsMobileMenuOpen(false)}>
              <a className="block w-full" href="tel:+2001062577985">

              Contact Me
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
