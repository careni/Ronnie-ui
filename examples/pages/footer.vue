<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot='title'>Footer</span>
    </i-header>
    <i-footer :fixed="fixed" :navs="arr1" @selectFooter="selectOne"></i-footer>
    <div class="message">当前选择：{{one}}</div>
    <i-footer :fixed="fixed" :navs="arr2" @selectFooter="selectTwo"></i-footer>
    <div class="message">当前选择：{{two}}</div>

    <div class="message">当前选择：{{three}}</div>
    <i-footer :navs="arr" @selectFooter="selectThree"></i-footer>
  </div>
</template>
<script>
  let arr = [
    {
      icon: 'ぶ',
      name: '栏目一',
      router: '1'
    },
    {
      icon: '仏',
      name: '栏目二',
      router: '2'
    },
    {
      icon: '奒',
      name: '栏目三',
      router: '3'
    },
    {
      icon: '協',
      name: '栏目四',
      router: '4'
    },
    {
      icon: '匳',
      name: '栏目五',
      router: '5'
    }
  ]
  let arr1 = [
    {
      icon: 'ぶ',
      name: '栏目A',
      router: '1'
    },
    {
      icon: '仏',
      name: '栏目B',
      router: '2'
    },
    {
      icon: '奒',
      name: '栏目C',
      router: '3'
    },
    {
      icon: '協',
      name: '栏目D',
      router: '4'
    }
  ]
  let arr2 = [
    {
      icon: 'ぶ',
      name: '栏目①',
      router: '1'
    },
    {
      icon: '仏',
      name: '栏目②',
      router: '2'
    },
    {
      icon: '奒',
      name: '栏目③',
      router: '3'
    }
  ]
  export default {
    data () {
      return {
        fixed: false,
        arr: arr,
        arr1: arr1,
        arr2: arr2,
        one: '',
        two: '',
        three: ''
      }
    },
    methods: {
      selectOne (value) {
        this.one = value.name
      },
      selectTwo (value) {
        this.two = value.name
      },
      selectThree (value) {
        this.three = value.name
      }
    }
  }
</script>
<style lang="scss" scoped>
.message{
  width: 100%;
  height: 40px;
  margin: 20px 0;
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  text-indent: 20px;
}
</style>