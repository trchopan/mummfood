<template>
  <div id="home">
    <Menu :menus="document.menus" :socials="document.socials" />
    <section class="container">
      <PageText :document="document.intro" />
      <FloatText :document="document.head" id="about-us" />
      <PageText :document="document.order" />
      <Link :document="document.link" />
      <Link :document="document.phone" />
      <PageImage :document="document.clean" />
      <ImageList :document="document.gallery" id="menu" />
      <EndText :document="document.end" />
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import document from "./index.yaml";

export default Vue.extend({
  data() {
    return {
      document,
    };
  },
  mounted() {
    if (process.client) {
      AOS.init();
    }
  },
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  margin: auto;
}
</style>
