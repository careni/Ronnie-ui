<template>
  <div class="page">
    <i-header>
      <span slot="title">Header</span>
    </i-header>
    <i-header :fixed="fixed">
      <span slot="title">不设置fixed</span>
    </i-header>
    <div class="line"></div>
    <i-header :fixed="fixed">
      <span slot="left" class="ipanelIcon">5</span>
      <span slot="title">自定义左侧Header</span>
    </i-header>
    <i-header :fixed="fixed">
      <span slot="left">返回</span>
      <span slot="title">自定义左侧Header</span>
    </i-header>
    <i-header :fixed="fixed">
      <span slot="left"></span>
      <span slot="title">自定义左侧Header</span>
    </i-header>
    <div class="line"></div>
    <i-header :fixed="fixed">
      <span slot="left"></span>
      <span slot="title">自定义右侧Header</span>
      <span slot="right" class="ipanelIcon">6</span>
    </i-header>
    <i-header :fixed="fixed">
      <span slot="left"></span>
      <span slot="title">自定义右侧Header</span>
      <span slot="right">分享</span>
    </i-header>
    <i-header :fixed="fixed">
      <span slot="title">自定义右侧Header</span>
      <span slot="right" class="ipanelIcon">址</span>
    </i-header>
    <div class="line"></div>
    <i-header :fixed="fixed">
      <span slot="title">标题的字数超过了限制长度</span>
    </i-header>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fixed: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .page{
    padding-top: 64px;
  }
  .line{
    width: 100%;
    height: 35px;
  }
</style>