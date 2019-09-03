<template>
  <div class="menu--container">
    <div class="menu--icon">
      <ImageSrcSet src="/logo.png" class="menu--img" />
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
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      menus: [
        { link: "/about-us", text: "Về chúng tôi" },
        { link: "/menu", text: "Thực đơn" },
        { link: "/contact", text: "Liên hệ" }
      ],
      socials: [
        { link: "https://facebook.com/mummfood", img: "/img/facebook.svg" },
        {
          link: "https://www.instagram.com/mummfood",
          img: "/img/instagram.svg"
        }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
.menu--container {
  padding: 1rem;
  display: flex;
  .menu--icon {
    height: 5rem;
    width: 5rem;
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
</style>
