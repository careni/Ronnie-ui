<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot="title">Search</span>
    </i-header>
    <i-search v-model='value' :association='association'></i-search>
    <div class="message">搜索关键字：{{value}}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fixed: false,
        message: '',
        value: '',
        association: false
      }
    },
    watch: {
      value (n, o) {
        console.log(n, o)
        if (this.value !== '') {
          this.association = true
        } else {
          this.association = false
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/var.scss';
  .message{
    width: 100%;
    height: 40px;
    border: 1px solid $line-color;
    margin: 20px 0;
    line-height: 40px;
    font-size: 16px;
    text-indent: 15px;
  }
</style>