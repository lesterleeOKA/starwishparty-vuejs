<template>
  <div class="login-page">
    <div class="login-container">
      <h1 class="title">Starwish Party</h1>
      <h2 class="subtitle">登入帳戶</h2>

      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">電子郵件</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="hello@email.com"
            required
          />
        </div>

        <div class="input-group">
          <label for="password">密碼</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="********"
            required
          />
        </div>

        <div class="options">
          <label>
            <input type="checkbox" v-model="rememberMe" />
            在此設備上記住我
          </label>
          <a href="#" class="forgot-password">忘記密碼？</a>
        </div>

        <button type="submit" class="login-button">登入</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false
    };
  },
  methods: {
    handleLogin() {
      console.log('Successful login with:', this.email, this.password, this.rememberMe);

      // Example avatar URL; replace with actual data from the login response
      const avatarUrl = "";

      // Use this.$parent.$refs if Background is a parent,
      this.$emit('login', avatarUrl); // Emit an event that will be caught by the parent or layout
      this.$router.push({ name: 'Menu' });
      // Implement actual login logic here
    }
  },
};
</script>

<style scoped>
.login-page {
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-content: center;
  justify-content: space-around;
}

.login-container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.title {
  font-size: 36px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.forgot-password {
  color: #007bff;
  text-decoration: none;
}

.login-button {
  background-color: #5cb85c;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.login-button:hover {
  background-color: #4cae4c;
}
</style>
