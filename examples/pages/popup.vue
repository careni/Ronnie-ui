<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot='title'>Popup</span>
    </i-header>
    <i-button size="large" type="line" class="index" @click="showOne">默认弹窗</i-button>
    <i-button size="large" type="line" class="index" @click="showTwo">自定义时长与回调</i-button>
    <div class="message">{{twoMessage}}</div>
    <i-button size="large" type="line" class="index" @click="showThree">Loading弹窗</i-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fixed: false,
        twoMessage: '自定义时长与回调'
      }
    },
    methods: {
      showOne () {
        this.$Popup('显示时长3秒')
      },
      showTwo () {
        let that = this
        this.$Popup.alert('显示时长1秒', 1000).then(() => { that.twoMessage = '自定义时长与回调-回调开始并完成' })
      },
      showThree () {
        let that = this
        this.$Popup.loading('内容加载中...')
        setTimeout(function () {
          that.$Popup.close()
        }, 3000)
      },
      showFour () {}
    }
  }
</script>
<style lang="scss" scoped>
  .index {
    display: block;
    margin: 20px auto;
  }
  .message{
    width: 100%;
    height: 80px;
    border: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    text-indent: 20px;
  }
</style>