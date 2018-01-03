<template>
  <div class="i-footer" :class="{fixed:fixed}">
    <div class="i-footer-item"
       :class="{'selected': selectValue[index]}"
       :data-name="item.name"
       :data-router="item.router"
       :data-index="index"
       @click="select"
       v-for="(item, index) in navs"
       :key="index">
      <div class="i-footer-item-icon ipanelIcon">{{item.icon}}</div>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'i-footer',
    props: {
      navs: {
        type: Array,
        default: function () { return [] }
      },
      fixed: {
        type: Boolean,
        default: true
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
        if (evt) {
          let el = evt.target.parentNode
          obj = {
            name: el.getAttribute('data-name'),
            router: el.getAttribute('data-router'),
            index: el.getAttribute('data-index')
          }
        } else {
          obj = this.navs[0]
          obj.index = 0
        }
        this.selectValue = []
        this.selectValue[obj.index] = true
        this.$emit('selectFooter', obj)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/var.scss';

  .i-footer{
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 88px;
    border-top:1px solid $line-color;
    border-bottom:1px solid $line-color;
    background: $white;
    &-item{
      display: block;
      width: 76px;
      height: 70px;
      text-align: center;
      color: #666;
      &-icon{
        font-size: 32px;
      }
      p{
        font-size: 24px;
      }
    }
  }
  .selected{
    color: $theme;
  }
  .fixed{
    position: fixed;
    bottom: 0;
  }
</style>