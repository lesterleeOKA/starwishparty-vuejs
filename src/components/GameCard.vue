<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="game-container">
    <div v-for="game in visibleGames" :key="game.id" class="game-card">
      <img :src="this.currentSiteUrl + game.image" :alt="game.title" class="game-image" translate="no"/>
      <h1 class="game-title">{{ game.title }}</h1>
      <!--Settings items for different games-->
      <div v-if="game.hasPairs" class="game-controls">
        <h1>Number of Cards:</h1>
        <select v-model="game.selectedPair" style="overflow-y:auto;flex: 0 0 30%;">
          <option v-for="pair in game.pairs" :value="pair" :key="pair">{{ pair }}x2</option>
        </select>
      </div>

      <div v-if="game.gameSettings.battle" class="game-controls">
        <h1>Battle Mode:</h1>
        <label class="switch">
            <input type="checkbox" v-model="game.gameSettings.battle.enabled">
            <span class="slider"></span>
          </label>
      </div>

      <div v-if="game.selectedEngfs" class="game-controls">
        <h1>Objects Font Size:</h1>
        <select v-model="game.selectedEngfs" style="overflow-y:auto;flex: 0 0 30%;">
          <option v-for="fs in game.engfs" :value="fs" :key="fs">{{ fs }}px</option>
        </select>
      </div>

      <div v-if="game.gameSettings.isMotionGame && game.gameSettings.removal.show" class="game-controls">
          <h1>Virtual Background:</h1>
          <label class="switch">
            <input type="checkbox" v-model="game.gameSettings.removal.enabled">
            <span class="slider"></span>
          </label>
      </div>

      <div v-if="game.gameSettings.isMotionGame && game.gameSettings.model.show" class="game-controls">
          <h1>Detection Model:</h1>
          <label class="switch">
            <input type="checkbox" v-model="game.gameSettings.model.enabled">
            <span class="slider"></span>
          </label>
      </div>

      <div class="game-controls">
        <select v-model="game.selectedUnit" style="overflow-y:auto;">
          <option v-for="unit in filteredUnits(game.units)" :value="unit.value" :key="unit.value">{{ unit.label }}</option>
        </select>
        <button @click="playGame(game, $event)" @touchend="playGame(game, $event)" class="play-button">Play</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Games", // Component name
  props: {
    visibleGames: {
      type: Array,
      required: true
    },
    selectedLevel: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentSiteHeader: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`,
      currentSiteUrl:"",
      gameSiteHeader:"",
    };
  },
  methods: {
    filteredUnits(units) {
      if (this.selectedLevel === 'None') return units;
      return units.filter(unit => unit.value && unit.value.startsWith(this.selectedLevel));
    },
    playGame(game, event) {
      const target = event.currentTarget;
      if (target.disabled) return;

      // Disable the button for 1 second
      target.disabled = true;
      setTimeout(() => {
        target.disabled = false;
      }, 1000);

      let engfs = game.selectedEngfs ? `&engfs=${game.selectedEngfs}` : null;

      if(game.hasPairs){
        const selectedUnit = game.selectedUnit;
        const selectedPairs = game.selectedPair;
        const baseUrl = `${this.gameSiteHeader}${import.meta.env.VITE_RAINBOWONE_GAMES_DIRPATH}${game.gameFolderName}/`;
        const newUrl = `${baseUrl}?unit=${selectedUnit}&pairs=${selectedPairs}${engfs}`;
        window.open(newUrl, '_self');
      }
      else if(game.gameSettings.battle){
        const selectedUnit = game.selectedUnit;
        const battleMode = game.gameSettings.battle.enabled && game.gameSettings.battle.show ? "&playerNumbers=2" : "&playerNumbers=1";
        const baseUrl = `${this.gameSiteHeader}${import.meta.env.VITE_RAINBOWONE_GAMES_DIRPATH}${game.gameFolderName}/`;
        const newUrl = `${baseUrl}?unit=${selectedUnit}${battleMode}${engfs}`;
        window.open(newUrl, '_self');
      }
      else if(game.gameSettings.isMotionGame){
        const selectedUnit = game.selectedUnit;
        const removalStatus = game.gameSettings.removal.enabled && game.gameSettings.removal.show? "&removal=1" : "";
        const selectedModel = game.gameSettings.model.enabled && game.gameSettings.model.show ? "full" : "lite";
        const baseUrl = `${this.gameSiteHeader}${import.meta.env.VITE_RAINBOWONE_GAMES_DIRPATH}${game.gameFolderName}/`;
        const newUrl = `${baseUrl}?unit=${selectedUnit}${removalStatus}&model=${selectedModel}${engfs}`;
        window.open(newUrl, '_self');
      }
      else if(game.gameSettings.isOldGame){
        const newUrl = `${this.gameSiteHeader}${game.gameSettings.isOldGame.dirFolder}`;
        window.open(newUrl, '_self');
      }
      else {
        const selectedUnit = game.selectedUnit ? `?unit=${game.selectedUnit}` : "";
        const baseUrl = `${this.gameSiteHeader}/RainbowOne/webapp/2.8/gameFile/OKAGames/${game.gameFolderName}/`;
        const newUrl = `${baseUrl}${selectedUnit}${engfs}`;
        window.open(newUrl, '_self');
      }
    },
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
    },
    checkCurrectSite(){
      this.currentSiteUrl = `${this.currentSiteHeader}${import.meta.env.VITE_BASE_URL}`;
      if(this.currentSiteHeader.includes("localhost")) {
        document.title = "Starwish Party (Local)";
        console.log("current site is localhost");
        this.gameSiteHeader = `${import.meta.env.VITE_BASE_DEV_HEADER}`
        return;
      }
      else if(this.currentSiteHeader.includes(import.meta.env.VITE_BASE_DEV_HEADER)){
        document.title = "Starwish Party (Dev)";
        this.configCSPMeta();
        console.log("current site is development");
        this.gameSiteHeader = `${import.meta.env.VITE_BASE_DEV_HEADER}`
      }
      else if(this.currentSiteHeader.includes(import.meta.env.VITE_BASE_PROD_GAME_DOMAIN) ||
      this.currentSiteHeader.includes(import.meta.env.VITE_BASE_PROD_HEADER)){
        document.title = "Starwish Party";
        this.configCSPMeta();
        console.log("current site is production");
        this.gameSiteHeader = `${import.meta.env.VITE_BASE_PROD_HEADER}`
        this.hideURLPath();
      }
    },
    configCSPMeta(){
      const cspMeta = document.getElementById('csp-meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', "default-src 'self'; img-src 'self' data:;");
    },
    hideURLPath() {
          const hiddenPath = import.meta.env.VITE_BASE_HIDDEN_PATH;
          // Check if the current URL includes the hidden path
          if (this.currentSiteUrl.includes(hiddenPath)) {
            // Store the original URL
            const originalURL = window.location.href;
            // Update the URL to the base URL
            window.history.replaceState(null, null, this.currentSiteHeader);

            // Set up the onbeforeunload event handler
            window.onbeforeunload = () => {
              // Check if the original URL is available
              if (originalURL) {
                // Navigate back to the original URL
                window.location.href = originalURL;
              }
            };
          } else {
            // Remove the onbeforeunload event handler if the hidden path is not present
            window.onbeforeunload = null;
          }
      },
  },
  mounted() {
    this.nodoubletapzoom();
    this.checkCurrectSite();
  },
  beforeUnmount() {
    const elements = this.$el.querySelectorAll('.game-card .game-image');
    for (let i = 0; i < elements.length; i++) {
      elements[i].removeEventListener('touchstart', this.preventZoom);
    }
  },
}
</script>
<style scoped>
.main-container {
  position: relative;
  width: 100%;
}
.filter-selector {
  margin-bottom: 20px;
}
.filter-selector select {
  padding: 10px;
  cursor: pointer;
}

 h1{
    font-size: 1.2vw;
    font-weight: 700;
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
    height: calc(min(5vh, 3vw));
    padding: calc(min(0.5vh, 1vw));
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
  width: calc(min(5vh, 5vw));
  height: calc(min(3vh, 3vw));
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
  width: calc(min(3vh, 3vw));
  height: calc(min(3vh, 3vw));
  left: -8%;
  bottom: 0px;
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
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);
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
</style>
