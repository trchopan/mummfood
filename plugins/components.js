/**
 * This will find all the .*.vue files in the current dir and register as
 * global components
 */
import Vue from "vue";
const requireComponents = require.context("~/components/", false, /.*.vue$/);

requireComponents.keys().forEach(filename => {
  const componentConfig = requireComponents(filename);
  const componentName = filename.replace(/^\.\//, "").replace(/\.\w+$/, "");

  Vue.component(componentName, componentConfig.default || componentConfig);
});
