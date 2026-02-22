import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // esbuild como minificador — mais rápido e menor que terser
    minify: "esbuild",
    cssMinify: true,
    // sem sourcemap em prod → reduz peso do deploy
    sourcemap: false,
    // alvo moderno: elimina polyfills desnecessários
    target: "esnext",
    cssTarget: "chrome90",
    reportCompressedSize: true,
    // chunk único < 500 kB antes de dividir (Vite default é 500)
    chunkSizeWarningLimit: 400,
    rollupOptions: {
      output: {
        // Chunks isolados por responsabilidade
        manualChunks: {
          // Núcleo React — carrega primeiro, fica em cache
          vendor: ["react", "react-dom"],
          // Animações pesadas — só baixam quando seção aparece
          animations: ["framer-motion"],
          // Ícones — tree-shakeable, mas isolados para cache
          icons: ["lucide-react"],
        },
      },
    },
  },
});
