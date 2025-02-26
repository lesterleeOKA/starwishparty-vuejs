<script setup>
import Games from './GameCard.vue'
</script>
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="starwish-party-container">
    <div class="starwish-party">
      <div class="logo"></div>
      <div class="note">
        <br />
        Note: These games are demo only. They are not the final games.
        <br />
        Recommend to use iPad to play.
      </div>
      <!--games-->
      <div class="game-container">
        <Games/>
      </div>
    </div>
  </div>
  <div class="version-text">Ver 1.09</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Container",
}
</script>

<style scoped>
.starwish-party-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0%;
  right: 0%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  touch-action: pan-y;
 }
.starwish-party {
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 93%;
  box-sizing: border-box;
}
.logo {
  position: absolute;
  bottom: 50%;
  font-weight: bold;
  content: url('/image/logo_demopage.png');
  width: calc(min(75vh, 75vw));
}
.game-demo-text {
    font-size: 14px;
}
.note {
  padding-bottom: calc(min(10vh, 10vw));
  font-size: calc(min(1.6vh, 1.6vw));
  text-align: center;
  font-family: Arial;
}
.version-text {
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 12px;
  color: #ffffff;
  z-index: 1;
}
.game-container {
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15vh, 22vw));
	/*gap: calc(min(1.5vh, 1.5vw));*/
  -webkit-overflow-scrolling: auto;
  top: calc(min(5vh, 5vw));
  /*padding-left: calc(min(2.5vw, 2.5vh));*/
}
.game-container > * {
  margin: 0 calc(min(7.5vw, 7.5vh) / 2);
}
</style>
