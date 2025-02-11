<template>
  <div class="background"></div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Background", // Component name
};
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/image/bg_demopage.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  touch-action: pan-y;
}
</style>
