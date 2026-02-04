import { motion } from "framer-motion";

const Footer = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-t from-[#0a0a20] to-[#0f0f2e] border-t border-purple-500/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-20 w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-20 w-64 h-64 bg-gradient-to-tl from-pink-500 to-purple-500 rounded-full blur-3xl opacity-5" />

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full px-6 py-20"
        >
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-white font-bold text-lg">S</span>
                </motion.div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sandeep
                </span>
              </motion.div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building beautiful, animated web experiences with React and
                Framer Motion.
              </p>
              <div className="flex gap-3 pt-2">
                {["🐙", "💼", "🐦"].map((emoji, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl hover:scale-110 transition"
                  >
                    {emoji}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-white text-lg">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <motion.li key={link.label} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-white text-lg">Newsletter</h4>
              <p className="text-gray-400 text-sm">
                Subscribe to get notified about my latest projects.
              </p>
              <motion.form className="flex gap-2">
                <motion.input
                  type="email"
                  placeholder="Your email"
                  whileFocus={{ scale: 1.02 }}
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold text-sm"
                >
                  Subscribe
                </motion.button>
              </motion.form>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Bottom Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Sandeep. All rights reserved. | Built with{" "}
              <span className="text-pink-500">❤️</span> using React & Framer
              Motion
            </motion.p>

            <motion.button
              variants={itemVariants}
              onClick={scrollToTop}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:border-purple-500/60 transition text-sm font-medium"
            >
              Back to Top ↑
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
