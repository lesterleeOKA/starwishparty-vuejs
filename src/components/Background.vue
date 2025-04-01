<template>
  <div class="background"></div>
  <div class="header">
      <div v-if="isLogined">
        <UserAvatar
          :avatarUrl="userAvatar"
          @avatar-clicked="handleAvatarClick"
        />
        <button @click="handleLogout" class="logout-button">Logout</button>
      </div>
    </div>
</template>

<script>
import UserAvatar from './UserAvatar.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Background", // Component name
  components: {
    UserAvatar,
  },
  props: {
    isLogined: Boolean,
    userAvatar: String,
  },
  data() {
    return {
      isLogined: false,
      currentSiteHeader: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`,
    };
  },
  methods: {
    handleAvatarClick() {
      console.log('Avatar clicked');
      alert('Avatar clicked');
    },
    handleLogout() {
      console.log('Logout button clicked');
      this.isLogined = false;
      localStorage.removeItem('isLogined');
      this.$emit('logout');
      this.$router.push({ name: 'Login' });
    },
    checkLoginStatus() {
      this.isLogined = localStorage.getItem('isLogined') === 'true'; // Retrieve from local storage
    },
    configCSPMeta() {
      const cspMeta = document.getElementById('csp-meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', "default-src 'self'; img-src 'self' data:; style-src 'self' https://cdnjs.cloudflare.com; font-src 'self' https://cdnjs.cloudflare.com;");
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
                window.location.href = originalURL;
              }
            };
          } else {
            // Remove the onbeforeunload event handler if the hidden path is not present
            window.onbeforeunload = null;
          }
      },
    checkCurrectSite(){
      if(this.currentSiteHeader.includes("localhost")) {
        document.title = "Starwish Party (Local)";
        console.log("current site is localhost");
        return;
      }
      else if(this.currentSiteHeader.includes(import.meta.env.VITE_BASE_DEV_HEADER)){
        document.title = "Starwish Party (Dev)";
        this.configCSPMeta();
        console.log("current site is development");
      }
      else if(this.currentSiteHeader.includes(import.meta.env.VITE_BASE_PROD_GAME_DOMAIN) ||
      this.currentSiteHeader.includes(import.meta.env.VITE_BASE_PROD_HEADER)){
        document.title = "Starwish Party";
        this.configCSPMeta();
        console.log("current site is production");
        this.hideURLPath();
      }
    }
  },
  mounted() {
    this.checkCurrectSite();
    this.checkLoginStatus();
  },
  watch: {
    $route(to, from) {
      this.checkLoginStatus();
    },
  }
};
</script>

<style scoped>
.header {
  position: absolute;
  top: 10px; /* Adjust this value to position vertically */
  right: 20px; /* Adjust this value to position horizontally */
  z-index: 10; /* Ensure this is above the background content */
}
main {
  position: relative;
  z-index: 5;
  color: white;
}
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/image/bg_demopage.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  touch-action: pan-y;
}
.logout-button {
  margin: 20px 20px 20px; /* Spacing */
  cursor: pointer; /* Change cursor to pointer on hover */
  background-color: rgba(255, 255, 255, 0.8); /* Example styling */
  color: rgb(0, 0, 0);
  border: none; /* Style as needed */
  border-radius: 5px; /* Round edges */
  padding: 5px 10px; /* Padding */
  z-index: 101; /* Ensure it's above the background */
}
</style>
