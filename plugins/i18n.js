import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const defaultLocale = "en";
export const locales = ["en", "vi"];

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: defaultLocale,
    messages: locales.reduce(
      (acc, cur) =>
        Object.assign(acc, { [cur]: require(`~/locales/${cur}.json`) }),
      {}
    )
  });
  app.i18n.path = link => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  };
};
