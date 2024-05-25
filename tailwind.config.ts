import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0048ff",

          secondary: "#1b31ff",

          accent: "#007ffd",

          neutral: "#00050d",

          "base-100": "#fff9fc",

          info: "#0094be",

          success: "#00f18a",

          warning: "#ff5400",

          error: "#ff0020",
        },
      },
    ],
  },
};
export default config;
