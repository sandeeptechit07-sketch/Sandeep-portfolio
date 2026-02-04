import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Animated background elements
  const floatingElements = [
    {
      delay: 0,
      size: 300,
      top: "10%",
      left: "5%",
      color: "from-purple-500 to-blue-500",
    },
    {
      delay: 0.2,
      size: 200,
      top: "60%",
      right: "5%",
      color: "from-pink-500 to-purple-500",
    },
    {
      delay: 0.4,
      size: 250,
      bottom: "10%",
      left: "50%",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0f0f2e] via-[#1a0a3e] to-[#0f0f2e] pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full blur-3xl opacity-20 bg-gradient-to-r ${element.color}`}
            style={{
              width: element.size,
              height: element.size,
              top: element.top,
              right: element.right,
              left: element.left,
              bottom: element.bottom,
            }}
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full px-6 h-screen flex items-center justify-between gap-12"
      >
        {/* Text Content */}
        <motion.div className="flex-1 space-y-8 ml-10">
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <motion.span
              className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-sm font-medium"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              👋 Welcome to my portfolio
            </motion.span>
          </motion.div>

          {/* Main Heading with word-by-word animation */}
          <div className="space-y-4">
            <div className="text-4xl md:text-5xl font-bold leading-tight">
              {["Hi, I'm", "Sandeep", "Kotakondla"].map((word, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className={
                    index === 1
                      ? "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                      : "text-white"
                  }
                  style={{ display: "inline-block", marginRight: "0.3em" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed"
          >
            Frontend Developer specializing in{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
              React applications
            </span>{" "}
            and interactive UI. Crafting beautiful, responsive web experiences
            with modern JavaScript & design principles. Turning ideas into
            engaging digital solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View My Work</span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(168, 85, 247, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-500/40 rounded-lg font-semibold text-purple-300 hover:bg-purple-500/10 transition"
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-8 pt-8">
            {[
              { number: "50+", label: "Projects" },
              { number: "20+", label: "Happy Clients" },
              { number: "1.3+", label: "Years Exp." },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="space-y-1"
              >
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Visual Element */}
        <motion.div
          className="hidden lg:flex flex-1 items-center justify-center"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative w-96 h-96">
            {/* Rotating circles */}
            {[1, 2, 3].map((circle, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  borderTop: `2px solid rgba(168, 85, 247, ${0.8 - index * 0.2})`,
                  borderRight: `2px solid rgba(236, 72, 153, ${0.8 - index * 0.2})`,
                }}
                animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  linear: true,
                }}
              />
            ))}

            {/* Center element */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl border border-purple-500/40 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-6xl"
                >
                  💻
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-gray-500 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
