import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
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


