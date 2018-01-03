<template>
  <button class="i-button"
          :class="['i-button-'+type, 'i-button-'+size, 'i-button-'+radius, {'is-disabled': disabled}]"
          @click="handleClick"
          v-backcover>
    <span class="i-button-text">
      <slot></slot>
    </span>
  </button>
</template>
<script>
  export default {
    name: 'i-button',

    props: {
      disabled: Boolean,
      icon: String,
      radius: {
        type: String,
        default: 'low',
        validator (value) {
          return ['low', 'half', 'none'].indexOf(value) > -1
        }
      },
      type: {
        type: String,
        default: 'default',
        validator (value) {
          return ['danger', 'default', 'primary', 'line'].indexOf(value) > -1
        }
      },
      size: {
        type: String,
        default: 'normal'
      }
    },

    data () {
      return {}
    },

    mounted () {
      if (this.radius === 'half') {
        if (this.size === 'normal' || this.size === 'large') {
          this.$el.style.borderRadius = 50 / 37.5 + 'rem'
        } else {
          this.$el.style.borderRadius = 25 / 37.5 + 'rem'
        }
      }
    },
    methods: {
      handleClick (evt) {
        this.$emit('click', evt)
      }
    },
    directives: {
      backcover: {
        inserted: function (el) {
          el.addEventListener('touchstart', function (e) {
            let cover = document.createElement('div')
            cover.setAttribute('class', 'backcover')
            let borderRadius = document.defaultView.getComputedStyle(el, '')['border-radius']
            cover.style.position = 'absolute'
            cover.style.top = '0'
            cover.style.left = '0'
            cover.style.width = '100%'
            cover.style.height = '100%'
            cover.style.borderRadius = borderRadius
            cover.style.background = 'rgba(0, 0, 0, 0.1)'
            el.appendChild(cover)
            e.returnValue = false
          })
          el.addEventListener('touchend', function () {
            let backcover = document.getElementsByClassName('backcover')
            for (let i = 0; i < backcover.length; i++) {
              el.removeChild(backcover[i])
            }
          })
        }
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import '../../src/style/var.scss';
  button{
    outline: none;
    border: none;
  }
  .i-button{
    position: relative;
    display: block;
    height: 100px;
    font-size: 32px;
    box-sizing: border-box;
    &-text{
      display: block;
      max-width: 70%;
      margin: 0 auto;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .i-button-default{
    background: $theme;
    border: 2px solid $theme;
    color: #fff;
  }
  .i-button-primary{
    background: #fff;
    border: 2px solid $theme;
    color: $theme;
  }
  .i-button-danger{
    background: #ff3b30;
    border: 2px solid #ff3b30;
    color: #fff;
  }
  .i-button-line{
    border: 2px solid $theme;
    background: #fff;
    color: $theme;
  }
  .i-button-small{
    width: 150px;
    height: 50px;
    font-size: 28px;
  }
  .i-button-normal{
    width: 230px;
    height: 100px;
  }
  .i-button-large{
    width: 690px;
    height: 100px;
  }
  .i-button-low{
    border-radius: 10px;
  }
  .i-button-none{
    border-radius: none;
  }
  .is-disabled{
    background: #d5d5d5;
    color: #a1a1a1;
    border: 2px solid #d5d5d5;
  }
</style>