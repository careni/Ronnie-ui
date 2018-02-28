<template>
  <div class="i-picker" v-show="flag">
    <header class="i-picker-header">
      <span class="i-picker-header-cancel" @click="handleAction('cancel')">取消</span>
      <span class="i-picker-header-title">标题</span>
      <span class="i-picker-header-confirm" @click="handleAction('confirm')">确定</span>
    </header>
    <div class="i-picker-center"></div>
    <div class="i-picker-content">
      <div class="i-picker-item">
        <ul class="i-picker-item-levelone i-picker-item-child" :data-levels='1'>
          <li class="i-picker-item-child-li i-picker-item-levelone-li"
              v-for= "(item, index) in levelone"
              :key="index"
              :data-value="item.value"
              :data-id="item.id"
              :data-parentId="item.parentId">{{item.value}}</li>
        </ul>
        <ul v-if="levels >= 2" class="i-picker-item-leveltwo i-picker-item-child" :data-levels='2'>
          <li class="i-picker-item-child-li i-picker-item-leveltwo-li"
              v-for= "(item, index) in leveltwo"
              :key="index"
              :data-value="item.value"
              :data-id="item.id"
              :data-parentId="item.parentId">{{item.value}}</li>
        </ul>
        <ul v-if="levels >= 3" class="i-picker-item-levelthree i-picker-item-child" :data-levels='3'>
          <li class="i-picker-item-child-li i-picker-item-levelthree-li"
              v-for= "(item, index) in levelthree"
              :key="index"
              :data-value="item.value"
              :data-id="item.id"
              :data-parentId="item.parentId">{{item.value}}</li>
        </ul>
        <ul v-if="levels >= 4" class="i-picker-item-levelfour i-picker-item-child" :data-levels='4'>
          <li class="i-picker-item-child-li i-picker-item-levelfour-li"
              v-for= "(item, index) in levelfour"
              :key="index"
              :data-value="item.value"
              :data-id="item.id"
              :data-parentId="item.parentId">{{item.value}}</li>
        </ul>
        <ul v-if="levels >= 5" class="i-picker-item-levelfive i-picker-item-child" :data-levels='5'>
          <li class="i-picker-item-child-li i-picker-item-levelfive-li"
              v-for= "(item, index) in levelfive"
              :key="index"
              :data-value="item.value"
              :data-id="item.id"
              :data-parentId="item.parentId">{{item.value}}</li>
        </ul>
        <ul v-if="levels >= 6" class="i-picker-item-levelsix i-picker-item-child" :data-levels='6'>
          <li class="i-picker-item-child-li i-picker-item-levelsix-li"
              v-for= "(item, index) in levelsix"
              :key="index"
              :data-value="item.value"
              :data-id="item.id"
              :data-parentId="item.parentId">{{item.value}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'i-picker',
    methods: {
      handleAction (index) {

      }
    },
    data () {
      return {
        flag: false,
        rows: 3,
        levels: 1,
        lineHeight: 50,
        unit: 'px',
        callback: null,
        levelone: [],
        leveltwo: [],
        levelthree: [],
        levelfour: [],
        levelfive: [],
        levelsix: []
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '../../src/style/var.scss';
.i-picker{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  &-header{
    width: 100%;
    background: #f0f0f0;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    &-cancel,&-confirm{
      margin: 0 10px;
      color: $theme;
    }
  }
  &-content{
    position: absolute;
    background: #fff;
    width: 100%;
    bottom: 0;
    padding: 20px 0;
  }
  &-center{
    position: absolute;
    width: 100%;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    z-index:1;
    pointer-events: none;
  }
  &-item{
    position:relative;
    top: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: #fff;
    overflow: hidden;
    &-child{
      font-size: 26px;
      color: #999;
      position: relative;
      flex-grow: 1;
      width: 100%;
      &-li{
        width: 100%;
        text-align: center;
        transition: all .2s linear;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
.at{
  font-size: 34px;
  color: #111;
}
</style>