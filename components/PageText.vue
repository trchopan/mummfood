<template functional>
  <div class="page-text">
    <div
      v-if="props.document.img"
      class="page--icon"
      :style="parent.styleBackgroundImage(props.document.img)"
    ></div>
    <h2 v-if="props.document.title">{{ props.document.title }}</h2>
    <p v-for="body in props.document.body" v-html="body"></p>
  </div>
</template>

<style lang="scss" scoped>
.page-text {
  padding: 4rem 1rem;
  text-align: center;
  background: white;
  .page--icon {
    $size: 17rem;
    width: $size;
    height: $size;
    margin: auto;
    @include background-img;
    background-size: contain;
    @media (max-width: $breakpoint-md) {
      $size: 12rem;
      width: $size;
      height: $size;
    }
  }
  h2 {
    padding: 3rem 0;
    font-size: 2rem;
    font-weight: 300;
  }
  p {
    margin: auto;
    max-width: 700px;
    font-size: 1.36rem;
    font-weight: 300;
  }
}
</style>
