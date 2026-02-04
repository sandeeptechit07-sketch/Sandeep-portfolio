import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

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
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" },
    },
  };

  const categories = [
    {
      id: "frontend",
      label: "Frontend",
      icon: "🎨",
    },
    {
      id: "tools",
      label: "Tools & Libraries",
      icon: "⚙️",
    },
    {
      id: "design",
      label: "Design & Animation",
      icon: "✨",
    },
  ];

  const skillsByCategory = {
    frontend: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 98 },
      { name: "Responsive Design", level: 94 },
      { name: "Next.js", level: 88 },
    ],
    tools: [
      { name: "Git/Github", level: 92 },
      { name: "Webpack", level: 85 },
      { name: "npm/yarn", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Chrome DevTools", level: 93 },
      { name: "REST API", level: 91 },
    ],
    design: [
      { name: "Framer Motion", level: 96 },
      { name: "Tailwind CSS", level: 94 },
      { name: "GSAP", level: 87 },
      { name: "Three.js", level: 82 },
      { name: "UI/UX Design", level: 89 },
      { name: "Figma", level: 85 },
    ],
  };

  const SkillBar = ({ name, level, index }) => {
    return (
      <motion.div
        key={name}
        variants={itemVariants}
        custom={index}
        className="space-y-2"
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-300 font-medium">{name}</span>
          <motion.span
            className="text-purple-400 font-semibold"
            animate={{ opacity: [0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {level}%
          </motion.span>
        </div>
        <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-gradient-to-b from-[#0f0f2e] via-[#1a0a3e] to-[#0f0f2e] py-32 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-bl from-blue-500 to-purple-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 mb-20 text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-purple-400 font-semibold text-lg"
          >
            🔧 SKILLS & EXPERTISE
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            Technical Skills
          </motion.h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                  : "bg-purple-500/10 border border-purple-500/40 text-gray-300 hover:border-purple-500/60"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
        >
          {skillsByCategory[activeCategory].map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={index}
            />
          ))}
        </motion.div>

        {/* Advanced Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white text-center"
          >
            Core Competencies
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Performance Optimization",
                items: [
                  "Code Splitting",
                  "Lazy Loading",
                  "Image Optimization",
                  "Bundle Analysis",
                ],
                icon: "⚡",
              },
              {
                title: "State Management",
                items: ["Context API", "Redux", "Zustand", "React Query"],
                icon: "🔄",
              },
              {
                title: "Testing",
                items: [
                  "Jest",
                  "React Testing Library",
                  "E2E Testing",
                  "Visual Regression",
                ],
                icon: "✅",
              },
              {
                title: "Accessibility",
                items: [
                  "WCAG Compliance",
                  "ARIA Labels",
                  "Keyboard Navigation",
                  "Screen Reader Support",
                ],
                icon: "♿",
              },
            ].map((competency, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 30px 60px rgba(168, 85, 247, 0.2)",
                }}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 hover:border-purple-500/60 transition"
              >
                <motion.p
                  className="text-5xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {competency.icon}
                </motion.p>
                <h4 className="text-xl font-bold text-white mb-4">
                  {competency.title}
                </h4>
                <div className="space-y-2">
                  {competency.items.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: "50+", label: "Technologies" },
            { number: "100+", label: "Projects Built" },
            { number: "10+", label: "Years Combined" },
            { number: "99%", label: "Success Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 text-center"
            >
              <motion.p
                className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {stat.number}
              </motion.p>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
