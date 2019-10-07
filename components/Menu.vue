<template>
  <div
    ref="menu"
    class="menu"
    :style="{ paddingTop: sticky ? stickyTop + 'px' : 0 }"
  >
    <div class="menu--container" :class="{ active, sticky }">
      <div class="menu--icon" v-show="sticky">
        <a href="#home">
          <ImageSrcSet src="/logo.png" class="menu--img" />
        </a>
      </div>
      <div class="flex-spacer"></div>
      <div class="menu--items">
        <a v-for="menu in menus" :href="menu.link" class="menu--text">
          {{ menu.text }}
        </a>
        <a
          v-for="social in socials"
          :href="social.link"
          class="menu--icon"
          target="_blank"
        >
          <img :src="social.img" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import debounce from "lodash/debounce";

export default Vue.extend({
  props: {
    menus: { type: Array, required: true },
    socials: { type: Array, required: true },
  },
  data() {
    return {
      stickyTop: 0,
      sticky: false,
      active: true,
    };
  },
  methods: {
    toggleActive(sticky) {
      if (this.sticky === sticky) {
        return;
      }
      this.active = false;
      setTimeout(() => {
        this.sticky = sticky;
        this.active = true;
      }, 200);
    },
    onScroll(event) {
      if (window.pageYOffset > 300) {
        this.toggleActive(true);
      } else {
        this.toggleActive(false);
      }
    },
  },
  created() {
    this.debouncedScroll = debounce(this.onScroll, 200);
    if (process.client) {
      window.addEventListener("scroll", this.debouncedScroll);
    }
  },
  mounted() {
    this.stickyTop = this.$refs.menu.offsetHeight;
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.debouncedScroll);
    }
  },
});
</script>

<style lang="scss" scoped>
.menu--container {
  padding: 1rem;
  display: flex;
  width: 100%;
  background: #ffffff;
  height: 7rem;
  opacity: 0;
  &.active {
    opacity: 1;
    transition: opacity 0.5s;
  }
  .menu--icon {
    $size: 5rem;
    height: $size;
    width: $size;
    .menu--img {
      height: 100%;
    }
  }
  .flex-spacer {
    flex: 1;
  }
  .menu--items {
    align-items: center;
    display: flex;
    .menu--text {
      color: $primary-color;
      margin: 0 1rem;
      font-size: 1rem;
      font-weight: 500;
      @media (max-width: $breakpoint-md) {
        display: none;
      }
    }
    .menu--icon {
      margin: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        $size: 2rem;
        width: $size;
        height: $size;
      }
    }
  }
}
.sticky {
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0.5rem;
  height: 4rem;
  @media (max-width: $breakpoint-sm) {
    height: 3rem;
  }
  .menu--icon {
    $size: 3rem;
    height: $size;
    width: $size;
    @media (max-width: $breakpoint-sm) {
      $size: 2rem;
      height: $size;
      width: $size;
    }
  }
}
</style>
