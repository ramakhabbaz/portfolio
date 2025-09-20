import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Work", hash: "#work" },
  { name: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  return (
    <motion.header
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-pink-200 shadow-md sticky top-0 z-50"
    >
      <nav className="max-w-full mx-auto px-4 md:px-12 py-4 md:py-6 flex flex-row items-center justify-between flex-wrap">
        {/* Left: Name & Slogan */}
        <div className="flex flex-col">
          <div className="text-xl font-bold text-pink-800">Rama Khabbaz 🌷</div>
          <div className="text-sm text-gray-600 italic mb-3 md:mb-0">
            User-driven. Design-minded. Code-powered.
          </div>
        </div>
        {/* Right: Navbar */}
        <ul className="flex flex-row flex-wrap gap-4 md:gap-6 justify-end">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.hash}
                className={`text-lg ${
                  activeHash === item.hash
                    ? "text-pink-800 font-bold"
                    : "text-gray-700 hover:text-pink-900"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
