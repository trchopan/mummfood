<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        width="600"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=h%26m%20media&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
</style>
