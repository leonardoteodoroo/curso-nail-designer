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
    // Minificação mais agressiva para diminuir tamanho do bundle final
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        // Separação de arquivos maiores em pacotes isolados para ter cache melhor
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion"],
          // Outras bibliotecas que pesam muito se forem agrupadas podem ir pra cá
        },
      },
    },
  },
});
