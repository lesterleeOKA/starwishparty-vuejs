<template>
  <div class="game-container" ref="gameContainer" :class="{ 'fullscreen': isFullscreen }">
    <iframe
      v-if="gameUrl"
      :src="gameUrl"
      class="game-iframe"
      frameborder="0"
      allow="camera; microphone"
    ></iframe>
    <p v-else>Game URL is not available.</p>
  </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
  name: 'GameComponent',
  data() {
    return {
      gameUrl: null,
      isFullscreen: false,
      startY: 0,
    };
  },
  mounted() {
    this.gameUrl = this.$route.query.url;
    window.location.replace(this.gameUrl);
    //console.log(this.gameUrl);
    /*nextTick(() => {
      this.enterFullScreen();
    });*/

    // Listen for fullscreen change events
    /*document.addEventListener('fullscreenchange', this.handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', this.handleFullscreenChange);*/
  },
  beforeDestroy() {
    // Clean up event listeners
    /*document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('MSFullscreenChange', this.handleFullscreenChange);*/
  },
  methods: {
    enterFullScreen() {
    const container = this.$refs.gameContainer;
    const requestFullscreen = container.requestFullscreen ||
                              container.mozRequestFullScreen ||
                              container.webkitRequestFullscreen ||
                              container.msRequestFullscreen;

    if (requestFullscreen) {
      requestFullscreen.call(container).catch((error) => {
        console.error("Error attempting to enable full-screen mode:", error);
      });
    }
  },
    handleFullscreenChange() {
      this.isFullscreen = !!document.fullscreenElement;

      if (!this.isFullscreen) {
        this.enterFullScreen();
      }
    },
  },
};
</script>

<style scoped>
html, body {
  margin: 0;
  width: 100%;
  height: 100%; /* Full height */
}

.game-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: #000000; /* Background color */
  transition: height 0.3s; /* Smooth transition for height */
}

.game-container.fullscreen {
  height: calc(100vh - 50px); /* Adjust height to account for the top menu bar */
}

.game-iframe {
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  border: none; /* No border */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent; /* Transparent overlay */
  pointer-events: all; /* Capture all pointer events */
  z-index: 10; /* Ensure it is on top */
}
</style>
