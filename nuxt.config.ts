// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
  css: ["@/assets/css/tailwind.css", "@/assets/css/fonts.css"],
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // vite:{
  //     server: {
  //       host: "0.0.0.0",
  //       port: 3000,
  //       allowedHosts: [".ngrok-free.app"],
  //     }
  // }
});
