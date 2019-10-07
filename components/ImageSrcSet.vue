<template>
  <img :src="src" :srcset="srcset" :alt="alt" />
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    src: { type: String, required: true },
    srcArray: { type: Array, required: false },
    srcs: { type: String, required: false },
    alt: { type: String, required: false },
  },
  computed: {
    srcset() {
      const lastDot = this.src.lastIndexOf(".");
      const ext = this.src.slice(lastDot, this.src.length);
      const name = this.src.slice(0, lastDot);
      if (![".jpeg", ".jpg", ".png"].includes(ext)) {
        return "";
      }
      const srcs = this.srcs
        ? this.srcs.split(",")
        : this.srcArray
        ? this.srcArray
        : ["2x", "3x"];
      const result = srcs
        .reduce((acc, cur) => {
          acc.push(`${name}@${cur}${ext} ${cur}`);
          return acc;
        }, [])
        .join(", ");
      return result;
    },
  },
});
</script>
