import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Work", hash: "#work" },
  { name: "Contact", hash: "#contact" },
];

const SCROLL_OFFSET = 80; // matches scroll-mt so section top aligns under header

function getSectionIdFromHash(hash: string): string {
  return hash.slice(1) || "home";
}

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const isClickScroll = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setActiveFromSection = useCallback((id: string) => {
    const hash = id ? "#" + id : "#home";
    setActiveHash(hash);
    if (window.location.hash !== hash) {
      window.history.replaceState(null, "", hash);
    }
  }, []);

  // Smooth scroll on nav click and update active state immediately
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const id = getSectionIdFromHash(hash);
    const el = document.getElementById(id);
    if (!el) return;

    isClickScroll.current = true;
    setActiveFromSection(id);

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Allow scroll spy to take over again after scroll settles
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isClickScroll.current = false;
    }, 1200);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy: which section is "active" (most visible in the top portion of the viewport)
  useEffect(() => {
    const sections = navItems
      .map(({ hash }) => ({
        hash,
        id: getSectionIdFromHash(hash),
        el: document.getElementById(getSectionIdFromHash(hash)),
      }))
      .filter((s) => s.el);

    const updateActive = () => {
      if (isClickScroll.current) return;

      const viewportTop = window.scrollY + SCROLL_OFFSET;
      const viewportMid = viewportTop + window.innerHeight * 0.3;

      let best = { id: "home", dist: Infinity };

      sections.forEach(({ id, el }) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const mid = top + rect.height * 0.3;
        const dist = Math.abs(mid - viewportMid);
        if (dist < best.dist) best = { id, dist };
      });

      setActiveFromSection(best.id);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [setActiveFromSection]);

  // Sync from URL on load or back/forward
  useEffect(() => {
    const syncFromHash = () => {
      if (isClickScroll.current) return;
      const hash = window.location.hash || "#home";
      setActiveHash(hash);
    };
    window.addEventListener("hashchange", syncFromHash);
    syncFromHash();
    return () => window.removeEventListener("hashchange", syncFromHash);
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
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex flex-col hover:opacity-90 transition-opacity"
        >
          <span className="font-display text-xl font-semibold text-pink-800">
            Rama Khabbaz <span className="text-pink-500">🌷</span>
          </span>
          <span className="text-sm text-gray-600 italic">
            User-driven. Design-minded. Code-powered.
          </span>
        </a>
        <ul className="flex flex-row flex-wrap gap-6 md:gap-8 justify-end">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.hash}
                onClick={(e) => handleNavClick(e, item.hash)}
                className={`relative text-base font-medium py-2 px-1 rounded transition-colors duration-200 ${
                  activeHash === item.hash
                    ? "text-pink-800"
                    : "text-gray-600 hover:text-pink-700 hover:bg-pink-200/30"
                }`}
              >
                {item.name}
                {activeHash === item.hash && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-pink-600 rounded-full"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 520,
                      damping: 32,
                      mass: 0.4,
                    }}
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
