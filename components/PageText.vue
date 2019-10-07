<template functional>
  <div class="page-text" :id="props.document.id">
    <div
      v-if="props.document.img"
      class="page--icon"
      :style="parent.styleBackgroundImage(props.document.img)"
    ></div>
    <h2 v-if="props.document.title">{{ props.document.title }}</h2>
    <p v-for="body in props.document.body" v-html="body"></p>
  </div>
</template>

<style lang="scss">
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
    font-weight: 400;
    color: #fd8003;
  }
  p {
    margin: 1rem auto;
    max-width: 600px;
    font-size: 1.36rem;
    font-weight: 300;
    b {
      font-weight: 500;
    }
  }
}
</style>
