<template>
  <div class="i-search">
    <div class="i-search-inputgroup" :class="{animation: animation}">
      <span class="i-search-inputgroup-logo ipanelIcon">匨</span>
      <input type="text" class="i-search-inputgroup-input" :placeholder="placeholder" @focus='changeStyle' v-model="value">
    </div>
    <div class="i-search-cancel" @click="handleClick" v-if="animation">取消</div>
  </div>
</template>
<script>
  export default {
    name: 'i-search',
    data () {
      return {
        placeholder: '搜索设备',
        animation: false,
        value: ''
      }
    },
    methods: {
      changeStyle () {
        this.animation = true
      },
      handleClick (evt) {
        this.value = ''
        this.$emit('click', evt)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/var.scss';
  .i-search{
    position: relative;
    width: 100%;
    height: 40px;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &-inputgroup{
      position: relative;
      height: 27.5px;
      width: 92%;
      &-logo{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
      }
      &-input{
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        text-indent: 20px;
      }
    }
    &-cancel{
      color: $theme;
      width: 10%;
    }
  }
</style>