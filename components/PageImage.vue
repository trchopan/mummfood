<template functional>
  <div class="page-image">
    <div class="page-image__background">
      <ImageSrcSet :src="props.document.img" class="img" />
    </div>
    <h2 v-if="props.document.title" v-html="props.document.title"></h2>
  </div>
</template>

<style lang="scss" scoped>
.page-image {
  position: relative;
  .page-image__background {
    height: 100%;
    max-height: 100vh;
    overflow: hidden;
    @media (max-width: $breakpoint-sm) {
      height: 70vh;
    }
    .img {
      width: 100%;
      @media (max-width: $breakpoint-sm) {
        width: auto;
        height: 100%;
        transform: translate(-25%, 0);
      }
    }
  }
  h2 {
    background: grey;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 4rem;
    font-weight: 300;
    max-width: 55rem;
    padding: 1rem;
    transform: translate(-50%, -50%);
    @media (max-width: $breakpoint-md) {
      font-size: 2.5rem;
    }
    span {
      display: inline-block;
      @media (max-width: $breakpoint-sm) {
        display: block;
      }
    }
  }
}
</style>
