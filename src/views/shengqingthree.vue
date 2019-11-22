<template>
    <div>
        <div class="header">
            <span class="header-info">紧急联系人</span>
        </div>
        <div class="info">
            <mt-field label="姓名" placeholder="姓名"></mt-field>
            <mt-field label="关系" placeholder="关系"></mt-field>
            <mt-field label="电话" placeholder="电话"></mt-field>
        </div>
        <mt-button class="btn1" :class="list1"   @click="jumpshang">上一步</mt-button>
        <mt-button class="btn2" :class="list" @click="handle">确认申请</mt-button>
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
            this.$router.push("/shengqingtwo");
        },
        handle(){
            this.$messagebox.confirm("确认提交申请吗？")
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
    .header-info{
        margin-left: 43% 
    }
    .info{
        margin-bottom: 10px;
    }
    .btn1{
        margin-left: 30%;
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

