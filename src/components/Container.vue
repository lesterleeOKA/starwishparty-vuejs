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
  <div class="version-text">Ver 1.09</div>
</template>

<script>
import Games from './GameCard.vue'
import { games } from '../game.js';

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
  margin-right: 10px; /* 标签与选择框之间的空间 */
  font-weight: bold; /* 可选：加粗标签文字 */
}

.filter-selector select {
  padding: 10px; /* 内边距 */
  cursor: pointer; /* 鼠标样式 */
  font-size: 1em; /* 字体大小 */
  border: 1px solid #ccc; /* 边框 */
  border-radius: 5px; /* 圆角边框 */
  background-color: #fff; /* 背景颜色 */
  transition: border-color 0.3s; /* 边框颜色过渡 */
}

.filter-selector select:hover {
  border-color: #499fd1; /* 悬停时边框颜色 */
}

.filter-selector select:focus {
  outline: none; /* 去掉聚焦时的轮廓 */
  border-color: #2196F3; /* 聚焦时边框颜色 */
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
  top: calc(min(7vh, 7vw));
  /*padding-left: calc(min(2.5vw, 2.5vh));*/
}
.game-container > * {
  margin: 0 calc(min(7.5vw, 7.5vh) / 2);
}
</style>
