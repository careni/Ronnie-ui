# Button

>基础按钮，自定义内部内容

----------

## 引入
```javascript
  import { Button } from 'ronnie-ui'

  Vue.component(Button.name, Button)
```
## 例子
改变类型
```html
  <i-button type='default'>default</i-button>
  <i-button type='primary'>primary</i-button>
  <i-button type='danger'>danger</i-button>
  <i-button type='line'>line</i-button>
```

改变大小
```html
  <i-button size='large'>large</i-button>
  <i-button size='normal'>normal</i-button>
  <i-button size='small'>small</i-button>
```

改变圆角
```html
  <i-button radius='low'>low</i-button>
  <i-button radius='half'>half</i-button>
  <i-button radius='none'>none</i-button>
```

禁用按钮
```javascript
  let option = true
```
```html
  <i-button :disabled='option'></i-button>
```

自定义内容(文字或图标)
```html
  <i-button size='large'>
    <span>SELFMADE</span>
    <span class="icon">5</span>
  </i-button>
```

## API
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
| disabled |禁用按钮|Boolean||false|
|type|按钮类型|String|default, primary, danger, line|default|
|size|按钮大小|String|large, normal, small|normal|
|radius|按钮圆角|String|low, half, none|low|

## Slot
| name | 描述 |
|------|--------|
| - | 显示的文本内容|