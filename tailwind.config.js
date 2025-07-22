/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#e46665", // B63E96
        primaryDark: "#58E6D9", //58E6D9
        secondary: "#6C7A89",
        secondaryDark: "#AAB7B8",
        homeBack: "#75aabf",
        homeBackDark: "#0B1F3F",

        // Logo palette
        logoBlue1: "#00619c",
        logoBlue2: "#02335f",
        logoBlue3: "#033e6c",
        logoBlue4: "#036097",
        logoBlue5: "#047dbb",
        logoBlue6: "#066ca2",
        logoBlue7: "#0789c6",
        logoBlue8: "#199bd3",
        logoBlue9: "#2a8dbc",
        logoBlue10: "#358dac",
        logoBlue11: "#3a9dce",
        logoBlue12: "#4a94b2",
        logoBlue13: "#75aabf",
        logoBlue14: "#90bdd4",
        logoBlue15: "#acd3dd",
        logoBlue16: "#b0c87f",
        logoBlue17: "#bfc9bb",

        logoGreen1: "#1f824b",
        logoGreen2: "#83b197",
        logoGreen3: "#aaccd1",

        logoYellow1: "#a1c14c",
        logoYellow2: "#afc87f",
        logoYellow3: "#f7cf31",
        logoYellow4: "#f7df75",

        logoOrange1: "#e97b2c",

        logoRed1: "#e12a2a",
        logoRed2: "#e45652",
        logoRed3: "#e46665",

        logoPeach1: "#eaa6a3",
        logoPeach2: "#ebd8d1",
        logoPeach3: "#ecc2bb",

        logoCream1: "#e8ecd3",
        logoCream2: "#e8efd9",

        logoSand1: "#c4aa9c",
        logoSand2: "#c6b2a5",
        logoSand3: "#d2c9bb",

        logoLight1: "#f9eee6"
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
