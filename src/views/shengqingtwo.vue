<template>
    <div>
        <div class="header">
            <span class="hreder-info">申请表单</span>
        </div>
        <div class="info">
            <mt-field label="何处得知活动" placeholder="何处得知活动" type="textarea" rows="4"></mt-field>
            <mt-field label="请简述对于支教的理解" placeholder="请简述(50~200字)" type="textarea" rows="4"></mt-field>
            <mt-field label="请简述您个性中最大的优点/缺点" placeholder="请简述(50~200字)" type="textarea" rows="4"></mt-field>
            <mt-field label="请简述未来五年内的人生规划" placeholder="请简述(50~200字)" type="textarea" rows="4"></mt-field>
            <mt-field label="请简述作为一名合格的教师应该具备的品质以及对您影响最大的教师的教学经验" placeholder="请简述(50~200字)" type="textarea" rows="4"></mt-field>
        </div>
        <mt-button class="btn1" :class="list1"  @click="jumpshang" >上一步</mt-button>
        <mt-button class="btn2" :class="list" @click="jumpxia" >下一步</mt-button> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            list1:{
                success:false,
                falsee:true
            },
            list:{
                success:true,
                falsee:false
            }
        }
    },
    methods:{
        jumpshang(){
            this.$router.push("/shengqing");
        },
        jumpxia(){
            this.$router.push("/shengqingthree")
        }
    }
}
</script>

<style scoped>
    .header{
        width:100%;
        height:30px;
        background:#0000ee;
        line-height: 30px;
        color:#fff;
    }
    .hreder-info{
        margin-left: 43% 
    }
    .info{
        margin-bottom: 10px;
    }
    .btn1{
        margin-left: 33%;
        border:1px solid #ccc;
    }
    .btn2{
        border:1px solid #ccc;
    }
    .success{
        background:#0000ee;
        color:#fff;
        font-size: 14px;
    }
    .falsee{
        background:#ccc;
        color:#fff;
        font-size: 14px;
    }
</style>

