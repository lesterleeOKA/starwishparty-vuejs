<template>
  <div class="login-page">
    <div class="login-container">
      <h2 class="subtitle">{{ currentTranslations.subtitle }}</h2>

      <form ref="loginForm" @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <label for="email">{{ currentTranslations.email }}</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="hello@email.com"
            required
            class="input-field"
          />
        </div>

        <div class="input-group">
          <label for="password">{{ currentTranslations.password }}</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            placeholder="********"
            required
            class="input-field"
          />
          <button type="button" @click="togglePasswordVisibility" class="toggle-password">
            <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
          </button>
        </div>
        <div class="options">
          <label class="custom-checkbox">
            <input type="checkbox" v-model="rememberMe" />
            <span class="checkmark"></span>
            {{ currentTranslations.rememberMe }}
          </label>
          <a href="#" class="forgot-password">{{ currentTranslations.forgotPassword }}</a>
        </div>

        <div @click="submitForm" class="login-button">
          <div class="login-text">{{ currentTranslations.login }}</div>
        </div>
      </form>
    </div>
    <div class="registerLink">
      <span class="fixed-text">{{ currentTranslations.registerFixText }} </span>
      <a href="#" class="register-link">{{ currentTranslations.registerLint }}</a>
    </div>
    <div class="language-selector">
      <select v-model="currentLanguage" @change="changeLanguage(currentLanguage)">
        <option value="en">English</option>
        <option value="zh">繁體中文</option>
        <option value="sc">简体中文</option>
      </select>
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
      rememberMe: false,
      showPassword: false,
      currentLanguage: 'en',
      translations: {
        en: {
          subtitle: "Login Account",
          email: "Email :",
          password: "Password :",
          rememberMe: "Remember me on this device",
          forgotPassword: "Forgot password?",
          login: "Login",
          registerFixText: "Don't have an account?",
          registerLint:"Click here to register"
        },
        zh: {
          subtitle: "登入帳戶",
          email: "電郵 :",
          password: "密碼 :",
          rememberMe: "在此設備上記住我",
          forgotPassword: "忘記密碼？",
          login: "登入",
          registerFixText: "未有帳號嗎?",
          registerLint:"按此註冊"
        },
        sc: {
          subtitle: "登录帐户",
          email: "电邮 :",
          password: "密码 :",
          rememberMe: "在此设备上记住我",
          forgotPassword: "忘记密码？",
          login: "登录",
          registerFixText: "没有帳號嗎？",
          registerLint:"按此注册"
        }
      }
   }
  },
  computed: {
    currentTranslations() {
      return this.translations[this.currentLanguage];
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      console.log("show password:", this.showPassword);
    },
    submitForm() {
      const form = this.$refs.loginForm;
      if (form.checkValidity()) {
        form.dispatchEvent(new Event('submit', { cancelable: true }));
      } else {
        form.reportValidity();
      }
    },
    handleLogin() {
      console.log('Successful login with:', this.email, this.password, this.rememberMe);
      const avatarUrl = "";

      // Use this.$parent.$refs if Background is a parent,
      this.$emit('login', avatarUrl);
      this.$router.push({ name: 'Menu' });

      if (this.rememberMe) {
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }
    },
    changeLanguage(lang) {
      this.currentLanguage = lang;
      localStorage.setItem('currentLanguage', lang);
    }
  },
  mounted() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedLanguage = localStorage.getItem('currentLanguage');

    if (savedEmail && savedPassword) {
      this.email = savedEmail;
      this.password = savedPassword;
      this.rememberMe = true;
    }

    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
    }
  }
};
</script>

<style scoped>
.login-page {
  position: absolute;
  display: grid;
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
  background-image: url('/image/login.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  width: calc(min(35vw, 45vw));
  height: calc(min(35vw, 45vw));
  display: grid;
}
.login-form {
  position: relative;
  width: 70%;
  height: auto;
  display: grid;
  left: 5vw;
  margin-top: 2vw;
}

.title {
  font-size: 36px;
  margin-bottom: 10px;
}

.subtitle {
  margin-top: calc(min(13vw, 13vw));
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.input-group {
  display: grid;
  margin: 0.3vw;
}

.input-group label {
  display: block;
  font-weight: bold;
  text-align: left;
  color: #44300d;
  font-size: larger;
}

.input-field {
  width: 100%;
  padding: 15px 15px 15px 40px;
  border: none;
  border-radius: 2vw;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s;
  text-align: left;
  font-weight: bold;
  font-size: x-large;
}

.input-field:focus {
  border-color: #FFD700; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

.toggle-password {
  position: relative;
  transform: translate(20.5vw, -160%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  color: #44300d;
  width: 10%;
}

.options {
  display: grid;
  justify-content: space-between;
  align-items: center;
  color: #44300d;
  font-weight: 700;
  font-size: 1em;
}
.custom-checkbox {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 1em;
  user-select: none;
  bottom: 1vw;
}
.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #44300d;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.forgot-password {
  position: relative;
  color: #44300d;
  text-decoration: underline;
  left: calc(min(19vw, 19vw));
  font-weight: 700;
  max-width: 5vw;
}

.login-button {
  background-image: url('/image/btn.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 1vw;
}
.login-text {
  font-size: 3.5vh;
  padding: 10px 10px 15px 10px;
  font-weight: bold;
}
.language-selector {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.language-selector select {
  background-color: #44300d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s, transform 0.2s;
}
.registerLink {
  margin-top: 3.5vw; /* Space above the link for separation */
  text-align: center; /* Center-align the text */
  font-weight: bold; /* Make the text bold */
}
.fixed-text {
  color: white; /* Fixed text color */
  font-size: 1em; /* Adjust font size as needed */
}
.register-link {
  font-weight: bold;
  color: #ddb939; /* Set link color */
  text-decoration: underline; /* Underline the link for emphasis */
  font-size: 1em; /* Adjust font size as needed */
  transition: color 0.3s; /* Transition effect for hover */
}
</style>
