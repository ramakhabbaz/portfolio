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
      <nav className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-xl font-bold text-pink-800">Rama Khabbaz 🌷</div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-lg ${
                    isActive ? "text-pink-800 font-bold" : "text-gray-700"
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