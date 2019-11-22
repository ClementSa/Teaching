<template>
<div>
  <!-- 顶部logo和登陆 -->
  <!-- <div class="tbar">
    <mt-titlebar class="tbar_i">
    
     <span class="h">追·梦</span>
    </mt-titlebar>
    <div class="but">
     <router-link class="rl" to="/Login">登录</router-link>
    </div>
  </div> -->
  
  <!-- 对应的页面 -->
  <!-- 头部  -->
  <!-- <Myheader></Myheader> -->
   <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
        <Myheader></Myheader>
        <lunbo></lunbo>
        <mylg></mylg>
        <deeds></deeds>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <Myheader></Myheader>
        捐赠
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <Myheader></Myheader>
       <zhijiao></zhijiao>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <Myheader></Myheader>
        <mytb></mytb>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部的导航栏 -->
    <mt-tabbar fixed v-model="active">
      <mt-tab-item id="tab1" @click.native="change(0)">
        <tabbaricon
        :focused="current[0].select"
        :normalImage="require('../../public/imgs/login.png')"
        :selectedImage="require('../../public/imgs/login0.png')">
      </tabbaricon>
        首页
      </mt-tab-item>
       <mt-tab-item id="tab2" @click.native="change(1)">
        <tabbaricon
        :focused="current[1].select"
        :normalImage="require('../../public/imgs/login1.png')"
        :selectedImage="require('../../public/imgs/login01.png')">
      </tabbaricon>
        捐赠
      </mt-tab-item>
        <mt-tab-item id="tab3" @click.native="change(2)">
        <tabbaricon
        :focused="current[2].select"
        :normalImage="require('../../public/imgs/login2.png')"
        :selectedImage="require('../../public/imgs/login02.png')">
      </tabbaricon>
        支教
      </mt-tab-item>
       <mt-tab-item id="tab4" @click.native="change(3)">
        <tabbaricon
        :focused="current[3].select"
        :normalImage="require('../../public/imgs/login5.png')"
        :selectedImage="require('../../public/imgs/login05.png')">
      </tabbaricon>
        发布
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import lunbo from "./lunbo.vue"
import My_lg from "./My_lg.vue"
import Deeds from "./Deeds.vue"
import TabBarIcon from "./TabBarIcon.vue"
import zhijiao from "./zhijiao.vue"
import My_tb from '../views/My_tb.vue'
import Myheader from './Myheader.vue'
export default {
  data(){
    return {
      active:"tab1",//默认选择面板
      current:[
        {select:true},//第一个按钮
        {select:false},
        {select:false},
        {select:false}//第四个按钮
      ]
    }
  },
  components:{
    "lunbo":lunbo,
    "mylg":My_lg,
    "deeds":Deeds,
    "zhijiao":zhijiao,
    "mytb":My_tb,
    "Myheader":Myheader,
    "tabbaricon":TabBarIcon //底部导航图片
  },
  methods:{
    //循环获取按钮图片下标，并修改其状态
    change(index){
      for(var i=0;i<this.current.length;i++){
        if(i==index){
          this.current[i].select=true;
        }else{
          this.current[i].select=false;
        }
      }
    }
  }
}
</script>
<style scoped>
.tbar_i{
  display: flex;
  background-color:#ddd;
  align-items: center;
  /* padding: 15px; */
  height:40px ;
  font-size: 22px;
  background-image:url("../../public/imgs/logo01.jpg")
}
.tbar_i,.but{
  margin-bottom: 12px; 
}
.h{
  color:#0000ee;
  font-style:italic;
}
.but{
 text-align: right;
 margin-top:-45px;
}
.rl{
  text-decoration: none;
  color: #0000ee;
  font-size: 17px;
}
</style>

