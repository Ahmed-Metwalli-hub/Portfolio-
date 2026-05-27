import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import img1 from "../assets/DarkLook.png"
import img2 from "../assets/DYAT.png"
import img3 from "../assets/Logo.png"
import img4 from "../assets/react-dashboard.png"
const projects = [
  {
    title: "DarkLook",
    description:
      "Developed a scalable e-commerce application using React.js with dynamic routing, cart management, and REST API integration, Improved performance using lazy loading, reducing load time by ~30% and integrated Swiper.js for interactive UI components and focused on delivering a clean, user-friendly UI.",
    image: img1,
    tags: ["React","JavaScript", "Bootstrap", "Context API"],

    link: "https://dark-look-fawn.vercel.app/",
    github: "https://github.com/Ahmed-Metwalli-hub/DarkLook",
  },
  {
    title: "React-Dashbord",
    description:
      "Built a production-ready React Dashboard using React.js, Redux Toolkit, Tailwind CSS, and DaisyUI. The project implements scalable frontend architecture with authentication handling, protected routing, global state management, and reusable components. It follows modern UI/UX principles and is optimized for performance, responsiveness, and maintainability.",
    image: img4,
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "DaisyUI"],
    link: "https://dashboard-blush-one-73.vercel.app/",
    github: "https://github.com/Ahmed-Metwalli-hub/Dashboard",
  },
  {
    title: "DYAT Project",
    description: "A modern gaming platform delivering an interactive and immersive user experience."
    ,
    image: img2,
    tags: [ "CSS", "HTML"],
    link: "https://dyat-proj.vercel.app/",
    github: "https://github.com/Ahmed-Metwalli-hub/DYAT-PROJ",
  },
  {
    title: "Landing Page",
    description:
      "A simple and clean landing page with a modern design.",
    image: img3,
    tags: ["React", "JavaScript", "Bootstrap"],
    link: "https://landing-page-geti.vercel.app/",
    github: "https://github.com/Ahmed-Metwalli-hub/LandingPage",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects 
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    target="_blank"
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    target="_blank"
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
