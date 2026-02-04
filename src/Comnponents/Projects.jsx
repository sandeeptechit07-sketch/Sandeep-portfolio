import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "Animated E-Commerce Platform",
      description:
        "Full-stack React application with smooth product transitions, cart animations, and checkout flow. Increased conversion by 35%.",
      tags: ["React", "Framer Motion", "TypeScript", "Node.js"],
      gradient: "from-purple-600 to-blue-600",
      icon: "🛍️",
    },
    {
      title: "Creative Agency Website",
      description:
        "Marketing website with scroll-triggered animations, parallax effects, and interactive portfolio showcase. Award-winning design.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "GSAP"],
      gradient: "from-pink-600 to-purple-600",
      icon: "🎨",
    },
    {
      title: "Real-time Dashboard",
      description:
        "Interactive analytics dashboard with animated charts, live data updates, and smooth transitions between views.",
      tags: ["React", "D3.js", "WebSocket", "TypeScript"],
      gradient: "from-cyan-600 to-blue-600",
      icon: "📊",
    },
    {
      title: "SaaS Application",
      description:
        "Enterprise-grade SaaS platform with complex animations, user onboarding flow, and interactive feature tours.",
      tags: ["Next.js", "Framer Motion", "Stripe API", "Vercel"],
      gradient: "from-orange-600 to-pink-600",
      icon: "🚀",
    },
    {
      title: "Mobile App Landing Page",
      description:
        "Modern landing page with 3D transforms, smooth scrolling animations, and responsive design for mobile conversion.",
      tags: ["React", "Three.js", "Framer Motion", "CSS3"],
      gradient: "from-green-600 to-cyan-600",
      icon: "📱",
    },
    {
      title: "Multimedia Portfolio",
      description:
        "Interactive portfolio with image galleries, video players, and immersive animations. Perfect UX showcase.",
      tags: ["React", "Framer Motion", "Lightbox", "Responsive"],
      gradient: "from-yellow-600 to-orange-600",
      icon: "🖼️",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-gradient-to-b from-[#0f0f2e] via-[#1a0a3e] to-[#0f0f2e] py-32 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-pink-500 to-purple-500 rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
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
            💼 PORTFOLIO
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Explore some of my recent work showcasing creative design and
            technical excellence
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -20,
                boxShadow: "0 30px 60px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 p-8 hover:border-purple-500/50 transition">
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition duration-300`}
                />

                {/* Icon */}
                <motion.p
                  className="text-6xl mb-4 relative z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  whileHover={{ rotate: 20, scale: 1.2 }}
                >
                  {project.icon}
                </motion.p>

                {/* Content */}
                <div className="relative z-10 space-y-4 h-full flex flex-col">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold group-hover:shadow-lg group-hover:shadow-purple-500/50 transition opacity-0 group-hover:opacity-100"
                  >
                    View Project
                  </motion.button>
                </div>

                {/* Border Animation on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  style={{
                    borderImage: "linear-gradient(45deg, #a855f7, #ec4899) 1",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 text-center space-y-6"
        >
          <motion.p variants={itemVariants} className="text-gray-400 text-lg">
            Want to see more of my work?
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View All Projects</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
