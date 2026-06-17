import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="uppercase tracking-[0.3em] text-purple-400 text-sm mb-4">
          Contact
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Let's Build Something Together
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-8"></div>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-8">
          I'm a Full Stack MERN Developer passionate about building
          scalable web applications and solving real-world problems.
          Currently seeking Full Stack and Backend Developer
          opportunities.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <FaEnvelope className="text-purple-400 text-3xl mx-auto mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Email
            </h3>

            <p className="text-slate-400">
              shivanshgera15@gmail.com
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <FaMapMarkerAlt className="text-purple-400 text-3xl mx-auto mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Location
            </h3>

            <p className="text-slate-400">
              Noida, Uttar Pradesh
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <a
            href="mailto:shivanshgera15@gmail.com"
            className="
              flex items-center gap-2
              px-6 py-3
              bg-purple-600
              rounded-lg
              hover:bg-purple-700
              transition
            "
          >
            <FaEnvelope />
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/in/shivanshgera"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              px-6 py-3
              border border-slate-600
              rounded-lg
              hover:border-purple-500
              transition
            "
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/ShivanshGera"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              px-6 py-3
              border border-slate-600
              rounded-lg
              hover:border-purple-500
              transition
            "
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;