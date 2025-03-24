<template>
  <div class="menu-page">
    <div class="header">
    </div>
    <div class="logo-container">
      <img class="logo" src="/image/logo.png" alt="Logo" />
    </div>

    <div class="button-container">
      <div class="button-row">
      <button class="menu-button button-course"
        :class="{ 'clicked': clickedButton === 0, 'disabled': isDisabled(0)}"
        id="course"
        @click="handleMenuButtonClick(0)">
      </button>
      <button class="menu-button button-freeGames"
        :class="{ 'clicked': clickedButton === 1, 'disabled': isDisabled(1)}"
        id="freeGames"
        @click="handleMenuButtonClick(1)">
      </button>
      </div>
      <div class="button-row">
        <button class="menu-button button-shop"
        :class="{ 'clicked': clickedButton === 2, 'disabled': isDisabled(2) }"
        id="shop"
        @click="handleMenuButtonClick(2)">
        </button>
        <button class="menu-button button-leaderBoard"
        :class="{ 'clicked': clickedButton === 3, 'disabled': isDisabled(3) }"
        id="leaderBoard"
        @click="handleMenuButtonClick(3)">
      </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickedButton: null,
      disabledButtons: [true, false, true, true],
    };
  },
  methods: {
    handleMenuButtonClick(buttonId) {
      if (this.disabledButtons[buttonId]) {
        return;
      }
      this.clickedButton = buttonId;
      switch(this.clickedButton){
        case 0:
          break;
        case 1:
          console.log('Go to free demo page!');
          this.$router.push({ name: 'DemoPage' });
          break;
        case 2:
          break;
        case 3:
          break;
      }
    },
    isDisabled(buttonId) {
      return this.disabledButtons[buttonId]; // Check if the button is disabled
    },

  }
}
</script>

<style scoped>
.menu-page {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.header {
  position: absolute;
  top: 20px;
  right: 20px;
}

.user-avatar {
  cursor: pointer;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 2px solid #007bff;
}

.logo {
  width: calc(min(50vh, 30vw));
  height: auto;
  margin: calc(min(-5vh, -2vw));
}
.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.button-row {
  display: flex;
  gap: 25px;
}

.menu-button {
  width: 22.3vw;
  height: 15vw;
  max-width: 600px;
  max-height: 400px;
  border: none;
  border-radius: calc(min(0.6vw, 0.6vh));
  cursor: pointer;
  transition: background-color 0.3s;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.menu-button:hover {
  background-color: #4b4b4b;
}
.button-course {
  background-image: url('/image/btn-1.png');
}

.button-freeGames {
  background-image: url('/image/btn-2.png');
}

.button-shop {
  background-image: url('/image/btn-3.png');
}

.button-leaderBoard {
  background-image: url('/image/btn-4.png');
}
.menu-button.clicked {
  background-color: #1c1c1c;
  filter: brightness(0.7);
}
.menu-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.menu-button.disabled:hover {
  background-color: initial;
}
</style>
