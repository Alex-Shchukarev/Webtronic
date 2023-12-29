<template>
  <el-container>
    <el-container class="common-container">
      <el-header class="common-header">
        <TheNavbar />
        <TheBreadCrumbs />
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>

    <el-footer>
      <TheFooter />
    </el-footer>
  </el-container>
</template>

<script>
import TheNavbar from '../components/TheNavbar'
import TheBreadCrumbs from '../components/TheBreadCrumbs'
import TheFooter from '../components/TheFooter'

export default {
  setup() {
  },
  components: { TheNavbar, TheBreadCrumbs, TheFooter }
}
</script>

<style scoped>
.common-container {
  padding: 20px 40px;
}
</style>
