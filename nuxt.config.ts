import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", 'mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
