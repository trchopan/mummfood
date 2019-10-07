<template>
  <div class="img-list" :id="id">
    <div class="img-list--container">
      <client-only>
        <gallery :images="document" :index="index" @close="index = null">
          <h3 class="title">woot</h3>
        </gallery>
      </client-only>
      <div
        v-for="(img, i) in document"
        class="img-item"
        :style="styleBackgroundImage(img.href)"
        @click="index = i"
      >
      <div class="img-text">{{ img.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    document: { type: Array },
    id: { type: String },
  },
  data() {
    return {
      index: null,
    };
  },
});
</script>

<style lang="scss" scoped>
.img-list {
  padding: 3rem 1rem;
  background: white;
  @media (max-width: $breakpoint-md) {
    padding: 3rem 0.5rem;
  }
  .img-list--container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .img-item {
      position: relative;
      margin: 0.3rem;
      width: 20rem;
      height: 16rem;
      @include background-img;
      background-size: cover;
      @media (max-width: $breakpoint-md) {
        width: 10rem;
        height: 8rem;
      }
      .img-text {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        padding: 1rem;
        color: white;
        background: #0000005e;
        font-weight: 600;
        @media (max-width: $breakpoint-md) {
          padding: 0.5rem;
          height: 2.5rem;
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>

<style lang="scss">
#blueimp-gallery > h3 {
  color: black;
  background-color: white;
  padding: 0.5rem;
  opacity: 1;
  text-shadow: none;
  font-weight: 300;
  top: auto;
  bottom: 15px;
  @media (max-width: $breakpoint-sm) {
    font-size: 1.2rem;
  }
}
</style>
