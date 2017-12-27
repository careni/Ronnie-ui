<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot="left"></span>
      <span slot="title">iPanel Components</span>
    </i-header>
    <ul class="page-list">
      <li class="page-list-item" @click="locationTo('header')">
        <div class="page-list-item-info">Header</div>
      </li>
      <li class="page-list-item" @click="locationTo('footer')">
        <div class="page-list-item-info">Footer</div>
      </li>
      <li class="page-list-item" @click="locationTo('button')">
        <div class="page-list-item-info">Button</div>
      </li>
      <li class="page-list-item" @click="locationTo('navbar')">
        <div class="page-list-item-info">Navbar</div>
      </li>
      <li class="page-list-item" @click="locationTo('messagebox')">
        <div class="page-list-item-info">MessageBox</div>
      </li>
      <li class="page-list-item" @click="locationTo('popup')">
        <div class="page-list-item-info">Popup</div>
      </li>
      <li class="page-list-item" @click="locationTo('search')">
        <div class="page-list-item-info">Search</div>
      </li>
      <li class="page-list-item" @click="locationTo('tag')">
        <div class="page-list-item-info">Tag</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fixed: false
      }
    },
    methods: {
      test () {
        console.log('this is a test methods!')
      },
      locationTo (index) {
        this.$router.push(index)
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import '../../src/style/var.scss';
  .page-list{
    width: 100%;
    &-item:after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 20px;
      margin: auto;
      @include arrowStyle(8px,2px,#c8c8cd,45deg);
    }
    &-item{
      position: relative;
      display: flex;
      height: 50px;
      width: 100%;
      border-bottom: 1px solid #F0F0F0;
      line-height: 50px;
      &-info{
        width: 100%;
        text-indent: 20px;
        font-size: 14px;
      }
    }
  }
</style>