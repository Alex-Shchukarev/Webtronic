<template>
  <div class="breadcrumbs-container">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in crumbs" :key="item" >
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const crumbs = computed(() => store.getters['currentPath'])
    return { ArrowRight, crumbs }
  },
}
</script>

<style scoped>
.breadcrumbs-container {
  height: 20px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: #FBFBFE;
}
</style>