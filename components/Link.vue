<template functional>
  <div class="link">
    <div class="link--container">
      <a
        :href="props.document.to"
        :target="props.document.blank ? '_blank' : ''"
      >
        <ImageSrcSet
          v-if="props.document.img"
          :src="props.document.img"
          alt=""
        />
        {{ props.document.text }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link {
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  background: white;
  .link--container {
    display: flex;
    border: 2px solid $primary-color;
    align-items: center;
    a {
      $size: 1.6rem;
      display: flex;
      align-items: center;
      background-color: white;
      text-decoration: none;
      color: $primary-color;
      padding: $size;
      font-size: $size;
      font-weight: 500;
      transition: all 200ms ease-in;
      @media (max-width: $breakpoint-sm) {
        $size: 1.36rem;
        padding: $size;
        font-size: $size;
      }
      &:hover {
        background-color: #fec58b;
        color: white;
      }
      img {
        $size: 3rem;
        width: $size;
        height: $size;
        margin-right: 1rem;
      }
    }
  }
}
</style>
