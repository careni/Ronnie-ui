<template>
  <div class="page">
    <i-header :fixed="fixed">
      <span slot="title">NavBar</span>
    </i-header>
    <i-navbar class="nav" type="scroll" @selectNav="getMsgScroll" :navData="dataScroll"></i-navbar>
    <div class="message">
      <span>当前选择：</span>
      <span class="result">{{dataScrollMsg.name}}</span>
    </div>
    <i-navbar class="nav" type="stable" @selectNav="getMsgStable" :navData="dataStable"></i-navbar>
    <div class="message">
      <span>当前选择：</span>
      <span class="result">{{dataStableMsg.name}}</span>
    </div>

    <i-navbar class="nav" type="scroll" :navData="dataShow" @selectNav='getMsg1Stable'>
      <span slot="more" @click="test" class="ipanelIcon">址</span>
    </i-navbar>
    <div class="message">
      <span>当前选择：</span>
      <span class="result">{{dataStableMsg1.name}}</span>
    </div>
    <div class="message">
      <span>自定义按钮功能：</span>
      <span class="result">{{msg}}</span>
    </div>
  </div>
</template>
<script>
  let dataScroll = [
    {
      id: 1,
      name: '一级栏目一'
    },
    {
      id: 2,
      name: '一级栏目二'
    },
    {
      id: 3,
      name: '一级栏目三'
    },
    {
      id: 4,
      name: '一级栏目四'
    },
    {
      id: 5,
      name: '一级栏目五'
    }
  ]
  let dataShow = [
    {
      id: 1,
      name: 'AAA'
    },
    {
      id: 2,
      name: 'BBB'
    },
    {
      id: 3,
      name: 'CCC'
    },
    {
      id: 4,
      name: 'DDD'
    },
    {
      id: 5,
      name: 'EEE'
    },
    {
      id: 6,
      name: 'FFF'
    },
    {
      id: 7,
      name: 'GGG'
    },
    {
      id: 8,
      name: 'HHH'
    }
  ]
  let dataStable = [
    {
      id: 11,
      name: '二级栏目一'
    },
    {
      id: 22,
      name: '二级栏目二'
    },
    {
      id: 33,
      name: '二级栏目三'
    },
    {
      id: 44,
      name: '二级栏目四'
    }
  ]
  export default {
    data () {
      return {
        fixed: false,
        dataScroll: dataScroll,
        dataStable: dataStable,
        dataShow: dataShow,
        dataScrollMsg: {},
        dataStableMsg: {},
        dataStableMsg1: {},
        msg: '试试自定义吧！',
        flag: false
      }
    },
    methods: {
      test () {
        if (!this.flag) {
          this.msg = 'iPanel Components!'
        } else {
          this.msg = '试试自定义吧！'
        }
        this.flag = !this.flag
      },
      getMsgScroll (value) {
        this.dataScrollMsg = value
      },
      getMsgStable (value) {
        this.dataStableMsg = value
      },
      getMsg1Stable (value) {
        this.dataStableMsg1 = value
      }
    }
  }
</script>
<style lang="scss" scoped>
  .message{
    margin: 20px 0;
    font-size: 14px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f0f0f0;
    > span{
      text-indent: 10px;
    }
  }
  span.result{
      color: #999;
      padding-right: 10px
  }
  .nav{
    margin-bottom: 10px;
  }
</style>