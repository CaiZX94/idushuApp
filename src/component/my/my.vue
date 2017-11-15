<template>
	<div>
		<div class="header">
			<p class="title">我<span class="iconfont icon-leimupinleifenleileibie"></span></p>		
		</div>
		
		<div class="con">
			<ul>
				<li>阅读时长<span class="iconfont icon-gengduo"></span></li>
				<li>已读书籍<span class="iconfont icon-gengduo"></span></li>
				<li>阅读积分<span class="iconfont icon-gengduo"></span></li>
				<li>我的评论<span class="iconfont icon-gengduo"></span></li>
				<li>笔记<span class="iconfont icon-gengduo"></span></li>
				<li>设置<span class="iconfont icon-gengduo"></span></li>
			</ul>
			
			
		</div>
		
		<v-footer></v-footer>
	</div>
	
</template>

<script>
	import vfooter from '../footnav/FootNav.vue'
	export default{
		components:{
			'v-footer':vfooter
		}
	}
</script>

<style scoped>
	.header{
		position: fixed;
		top: 0;left: 0;
		width: 100%;
		height: 40px;
		background:#26a2ff ;
		z-index: 1;
	}
	.header .title{
		color: #fff;
		text-align: center;
		line-height: 40px;
		font-size: 17px;
	}
	.title span{
		margin-left: 10px;
		font-size: 15px;
	}
	
	.con{
		width: 100%;height: 100%;
		background: #f7f7f7;
		overflow: hidden;
	}
	.con ul{
		margin-top: 50px;
		background: #FFFFFF;
	}
	.con li{
		padding: 0 20px;
		width:100%;
		height: 35px;
		line-height: 35px;
		color: #666;
		font-size: 13px;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
	}
	.con li span{
		float: right;
	}
</style>