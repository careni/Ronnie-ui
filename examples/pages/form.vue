<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot="title">Form</span>
    </i-header>

    <i-form>
       <span slot='left'>类型选择</span>
       <input slot='center' style="border:none;width:80%;outline:none;" type="text" placeholder='默认文字提示'>
       <span slot='right' style="color:red;height:100%;width:80%;display:flex;justify-content:flex-end;align-items:center;">*</span>
    </i-form>

    <i-form :right='right'>
      <span slot='left'>性别选择</span>
      <i-tag slot='center' :tagData="tagData"></i-tag>
    </i-form>

    <i-form>
      <span slot='left'>选择地址</span>
      <span slot='center'>广东省 深圳市 罗湖区</span>
      <span slot='right' class="left">请选择</span>
    </i-form>

    <i-form :left="right" :right='right'>
      <input type="text" slot='center' placeholder='用户名' class="input">
    </i-form>

    <i-form :left="right" :right='right'>
      <input type="password" slot='center' placeholder='密码' class="input">
    </i-form>

    <i-button type='default' size='large' class="button">提交</i-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        fixed: false,
        right: false,
        tagData: [
          {
            name: '男',
            id: '1'
          },
          {
            name: '女',
            id: '2'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
button.button{
  position: fixed;
  bottom: 10px;
  left: 15px;
}
.input{
  border: none;
  outline: none;
  width: 80%;
}
.left{
  margin-left: 25px;
  color: #999;
}
</style>