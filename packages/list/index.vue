<template>
  <div class="i-list">
    <ul class="i-list-data">
      <li v-for="item in data">
        <div :class="{listtop: isShow === item.initial && isOut}" :id="item.initial"></div>
        <span class="i-list-data-title" v-text="item.initial"></span>
        <div class="i-list-data-item" v-for="cell in item.cells" v-text="cell"></div>
      </li>
    </ul>

    <div class="i-list-nav">
      <ul @touchstart="handleTouchStart">
        <li class="i-list-nav-item" v-for="item in data">
          <a :href="'#' + item.initial" v-text="item.initial"
          :class="{isSelected: isShow === item.initial}"
          @click="seleceList($event, item)"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'i-list',
    data () {
      return {
        isShow: false,
        navOffsetX: '',
        isMove: false,
        isOut: 0
      }
    },
    props: ['data'],
    methods: {
      handleTouchStart (e) {
        this.isMove = true
        if (e.target.tagName !== 'LI' && e.target.tagName !== 'A') {
          return
        }
        this.navOffsetX = e.changedTouches[0].clientX
        this.scrollList(e.changedTouches[0].clientY)
        window.addEventListener('touchmove', this.handleTouchMove)
        window.addEventListener('touchend', this.handleTouchEnd)
      },
      handleTouchMove (e) {
        e.preventDefault()
        this.scrollList(e.changedTouches[0].clientY)
      },
      handleTouchEnd (e) {
        this.isMove = false
        if (e.target.tagName !== 'LI' && e.target.tagName !== 'A') {
          return
        }
        this.scrollList(e.changedTouches[0].clientY)
        window.removeEventListener('touchmove', this.handleTouchMove)
        window.removeEventListener('touchend', this.handleTouchEnd)
      },
      scrollList (y) {
        let currentItem = document.elementFromPoint(this.navOffsetX, y)
        if (currentItem) currentItem.click()
      },
      seleceList (e, item) {
        this.isShow = item.initial
        this.isOut = !this.isMove && document.querySelector('#' + item.initial).getBoundingClientRect().top > 20 ? 0 : 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  .i-list{
    margin-top: 85px;
    width: 100%;
    height: 100%;
    &-data {
      width: 100%;
      text-indent: 20px;
      .listtop {
        height: 85px;
      }
      &-title {
        display: block;
        height: 70px;
        line-height: 70px;
      }
      &-item {
        height: 70px;
        line-height: 70px;
        background-color: #ffc;
      }
    }
    &-nav {
      position: absolute;
      top: 100px;
      right: 0;
      width: 50px;
      text-align: center;
      background-color: #fff;
      border-left: 1px solid #ccc;
      &-item {
        height: 45px;
        .isSelected {
          color: #f28300;
          font-weight: bold;
        }
        a {
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
</style>