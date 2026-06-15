import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-10"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-32 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-purple-400 text-lg mb-4">
          Hi, I'm
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Shivansh Gera
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "MERN Stack Developer",
            2000,
            "Backend Developer",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-slate-300 font-medium"
        />

        <p className="mt-8 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          I build scalable web applications using React, Node.js,
          Express.js, and MongoDB. Passionate about creating
          efficient, user-friendly, and impactful digital solutions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-500/20"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-slate-600 rounded-lg hover:border-purple-500 hover:text-purple-400 transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/ShivanshGera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-slate-400 hover:text-purple-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-slate-400 hover:text-purple-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;