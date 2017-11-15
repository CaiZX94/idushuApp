<template>
	<ul>
		<router-link to="/bookshelf">
			<li class="active">
				<p class="iconfont icon-shu"></p>书架
			</li>
		</router-link>
		<router-link to="/sortbook">
			<li>
				<p class="iconfont icon-leimupinleifenleileibie"></p>分类
			</li>
		</router-link>
		<router-link to="/rank">
			<li>
				<p class="iconfont icon-paixing"></p>排行
			</li>
		</router-link>
		<router-link to="/my">
			<li>
				<p class="iconfont icon-sousuo"></p>我
			</li>
		</router-link>
	</ul>
	
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	ul{
		position: fixed;
		bottom: 0;left: 0;
		width: 100%;
		height: 50px;
		border-top: 1px solid #eee;
		
	}
	ul li{
		float: left;
		padding-top: 6px;
		width: 25%;height: 50px;
		text-align: center;
		font-size: 12px;
		box-sizing: border-box;
		background: #fff;
	}
	ul li p{
		font-size: 19px;
	}
	.active{
		background: #eaeaea;
		color: #36acfa;
	}
	
</style>