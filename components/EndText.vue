<template functional>
    <div class="end-text">
      <p v-for="text in props.document" v-html="text"></p>
    </div>
</template>

<style lang="scss">
.end-text {
margin-top: 3rem;
padding: 3rem 1rem;
background: black;
color: white;
  p {
    padding: 0.2rem 0;
  }
}
.end-text > p > a {
  color: white;
  border-bottom: solid 1px white;
}
</style>
