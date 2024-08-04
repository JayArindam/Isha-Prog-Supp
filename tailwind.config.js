/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#28231e",
        page: "#f4f0e5",
        card: "#c98c31",
        "card-hover": "#956824",
        "default-text": "#28231e",
        "blue-accent": "#cf4722",
        "blue-accent-hover": "#0b5ed7",
      },
    },
  },
  plugins: [],
};
