import { title, meta, link, script } from "./headers.js";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title,
    meta,
    link,
    script
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/i18n.js",
    "~/plugins/components.js",
    "~/plugins/mixins.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/google-analytics",
    "@nuxtjs/style-resources",
    "@nuxtjs/markdownit"
  ],
  googleAnalytics: {
    id: "UA-ABCXYZ123"
  },
  styleResources: {
    scss: ["./assets/styles.scss"]
  },
  markdownit: {
    use: [["markdown-it-container", "paralax"]]
  },
  /*
   ** Router
   */
  router: {
    middleware: "i18n"
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ["vue-i18n"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
