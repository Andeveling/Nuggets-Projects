/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["night"],
  },
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}
