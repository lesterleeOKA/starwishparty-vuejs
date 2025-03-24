<!--App.Vue-->
<script setup>
import { ref } from 'vue';
import Background from './components/Background.vue';
const isLogined = ref(false);
const userAvatar = ref('');

function login(avatarUrl=null) {
  isLogined.value = true;
  userAvatar.value = avatarUrl;
  localStorage.setItem('isLogined', 'true');
}

function logout() {
  isLogined.value = false;
  userAvatar.value = '';
}

</script>

<template>
  <main>
    <Background :isLogined="isLogined" :userAvatar="userAvatar" @login="login" @logout="logout"/>
    <router-view @login="login"/>
  </main>
</template>
