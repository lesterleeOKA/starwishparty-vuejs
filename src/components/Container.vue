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

      <!-- 过滤选择器 -->
      <div class="filter-selector">
        <span class="filter-label">Game Units Filter:</span>
        <select v-model="selectedLevel" @change="filterGames(selectedLevel)">
          <option value="None">None</option>
          <option v-for="level in levels" :key="level" :value="level">{{ level }}</option>
        </select>
      </div>

      <!--games-->
      <div class="game-container">
        <Games :visibleGames="visibleGames" :selectedLevel="selectedLevel"/>
      </div>
    </div>
  </div>
  <div class="version-container">
    <div class="version-text">Ver 1.10</div>
    <button class="history-button" @click="openHistoryPage">History</button>
  </div>

  <div class="historyPage" id="history" v-if="isHistoryVisible">
    <div class="history-content">
      <h4>Update History</h4>
      <span class="close-button" @click="closeHistoryPage">&times;</span>
    </div>
    <div class="history-list" ref="historyList">
      <div v-for="(version, index) in historyVersions" :key="index" class="history-item">
        <h5 class="version-title">{{ version.version }}</h5>
        <ul>
          <li v-for="(update, idx) in version.updates" :key="idx">
            <template v-if="typeof update === 'string'">
              {{ update }}
            </template>
            <template v-else>
              {{ update.title }}
              <ul>
                <li v-for="(detail, dIdx) in update.details" :key="dIdx">{{ detail }}</li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import Games from './GameCard.vue'
import { games } from '../game.js';
import { versionLog } from '../versionLog.js';

export default {
  name: "Container",
  components: {
    Games
  },
  data() {
    return {
      games: games.map(game => ({ ...game, loading: false })),
      visibleGames: games.filter(game => game.show),
      levels: ["p1", "p2", "p3", "p4", "p5", "p6"],
      selectedLevel: 'None',
      isHistoryVisible: false,
      historyVersions: [],
    };
  },
  methods: {
    filterGames(level) {
      if (level === 'None') {
        this.visibleGames = this.games.filter(game => game.show);
      } else {
        this.visibleGames = this.games.filter(game =>
          game.units.some(unit => unit.value && unit.value.startsWith(level)) && game.show
        );
      }

      this.visibleGames.forEach(game => {
        const units = this.filteredUnits(game.units);
        game.selectedUnit = units.length > 0 ? units[0].value : null;
      });
    },
    filteredUnits(units) {
      if (this.selectedLevel === 'None') return units;
      return units.filter(unit => unit.value && unit.value.startsWith(this.selectedLevel));
    },
    openHistoryPage() {
      this.isHistoryVisible = true;
      this.loadHistoryVersions();
      console.log(".................................................................open history page");
    },
    closeHistoryPage() {
      this.isHistoryVisible = false;
      console.log(".................................................................close history page");
    },
    loadHistoryVersions() {
      this.historyVersions = versionLog;
    }
  },
}
</script>

<style scoped>
.filter-selector {
  position:absolute;
  top:calc(min(6vh, 6vw));
  margin: calc(min(1vh, 1vw));
}
.filter-label {
  margin-right: 10px;
  font-weight: bold;
}

.filter-selector select {
  padding: 10px;
  cursor: pointer;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  transition: border-color 0.3s;
}

.filter-selector select:hover {
  border-color: #499fd1;
}

.filter-selector select:focus {
  outline: none;
  border-color: #2196F3;
}
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
.version-container {
    position: fixed;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    z-index: 1;
}
.version-text {
    font-size: 12px;
    color: #ffffff;
    margin-right: 10px;
}

.history-button {
    padding: 5px 10px;
    cursor: pointer;
    font-size: 12px;
    color: #ffffff;
    background-color: #00bff9;
    border: none;
    border-radius: 5px;
}
.game-container {
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15vh, 22vw));
	/*gap: calc(min(1.5vh, 1.5vw));*/
  -webkit-overflow-scrolling: auto;
  top: calc(min(7vh, 7vw));
  /*padding-left: calc(min(2.5vw, 2.5vh));*/
}
.game-container > * {
  margin: 0 calc(min(7.5vw, 7.5vh) / 2);
}

.historyPage {
    position: fixed; /* Stay in place */
    z-index: 2; /* Sit on top */
    left:0;
    top: 0;
    width: 25%; /* Full width */
    height: 50%; /* Full height */
    background-color: rgba(0, 0, 0, 1); /* Fallback color and transparency */
}
.history-content {
    background-color: #fff; /* White background */
    margin: 0 auto; /* Center horizontally */
    padding: 10px; /* Padding */
    border: 1px solid #888; /* Border */
    width: 100%; /* Width of the modal */
    display: flex; /* Use flexbox */
    align-items: center; /* Center items vertically */
    justify-content: space-between; /* Space between items */
}
.version-title {
    text-decoration: underline; /* Underline the version title */
    margin: 10px 0; /* Space around titles */
}
.history-list {
    max-height: calc(100% - 56px);
    overflow-y: auto; /* Enable vertical scrolling */
    padding: 10px; /* Padding around the content */
    border-top: 1px solid #888; /* Optional: border for separation */
}
.history-item {
    margin-bottom: 20px;
    color: white;
}
.history-item ul {
    padding-left: 20px; /* Indent the list */
}
.history-item ul ul {
    padding-left: 20px; /* Further indent nested lists */
}

.close-button {
    color: #aaa; /* Close button color */
    font-size: 28px; /* Font size */
    font-weight: bold; /* Bold */
    cursor: pointer; /* Pointer cursor */
}
.close-button:hover,
.close-button:focus {
    color: black; /* Color on hover */
    text-decoration: none; /* No underline */
    cursor: pointer; /* Pointer cursor */
}
</style>
