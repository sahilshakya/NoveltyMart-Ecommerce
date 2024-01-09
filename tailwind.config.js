/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#2A3969",
      secondary: "#D67621",
      light: "#ECF1FF",
      "gray-dark": "#2D2D2D",
      "gray-light": "#F7F8FA",
      "gray-medium": "#525252",
      error: "#B3251E",
      warning: "#F6BD41",
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    fontSize: {
      h1: "2.5rem",
      h2: "2.25rem",
      h3: "2rem",
      h4: "1.75rem",
      h5: "1.5rem",
      h6: "1.25rem",
      normal: "24px",
      small: "18px",
    },
    fontWeight: {
      bold: "600",
      regularBold: "400",
    },
    extend: {},
  },
  plugins: [],
};
