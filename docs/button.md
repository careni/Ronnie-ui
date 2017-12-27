# Button

>按钮，自定义内部内容

----------

## 引入
```javascript
  import { Button } from 'ronnie-ui'

  Vue.components(Button.name, Button)
```
## 例子
改变类型
```html
  <i-button type='default'></i-button>
  <i-button type='primary'></i-button>
  <i-button type='danger'></i-button>
  <i-button type='line'></i-button>
```

改变大小
```html
  <i-button size='large'></i-button>
  <i-button size='normal'></i-button>
  <i-button size='small'></i-button>
```

改变圆角
改变大小
```html
  <i-button radius='low'></i-button>
  <i-button radius='half'></i-button>
  <i-button radius='none'></i-button>
```

禁用按钮
```javascript
  let option = true
```
```html
  <i-button :disabled='option'></i-button>
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