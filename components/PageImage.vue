<template functional>
  <div class="page-image" :id="props.id">
    <div class="page-image__background">
      <ImageSrcSet :src="props.document.img" class="img" />
    </div>
    <div class="page-image__text">
      <h2 v-if="props.document.title" data-aos="fade-up" data-aos-offset="300">
        <template v-if="Array.isArray(props.document.title)">
          <span v-for="s in props.document.title">{{ s }} </span>
        </template>
        <template v-else>{{ props.document.title }}</template>
      </h2>
    </div>
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
  .page-image__text {
    position: absolute;
    top: 50%;
    width: 100%;
  }
  h2 {
    background: white;
    text-align: center;
    color: $primary-color;
    font-size: 4rem;
    font-weight: 300;
    max-width: 55rem;
    padding: 1rem;
    @media (max-width: $breakpoint-md) {
      font-size: 2.5rem;
    }
    span {
      display: block;
    }
  }
}
</style>
