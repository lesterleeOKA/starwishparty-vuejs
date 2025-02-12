<template>
  <div class="background"></div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Background", // Component name
  methods: {
    preventZoom(event) {
      let touchStartTime, lastTouchTime, timeDiff, touches;

      touchStartTime = event.timeStamp;
      lastTouchTime = this.$refs.gameImage.dataset.lastTouch || touchStartTime;
      timeDiff = touchStartTime - lastTouchTime;
      touches = event.touches.length;
      this.$refs.gameImage.dataset.lastTouch = touchStartTime;

      if (!timeDiff || timeDiff > 500 || touches > 1) return; // not double-tap

      event.preventDefault(); // double tap - prevent the zoom
      // also synthesize click events we just swallowed up
      this.$refs.gameImage.click();
      this.$refs.gameImage.click();
    },
    nodoubletapzoom() {
      const elements = this.$el.querySelectorAll('.game-card .game-image');
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('touchstart', this.preventZoom);
      }
      this.selectedGame = "5"; // Set default value
    }
  },
  mounted() {
    this.nodoubletapzoom(); // Call the method when the component is mounted
  },
  beforeUnmount() {
    const elements = this.$el.querySelectorAll('.game-card .game-image');
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener('touchstart', this.preventZoom);
    }
  },
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
