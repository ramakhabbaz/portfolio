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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map(({ hash }) => document.querySelector(hash)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            setActiveHash("#" + id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-pink-100/90 backdrop-blur-md shadow-card border-b border-pink-200/40"
          : "bg-pink-100 shadow-sm"
      }`}
    >
      <nav className="max-w-full mx-auto px-4 md:px-12 py-4 md:py-5 flex flex-row items-center justify-between flex-wrap gap-4">
        <div className="flex flex-col">
          <span className="font-display text-xl font-semibold text-pink-800">
            Rama Khabbaz <span className="text-pink-500">🌷</span>
          </span>
          <span className="text-sm text-gray-600 italic">
            User-driven. Design-minded. Code-powered.
          </span>
        </div>
        <ul className="flex flex-row flex-wrap gap-6 md:gap-8 justify-end">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.hash}
                className={`relative text-base font-medium transition-smooth py-1 ${
                  activeHash === item.hash
                    ? "text-pink-800"
                    : "text-gray-600 hover:text-pink-700"
                }`}
              >
                {item.name}
                {activeHash === item.hash && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-pink-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
