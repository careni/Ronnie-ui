<template>
  <div class="cell-swipe"
    @touchstart.stop="startMove"
    @touchmove.stop="moving"
    @touchend.stop="endMove">
  <div class="cell-select" :class="{show: moveLeft}">
      <input type="checkbox" name="item">
    </div>
    <slot name="content"></slot>
    <div class="delete" :class="{show: moveRight}"
      @click="deleteItem"
      >删除</div>
  </div>
</template>

<script>
  export default {
    name: 'i-cell-swipe',
    data () {
      return {
        start: {x: 0, y: 0},
        end: {x: 0, y: 0},
        moveLeft: false,
        moveRight: false
      }
    },
    props: ['content'],
    methods: {
      startMove (evt) {
        evt = evt.changedTouches ? evt.changedTouches[0] : evt
        this.start.x = evt.pageX
        this.start.y = evt.pageY
        console.log(this.start)
      },
      moving (evt) {
        const e = evt.changedTouches ? evt.changedTouches[0] : evt
        const offsetTop = e.pageY - this.start.y
        const offsetLeft = this.offsetLeft = e.pageX - this.start.x
        console.log(offsetTop, offsetLeft)
        if (offsetLeft > 100 && Math.abs(offsetTop) < Math.abs(offsetLeft)) {
          this.moveLeft = true
          this.moveRight = false
        } else if (offsetLeft < -150 && Math.abs(offsetTop) < Math.abs(offsetLeft)) {
          this.moveRight = true
          this.moveLeft = false
        } else {
          this.moveRight = false
          this.moveLeft = false
        }
      },
      endMove (evt) {
        console.log(evt)
      },
      deleteItem () {
        console.log('deleteItem')
        this.moveRight = false
        this.moveLeft = false
        this.$emit('delete', this.content)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../src/style/var.scss';
  .cell-swipe {
    position: relative;
    display: flex;
    // width: calc(100% + 300px);
    height: 100px;
    line-height: 100px;
    overflow: hidden;
    .cell-select {
      display: none;
      width: 100px;
      input {
        width: 40px;
        height: 40px;
        margin: 20px 0 0 20px;
      }
      border-bottom: 1px solid #eee;
    }
    .cell-content {
      display: inline-block;
      width: 100%;
      text-indent: 20px;
      border-bottom: 1px solid #eee;
    }
    .delete {
      display: none;
      text-align: center;
      width: 200px;
      background-color: #ffc;
      border-top: 0.5px solid #eee;
      border-bottom: 0.5px solid #eee;
    }
  }
  .show {
    display: inline-block !important;
    transition: display 2s;
    -webkit-transition: display 2s;
  }
  .right {
    display: inline-block;
  }
</style>