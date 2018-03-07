<template>
    <div class="cell-swipe">
        <i-header :fixed="fixed">
            <span slot="title">cell-swipe</span>
            <span slot="right" @click="editList">编辑</span>
        </i-header>
        <ul class="cell-ul">
            <i-cell-swipe v-for="item in items"
            :editing="editing"
            :content="item"
            @delete="deleteData"
            @cancel="editList(false)">
              <div slot="content" class="cell-content" v-text="item"></div>
            </i-cell-swipe>
        </ul>
        <section v-show="editing">
          <div class="cancel" @click="editList(false)">取消</div>
          <div class="delete" @click="deleteItems()">删除</div>
        </section>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          items: ['项目一', '项目二', '项目三', '项目四', '项目五', '项目六', '项目七', '项目八', '项目九', '项目十'],
          editing: false
        }
      },
      methods: {
        deleteData (param) {
          for (let ele in this.items) {
            if (this.items[ele] === param) {
              if (Number(ele) === 0) {
                return this.items.shift()
              }
              return this.items.splice(1, ele)
            }
          }
        },
        editList (bool) {
          if (this.editing || !bool) {
            this.editing = false
          } else {
            this.editing = true
          }
          console.log(this.editing)
        }
      }
    }
</script>

<style lang="scss" scoped>
    .cell-ul {
      margin-top: 85px;
      width: 100%;
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