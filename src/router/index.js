import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import My_hf from '../views/My_hf.vue'
import shengqing from '../views/shengqing.vue'
import shengqingtwo from '../views/shengqingtwo.vue'
import shengqingthree from '../views/shengqingthree.vue'
import My_tb from '../views/My_tb.vue'
import Login from '../views/Login.vue'
import List from '../views/List.vue'
import zhijiao from "../views/zhijiao.vue"
import Myheader from "../views/Myheader.vue"
// import Details from "../views/Details.vue"
Vue.use(VueRouter)

const routes = [
  // {path:'/Details',component:Details},
  { path: '/Myheader', component: Myheader},  
  { path: '/zhijiao', component: zhijiao},
  { path: '/Login', component: Login},
  { path: '/List', component: List}, 
  { path: '/My_tb', component: My_tb}, 
  { path: '/shengqingthree', component: shengqingthree},
  { path: '/shengqingtwo', component: shengqingtwo},
  { path: '/shengqing', component: shengqing},
  { path: '/Header', component: Header},
  { path: '/My_hf', component: My_hf},
  { path: '/', component: My_hf },
]

const router = new VueRouter({
  routes
})

export default router
