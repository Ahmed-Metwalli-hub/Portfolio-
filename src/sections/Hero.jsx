import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import Swal from 'sweetalert2';
import img from "../assets/Author d.jpg";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";


  const handleDownload = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to download my CV?",
      icon: 'question',
      iconColor: '#0ea5e9', 
      background: '#111827', 
      color: '#ffffff',      
      showCancelButton: true,
      confirmButtonColor: '#10b981', 
      cancelButtonColor: '#374151',  
      confirmButtonText: 'Yes, download it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement('a');
        link.href = '/Ahmed-Metwalli-Frontend-Developer(CV).pdf'; 
        link.download = 'Ahmed-Metwalli-Frontend-Developer(CV).pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        Swal.fire({
          title: 'Success!',
          text: 'Download started.',
          icon: 'success',
          iconColor: '#10b981',
          background: '#111827',
          color: '#ffffff',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };


const skills = [
  "React.js",
  "TypeScript",
  "Redux Toolkit",
  "JavaScript (ES6+)",
  "ٌReact Router",
  "TanStack Query (React Query)",
  "RTK Query"
  ,"Zustand",
  " REST APIs (Axios, Fetch)",
  "Context API",
  "Hooks",
  "Lazy Loading",
  "Skeleton Loading",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Responsive Design",
  "Git",
  "GitHub Actions",
];

const dots = [...Array(30)].map(() => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 15 + Math.random() * 20,
  delay: Math.random() * 5,
}));

export const Hero = () => {
  return (
    
    <section id="hero" 
    className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl  font-bold leading-tight animate-fade-in animation-delay-100">
                Front-end{" "}
                <span className="text-primary glow-text">Developer</span>
                <br />
                 Building Modern,
                <br />
                <span className="font-serif italic font-normal text-white">
                  
                 High-Performance Web Apps
                 
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Ahmed Metwalli — A Front-end Developer using React,
                JavaScript, Tailwind, and Bootstrap. I build high-performance
                and responsive websites.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="tel:+2001062577985">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <div onClick={handleDownload}>
              <AnimatedBorderButton>
                <Download
                  className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/Ahmed-Metwalli-hub" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ahmed-metwalli-5195252b8/",
                },
                {
                  icon:  IoLogoWhatsapp  ,
                  href: "https://wa.me/201062577985",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
              
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={img}
                  alt="Pedro Machado"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute flex flex-col items-center justify-center -top-4 -left-4 glass rounded-xl px-3 py-2 animate-float animation-delay-500">
                  <div className="text-1xl font-bold text-primary">A M</div>
                  <div className="text-xs text-muted-foreground">
                    Front-end
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
