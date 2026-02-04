import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    // Replace with your EmailJS public key from emailjs.com
    emailjs.init("25quhtfJxkNjs01Dq");
  }, []);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialLinks = [
    {
      icon: "👨‍💻",
      label: "GitHub",
      link: "https://github.com/sandeeptechit07-sketch/",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      link: "www.linkedin.com/in/sandeep07k",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "🐦",
      label: "Twitter",
      link: "https://twitter.com/sandeepkota",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      icon: "✉️",
      label: "Email",
      link: "mailto:sandeep.techit07@gmail.com",
      color: "from-red-400 to-red-600",
    },
  ];

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "sandeep.techit07@gmail.com",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 9700495999",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Bangalore, India",
      color: "from-blue-500 to-blue-600",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Send email via EmailJS
      await emailjs.send(
        "service_q2qabta", // Replace with your EmailJS service ID
        "template_lmi5r9b", // Replace with your EmailJS template ID
        {
          to_email: "sandeep.techit07@gmail.com", // Your email where you'll receive messages
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("Failed to send message. Please try again or contact directly.");
      console.error("Email send error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-gradient-to-b from-[#0f0f2e] via-[#1a0a3e] to-[#0f0f2e] py-32 px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-10" />

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
            💬 GET IN TOUCH
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Have an exciting project in mind? Let's talk about how I can help
            bring your vision to life.
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30"
            >
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300"
                >
                  {error}
                </motion.div>
              )}

              {/* Name Input */}
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <label className="text-gray-300 font-medium">Name</label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  whileFocus={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                  placeholder="Your Name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <label className="text-gray-300 font-medium">Email</label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  whileFocus={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Subject Input */}
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <label className="text-gray-300 font-medium">Subject</label>
                <motion.input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  whileFocus={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                  placeholder="What's this about?"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <label className="text-gray-300 font-medium">Message</label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  whileFocus={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition resize-none h-32"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: !isLoading ? 1.05 : 1 }}
                whileTap={{ scale: !isLoading ? 0.95 : 1 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                  initial={{ x: "100%" }}
                  whileHover={!isLoading ? { x: 0 } : {}}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">
                  {isLoading
                    ? "Sending..."
                    : isSubmitted
                      ? "Message Sent! 🎉"
                      : "Send Message"}
                </span>
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 hover:border-purple-500/50 transition"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`text-4xl p-3 rounded-lg bg-gradient-to-br ${method.color} bg-opacity-20`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {method.icon}
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm">{method.title}</p>
                      <p className="text-white font-semibold">{method.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} bg-opacity-20 border border-gray-700 flex items-center justify-center text-2xl hover:border-purple-500/60 transition`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 space-y-3"
            >
              <h4 className="font-semibold text-white">Why hire me?</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  "Expert in modern web technologies",
                  "Proven track record of successful projects",
                  "Excellent communication skills",
                  "Quick turnaround times",
                ].map((reason, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                    {reason}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
