function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/30 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-3xl font-black text-purple-500 tracking-tight">
          SG.
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300">
          <li>
            <a
              href="#home"
              className="hover:text-purple-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-purple-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-purple-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-purple-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-purple-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="hidden md:block px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;