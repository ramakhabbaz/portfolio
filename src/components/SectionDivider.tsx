import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="bg-pink-50 relative h-16 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-2xl"
      >
        🌷
      </motion.span>
    </div>
  );
}
