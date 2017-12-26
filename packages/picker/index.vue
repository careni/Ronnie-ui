<template>
  <div>
    <transition name="slide-bottom">
      <div class="i-picker" v-if="show">
        <ul class="i-picker-row">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <ul class="i-picker-row">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul class="i-picker-row">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </transition>
    <div @click="showIpicker">的地方斯蒂芬是否是</div>
  </div>
</template>
<script>
  export default {
    name: 'i-picker',
    data () {
      return {
        show: true
      }
    },
    mounted () {
      this.$nextTick(function () {
        let el = document.querySelector('.i-picker')
        el.style.overflow = 'hidden'
        el.style.height = '120px'
      })
    },
    methods: {
      showIpicker () {
        if (this.show) {
          this.show = false
        } else {
          this.show = true
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .i-picker{
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    background: yellow;
    &-row{
      display: block;
      width: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      > li{
        height: 40px;
        width: 100%;
        line-height: 40px;
        text-align: center;
      }
    }
  }
.slide-bottom-enter-active, .slide-bottom-leave-active {
  transition: all .5s ease;
}
.slide-bottom-enter, .slide-bottom-leave-to {
  transform: translateY(100%);
}
</style>