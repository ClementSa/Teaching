<template>
  <div>
    <!-- 顶部logo -->
    <!-- 顶部logo和登陆 -->
    <div class="tbar">
      <div class="tbar_i">
      <!-- <img src="../../public/imgs/logo6.png" alt=""> -->
        <span class="h1">追·梦</span>
      </div>
    <div class="but">
      <router-link class="rl" to="/Login">登录</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  
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
.h1{
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