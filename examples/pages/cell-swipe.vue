<template>
    <div class="cell-swipe">
        <i-header :fixed="fixed">
            <span slot="title">cell-swipe</span>
            <span slot="right" @click="editList">编辑</span>
        </i-header>
        <div class="cell-ul">
            <div class="cell-text" v-if="items.length === 0">没有数据！</div>
            <i-cell-swipe v-for="item in items"
            :editing="editing"
            :checking="checking"
            :content="item"
            @changeDel="changeDel"
            @delete="deleteData"
            @cancel="editList(false)">
              <div slot="content" class="cell-content" v-text="item"></div>
            </i-cell-swipe>
        </div>
        <section v-show="editing">
          <div class="cancel" @click="pickAll">全选</div>
          <div class="delete" @click="removeItems()">删除</div>
        </section>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          items: ['项目一', '项目二', '项目三', '项目四', '项目五', '项目六', '项目七', '项目八', '项目九', '项目十'],
          editing: false,
          checking: false,
          fixed: true,
          delItems: new Set()
        }
      },
      methods: {
        deleteData (param) {
          let num = this.items.indexOf(param)
          console.log(num)
          this.items.splice(num, 1)
          // for (let ele in this.items) {
          //   if (this.items[ele] === param) {
          //     if (Number(ele) === 0) {
          //       return this.items.shift()
          //     }
          //     return this.items.splice(1, ele)
          //   }
          // }
        },
        editList (bool) {
          if (this.editing || !bool) {
            this.editing = false
          } else if (this.items.length === 0) {
            this.$Popup('没有数据不能编辑！')
          } else {
            this.editing = true
          }
        },
        changeDel (param) {
          if (param[0]) {
            this.delItems.add(param[1])
          } else {
            this.delItems.delete(param[1])
          }
        },
        removeItems () {
          console.log('removeItems', this.delItems)
          let items = Array.from(this.delItems)
          for (let ele of items) {
            let num = this.items.indexOf(ele)
            if (num > -1) {
              this.items.splice(num, 1)
            }
          }
          this.editing = false
        },
        pickAll () {
          this.checking = !this.checking
          if (this.checking) {
            this.delItems = new Set(this.items)
          } else {
            this.delItems = new Set()
          }
          console.log(this.delItems)
        }
      }
    }
</script>

<style lang="scss" scoped>
    .cell-ul {
      margin-top: 85px;
      width: 100%;
      .cell-text {
        font-size: 36px;
        line-height: 200px;
        text-align: center;
      }
    }
    section {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 150px;
      line-height: 150px;
      font-size: 36px;
      display: flex;
      div {
        width: 50%;
        text-align: center;
        border-top: 1px solid #ccc;
      }
      &>div:first-child {
        border-right: 1px solid #ccc;
      }
    }
</style>