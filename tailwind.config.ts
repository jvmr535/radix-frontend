import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
// import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            primary: {
              50: "#f3f7f9",
              100: "#e6f0f3",
              200: "#c0d9e0",
              300: "#9ac2cd",
              400: "#4d95a7",
              500: "#2A1844",
              600: "#005f76",
              700: "#004b60",
              800: "#003847",
              900: "#002c36",
            },
            secondary: {
              50: "#f8f8f8",
              100: "#f1f1f1",
              200: "#dcdcdc",
              300: "#c7c7c7",
              400: "#9e9e9e",
              500: "#757575",
              600: "#6a6a6a",
              700: "#575757",
              800: "#3f3f3f",
              900: "#323232",
            },
            success: {
              50: "#f0f9f4",
              100: "#e1f3e9",
              200: "#b4e0cb",
              300: "#85cdbd",
              400: "#3fb89f",
              500: "#00a389",
              600: "#00977a",
              700: "#007f65",
              800: "#005f4c",
              900: "#004b3e",
            },
            warning: {
              50: "#fffdf6",
              100: "#fffbee",
              200: "#fff7d1",
              300: "#fff4b4",
              400: "#ffec7a",
              500: "#ffe440",
              600: "#e6d83a",
              700: "#bfb52f",
              800: "#8f8c23",
              900: "#73731b",
            },
          },
        },
        dark: {
          layout: {},
          colors: {},
        },
      },
    }),
  ],
};
export default config;
