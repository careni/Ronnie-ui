<template>
  <div class="i-search">
    <div class="i-search-inputgroup" :class="{animation: animation}">
      <span class="i-search-inputgroup-logo ipanelIcon">匨</span>
      <input type="text"
             class="i-search-inputgroup-input"
             :placeholder="placeholder"
             @focus='changeStyle'
             v-model="value"
             @input="sendValue">
      <span class="i-search-inputgroup-voice ipanelIcon">俀</span>
    </div>
    <div class="i-search-cancel" @click="handleClick" v-if="animation">取消</div>
    <div class="association" v-if="assocition">
      <slot name="association">
        <ul class="association-ul">
          <li class="association-ul-li">1</li>
          <li class="association-ul-li">2</li>
          <li class="association-ul-li">2</li>
          <li class="association-ul-li">2</li>
          <li class="association-ul-li">2</li>
        </ul>
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'i-search',
    data () {
      return {
        placeholder: '搜索设备',
        animation: false,
        value: '',
        assocition: false
      }
    },
    methods: {
      sendValue () {
        this.$emit('input', this.value)
      },
      changeStyle (evt) {
        this.animation = true
        this.$emit('focus', evt)
      },
      handleClick (evt) {
        this.value = ''
        this.animation = false
        this.$emit('click', evt)
      }
    },
    watch: {
      value () {
        this.$emit('input', this.value)
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
    &-inputgroup{
      display: inline-block;
      box-sizing: border-box;
      position: relative;
      top: 6.25px;
      left: 15px;
      height: 27.5px;
      width: 345px;
      &-logo{
        position: absolute;
        top:55%;
        transform: translateY(-50%);
        color: #a1a1a1;
        font-size: 14px;
      }
      &-voice{
        position: absolute;
        right: 10px;
        top:55%;
        transform: translateY(-50%);
        color: #a1a1a1;
        font-size: 14px;
      }
      &-input{
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        text-indent: 20px;
        font-size: 13px;
        line-height: 27.5px;
      }
    }
    &-cancel{
      position: relative;
      display: inline-block;
      color: $theme;
      width: 30px;
      text-align: center;
      top: 7px;
      right: -12px;
      font-size: 14px;
    }
  }
  .association{
    position: absolute;
    top: 40px;
    width: 100%;
    height: auto;
    background: $white;
    &-ul{
      width: 100%;
      box-shadow: 0 0 10px #f0f0f0;
      &-li{
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-indent: 20px;
        border-bottom: 1px solid $line-color;
      }
    }
  }
  .animation{
    width: 325px;
    left: 5px;
  }
</style>