import { useEffect, useState } from "react";
import resume from "../assets/resume.pdf";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/30 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-3xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Shivansh
          </span>
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-slate-300">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={link.href}
                className={`transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-purple-400"
                    : "hover:text-purple-400"
                }`}
              >
                {link.name}
              </a>

              <span
                className={`
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  bg-purple-400
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeSection === link.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }
                `}
              />
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:block
            px-5 py-2
            rounded-full
            bg-purple-600
            hover:bg-purple-700
            transition
          "
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;