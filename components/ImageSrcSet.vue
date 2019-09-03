<template>
  <img :src="src" :srcset="srcset" :alt="alt" />
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: false }
  },
  computed: {
    srcset() {
      const n = this.src.split(".");
      if (!["jpeg", "jpg", "png"].includes(n[2])) {
        return "";
      }
      return `${n[0]}@2x.${n[1]} 2x, ${n[0]}@3x.${n[1]} 3x`;
    }
  }
});
</script>
