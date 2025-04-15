/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Atkinson Hyperlegible Mono", "monospace"],
      },
      colors: {
        dark: "#090B1A",
        gold: "#E09826",
        green: "#325D6A",
        blue: "#6C819E",
        red: "#640E09",
        silver: "#C0BEBF",
      },
      boxShadow: {
        'navbar': '0 4px 30px -10px rgba(108, 129, 158, 0.3)',
      },
    },
  },
  plugins: [],
};
