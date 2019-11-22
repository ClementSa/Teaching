<template>
    <div>
        <div class="header">
            <span class="header-info">基本信息</span>
        </div>
        <div class="info">
                <mt-field label="姓名" placeholder="姓名"></mt-field>
                <mt-field label="身份证号" placeholder="身份证号" type="email"></mt-field>
                <mt-field label="性别" placeholder="男" type="password"></mt-field>
                <mt-field label="年龄" placeholder="年龄" type="tel"></mt-field>
                <mt-field label="名族" placeholder="名族" type="url"></mt-field>
                <mt-field label="籍贯" placeholder="籍贯" type="number"></mt-field>
                <mt-field label="婚否" placeholder="请选择" type=""></mt-field>
                <mt-field label="身高(CM)" placeholder="身高" ></mt-field>
                <mt-field label="体重(KG)" placeholder="体重" ></mt-field>
                <mt-field label="血型" placeholder="请选择" ></mt-field>
                <mt-field label="最高学历" placeholder="请选择" ></mt-field>
                <mt-field label="毕业学校" placeholder="毕业学校" ></mt-field>
                <mt-field label="工作单位" placeholder="工作单位" ></mt-field>
                <mt-field label="本人手机" placeholder="本人手机" ></mt-field>
                <mt-field label="邮箱" placeholder="邮箱" ></mt-field>
                <mt-field label="微信" placeholder="请填写微信号" ></mt-field> 
            <mt-button class="btn" @click="jump">保存继续填写</mt-button> 
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        jump(){
            this.$router.push("/shengqingtwo")
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
    .btn{
        background:#0000ee;
        color:#fff;
        font-size: 14px; 
        margin-left: 37%;
    }
</style>

