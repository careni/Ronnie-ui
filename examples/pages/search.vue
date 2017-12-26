<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot="title">Search</span>
    </i-header>
    <i-search></i-search>
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