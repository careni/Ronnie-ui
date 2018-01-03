<template>
  <div class="i-form">
    <div class="i-form-left" v-if='left'>
      <slot name="left"></slot>
    </div>
    <div class="i-form-center" v-if='center'>
      <slot name="center"></slot>
    </div>
    <div class="i-form-right" v-if='right'>
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'i-form',
    props: {
      right: {
        type: Boolean,
        default: true
      },
      center: {
        type: Boolean,
        default: true
      },
      left: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/var.scss';
  .i-form{
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 90px;
    border-bottom: 1px solid $line-color;
    font-size: 26px;
    &-left{
      display: flex;
      align-items: center;
      width: 122px;
      min-width: 122px;
      height: 100%;
      flex-grow: 0;
    }
    &-center{
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding:0 10px;
      height: 100%;
      flex-grow: 1;
      overflow: hidden;
    }
    &-right{
      display: flex;
      align-items: center;
      width: 160px;
      min-width: 160px;
      height: 100%;
      flex-grow: 0;
    }
  }
</style>