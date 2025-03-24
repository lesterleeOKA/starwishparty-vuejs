<template>
  <div class="user-avatar-container">
    <div class="user-avatar">
      <img
        :src="avatarUrl"
        alt="User Avatar"
        @click="handleAvatarClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatarUrl: {
      type: String,
      default: "https://via.placeholder.com/40", // Default avatar URL
    },
  },
  methods: {
    handleAvatarClick() {
      this.$emit('avatar-clicked'); // Emit an event when the avatar is clicked
    },
  },
};
</script>

<style scoped>
.user-avatar-container {
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100%; /* Ensure full height to center */
  width: 100%; /* Ensure full width to center */
  cursor: pointer;
}

.user-avatar {
  width: 100px; /* Adjust size based on responsive design */
  height: 100px; /* Maintain aspect ratio */
  border-radius: 50%; /* Makes it circular */
  border: 2px solid #007bff; /* Border styling */
  overflow: hidden; /* Hides any excess image */
  display: flex; /* Flex for centering the image */
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
}

.user-avatar img {
  max-width: 100%; /* Ensure image does not exceed the avatar */
  max-height: 100%; /* Ensure image does not exceed the avatar */
  object-fit: cover; /* Cover to maintain aspect ratio */
}
</style>
