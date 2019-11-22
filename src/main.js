import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//1:完整引入mint-ui组件库
import MintUI from "mint-ui"
//2:单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
//3:将mint-ui对象注册vue实例中
Vue.use(MintUI) 
Vue.config.productionTip = false
// 选择图片或者照片
// import { Actionsheet } from 'mint-ui';
// Vue.component(Actionsheet.name, Actionsheet);
// 轮播图
// import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
import Footer from "./components/Footer.vue"
Vue.component("Footer",Footer)
// element 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
