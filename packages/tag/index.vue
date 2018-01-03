<template>
  <div class="i-tag">
    <ul class="i-tag-item">
        <li class="i-tag-item-cell"
            v-for="(item, index) in tagData"
            :key="index"
            @click='select'
            :data-name="item.name"
            :data-id="item.id"
            :class="{last: index == tagData.length - 1, selected: index == 0}">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  import * as util from '../../src/tools/util.js'
  export default {
    name: 'i-tag',
    props: {
      tagData: {
        type: Array,
        default: function () { return [] }
      }
    },
    mounted () {
      this.$emit('click', {
        name: this.tagData[0].name,
        id: this.tagData[0].id
      })
    },
    methods: {
      select (evt) {
        let el = evt
        let target = el.target
        let siblings = el.target.parentNode.children
        for (let i = 0; i < siblings.length; i++) {
          util.revCls(siblings[i], 'selected')
        }
        util.addCls(target, 'selected')

        let value = {
          name: target.getAttribute('data-name'),
          id: target.getAttribute('data-id')
        }

        this.$emit('click', value)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/var.scss';
  .i-tag{
    width: 90%;
    height: 50px;
    border: 2px solid $theme;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 26px;
    &-item{
      display: flex;
      justify-conten: space-between;
      align-items: center;
      flex-grow: 1;
      width: 100%;
      height: 100%;
      white-space: nowrap;
      &-cell{
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 50px;
        text-align: center;
        border-right: 1px solid $theme;
        color: $normal-color;
      }
      > .last{
        border: none;
      }
      > .selected{
        background: $theme;
        color: $white;
      }
    }
  }
</style>