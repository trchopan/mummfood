import { defaultLocale, locales } from "@/plugins/i18n";

export const state = () => ({
  locales,
  locale: defaultLocale
});

export const actions = {};

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
};
