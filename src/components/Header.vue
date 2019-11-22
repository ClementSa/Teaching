<template>
<div class="d0">
  <header class="hea">
    <!-- 左侧图片和字体 -->
    <a href="javascript:;">
      <img id="p1" src="../../public/imgs/timg.jpg"/>
    </a>
    <span id="my_span">
      <h4>追</h4>
      <h4>·</h4>
      <h4>梦</h4>
    </span>
    <!-- 文字标语 -->
    <span>
    <h5 id="c1">让所有孩子，</h5>
    <h6 id="c">都拥有追梦的可能</h6>
    </span>
    <!-- 右侧导航栏 -->
    <div id="d1">
    <ul>
      <li><a href="">首页</a></li>
      <ul id="my_ul">
      <li><a href="">我要支教</a></li>
      <ul id="my_ul1">
      <li><a href="">我要申请</a></li>
      <li><a href="">支教故事</a></li>
      <li><a href="">支教地区</a></li>
      </ul>
      </ul>
      <li><a href="">我要捐赠</a></li>
      <li><a href="">关于我们</a></li>
      <a href="">
        <img id="p2" src="../../public/imgs/icon.png" alt="">
      </a>
    </ul>
    </div>
  </header>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
  }
}
</script>
<style scoped>
.hea{
  display:flex;
  margin:0;
  margin-left: 100px;
}
#p1{width:85px;}
#d1 ul{
  margin: 0;padding: 0;
  text-decoration: none;
  list-style: none;
}
#d1 a{
  margin-left: 75px;
  text-decoration: none;
  color: black;
}
#c,#c1{
  margin: 0;
  padding:13px;
  color:dimgray;
}
#c{margin-left: 100px;}
#p2{
  width: 80px;
  height: 35px;
}
#my_span h4{
  padding: 5px;
  margin: 0;
}
#d1>ul{
  display: flex;
  list-style: none;
}
#my_ul{
  list-style: none;
}
#my_ul1 li{
  display: none;
  margin-top: 15px
}
#d1{margin-top: 25px;}
</style>

