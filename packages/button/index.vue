<template>
  <button class="i-button"
          :class="['i-button-'+type, 'i-button-'+size, 'i-button-'+radius, {'is-disabled': disabled}]"
          @click="handleClick">
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
          this.$el.style.borderRadius = '25px'
        } else {
          this.$el.style.borderRadius = '12.5px'
        }
      }
    },
    methods: {
      handleClick (evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>
<style lang='scss' scoped>
  button{
    outline: none;
    border: none;
  }
  .i-button{
    height: 50px;
    font-size: 16px;
    &-text{
      display: block;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .i-button-default{
    background: #f28300;
    border: 1px solid #f28300;
    color: #fff;
  }
  .i-button-primary{
    background: #fff;
    border: 1px solid #f28300;
    color: #f28300;
  }
  .i-button-danger{
    background: #ff3b30;
    border: 1px solid #ff3b30;
    color: #fff;
  }
  .i-button-line{
    border: 1px solid #f28300;
    background: #fff;
    color: #f28300;
  }
  .i-button-small{
    width: 75px;
    height: 25px;
    font-size: 14px;
  }
  .i-button-normal{
    width: 115px;
    height: 50px;
  }
  .i-button-large{
    width: 345px;
    height: 50px;
  }
  .i-button-low{
    border-radius: 5px;
  }
  .i-button-none{
    border-radius: none;
  }
  .is-disabled{
    background: #d5d5d5;
    color: #a1a1a1;
    border: 1px solid #d5d5d5;
  }
</style>