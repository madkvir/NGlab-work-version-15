/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 5s ease-in-out infinite",
        "pulse-bg": "pulse-bg 2s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        slideDown: "slideDown 0.2s ease-out",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(16,185,129,0.2)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(16,185,129,0.4)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 0.8,
            transform: "scale(0.98)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
