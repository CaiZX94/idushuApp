<template>
	<div>
		<div class="header">
			<p class="title">排行<span class="iconfont icon-leimupinleifenleileibie"></span></p>		
		</div>
		<div class="con">
			<div class="navbar">
				<ul>
					<li v-for="(v,i) in nav" @click="selRank(i)">{{v}}</li>
				</ul>
			</div>
			
			<div class="booklist">
				<ul>
					<li v-for="v in bookranklist">
						<img :src="v.images" alt="" />
						<div>
							<p class="name">{{v.name}}</p>
							<p class="author">作者：{{v.author}}</p>
							<p class="type">分类：{{v.type}}</p>
							<p class="des">{{v.intro}}</p>
							<p class="ratings">{{v.ratings}}分</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		
		<v-footer></v-footer>
	</div>
	
</template>

<script>
	import vfooter from '../footnav/FootNav.vue'
	export default{
		data(){
			return {
				nav:['周榜','月榜','总榜'],
				bookranklist:[],
				weekranklist:[],
				monthranklist:[],
				totalranklist:[],
				num:'',
			}
		},
		components:{
			'v-footer':vfooter
		},
		methods:{
			selRank(n){
				ranknav=n;
//				console.log(this.num)
			}
		},
		mounted(){
			this.$http.get('http://39.108.14.248:3333/booklist').then(function(res){
				for(let i=0;i<15;i++){
					this.weekranklist.push(res.body[i]);
				}
				this.bookranklist=this.weekranklist;
			})
		},
//		updated(){
//			this.$http.get('http://39.108.14.248:3333/booklist').then(function(res){				
//				for(let i=0;i<15;i++){
//					this.weekranklist.push(res.body[i]);
//				}
//				for(let i=15;i<25;i++){
//					this.monthranklist.push(res.body[i]);
//				}
//				for(let i=95;i<115;i++){
//					this.totalranklist.push(res.body[i]);
//				}
//				if(ranknav==0){
//					this.bookranklist=this.weekranklist;
//				}else if(ranknav==1){
//					console.log(1)
//					this.bookranklist=this.monthranklist;
//				}else{
//					this.bookranklist=this.totalranklist;
//				}			
//			})
//		}
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
		width: 100%;
		margin-top: 40px;
	}
	.navbar{
		position: fixed;
		top: 40px;left: 0;
		width:100%;height: 35px;
		border-bottom: 1px solid #eee;
		box-shadow: 0px -4px 15px -2px #000; 
		background: #fff;
	}
	.navbar ul{
		width: 100%;
		overflow: hidden;
	}
	.navbar li{
		float: left;
		width: 33%;height: 35px;
		text-align: center;
		line-height: 35px;
		font-size: 14px;
		
	}
	
	
	.booklist{
		margin-top: 75px;
		padding:20px 20px;
		
	}
	.booklist ul{
		padding-bottom: 30px;
	}
	.booklist li{
		margin-bottom:20px;	
		padding-bottom: 5px;
		border-bottom: 1px solid #eee;
	}
	.booklist img{
		float: left;
		margin-right:16px ;
		width: 90px;
		height: 118px;
	}
	.booklist div:nth-of-type(1){
		width: 280px;
	}
	.booklist div:nth-of-type(1) p{
		line-height: 24px;
	}
	.name{
		font-size: 17px;
		font-family: "黑体";
		font-weight: bold;
	}
	.author,.type,.des,.ratings{
		font-size: 14px;
		color: #666;
	}
	.des{
		width: 173px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>