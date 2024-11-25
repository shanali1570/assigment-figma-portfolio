import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f1f1",
        footerBackground:"#FAF5F5",
        myPink:"#F98585",
        myBlack:"#21243D",
        recentBackground:"F4E2E2",
        heroElipse:"#dfd8d8"
      },
    },
  },
  plugins: [],
} satisfies Config;
