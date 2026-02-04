import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur z-50 px-10 py-4 flex justify-between">
        <span className="font-bold">MyPortfolio</span>
        <div className="flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-[#020617] to-[#0f172a]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Sandeep 👋</h1>
          <p className="text-gray-400 text-lg">Frontend React Developer</p>
        </motion.div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-32 px-10 max-w-5xl mx-auto my-32 bg-[#020617]/60 rounded-2xl"
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed"
        >
          I build modern, performant, and animated web applications using React.
          Passionate about UI/UX, motion design, and clean code.
        </motion.p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-10 bg-[#020617]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-semibold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Animated Landing Page",
              desc: "Smooth scroll animations, hero transitions, and micro-interactions.",
            },
            {
              title: "Creative Agency Website",
              desc: "Bold typography, page transitions, and hover animations.",
            },
            {
              title: "3D Portfolio Concept",
              desc: "Interactive cards with motion-based depth and parallax.",
            },
          ].map((p, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0f172a] p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-medium mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-32 px-10 text-center bg-gradient-to-t from-[#020617] to-[#0f172a]"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-6"
        >
          Get In Touch
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 px-6 py-3 rounded-lg"
        >
          Contact Me
        </motion.button>
      </section>
    </div>
  );
}
