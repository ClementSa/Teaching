<template>   
  <div>
    <div id="d1">
    <p class="title">登录</p>
    <!-- 手机号输入框 -->
   <mt-field label="手机号" v-model="phone" placeholder="|请输入账号/手机号"></mt-field>
    <!-- 密码输入框 -->
    <mt-field label="密码" type="password" v-model="upwd" placeholder="|请输入密码"></mt-field>
    <mt-button type="primary" style="width:100%" @click="login">提交</mt-button>
    <p class="list" @click="gotoList">还没有账号,去注册</p>
    </div>
  </div>
</template>
<script>
 import Myheader from './Myheader.vue'
export default {
  components:{
    "Myheader":Myheader
  },
  //保存两个数据  手机号  密码
  data(){
    return{
      phone:"",
      upwd:""
    }
  },
  methods:{
    login(){
      var p=this.phone;
      var u=this.upwd;
      var reg=/^1[3-9]\d{9}$/;
      // console.log(p+"_"+u);
      if(!reg.test(p)){
        this.$messagebox("消息","手机号格式不正确");
        return;
      }
      if(!reg.test(u)){
        this.$messagebox("消息","密码格式不正确");
        return;
      }
      // var url="login";
      // var obj={phone:p,upwd:u};
      // this.axios.get(url,{params:obj}) 
      // .then(res=>{
      //   console.log(res.data.code)
      //   if(res.data.code==1){
      //     alert("1");
      //   }else{
      //     this.$toast("手机号或密码有误");
      //   }
      // })
      // .catch(err=>{
      //   console.log(err);
      // })
    },
    gotoList(){
      this.$router.push({
        path:"/List"
      })
    }
}
}
</script>
<style scoped>
  div{margin-top:30%;}
  .title {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}
.list{
  width:160px;
  margin-top:10px;
  font-size:14px;
  line-height: 22px;
  text-align: left;
  text-indent: 8px;
  color:#1ab2ff;
}
#d1{
  max-width: 450px;
  margin:60px auto;
  padding:20px 40px;
  border-radius: 10px;
  position: relative;
}
</style>
