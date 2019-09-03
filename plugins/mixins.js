import Vue from "vue";

Vue.mixin({
  methods: {
    styleBackgroundImage(img) {
      return { backgroundImage: `url('${img}')` };
    }
  }
});
