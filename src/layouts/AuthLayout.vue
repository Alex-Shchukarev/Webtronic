<template>
  <div class="auth-background">
    <router-view />
  </div>
</template>

<script>

export default {
  setup() {}
}
</script>

<style scoped>
.auth-background {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F9F9FB;
}
</style>
