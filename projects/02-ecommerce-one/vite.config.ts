import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import dns from "dns"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    host: "localhost",
    port: 3000,
  },
})
// vite.config.js
dns.setDefaultResultOrder("verbatim")


