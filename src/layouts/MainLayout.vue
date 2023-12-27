<template>
  <el-container class="container">
    <el-aside class="common-aside">
      Aside
    </el-aside>

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
.container {
  display: grid;
  grid-template-columns: 1fr 5fr;
}
.common-aside {
  background-color: #f0f1f4;
}
.common-container {
  padding: 20px 40px;
}
</style>
