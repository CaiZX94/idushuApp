<template>
	<div>
		<div class="header">
			<span class="iconfont icon-iconfontzuojiantou" @click="back"></span>
			<span class="title">{{bookinfo.name}}</span>
			<span class="home iconfont icon-tianjiashuji"></span>
		</div>
		
		<div class="con">
			<div class="bookinfo">
				<img :src="bookinfo.images" alt="" />
				<div>
					<p class="name">{{bookinfo.name}}</p>
					<p class="author">作者：{{bookinfo.author}}</p>
					<p class="type">分类：{{bookinfo.type}}</p>
					<p class="wordcount">{{bookinfo.wordcount}}万字</p>
					<p class="ratings">{{bookinfo.ratings}}分</p>
				</div>
				<div class="btn">
					<router-link to="bookcon"><button class="startread" @click="readbook">开始阅读</button></router-link>
					<button class="save" @click="addbook">添加</button>
				</div>
			</div>
			<div class="des">{{bookinfo.intro}}</div>
			<div class="label">
				<h3>标签类别</h3>
				<ul>
					<li>{{bookinfo.type}}</li>
					<li>东方玄幻</li>
				</ul>
			</div>
			<div class="like">
				<h3>喜欢本书的人也喜欢</h3>
				<ul>
					<li v-for="v in morebook" @click="">
						<router-link to="">
							<img :src="v.images" alt="" />
							<p>{{v.name}}</p>
						</router-link>
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
				book:[],
				bookinfo:{},
				morebook:[],
			}
		},
		components:{
			'v-footer':vfooter
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			addbook(){
				this.bookid=this.bookinfo.id;
			},
			readbook(){
				this.bookid=this.bookinfo.id;
			}
		},
		mounted(){
			this.$http.get('src/data/booklist.json').then(function(res){
				this.book=res.body;
				for(let i=0;i<this.book.length;i++){
					if(this.book[i].id==id){
						console.log(this.book[i])
						this.bookinfo=this.book[i];
					}
				}
				for(let i=0;i<3;i++){
					this.morebook.push(res.body[i]);
				}
			})
		},
		destroyed(){
			id=this.bookid;
		}
	}
</script>

<style scoped>
	.header{
		position: fixed;
		top: 0;left: 0;
		width: 100%;
		height: 40px;
		background:#eee ;
		z-index: 1;
	}
	.title span{
		margin-left: 10px;
		font-size: 15px;
	}
	.icon-iconfontzuojiantou{
		position: fixed;
		top: 12px;left: 10px;
		color: #ed424b;
	}
	.title{
		position: fixed;
		top: 8px;left: 50px;
		color: #ed424b;
		font-weight: bold;
	}
	.icon-tianjiashuji{
		position: fixed;
		top: 4px;right: 13px;
		color: #ed424b;
		font-size: 27px;
	}
	
	.con{
		position: absolute;
		top: 40px;
	}
	.bookinfo{
		padding:10px 20px;
		border-bottom: 1px solid #eee;
	}
	.bookinfo img{
		float: left;
		margin-right:20px ;
		width: 100px;
		height: 130px;
	}
	.bookinfo div:nth-of-type(1){
		width: 280px;
	}
	.bookinfo div:nth-of-type(1) p{
		line-height: 26px;
	}
	.name{
		font-size: 17px;
		font-family: "黑体";
		font-weight: bold;
	}
	.author,.type,.wordcount,.ratings{
		font-size: 14px;
		color: #666;
	}
	
	.btn{
		margin-top: 15px;
	}
	.btn button{
		border: none;
		outline: none;
		background: none;
	}
	.btn .startread{
		margin-right: 10px;
		width: 150px;
		height: 30px;
		background: #ed424b;
		border-radius: 3px;
		color: #fff;
	}
	.btn .save{
		width: 100px;
		height: 30px;
		border-radius: 3px;
		color: #ed424b;
		border: 1px solid #ed424b;
	}
	
	.des{
		padding:10px 20px;
		font-size: 14px;
		color: #666;
		border-bottom: 1px solid #eee;
	}
	.label{
		padding:20px 20px;
		border-bottom: 1px solid #eee;
	}
	.label h3{
		font-weight: bold;
		color: #666;
	}
	.label ul{
		margin-top: 10px;
		overflow:hidden ;
	}
	.label li{
		float: left;
		padding:2px 6px;
		margin-right: 10px;
		color: #ed424b;
		border: 1px solid #ed424b;
		border-radius: 3px;
		font-size: 13px;
	}
	
	.like{
		padding: 20px 20px 60px;
	}
	.like h3{
		font-weight: bold;
		color: #666;
	}
	.con .like ul{
		position: relative;
		top: 15px;
		/*width: 100%;*/
		overflow-x: auto;
		/*overflow-y: hidden;*/
		/*white-space: nowrap;*/
	}
	.like li{
		display: inline-block;
		margin-right: 10px;
		width: 83px;height: 160px;
		font-size: 13px;
		color: #666;
	}
	.like li img{
		width: 83px;
		height: 110px;
	}
</style>