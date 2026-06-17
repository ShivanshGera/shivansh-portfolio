import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import mindstackImg from "../assets/mindstack.png";
import communityImg from "../assets/communityconnect.png";
import sharehopeImg from "../assets/sharehope.png";

import { projects } from "../data/projects";

const imageMap = {
  mindstack: mindstackImg,
  communityconnect: communityImg,
  sharehope: sharehopeImg,
};

function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="py-28 px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <p className="uppercase tracking-[0.3em] text-purple-400 text-sm mb-4">
          My Work
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Featured Projects
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>

        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A collection of full-stack applications showcasing
          authentication, payments, cloud storage, role-based
          access control, and scalable backend architecture.
        </p>
      </div>

      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div
          className="
          bg-white/5
          backdrop-blur-md
          border
          border-white/10
          rounded-3xl
          overflow-hidden
          hover:border-purple-500/50
          transition-all
          duration-300
        "
        >
          <img
            src={imageMap[featuredProject.image]}
            alt={featuredProject.title}
            className="w-full h-[420px] object-cover"
          />

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-3xl font-bold">
                {featuredProject.title}
              </h3>

              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Featured
              </span>
            </div>

            <p className="text-slate-400 leading-7 mb-6">
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {featuredProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3 py-2
                    rounded-lg
                    bg-slate-800/80
                    border
                    border-slate-700
                    text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2
                  px-6 py-3
                  bg-purple-600
                  rounded-lg
                  hover:bg-purple-700
                  transition
                "
              >
                <FiExternalLink />
                Live Demo
              </a>

              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2
                  px-6 py-3
                  border
                  border-slate-600
                  rounded-lg
                  hover:border-purple-500
                  transition
                "
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Other Projects */}
      <div className="grid md:grid-cols-2 gap-8">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              hover:border-purple-500/50
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <img
              src={imageMap[project.image]}
              alt={project.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1
                      text-sm
                      rounded-lg
                      bg-slate-800/80
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  Live Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;