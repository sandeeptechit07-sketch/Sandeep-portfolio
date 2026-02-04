import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * 🎬 ADVANCED ANIMATION UTILITIES & REUSABLE COMPONENTS
 * Extra animations and components for enhancing the portfolio
 */

// ============================================================================
// 1. ANIMATED BACKGROUND PARTICLES
// ============================================================================

export const AnimatedParticles = ({ count = 20 }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -Math.random() * 200 - 100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ============================================================================
// 2. ANIMATED COUNTER COMPONENT
// ============================================================================

export const AnimatedCounter = ({
  from = 0,
  to = 100,
  duration = 2,
  suffix = "",
}) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let frameCount = 0;
    const frames = Math.floor(duration * 60); // 60 fps
    const increment = (to - from) / frames;

    const timer = setInterval(() => {
      frameCount++;
      setCount(Math.floor(from + increment * frameCount));

      if (frameCount >= frames) {
        setCount(to);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// ============================================================================
// 3. ANIMATED TEXT WITH LETTER EFFECTS
// ============================================================================

export const AnimatedLetters = ({ text, staggerDelay = 0.05 }) => {
  return (
    <div className="inline-flex gap-0.5 flex-wrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * staggerDelay,
            duration: 0.3,
          }}
          whileHover={{
            scale: 1.2,
            color: "#ec4899",
            textShadow: "0 0 10px rgba(236, 72, 153, 0.5)",
          }}
          className="inline-block cursor-default"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

// ============================================================================
// 4. SHIMMER/LOADING EFFECT
// ============================================================================

export const ShimmerEffect = ({ width = "100%", height = "20px" }) => {
  return (
    <motion.div
      className="rounded bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 relative overflow-hidden"
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

// ============================================================================
// 5. FLOATING BUTTON WITH GLOW
// ============================================================================

export const FloatingButton = ({ children, onClick, color = "purple" }) => {
  const gradients = {
    purple: "from-purple-500 to-pink-500",
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r ${gradients[color]} text-white shadow-2xl z-40`}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.15,
        boxShadow: `0 0 30px rgba(${color === "purple" ? "168, 85, 247" : "59, 130, 246"}, 0.5)`,
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

// ============================================================================
// 6. ROTATING GRADIENT BORDER
// ============================================================================

export const GradientBorderCard = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-0.5"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="bg-[#0f0f2e] rounded-xl h-full w-full" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 p-6">{children}</div>
    </motion.div>
  );
};

// ============================================================================
// 7. ICON BADGE WITH PULSE
// ============================================================================

export const IconBadge = ({ icon, label, color = "purple" }) => {
  const colors = {
    purple: "from-purple-500 to-pink-500 shadow-purple-500/50",
    blue: "from-blue-500 to-cyan-500 shadow-blue-500/50",
    pink: "from-pink-500 to-rose-500 shadow-pink-500/50",
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors[color]} flex items-center justify-center text-2xl shadow-lg`}
        animate={{
          boxShadow: [
            `0 0 20px rgba(${color === "purple" ? "168, 85, 247" : "59, 130, 246"}, 0.3)`,
            `0 0 40px rgba(${color === "purple" ? "168, 85, 247" : "59, 130, 246"}, 0.6)`,
            `0 0 20px rgba(${color === "purple" ? "168, 85, 247" : "59, 130, 246"}, 0.3)`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {icon}
      </motion.div>
      <p className="text-sm font-semibold text-gray-300 text-center">{label}</p>
    </motion.div>
  );
};

// ============================================================================
// 8. ANIMATED PROGRESS RING
// ============================================================================

export const ProgressRing = ({
  percentage = 75,
  size = 120,
  strokeWidth = 8,
}) => {
  const circumference = 2 * Math.PI * ((size - strokeWidth) / 2);

  return (
    <motion.svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={(size - strokeWidth) / 2}
        stroke="rgba(168, 85, 247, 0.1)"
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Progress circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={(size - strokeWidth) / 2}
        stroke="url(#gradient)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{
          strokeDashoffset: circumference - (circumference * percentage) / 100,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        strokeLinecap="round"
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      {/* Center text */}
      <text
        x={size / 2}
        y={size / 2 + 5}
        textAnchor="middle"
        fill="#a78bfa"
        fontSize={size * 0.3}
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </motion.svg>
  );
};

// ============================================================================
// 9. TYPEWRITER EFFECT
// ============================================================================

export const TypeWriter = ({ text, speed = 50, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 ml-1 bg-purple-500 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
    </motion.span>
  );
};

// ============================================================================
// 10. CONFETTI EFFECT
// ============================================================================

export const ConfettiEffect = ({ onComplete }) => {
  const confetti = [...Array(30)].map((_, i) => ({
    id: i,
    x: Math.random() * 100 - 50,
    delay: Math.random() * 0.2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none">
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{
            left: "50%",
            top: "50%",
            opacity: 1,
          }}
          animate={{
            left: `${50 + item.x}%`,
            top: "120%",
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 2,
            delay: item.delay,
            ease: "easeIn",
          }}
          onAnimationComplete={
            item.id === confetti.length - 1 ? onComplete : undefined
          }
        />
      ))}
    </div>
  );
};

// ============================================================================
// 11. HOVER LINE ANIMATION
// ============================================================================

export const HoverLineButton = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative px-6 py-3 font-semibold text-white text-lg group"
    >
      <span className="relative z-10">{text}</span>

      {/* Top line */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 w-0 group-hover:w-full"
        transition={{ duration: 0.3 }}
      />

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 w-0 group-hover:w-full"
        transition={{ duration: 0.3 }}
      />

      {/* Left line */}
      <motion.div
        className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 h-0 group-hover:h-full"
        transition={{ duration: 0.3 }}
      />

      {/* Right line */}
      <motion.div
        className="absolute bottom-0 right-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-500 h-0 group-hover:h-full"
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

// ============================================================================
// 12. BLOB ANIMATION
// ============================================================================

export const AnimatedBlob = ({ size = 200, delay = 0 }) => {
  return (
    <motion.div
      className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-20"
      style={{
        width: size,
        height: size,
      }}
      animate={{
        borderRadius: ["50%", "60% 40% 30% 70%", "30% 60% 70% 40%", "50%"],
        transform: [
          "translate(0, 0) rotate(0deg)",
          "translate(-30px, 20px) rotate(90deg)",
          "translate(20px, -30px) rotate(180deg)",
          "translate(0, 0) rotate(270deg)",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

export default {
  AnimatedParticles,
  AnimatedCounter,
  AnimatedLetters,
  ShimmerEffect,
  FloatingButton,
  GradientBorderCard,
  IconBadge,
  ProgressRing,
  TypeWriter,
  ConfettiEffect,
  HoverLineButton,
  AnimatedBlob,
};
