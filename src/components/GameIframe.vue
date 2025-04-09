<template>
  <div class="game-iframe-container">
    <iframe
      v-if="url"
      :src="url"
      frameborder="0"
      width="100%"
      height="100%"
      allow="camera; microphone"
      @load="onLoad"
    ></iframe>
    <p v-else>No game URL provided.</p>
  </div>
</template>

<script>
export default {
  name: 'GameIframe',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    onLoad() {
      console.log("Game iframe loaded successfully.");
    }
  }
}
</script>

<style scoped>
.game-iframe-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
