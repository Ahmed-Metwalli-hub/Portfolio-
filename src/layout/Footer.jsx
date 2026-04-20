import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import {Link} from 'react-scroll';
import { IoLogoWhatsapp } from "react-icons/io";


const socialLinks = [
  { icon: Github, href: "https://github.com/Ahmed-Metwalli-hub", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-metwalli-5195252b8/", label: "LinkedIn" },
  { icon: IoLogoWhatsapp, href: "https://wa.me/201062577985", label: "WhatsApp" },
  
];


const footerLinks = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link
            to="hero"
            smooth={true}
            duration={500}
             href="#" 
             className="text-xl hover:text-primary transition-colors duration-300 ease-in-out font-bold tracking-tight">
              Ahmed Metwalli<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Ahmed Metwalli. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link 
                to={link.href}
                smooth={true}
                duration={500}
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                target="_blank"
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
