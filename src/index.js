import './style/fonts/iconfont.css'
import Button from '%/button/index'
import Header from '%/header/index'
import Footer from '%/footer/index'
import Navbar from '%/navbar/index'
import Tag from '%/tag/index'
import Form from '%/form/index'
import List from '%/list/index'
import Search from '%/search/index'
import Card from '%/card/index'
import MessageBox from '%/message-box/message-box.js'
import Picker from '%/picker/picker.js'
import Popup from '%/popup/popup.js'

import Lazyload from '%/directives/lazyload'

// current version
const version = '1.0.0'

// install ronnie-ui
const install = function (Vue, Config = {}) {
  if (install.installed) return

  // CSS组件引入
  Vue.component(Button.name, Button)
  Vue.component(Popup.name, Popup)
  Vue.component(Header.name, Header)
  Vue.component(Footer.name, Footer)
  Vue.component(Navbar.name, Navbar)
  Vue.component(Tag.name, Tag)
  Vue.component(Form.name, Form)
  Vue.component(Picker.name, Picker)
  Vue.component(List.name, List)
  Vue.component(Search.name, Search)
  Vue.component(Card.name, Card)

  // 结构组件引入

  // JS组件引入
  Vue.$MessageBox = Vue.prototype.$MessageBox = MessageBox
  Vue.$Popup = Vue.prototype.$Popup = Popup
  Vue.$Popup = Vue.prototype.$Picker = Picker

  // JS功能插件
  Vue.$Lazyload = Vue.prototype.$Lazyload = Lazyload
}

// 在浏览器环境下自动install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 组件整体以及单独导出
export default{
  install,
  version,
  Button,
  Header,
  Footer,
  Navbar,
  Tag,
  Form,
  List,
  Search,
  MessageBox,
  Popup,
  Picker,
  Lazyload
}
