/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        // Aesthetic pink palette: soft blush → dusty rose → deeper pink
        pink: {
          50: "#fefbfd",
          100: "#fce7f3",
          150: "#fadef0",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#500724",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        "card": "0 4px 20px -2px rgba(219, 39, 119, 0.12), 0 0 0 1px rgba(251, 207, 232, 0.4)",
        "card-hover": "0 12px 40px -8px rgba(219, 39, 119, 0.2), 0 0 0 1px rgba(251, 207, 232, 0.5)",
      },
    },
  },
  plugins: [],
};
