<template>
  <div class="i-popup" :class="{darken: !timer}">
    <transition name='fade'>
      <div class="i-popup-item" v-if='flag && timer'>
            {{message}}
      </div>
    </transition>
    <transition>
      <div class="i-popup-loading" v-if='flag && !timer'>
        <img src="../../src/style/images/loading.png" height="22.5" width="22.5" alt="" class="animate">
        <span class="i-popup-loading-content">{{message}}</span>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'i-popup',
    data () {
      return {
        timer: true, // on/off timer
        type: 'display', // loading or display
        message: '', // default message
        callback: null,
        time: 3000,
        flag: false
      }
    },
    methods: {
      handleCancel () {

      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/var.scss';
  .i-popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .i-popup-item{
    position: absolute;
    width: 495px;
    height: 150px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
    display: flex;
    background: rgba(0,0,0,0.7);
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 10px;
    font-size: 28px;
  }
  .darken {
    background: rgba(0,0,0,0.7);
  }
  .i-popup-loading{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    width: 485px;
    height: 150px;
    background: $white;
    color: $black;
    font-size: 28px;
    img{
      width: 45px;
      height: 45px;
    }
    &-content{
      display: block;
      width: 220px;
      text-indent: 20px;
      @include ellipsis;
    }
  }
  .animate{
    animation:rotating 1s infinite linear;
  }
  @keyframes rotating{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: scale(0.5);
  }
</style>