<template functional>
  <div class="img-list">
    <div class="img-list--container">
      <div
        v-for="img in props.document.list"
        class="img-item"
        :style="parent.styleBackgroundImage(img.link)"
      ></div>
    </div>
  </div>
</template>

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
      margin: 0.3rem;
      width: 20rem;
      height: 16rem;
      @include background-img;
      background-size: cover;
      @media (max-width: $breakpoint-md) {
        width: 10rem;
        height: 8rem;
      }
    }
  }
}
</style>
