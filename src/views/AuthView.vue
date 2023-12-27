<template>
  <div class="login">
    <div class="login-form">
      <div class="login-title">
        Личный кабинет
      </div>

      <div class="login-subtitle">
        Эл.почта
      </div>
      <el-input 
        v-model="email"
        class="login-input-login"
        type="email"
        @keypress.enter="loginUser"
      />

      <div class="login-subtitle">
        Пароль
      </div>
      <el-input
        v-model="password"
        class="login-input-password"
        show-password
        @keypress.enter="loginUser"
      />
    </div>
    <div class="login-buttons">
      <el-button
        class="login-button"
        type="primary"
        :disabled="!email || !password"
        @click="loginUser"
      >
        Вход
      </el-button>
    </div>
  </div>
</template>

<script>
import { useLoginForm } from '../use/login-form'

export default {
  setup() {
    return { ...useLoginForm() }
  }
}
</script>


<style scoped>
.login {
  width: 320px;
  background-color: #FFFFFF;
  color: black;
  border-radius: 5px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 0;
}

.login-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
  line-height: 110%;
}

.login-subtitle {
  margin-bottom: 5px;
  font-size: 14px;
}

.login-input-login,
.login-input-password {
  margin-bottom: 17px;
}

.login-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 30px;
  border-top: 1px solid #CCCCCC;
  box-sizing: border-box;
}

.login-button {
  width: 117px;
}
</style>