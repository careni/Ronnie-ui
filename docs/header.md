# Header
>头部导航，自定义头部功能，以及标题

-----------
# 引入
```javascript
  import { Header } from 'ronnie-ui'

  Vue.component(Header.name, Header)
```

# 例子
基础使用
```html
  <i-header></i-header>
```

自定义标题
```html
  <i-header>
    <span slot='title'>Header</span>
  </i-header>
```

自定义左侧
```html
  <i-header>
    <span slot='left'>返回</span>
    <span slot='title'>Header</span>
  </i-header>
```

自定义右侧
```html
  <i-header>
    <span slot='left'>返回</span>
    <span slot='title'>Header</span>
    <span slot='right'>分享</span>
  </i-header>
```

是否固定在顶部
```javascript
  let option = false
```
```html
  <i-header :fixed='option'>
    <span slot='left'>返回</span>
    <span slot='title'>Header</span>
    <span slot='right'>分享</span>
  </i-header>
```

# API
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|fixed|固定在页面顶部|Boolean||true|

# Slot
| name | 描述 |
|-----|-----|
|left|显示头部左侧|
|title|显示头部正中标题|
|right|显示头部右侧|