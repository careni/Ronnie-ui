import './style/fonts/iconfont.css'
import Button from '%/button/index'
import Header from '%/header/index'
import Footer from '%/footer/index'
import Navbar from '%/navbar/index'
import Picker from '%/picker/index'
import List from '%/list/index'
import Search from '%/search/index'
import MessageBox from '%/message-box/message-box.js'
import Popup from '%/popup/popup.js'

const version = '1.0.0'

const install = function (Vue, Config = {}) {
  if (install.installed) return

  Vue.component(Button.name, Button)
  Vue.component(Popup.name, Popup)
  Vue.component(Header.name, Header)
  Vue.component(Footer.name, Footer)
  Vue.component(Navbar.name, Navbar)
  Vue.component(Picker.name, Picker)
  Vue.component(List.name, List)
  Vue.component(Search.name, Search)

  Vue.$MessageBox = Vue.prototype.$MessageBox = MessageBox
  Vue.$Popup = Vue.prototype.$Popup = Popup
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  version,
  Button
}
