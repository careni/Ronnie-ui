<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot="title">Card</span>
    </i-header>
    <i-card></i-card>
    <i-card :align="align"></i-card>
    <i-card></i-card>
    <i-card :align="align"></i-card>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fixed: false,
        align: true
      }
    }
  }
</script>
<style lang="scss">
  
</style>