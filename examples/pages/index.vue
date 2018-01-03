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
      <li class="page-list-item" @click="locationTo('form')">
        <div class="page-list-item-info">Form</div>
      </li>
      <li class="page-list-item" @click="locationTo('card')">
        <div class="page-list-item-info">Card</div>
      </li>
      <li class="page-list-item" @click="locationTo('picker')">
        <div class="page-list-item-info">Picker</div>
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
      right: 40px;
      margin: auto;
      @include arrowStyle(16px,4px,#c8c8cd,45deg);
    }
    &-item{
      position: relative;
      display: flex;
      height: 100px;
      width: 100%;
      border-bottom: 1px solid #F0F0F0;
      line-height: 100px;
      &-info{
        width: 100%;
        text-indent: 40px;
        font-size: 28px;
      }
    }
  }
</style>