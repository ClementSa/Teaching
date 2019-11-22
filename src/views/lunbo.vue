<template>
<div id="app">
    <mt-swipe :auto="4000" class="imgs">
  <mt-swipe-item ><img src="../../public/imgs/zj1.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="../../public/imgs/zj2.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="../../public/imgs/zj3.jpg" alt=""></mt-swipe-item>
</mt-swipe>
</div>
</template>

<style scoped>
#app{
    width: 100%;
    height: 200px;
}
 .imgs{
     width: 100%;
     height: 200px;
     margin: 0 auto;
 }
 img{
      width: 100%; 
     height: 200px;
     
 }
</style>




