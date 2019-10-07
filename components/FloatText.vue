<template functional>
  <div :id="props.id" class="text--container">
    <ImageSrcSet src="/img/mix.jpg" srcs="0.5x,0.75x" class="text--img" />
    <div class="text--text">
      <p v-for="text in props.document">{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text--container {
  position: relative;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  @media (max-width: $breakpoint-sm) {
    height: 100vh;
  }
  .text--img {
    width: 100%;
    @media (max-width: $breakpoint-sm) {
      width: auto;
      height: 100%;
      // transform: translate(-25%, 0);
    }
  }
  .text--text {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translate(0, -50%);
    width: 50%;
    min-width: 28rem;
    background: white;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 2rem;
    p {
      margin: 1rem 0;
    }
    @media (max-width: $breakpoint-sm) {
      min-width: auto;
      padding: 0.5rem 1rem;
      left: 0;
      // top: 0;
      width: calc(100% - 1rem);
      transform: translate(0.5rem, -50%);
    }
  }
}
</style>
