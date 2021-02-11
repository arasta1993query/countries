<template>
  <div :class="$style.image">
    <img :src="src" alt="">
  </div>
</template>

<script>
  export default {
    name: "ImageContainer",
    props: {
      src: String
    }
  }
</script>

<style lang="scss" module>
  .image {
    width: 100%;
    padding-top: 75%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
