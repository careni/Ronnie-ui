<template>
  <div class="page">
    <i-header  :fixed="fixed">
      <span slot="title">Tag</span>
    </i-header>
    <i-tag :tagData="tagData3" class="tags" @click="getValue3"></i-tag>
    <div class="message">
      当前选择：{{message3.name}} , ID为：{{message3.id}}
    </div>
    <i-tag :tagData="tagData2" class="tags" @click="getValue2"></i-tag>
    <div class="message">
      当前选择：{{message2.name}} , ID为：{{message2.id}}
    </div>
    <i-tag :tagData="tagData" class="tags" @click="getValue"></i-tag>
    <div class="message">
      当前选择：{{message.name}} , ID为：{{message.id}}
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fixed: false,
        message: '',
        message2: '',
        message3: '',
        tagData: [
          {
            name: 'AAAA',
            id: '10001'
          },
          {
            name: 'BBBB',
            id: '10002'
          },
          {
            name: 'CCCC',
            id: '10003'
          }
        ],
        tagData3: [
          {
            name: '方鸿渐',
            id: '100010001'
          },
          {
            name: '苏文纨',
            id: '100020002'
          },
          {
            name: '唐晓芙',
            id: '100030003'
          }
        ],
        tagData2: [
          {
            name: '男',
            id: '1-0-0-0-1'
          },
          {
            name: '女',
            id: '1-0-0-0-2'
          }
        ]
      }
    },
    methods: {
      getValue (value) {
        this.message = value
      },
      getValue3 (value) {
        this.message3 = value
      },
      getValue2 (value) {
        this.message2 = value
      }
    }
  }
</script>
<style lang="scss" scoped>
  div.tags{
    margin: 10px auto;
  }
  .message{
    width: 100%;
    height: 40px;
    border: 1px solid #f0f0f0;
    margin: 20px 0;
    line-height: 40px;
    font-size: 16px;
    text-indent: 15px;
  }
</style>