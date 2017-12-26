<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot="title">MessageBox</span>
    </i-header>
    <i-button @click="defaultConfirm" type="line" size="large" class="button" radius="none">默认弹窗弹窗</i-button>
    <i-button @click="diyConfirm" type="line" size="large" class="button" radius="none">DIY按钮</i-button>
    <i-button @click="diyButtom" type="line" size="large" class="button" radius="none">今天放假啦</i-button>
    <i-button @click="inputConfirm" type="line" size="large" class="button" radius="none">新建相册</i-button>
    <i-button @click="textareaConfirm" type="line" size="large" class="button" radius="none">感想</i-button>
    <div class="msg">新建相册名为： {{name}}</div>
    <div class="msg">我的感想是： {{thought}}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fixed: false,
        name: '',
        thought: ''
      }
    },
    methods: {
      defaultConfirm () {
        this.$MessageBox('默认弹窗！觉得好用就给个好评吧~').then(action => console.log(action)).catch(action => console.log(action))
      },
      diyConfirm () {
        this.$MessageBox({
          message: '这里是自定义内容以及按钮~',
          cancelText: '我相当于取消',
          confirmText: '我相当于确认'
        })
      },
      diyButtom () {
        this.$MessageBox({
          message: '我只有一个按钮！',
          singleButton: true,
          singleText: '按钮'
        }, function (action) { console.log(action) })
      },
      inputConfirm () {
        let that = this
        this.$MessageBox.input('新建相册', function (value, action) {
          if (action === 'confirm') {
            console.log(value)
            if (value !== '') that.name = value
          } else {
            console.log('cancel')
          }
        })
      },
      textareaConfirm () {
        let that = this
        this.$MessageBox.textarea('写一些分享吧', function (value, action) {
          if (action === 'confirm') {
            console.log(value)
            if (value !== '') that.thought = value
          } else {
            console.log('cancel')
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/var.scss';
  .msg{
    margin: 10px 0;
    width: 100%;
    height: 40px;
    border: 1px solid $line-color;
    text-indent: 10px;
    line-height: 40px;
  }
  button.button{
    border-color: $line-color;
    display: block;
    margin: 20px auto;
    color: $black;
  }
</style>