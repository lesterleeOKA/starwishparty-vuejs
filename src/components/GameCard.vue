<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="game-container">
    <div v-for="game in games" :key="game.id" class="game-card">
      <img :src="game.image" :alt="game.title" class="game-image" translate="no"/>
      <h1 class="game-title">{{ game.title }}</h1>
      <div v-if="game.hasPairs" class="game-controls">
        <h1>Number of Cards:</h1>
        <select v-model="game.selectedPair" style="overflow-y:auto;flex: 0 0 30%;">
          <option v-for="pair in game.pairs" :value="pair" :key="pair">{{ pair }}x2</option>
        </select>
      </div>

      <div v-if="game.isMotionGame" class="game-controls">
          <h1>Virtual Background:</h1>
          <label class="switch">
            <input type="checkbox" v-model="game.removal">
            <span class="slider"></span>
          </label>
      </div>

      <div v-if="game.isMotionGame" class="game-controls">
          <h1>Detection Model:</h1>
          <label class="switch">
            <input type="checkbox" v-model="game.model">
            <span class="slider"></span>
          </label>
      </div>

      <div class="game-controls">
        <select v-model="game.selectedUnit" style="overflow-y:auto;">
          <option v-for="unit in game.units" :value="unit.value" :key="unit.value">{{ unit.label }}</option>
        </select>
        <button @click="playGame(game)" class="play-button">Play</button>
      </div>
    </div>
  </div>
</template>

<script>
import { games } from '../game.js';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Matching", // Component name
  data() {
    return {
      games: games,
    };
  },
  methods: {
    playGame(game) {
      if(game.hasPairs === true){
        const selectedUnit = game.selectedUnit;
        const selectedPairs = game.selectedPair;
        const baseUrl = `${import.meta.env.VITE_BASE_HEADER}/RainbowOne/webapp/2.8/gameFile/OKAGames/${game.gameName}/`;
        const newUrl = `${baseUrl}?unit=${selectedUnit}&pairs=${selectedPairs}`;
        window.open(newUrl, '_self');
      }
      else if(game.isMotionGame){
        const selectedUnit = game.selectedUnit;
        const removalStatus = game.removal ? "&removal=1" : "";
        const selectedModel = game.model ? "full" : "lite";
        const baseUrl = `${import.meta.env.VITE_BASE_HEADER}/RainbowOne/webapp/2.8/gameFile/OKAGames/${game.gameName}/`;
        const newUrl = `${baseUrl}?unit=${selectedUnit}${removalStatus}&model=${selectedModel}`;
        window.open(newUrl, '_self');
      }
      else {
        const selectedUnit = game.selectedUnit;
        const baseUrl = `${import.meta.env.VITE_BASE_HEADER}/RainbowOne/webapp/2.8/gameFile/OKAGames/${game.gameName}/`;
        const newUrl = `${baseUrl}?unit=${selectedUnit}`;
        window.open(newUrl, '_self');
      }

    }
  }
}
</script>
<style scoped>
 h1{
    font-size: 1.2vw;
  }
.game-card {
    display: flex;
    flex-direction: column;
    touch-action: manipulation;
    height: calc(min(30vw, 30vw));
  }
  .game-card .game-image {
    border-radius: calc(min(2vh, 2vw));
    filter: drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.5));
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    object-fit: cover;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
  }

  .game-card .game-title {
    flex: 0 0 auto;
    padding-top: 1vw;
    padding-bottom: 1vw;
    margin: 0;
    color: #ffffff;
    font-family: Arial;
  }
  .game-card .note {
    margin-bottom: calc(min(10vh, 10vw));
    font-size: calc(min(1.6vh, 1.6vw));
    text-align: center;
    font-family: Arial;
    font-weight: 100;
  }

  .game-card .game-controls {
    flex: 0 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(min(5vh, 2.5vw));
    padding: calc(min(0.5vh, 0.5vw));
  }

  .game-card .game-controls select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    overflow: hidden; /* Add this line */
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z' fill='%23000000'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0px center;
    background-size: calc(min(2vh, 2vw));
    padding-right: 10px; /* Add this line */
    flex: 0 0 72%;
    margin-right: 10px;
    overflow-y: auto;
    height: 100%;
    border-radius: calc(min(0.5vh, 0.5vw));
    font-size: calc(min(5vh, 1vw));
    padding-left: calc(min(0.5vh, 0.5vw));
    font-family: Arial, sans-serif;
  }

  .no-translate {
    translate: no;
  }

  .game-card .game-controls .play-button {
    flex: 0 0 25%;
    display: block;
    background-color: #499fd1;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 1.2vw;
    border-radius: 0.5vh;
    font-family: Arial;
    border: none;
    height: 100%;
  }

  .game-card .settings{
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 17.8%; /* Ensure the container takes full width */
  box-sizing: border-box; /* Include padding in element's total width/height */
  padding: calc(min(0.5vh, 0.5vw));
}

.game-card .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 5px;
}

.game-card .modelOption {
  display: inline-block;
  height: 34px;
  margin-left: auto;
  font-size: calc(min(1vh, 1vw));
  font-weight: bold;
  font-family: Arial, sans-serif;
  border-radius: calc(min(0.5vh, 0.5vw));
  width: calc(min(4vw, 4vw));
}

.game-card .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.game-card .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.game-card .slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

.game-card input:checked + .slider {
  background-color: #2196F3;
}

.game-card input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

.game-card input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
