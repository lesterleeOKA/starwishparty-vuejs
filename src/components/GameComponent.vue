<template>
  <div class="game-container" ref="gameContainer">
    <iframe
      v-if="gameUrl"
      :src="gameUrl"
      class="game-iframe"
      frameborder="0"
    ></iframe>
    <p v-else>Game URL is not available.</p>
    <button @click="leaveGame">Leave Game</button>
  </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
  name: 'GameComponent',
  data() {
    return {
      gameUrl: null,
    };
  },
  mounted() {
    this.gameUrl = this.$route.query.url;
    window.history.replaceState(null, null, window.location.href);

    // 確保在 DOM 更新後進入全螢幕模式
    nextTick(() => {
      this.enterFullScreen();
    });
  },
  methods: {
    enterFullScreen() {
      const container = this.$refs.gameContainer;
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.mozRequestFullScreen) { // Firefox
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) { // IE/Edge
        container.msRequestFullscreen();
      }
    },
    leaveGame() {
      const newUrl = 'http://localhost:5173/RainbowOne/webapp/OKAGames/VueTest/'; // 替換為你想要的 URL
      window.location.replace(newUrl);
    },
  },
};
</script>

<style scoped>
html, body {
  margin: 0;
  height: 100%; /* Full height */
}

.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height */
  background-color: #f0f0f0; /* Light background */
}

.game-iframe {
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  border: none; /* No border */
}
</style>
