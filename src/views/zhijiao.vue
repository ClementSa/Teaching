<template>
<div>
    <myheader></myheader>
    <div class="info-app">
        <router-link to="/shengqing">
            <div class="info">
                <div>
                    <img src="../../public/imgs/login5.png" alt="" class="info-img">
                </div>
                <div class="info-title">
                    <span><span>【531.正在招募】 </span>彩虹公益社甘肃支教志愿者老师招募申请</span>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import Myheader from '../views/Myheader.vue'
export default {
    components:{
        "myheader":Myheader
    }
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .info-app{
        display: flex;
        flex-wrap: wrap; /*指定子元素换行*/
        justify-content: space-between;
        padding:4px;
    }
    .info{
        width: 45%;
        border:1px solid #ccc;
        border-radius: 5px;
        margin:2px 0;
        padding:2px;
        box-sizing: border-box; /*重新计算宽度*/

        display: flex;
        flex-direction: column; /*指定子元素的排列方式*/
        min-height: 147px; /*最小高度*/
    }
    .info-img{
        width:100%;
    }
    .info-title{
        font-size: 12px;
    }
</style>

