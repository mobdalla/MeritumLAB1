import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,  // ← Disabilita source maps in produzione
  },
  server: {
    sourcemap: false,  // ← Disabilita in sviluppo (opzionale)
  }
})
