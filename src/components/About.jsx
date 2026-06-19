import profile from "../assets/profile.png";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="pt-16 pb-24 px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>

            <img
              src={profile}
              alt="Shivansh Gera"
              className="
                relative
                z-10
                w-72
                h-72
                object-cover
                rounded-full
                border-4
                border-purple-500/30
                shadow-2xl
              "
            />
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Full Stack Developer
          </h3>

          <p className="text-slate-400 leading-8 text-lg">
            I am a Full Stack Developer specializing in{" "}
            <span className="text-purple-400 font-medium">
              MERN Stack
            </span>{" "}
            development with hands-on experience building scalable and
            user-focused web applications.
          </p>

          <p className="text-slate-400 leading-8 text-lg mt-4">
            Recently completing my B.Tech, I have developed projects
            including{" "}
            <span className="text-purple-400 font-medium">
              MindStack
            </span>
            , an EdTech platform with role-based access and Razorpay
            integration,{" "}
            <span className="text-purple-400 font-medium">
              ShareHope
            </span>
            , a community-driven support platform, and{" "}
            <span className="text-purple-400 font-medium">
              CommunityConnect
            </span>
            , a civic issue reporting system.
          </p>

          <p className="text-slate-400 leading-8 text-lg mt-4">
            I enjoy solving real-world problems through clean
            architecture, secure backend systems, and intuitive user
            experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

            <div
              className="
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-xl
                p-5
                text-center
                hover:-translate-y-2
                hover:border-purple-500/40
                hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
                transition-all
                duration-300
              "
            >
              <h4 className="text-3xl font-bold text-purple-400">
                3+
              </h4>
              <p className="text-slate-400">
                Projects Built
              </p>
            </div>

            <div
              className="
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-xl
                p-5
                text-center
                hover:-translate-y-2
                hover:border-purple-500/40
                hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
                transition-all
                duration-300
              "
            >
              <h4 className="text-3xl font-bold text-purple-400">
                MERN
              </h4>
              <p className="text-slate-400">
                Stack Developer
              </p>
            </div>

            <div
              className="
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-xl
                p-5
                text-center
                hover:-translate-y-2
                hover:border-purple-500/40
                hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
                transition-all
                duration-300
              "
            >
              <h4 className="text-3xl font-bold text-purple-400">
                B.Tech
              </h4>
              <p className="text-slate-400">
                Graduate
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;