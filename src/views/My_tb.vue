<template>
<div class="tab">
  <div class="bt1">
  <span id="bt">支教信息发布</span>
  </div>
  <mt-field label="标题:"></mt-field>
  <mt-field label="招募截止时间:"></mt-field>
  <mt-field label="支教工作时间:"></mt-field>
  <mt-field label="支教工作地点:"></mt-field>
  <mt-field label="招募所需人数:"></mt-field>
  <mt-field label="工作的内容:"></mt-field>
  <mt-field label="待遇:"></mt-field>
  <mt-field label="招募的条件:"></mt-field>
  <mt-field label="发布时间:"></mt-field>
  <mt-field label="发布作者:"></mt-field>
  <mt-field label="联系电话:"></mt-field>
  <mt-field label="联系邮箱:"></mt-field>
  <mt-button class="btn">确认发布</mt-button>
</div>
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>

<style scoped>
.bt1{
  width: 100%;
}
#bt,.btn{
  font-size:21px;
  margin-left: 36%;
  background: #0000ee;
  color: #fff;
}
</style>
