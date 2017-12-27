<template>
  <div class="page">
    <i-header>
      <span slot="title" :fixed="fixed">Tag</span>
    </i-header>
    <i-tag></i-tag>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fixed: false
      }
    }
  }
</script>
<style lang="scss" scoped></style>