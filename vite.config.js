import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "9bf928201a94.ngrok-free.app", // ngrok bergan domen
    ],
  },
});
