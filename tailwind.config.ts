import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        young: ['Young-Serif']
      },
      colors: {
        nutmeg: 'hsl(14, 45%, 36%)',
        raspberry: 'hsl(332, 51%, 32%)',
        rose: 'hsl(330, 100%, 98%)',
        egg: 'hsl(30, 54%, 90%)',
        grey: 'hsl(30, 18%, 87%)',
        brown: 'hsl(30, 10%, 34%)',
        charcoal: 'hsl(24, 5%, 18%)'
      }
    }
  },
  plugins: [],
};
export default config;
