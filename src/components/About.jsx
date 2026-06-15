import profile from "../assets/profile.png";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="pt-16 pb-24 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{
            once: true,
            amount:0.2,
        }}
      >
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>

              <img
                src={profile}
                alt="Shivansh Gera"
                className="relative z-10 w-80 h-80 object-cover rounded-full border-4 border-purple-500/30 shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Full Stack Developer
            </h3>

            <p className="text-slate-400 leading-8 text-lg">
              I am a Full Stack Developer specializing in MERN Stack
              development with hands-on experience building scalable
              and user-focused web applications.
            </p>

            <p className="text-slate-400 leading-8 text-lg mt-4">
              Recently completing my B.Tech, I have developed projects
              including MindStack, an EdTech platform with role-based
              access and Razorpay integration, ShareHope, a
              community-driven support platform, and CommunityConnect,
              a civic issue reporting system.
            </p>

            <p className="text-slate-400 leading-8 text-lg mt-4">
              I enjoy solving real-world problems through clean
              architecture, secure backend systems, and intuitive user
              experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center hover:-translate-y-2 hover:border-purple-500/40 transition-all duration-300">
                <h4 className="text-3xl font-bold text-purple-400">
                  3+
                </h4>
                <p className="text-slate-400">
                  Projects Built
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center hover:-translate-y-2 hover:border-purple-500/40 transition-all duration-300">
                <h4 className="text-3xl font-bold text-purple-400">
                  MERN
                </h4>
                <p className="text-slate-400">
                  Stack Developer
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center hover:-translate-y-2 hover:border-purple-500/40 transition-all duration-300">
                <h4 className="text-3xl font-bold text-purple-400">
                  B.Tech
                </h4>
                <p className="text-slate-400">
                  Graduate
                </p>
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;