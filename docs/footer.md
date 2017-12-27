# Footer

>底部导航， 自定义导航按钮, 点击导航跳转到对应路由

------------

## 引入
```javascript
  import { Footer } from 'ronnie-ui'

  Vue.component(Footer.name, Footer)
```

## 例子
基础使用
```javascript
  let options = [
    {name: '项目一', icon: '字', router: 'index'},
    {name: '项目二', icon: '字', router: 'main'},
    {name: '项目三', icon: '字', router: 'secondary'},
  ]
```
```html
  <i-footer :navs='options'></i-footer>
```

是否固定在底部
```javascript
  let option = true
```
```html
  <i-footer :navs='options' :fixed='option'></i-footer>
```

获取当前选择的项目数据
```html
  <i-footer :navs='options' :fixed='option' @selectFooter='getValue'></i-footer>
```
```javascript
  methods: {
    getValue (value) {
      console.log(value) //value为Object {name,router}
    }
  }
```

## API
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|navs|显示的所有项目数据|Array||[]|
|fixed|固定到底部|Boolean||true|

## Events
|事件名称|事件说明|回调参数及类型|默认值|
|----|----|----|----|
|selectFooter|点击底部导航项目时的回调函数|返回当前选中的项目的对应值，类型为Object|navs[0]|



