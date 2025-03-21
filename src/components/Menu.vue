<template>
  <div class="menu-page">
    <div class="header">
      <img
        class="user-avatar"
        src="https://via.placeholder.com/40"
        alt="User Avatar"
        @click="handleAvatarClick"
      />
    </div>
    <div class="button-container">
      <div class="button-row">
        <button class="menu-button">選項 1</button>
        <button class="menu-button">選項 2</button>
      </div>
      <div class="button-row">
        <button class="menu-button">選項 3</button>
        <button class="menu-button">選項 4</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleAvatarClick() {
      // 處理頭像點擊邏輯，例如顯示用戶資料
      alert('用戶頭像點擊');
    }
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
  border: 2px solid #007bff; /* Optional border */
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.button-row {
  display: flex;
  gap: 50px; /* Space between buttons in the same row */
}

.menu-button {
  padding: 120px 120px; /* 增大按鈕的大小 */
  font-size: 48px; /* 增大字體大小 */
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-button:hover {
  background-color: #0056b3;
}
</style>
