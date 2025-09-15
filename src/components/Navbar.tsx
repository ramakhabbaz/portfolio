import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="bg-pink-200 shadow-md sticky top-0 z-50">
      <nav className="max-w-full mx-auto px-4 md:px-12 py-4 md:py-6 flex flex-row items-center justify-between flex-wrap">
        {/* Left: Name*/}
        <div className="text-xl font-bold text-pink-800 mb-2 md:mb-0">
          Rama Khabbaz 🌷
        </div>
        {/* Right: Navbar */}
        <ul className="flex flex-row flex-wrap gap-4 md:gap-6 justify-end">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-lg ${
                    isActive
                      ? "text-pink-800 font-bold"
                      : "text-gray-700 hover:text-pink-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
