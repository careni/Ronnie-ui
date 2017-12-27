<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot="title">Search</span>
    </i-header>
    <i-search @input="getValue" v-model='value'></i-search>
    <div class="message">{{message}},{{value}}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fixed: false,
        message: '',
        value: ''
      }
    },
    methods: {
      getValue (value) {
        this.message = value
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
  }
</style>