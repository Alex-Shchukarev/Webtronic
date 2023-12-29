<template>
  <div class="modal-backdrop"></div>
  <div class="modal">
    <div class="modal-header">
      <h2>{{ title }}</h2>
      <small class="modal-close" @click="$emit('close')">&times;</small>
    </div>
    <slot />
  </div>
</template>

<script>

export default {
  emits: ['close'],
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
  },
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 60px;
    width: 800px;
    padding: 1rem;
    background: #fff;
    z-index: 1000;
    left: 50%;
    border-radius: 10px;
    transform: translateX(-50%);
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}

.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .35);
    z-index: 100;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.modal-close {
    position: relative;
    top: 0px;
    right: 10px;
    font-size: 2rem;
    cursor: pointer;
}
</style>