import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: { allowedHosts: ["sloth", "cardiac-skipper-wildland.ngrok-free.dev"] },
  plugins: [react(), tailwindcss()],
});
