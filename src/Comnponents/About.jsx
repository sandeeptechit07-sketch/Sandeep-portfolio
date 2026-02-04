import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-gradient-to-b from-[#0f0f2e] via-[#1a0a3e] to-[#0f0f2e] py-32 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 w-full px-6">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-purple-400 font-semibold text-lg"
          >
            🚀 ABOUT ME
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            Who I Am & What I Do
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-16"
        >
          {/* Left - Text Content */}
          <div className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I'm a passionate{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
                Frontend Developer
              </span>{" "}
              specializing in React. I create beautiful, responsive, and
              performant web applications with a focus on exceptional user
              experiences. With 1.3 years of experience, I'm dedicated to
              building interactive interfaces that engage users and solve real
              problems.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I have a strong passion for clean, maintainable code and elegant
              UI design. Whether working with React components, animations, or
              responsive layouts, I bring creativity and technical precision to
              every project. I continuously learn new technologies and best
              practices to stay at the forefront of frontend development.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Every project is an opportunity to create something meaningful.
              I'm committed to delivering high-quality solutions with a strong
              focus on performance optimization, accessibility, and exceptional
              user experience. Let's build something amazing together!
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {[
                "React",
                "JavaScript",
                "HTML/CSS",
                "Framer Motion",
                "Tailwind CSS",
                "Web Design",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, translateY: -5 }}
                  className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-sm font-medium cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right - Visual Stats */}
          <motion.div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🎯", value: "15+", label: "Projects Completed" },
              { icon: "😊", value: "10+", label: "Happy Clients" },
              { icon: "⭐", value: "4.8/5", label: "Average Rating" },
              { icon: "🚀", value: "1.3", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
                }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 hover:border-purple-500/60 transition text-center group"
              >
                <motion.p
                  className="text-4xl mb-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.icon}
                </motion.p>
                <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Expertise Areas
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description:
                  "Expert in React, TypeScript, and modern JavaScript frameworks. Building scalable and maintainable applications.",
                icon: "⚛️",
              },
              {
                title: "UI/UX Animation",
                description:
                  "Specializing in creating smooth, delightful micro-interactions and animations using Framer Motion.",
                icon: "✨",
              },
              {
                title: "Responsive Design",
                description:
                  "Mobile-first approach with Tailwind CSS. Ensuring perfect experience across all devices and screen sizes.",
                icon: "📱",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 30px 60px rgba(168, 85, 247, 0.2)",
                }}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 hover:border-purple-500/60 transition"
              >
                <motion.p
                  className="text-5xl mb-4"
                  animate={{ rotateY: [0, 20, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {area.icon}
                </motion.p>
                <h4 className="text-xl font-bold text-white mb-3">
                  {area.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
