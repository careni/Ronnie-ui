<template>
  <div class="i-card">
    <div class="i-card-img" :class="{alignRightImg: align}">
      <img src="../../src/images/default_small.png" alt="">
    </div>
    <div class="i-card-item" :class="{alignRightItem: align}">
      <span class="i-card-item-title">我是这篇文章的标题我有点长长长长我是这篇文章的标题我有点</span>
      <div class="i-card-item-detail">
        <span class="i-card-item-detail-time">30分钟前</span>
        <span class="i-card-item-detail-source">南方日报</span>
        <span class="i-card-item-detail-comment"><span class="ipanelIcon">亳 </span>175评论</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'i-card',
    props: {
      align: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/var.scss';
  .i-card{
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 162px;
    border-bottom: 1px solid $line-color;
    >.alignRightItem{
      order: 1;
      padding: 0 0 0 20px;
    }
    >.alignRightImg{
      order: 2;
      margin-right: 20px;
    }
    &-img{
      width: 202px;
      height: 100%;
      flex-grow: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      > img{
        width: 182px;
        height: 101px;
        margin-left: 20px;
      }
    }
    &-item{
      position: relative;
      height: 101px;
      padding: 0 20px;
      font-size: 20px;
      color: $normal-color;
      &-title{
        display: block;
        font-size: 26px;
        height: 72px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: black;
      }
      &-detail{
        position: absolute;
        display: flex;
        align-items: flex-end;
        bottom: 0;
        > span{
          margin-right: 20px;
        }
      }
    }
  }
</style>