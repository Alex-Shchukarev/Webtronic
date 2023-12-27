<template>
  <div id="app">
    <component :is="`${layout}Layout`" />
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const route = useRoute()
    const layout = computed( () => route.meta.layout )
    const store = useStore()
    onMounted(() => store.dispatch('user/loadUserData'))

    return { layout }
  },
  components: { MainLayout, AuthLayout }
}
</script>

<style>
@font-face {
  font-family: 'Roboto';
  src: local('Roboto-Regular'),
  url('~@/./assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Roboto';
  src: local('Roboto-Bold'),
  url('~@/./assets/fonts/Roboto-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%!important;
  letter-spacing: 0.2px;
}
html,body{
  padding: 0;
  margin: 0;
  height: 100%;
  overflow-y: hidden!important;
  font-family: "Roboto", sans-serif;
}
</style>
