import { motion } from "framer-motion";

export default function HeroButton({ text = "Get Started", onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 15px 40px rgba(99, 102, 241, 0.5)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="relative px-10 py-5 text-lg font-semibold text-white rounded-2xl
                 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                 overflow-hidden"
    >
  
      <span
        className="absolute inset-0 bg-white/20 blur-2xl opacity-0
                   group-hover:opacity-100 transition-opacity"
      />

      <span className="relative z-10">{text}</span>
    </motion.button>
  );
}
