import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-pink-100 border-t border-pink-200/50 py-8 px-6 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl" aria-hidden>🌷</span>
          <div>
            <h2 className="font-display text-xl font-semibold text-pink-900">
              Get In Touch
            </h2>
            <p className="text-sm italic text-gray-600">I'd love to chat!</p>
          </div>
        </div>

        <div className="w-full md:w-auto space-y-3 text-sm md:text-base">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 w-full md:w-96">
            <span className="text-gray-700 font-medium">Email 📧</span>
            <a
              href="mailto:ramakhabbaz@gmail.com"
              className="text-pink-700 font-medium italic underline underline-offset-2 hover:text-pink-800 transition-colors"
            >
              ramakhabbaz@gmail.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 w-full md:w-96">
            <span className="text-gray-700 font-medium">LinkedIn 💼</span>
            <a
              href="https://linkedin.com/in/rama-khabbaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-700 font-medium italic underline underline-offset-2 hover:text-pink-800 transition-colors"
            >
              linkedin.com/in/rama-khabbaz
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
