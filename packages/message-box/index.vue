<template>

  <div class="i-message-box">
    <transition name="fade">
      <div class="i-message-box-item" :class="{shortItem: type === 'msg' || type === 'input', longItem: type === 'textare'}" v-if="flag">
        <div class="i-message-box-item-top" :class="{short: type === 'msg' || type === 'input', long: type === 'textare'}">
          <span class="msg" v-if="type==='msg'">{{message}}</span>
          <div class="input" v-else-if="type==='input'">
            <div class="inputTitle">{{message}}</div>
            <input type="text" class="inputMsg" :placeholder="placeholder" v-model="inputValue">
          </div>
          <div class="textarea" v-else>
            <div class="textareaTitle">{{message}}</div>
            <textarea name="textareaMsg" class="textareaMsg" id="textareaMsg" :placeholder="placeholder" v-model="inputValue"></textarea>
          </div>
        </div>
        <div class="i-message-box-item-bottom">
          <div class="i-message-box-item-bottom-single" v-if="singleButton" @click="handleAction('confirm')">{{singleText}}</div>
          <div class="i-message-box-item-bottom-group" v-else>
            <span class="cancel"  @click="handleAction('cancel')">{{cancelText}}</span>
            <span class="confirm" @click="handleAction('confirm')">{{confirmText}}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'i-message-box',
    methods: {
      handleAction (action) {
        let callback = this.callback
        callback(action)
      }
    },
    data () {
      return {
        singleButton: false,
        placeholder: '请输入相册名称...',
        cancelText: '',
        confirmText: '',
        singleText: '',
        message: '',
        title: '',
        type: '',
        flag: '',
        inputValue: '',
        callback: null
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../src/style/var.scss';
  .i-message-box{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.7);
    &-item{
      width: 270px;
      height: 170px;
      background: $white;
      border-radius: 10px;
      &-top,&-bottom{
        width: 100%;
      }
      &-top{
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        text-align:center;
        height: 125px;
        font-size: 16px;
        .msg{
          padding: 0 10px;
        }
      }
      &-bottom{
        font-size: 17px;
        height: 44px;
        border-top: 1px solid $line-color;
        color: $theme;
        text-align:center;
        &-single{
          width: 100%;
          line-height: 44px;
        }
        &-group{
          width: 100%;
          display: flex;
          span:nth-child(1){
            border-right: 1px solid $line-color;
          }
          span{
            width: 50%;
            line-height: 44px;
          }
        }
      }
    }
  }
  .input{
    width: 100%;
    height: 105px;
    .inputTitle{
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .inputMsg{
      border: none;
      outline: none;
      width: 225px;
      height: 30px;
      font-size: 15px;
      border: 1px solid $line-color;
    }
  }
  .textarea{
    .textareaTitle{
      padding: 5px 0;
    }
    .textareaMsg{
      width: 225px;
      height: 87.5px;
      border: 1px solid $line-color;
    }
  }
  .longItem{
    height: 175px;
  }
  .shortItem{
    height: 150px;
  }
  .long{
    height: 125px;
  }
  .short{
    height: 105px;
  }
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>