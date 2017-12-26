<template>
  <div class="i-list">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'i-list'
  }
</script>
<style scoped>
  .i-list{
    width: 100%;
    height: 100px;
    background: yellow;
  }
</style>