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
    script,
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
    { src: "~/plugins/vue-gallery.js", mode: "client" },
    "~/plugins/components.js",
    "~/plugins/mixins.js",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/google-analytics", "@nuxtjs/style-resources"],
  googleAnalytics: {
    id: "UA-104476806-2",
  },
  styleResources: {
    scss: ["./assets/styles.scss"],
  },
  /*
   ** Router
   */
  router: {
    middleware: "i18n",
  },
  /*
   ** Build configuration
   */
  build: {
    // vendor: ["vue-i18n"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: "js-yaml-loader",
      });
    },
  },
};
