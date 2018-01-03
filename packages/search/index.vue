<template>
  <div class="i-search">
    <div class="i-search-content">
      <div class="i-search-inputgroup" :class="{animation: animation}">
        <span class="i-search-inputgroup-logo ipanelIcon">匨</span>
        <input type="text"
               class="i-search-inputgroup-input"
               :placeholder="placeholder"
               @focus='changeStyle'
               v-model="value"
               @input="handleInput"
               @blur="handleBlur">
        <span class="i-search-inputgroup-voice ipanelIcon">俀</span>
      </div>
      <div class="i-search-cancel" @click="handleClick" v-if="animation">取消</div>
    </div>
    <div class="association" v-if="association">
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
    props: {
      association: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        placeholder: '搜索设备',
        animation: false,
        value: ''
      }
    },
    methods: {
      handleInput () {
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
      },
      handleBlur (evt) {
        if (this.value !== '') {
          this.$emit('blur', evt)
          return
        }
        this.value = ''
        this.animation = false
        console.log(2)
        this.$emit('blur', evt)
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
    height: 80px;
    background: #f0f0f0;
    &-content{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 0;
      width: 100%;
      height: 100%;
    }
    &-inputgroup{
      box-sizing: border-box;
      position: relative;
      height: 55px;
      width: 690px;
      background: $white;
      &-logo{
        position: absolute;
        top:52%;
        transform: translateY(-50%);
        color: #a1a1a1;
        font-size: 28px;
      }
      &-voice{
        position: absolute;
        right: 20px;
        top:55%;
        transform: translateY(-50%);
        color: #a1a1a1;
        font-size: 28px;
      }
      &-input{
        border: none;
        outline: none;
        width: 80%;
        height: 100%;
        margin-left: 40px;
        font-size: 26px;
      }
    }
    &-cancel{
      display: inline-block;
      color: $theme;
      width: 60px;
      text-align: center;
      font-size: 28px;
    }
  }
  .association{
    position: absolute;
    top: 80px;
    width: 100%;
    height: auto;
    background: $white;
    &-ul{
      width: 100%;
      box-shadow: 0 0 10px #f0f0f0;
      &-li{
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-indent: 40px;
        border-bottom: 1px solid $line-color;
      }
    }
  }
  .animation{
    width: 650px;
    left: -10px;
  }
</style>