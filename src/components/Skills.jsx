import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaShieldAlt,
  FaRobot,
} from "react-icons/fa";

import {
  TbApi,
  TbBraces,
} from "react-icons/tb";

import { skillsData } from "../data/skills";

const iconMap = {
  frontend: <FaCode />,
  backend: <FaServer />,
  database: <FaDatabase />,
  tools: <FaTools />,
  concepts: <FaShieldAlt />,
  api: <TbApi />,
  ai: <FaRobot />,
  other: <TbBraces />,
};

function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="
        group
        bg-white/5
        backdrop-blur-md
        border border-white/10
        rounded-2xl
        p-6
        hover:border-purple-500/50
        hover:-translate-y-2
        hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
        transition-all
        duration-300
      "
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="
            w-14
            h-14
            rounded-xl
            bg-purple-500/20
            flex
            items-center
            justify-center
            text-purple-400
            text-2xl
          "
        >
          {iconMap[category.icon]}
        </div>

        <h3 className="text-2xl font-semibold">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="
              px-4
              py-2
              rounded-lg
              bg-slate-800/80
              border
              border-slate-700
              hover:border-purple-500
              hover:text-purple-300
              transition-all
              duration-300
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <p className="uppercase tracking-[0.3em] text-purple-400 text-sm mb-4">
          My Expertise
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Skills & Technologies
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>

        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A comprehensive toolkit of technologies and tools I use to
          build scalable and efficient web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {skillsData.map((category, index) => (
          <SkillCard
            key={category.title}
            category={category}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;