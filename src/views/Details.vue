<template>
  <div class="teaching-details">
    <mt-header fixed title="支教与助学信息">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="headmsg-details">
      <h2>【531.正在招募】彩虹公益社甘肃支教志愿者老师招募申请</h2>
      <p>
        <span class="fb-time">发布时间：{{time}}</span>
        <span class="actore">作者：<router-link to="">{{zz}}</router-link></span>
      </p>
      <img :src="pic" alt="">
    </div>
    <div class="teach-info">
      <p v-for="(item,i) of list" :key="i"><b>{{item.title}}：</b>{{item.info}}</p>
    </div>
    <mt-button type="primary" size="large">申请支教</mt-button>
  </div>
</template>

<script>
import { Header,Button } from 'mint-ui';
export default {
  data() {
    return {
      time: '2019-8-7',
      zz: '新华社',
      pic: require('../../public/imgs/login.png'),
      list: [
        { title:'组织简介',info: '\n彩虹公益社，始于2011年，2014年4月在甘肃省民政厅注册为省级直属民办非企业单位（甘肃彩虹公益服务中心），2017年在尼泊尔首都注册为社会福利机构（RainbowVolunteerclub)。2017年被中国民间组织国际交流促进会新增为团体会员单位、被甘肃省民间组织国际交流促进会新增为团体会员单位，2018年被甘肃省民政厅认定为甘肃省4A级社会组织。“倡导每一个生命都享有发展的权利，健康的权利，有尊严生活的权利。”是我们的愿景与目标。' },
        { title:'报名截止时间',info: '2020-02-20 ' },
        { title:'服务时间',info: '2020-03-01---2020-07-15' },
        { title:'支教地点',info: '甘肃会宁山区' },
        { title:'招募人数',info: '10'+'人' },
        { title:'工作内容',info: '1、同我们一起为孩子搭建开放社工室。围绕行为养成，生命教育，成长教育开展丰富的课余活动；\n1、同我们一起为孩子搭建开放社工室。围绕行为养成，生命教育，成长教育开展丰富的课余活动；\n1、同我们一起为孩子搭建开放社工室。围绕行为养成，生命教育，成长教育开展丰富的课余活动；' },
        { title:'待遇收获',info: '1、服务前期的专业培训和督导；' },
        { title:'报名条件',info: '' },
        { title:'联系方式',info: '' },
      ]
    }
  },
  created() {
    
  },
  components:{
    'mt-header': Header,
    'mt-button': Button
  }
}
</script>

<style scoped lang="less">
  .headmsg-details{
    font-size: 14px;
    img{width: 100%;}
  }
  .actore{float: right;margin-right: 1rem;}

  .teach-info{
    b{color:#00b}
  }
</style>
