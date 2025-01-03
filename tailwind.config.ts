import type { Config } from "tailwindcss"
import daisyui from "daisyui"
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)"
  //     }
  //   }
  // },
  // daisyui: {
  //   themes: [
  //     {
  //       p: {
  //         primary: "#facc15",
  //         secondary: "#a3e635",
  //         accent: "#ef4444",
  //         neutral: "#22c55e",
  //         "base-100": "#292524",
  //         info: "#06b6d4",
  //         success: "#84cc16",
  //         warning: "#fde047",
  //         error: "#dc2626"
  //       }
  //     }
  //   ]
  // },
  plugins: [daisyui]
} satisfies Config
