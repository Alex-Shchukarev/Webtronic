<template>
  <el-card>
    <template #header v-if="title">
      <div class="card-header">
        <span>
          {{ title }}
        </span>
      </div>
    </template>
    <slot>Content slot</slot>
    <template #footer v-if="footer">
      <div class="card-footer">
        <span>
          {{ footer }}
        </span>
      </div>
    </template>
  </el-card>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    }
  },
  setup() {
  },
}
</script>

<style scoped>
  .card-header, .card-footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.card-header {
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}
</style>