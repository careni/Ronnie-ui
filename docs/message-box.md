# MessageBox
>弹出框，带有按钮和输入功能，自定义内容，自定义按钮

---------

## 引入
```javascript
  import { MessageBox } from 'ronnie-ui'

  Vue.prototype.$MessageBox = Vue.$MessageBox = MessageBox
```

## 例子

基础引用
```javascript
  this.$MessageBox()
```

修改弹出内容和按钮内容
```javascript
  this.$MessageBox({
    cancelText: '拒绝',
    confirmText: '接受',
    message: '你愿意接受调查吗'
  })
```

单个按钮弹出框
```javascript
  this.$MessageBox({
    singleButton: true,
    singleText: 'Sure',
    message: 'Please wait a while~'
  })
```

带Input的弹出框
```javascript
  this.$MessageBox({
    type: 'input',
    message: '自定义内容'
  })
```

带Textarea的弹出框
```javascript
  this.$MessageBox({
    type: 'textarea',
    message: '自定义内容'
  })
```

callback回调
```javascript
  this.$MessageBox({
    type: 'input',
    message: '自定义内容'
  }, function (msg) {
    // msg值类型Object {action， value}
    console.log(msg)  //双按钮点击确定按钮触发，单按钮点击触发
  })
```

resolve/reject回调
```javascript
  this.$MessageBox().then(action => {
    console.log(action)
  }).catch(action => {
    console.log(action)
  })
```

## API
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|type|弹出框的类型|String|msg, input, textarea|msg|
|message|需要显示的信息|String||默认Message|
|cancelText|取消按钮显示的内容|String||取消|
|confirmText|确定按钮显示的内容|String||确定|
|singleButton|是否只显示一个按钮|Boolean||false|
|singleText|单个按钮显示的内容|String||好的|
|placeholder|输入框的默认内容|String||默认输入内容...|

