import profilePic from "../assets/profile-pic.jpg";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <section className="min-h-screen bg-mesh flex items-center justify-center px-6 py-16 scroll-mt-[100px] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative max-w-6xl w-full"
      >
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl z-0 bg-pink-800/90 shadow-card-hover" />
        <motion.div
          variants={item}
          className="relative rounded-2xl p-8 md:p-12 shadow-card z-10 bg-pink-150 border border-pink-200/60 hover:shadow-card-hover transition-smooth"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left order-2 md:order-1">
              <motion.h1
                variants={item}
                className="font-display text-3xl md:text-5xl font-bold text-pink-900 mb-4"
              >
                Hi, I'm Rama! <span className="inline-block animate-float">👋</span>
              </motion.h1>
              <motion.p
                variants={item}
                className="text-base md:text-xl text-gray-600 italic leading-relaxed"
              >
                Master's Student @ Georgia Tech in CS, HCI
                <br />
                Aspiring UI/UX Designer | Frontend Developer | Product Manager
              </motion.p>
            </div>
            <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative group">
              <div className="absolute w-full max-w-[320px] h-[400px] bg-pink-700/80 rounded-xl z-0 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
              <motion.img
                variants={item}
                src={profilePic}
                alt="Rama Khabbaz"
                className="relative w-full max-w-[320px] h-[400px] object-cover rounded-xl z-10 shadow-card group-hover:shadow-card-hover transition-smooth"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-pink-300 flex justify-center pt-2"
        >
          <motion.span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
