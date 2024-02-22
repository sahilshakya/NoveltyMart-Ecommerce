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

    fontSize: {
      h1: "2.5rem",
      h2: "2.25rem",
      h3: "2rem",
      h4: "1.75rem",
      h5: "1.5rem",
      h6: "1.25rem",
      big: "26px",
      normal: "24px",
      small: "18px",
      regularSmall: "16px",
      extraSmall: "14px",
      verySmall: "10px",
    },
    fontWeight: {
      bold: "600",
      semiBold: "500",
      regularBold: "400",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
