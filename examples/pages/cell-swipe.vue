<template>
    <div class="cell-swipe">
        <i-header :fixed="fixed">
            <span slot="title">cell-swipe</span>
        </i-header>
        <ul class="cell-ul">
            <i-cell-swipe v-for="item in items" :content="item" @delete="deleteData">
              <div slot="content" class="cell-content" v-text="item"></div>
            </i-cell-swipe>
        </ul>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          items: ['项目一', '项目二', '项目三', '项目四', '项目五', '项目六', '项目七', '项目八', '项目九', '项目十']
        }
      },
      methods: {
        deleteData (param) {
          console.log('deleteData', param)
          for (let ele in this.items) {
            if (this.items[ele] === param) {
              if (Number(ele) === 0) {
                console.log('---')
                return this.items.shift()
              }
              return this.items.splice(1, ele)
            }
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
    .cell-ul {
      margin-top: 85px;
      width: 100%;
    }
</style>