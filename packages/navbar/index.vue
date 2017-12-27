<template>
  <div class="i-navbar" :class="{'is-fixed': fixed}" v-if="type === 'stable'">
    <ul class="i-navbar-stable-list">
      <li class="i-navbar-stable-list-item"
          :class="{selected: selectValue[index]}"
          v-for="(item, index) in navData"
          :data-id="item.id"
          :data-name="item.name"
          :data-index="index"
          :key="item.id"
          @click="select">{{item.name}}</li>
    </ul>
  </div>
  <div class="i-navbar" :class="{'is-fixed': fixed}" v-else>
    <ul class="i-navbar-scroll-list">
      <li class="i-navbar-scroll-list-item"
          :class="{selected: selectValue[index],last: index === navData.length - 1}"
          v-for="(item, index) in navData"
          :data-id="item.id"
          :data-name="item.name"
          :data-index="index"
          :key="item.id"
          @click="select">{{item.name}}</li>
    </ul>
    <div class="i-navbar-more">
      <slot name="more">
        <span class="ipanelIcon">垃</span>
      </slot>
    </div>
  </div>
</template>
<script>
  let testData = [
    {
      id: 1,
      name: '栏目一'
    },
    {
      id: 2,
      name: '栏目二'
    },
    {
      id: 3,
      name: '栏目三'
    }
  ]
  export default {
    name: 'i-navbar',
    props: {
      fixed: {
        type: Boolean,
        default: false
      },
      navData: {
        type: Array,
        default: function () { return testData }
      },
      type: {
        type: String,
        default: 'scroll',
        validator (value) {
          return ['stable', 'scroll'].indexOf(value) > -1
        }
      }
    },
    data () {
      return {
        selectValue: [true]
      }
    },
    mounted () {
      this.select()
    },
    methods: {
      select (evt) {
        let obj = {}
        let index = 0
        if (evt) {
          let el = evt.target
          obj = {
            id: el.getAttribute('data-id'),
            name: el.getAttribute('data-name')
          }
          index = el.getAttribute('data-index')
        } else {
          index = 0
          obj = this.navData[0]
        }
        this.selectValue = []
        this.selectValue[index] = true
        this.$emit('selectNav', obj)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/var.scss';
  .i-navbar{
    position: relative;
    width: 100%;
    height: 32px;
    border-bottom: 1px solid $line-color;
    border-top: 1px solid $line-color;
    font-size: 14px;
    overflow: hidden;
    background: $white;
    &-stable-list{
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 32px;
      color: $normal-color;
      &-item{
        height: 32px;
        line-height: 32px;
        float: left;
      }
    }
    &-scroll-list{
      position: relative;
      height: 42px;
      overflow-x: scroll;
      white-space: nowrap;
      z-index: 1;
      &-item{
        height: 32px;
        margin: 0 15px;
        line-height: 32px;
        display: inline-block;
      }
    }
    &-more{
      position: absolute;
      top: 0;
      right: 0;
      width: 32px;
      height: 32px;
      box-sizing: border-box;
      line-height: 32px;
      text-align: center;
      color: #999;
      font-size: 18px;
      box-shadow: 0 0 5px #999;
      z-index: 999;
      background: $white;
    }
    .selected{
      box-sizing: border-box;
      color: $theme;
      border-bottom: 2px solid $theme;
    }
    .last{
      margin-right: 47px;
    }
  }
</style>