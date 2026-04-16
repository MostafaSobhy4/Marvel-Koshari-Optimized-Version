import { defineConfig } from "vite";
import { resolve } from "path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    viteImagemin({
      webp: {
        quality: 75,
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "aboutus.html"),
        branches: resolve(__dirname, "branches.html"),
        cart: resolve(__dirname, "cart.html"),
        contact: resolve(__dirname, "contactus.html"),
        login: resolve(__dirname, "login.html"),
        signup: resolve(__dirname, "signup.html"),
      },
    },
  },
});


