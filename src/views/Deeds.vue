<template>
	<div class="deeds-of-char">
		<div class="fig-header">
			<div class="fig-header-title">支教人物介绍</div>
			<router-link to="/Chardetails" class="fig-header-right">查看更多详细信息>></router-link>
		</div>
		<hr>
		<div class="fig-slide-box" >
			<div v-for="(item,i) of charactersLists" :key="i" class="fig-slide-item">
				<img :src="item.rwpic" alt="" class="fig-img">
					<h3>{{item.title}}</h3>
					<p>{{item.name}}</p>
					<p>{{item.school}}</p>
			</div>
		</div>
		<hr>
	</div>
</template>


<script>
export default {
  data() {
		return {
			charactersLists : [
				{title: '人物1事迹', name: '人物1', school: 'xxx小学', rwpic: require('../../public/imgs/renwu.jpg')},
				{title: '人物2事迹', name: '人物2', school: 'xxx小学', rwpic: require('../../public/imgs/renwu.jpg')},
				{title: '人物3事迹', name: '人物3', school: 'xxx小学', rwpic: require('../../public/imgs/renwu.jpg')},
				{title: '人物4事迹', name: '人物4', school: 'xxx小学', rwpic: require('../../public/imgs/renwu.jpg')},
				{title: '人物5事迹', name: '人物5', school: 'xxx小学', rwpic: require('../../public/imgs/renwu.jpg')},
				{title: '人物6事迹', name: '人物6', school: 'xxx小学', rwpic: require('../../public/imgs/renwu.jpg')},
				{title: '人物7事迹', name: '人物7', school: 'xxx小学', rwpic: require('../../public/imgs/renwu.jpg')},
			]
		}
	}
}
</script>

<style scoped>
	/* 人物事迹头部模块 */
	.fig-header{
		border-left: 6px solid #0000ee;
		display:flex;
		background-color:lightgrey;
		text-align: left;
		justify-content: space-between; 
		height:35px;
		align-items: center;
	}
	.fig-header-title{
		margin-left: 7px;
  	color:#0000ee;
	}
	.fig-header-right{
		text-decoration: none;
		color:#0000ee;
	}
	/* 横向滑动盒子 */
	.fig-slide-box{
		height:230px;
		display: -webkit-box;
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;	
		margin-top: 5px;
	}
	/* 人物详细信息模块 */
	.fig-slide-item{
		width: 10rem;
		height: 230px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around; 
		text-align: center;
		border-right: 1px solid #ccc;
	}
	.fig-img{
		width: 90%;
	}

</style>

