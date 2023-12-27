<template>
  <div class="navbar-container">
    <div class="title">
      Личный кабинет
    </div>
    <ul class="navbar-menu">
      <li class="nav-item">
        <router-link to="/">
          Главная
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/profile">
          Профиль
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/tickets">
          Заявки
        </router-link>
      </li>
      <li class="nav-item">
        <a href="#" @click.prevent="logout">
          Выход
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const logout = () => {
      store.commit('auth/removeToken')
      router.push('/login')
    }

    return { logout }
  }
}
</script>

<style scoped>
.navbar-container {
  height: 48px;
  margin-bottom: 12px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  background-color: #f0f1f4;
}
.title {
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: rgb(51, 122, 183);
}
.navbar-menu {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.nav-item {
  margin: 0 20px;
}
</style>
