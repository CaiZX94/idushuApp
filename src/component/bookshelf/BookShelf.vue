<template>
	<!--<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">-->
	<div>
		<div class="header">
			<span @click="edit" class="del">{{editmsg}}</span>
			<p class="title">书架<span class="iconfont icon-shu"></span></p>		
			<router-link to="/sortbook"><span class="home iconfont icon-tianjiashuji"></span></router-link>
		</div>
		<router-link to="/sortbook">
			<mt-button type="primary" size="normal" v-show="bool">添加书籍</mt-button>
		</router-link>
		
		<div class="con" v-show="!bool">
			<ul class="mylist">
				<li v-for="v in book">
					<img :src="v.images" alt="" />
					<div>
						<p class="bookname">{{v.name}}</p>
						<p class="intro">{{v.intro}}</p>
						<span class="iconfont icon-shanchu" v-show="delbtn" @click=""></span>
					</div>
				</li>
			</ul>
		</div>
		
		<v-footer></v-footer>
	</div>
	<!--</transition>-->
	
</template>

<script>
	import vfooter from '../footnav/FootNav.vue'
	export default{
		data(){
			return {
				bool:true,
				editmsg:'编辑',
				delbtn:false,
				book:[],
				bookid:'',
				
			}
		},
		components:{
			'v-footer':vfooter
		},
		methods:{
			edit(){
				if(this.editmsg=='编辑'){
					this.editmsg='取消';
					this.delbtn=true;
				}else{
					this.editmsg="编辑"
					this.delbtn=false;
				}
			}
		},
		mounted(){
			this.bookid=id;
			console.log(this.bookid)
			this.$http.get('src/data/booklist.json').then(function(res){
				for(let i=0;i<res.body.length;i++){
					if(res.body[i].id==this.bookid){
						this.book.push(res.body[i]);
						this.bool=!this.bool;
					}
				}
				
			})
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
	.del{
		position: fixed;
		top: 10px;left: 10px;
		font-size: 14px;
		color: #fff;
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
	.icon-tianjiashuji{
		position: fixed;
		top: 4px;right: 13px;
		color: #fff;
		font-size: 27px;
	}
	
	/*按钮*/
	.mint-button{
		position: fixed;
		top: 50%;left: 50%;
		margin-top: -30px;
		margin-left: -44px;
		font-size: 16px;
	}
	
	
	.con{
		position: absolute;
		top: 40px;left: 0;
		width: 100%;height: 1000px;
		box-sizing: border-box;
		background: #f6f6f6;
	}
	.mylist li{
		position: relative;
		margin-top: 10px;
		padding:10px 20px;
		width: 100%;
		height: 116px;
		background: #fff;
		box-sizing: border-box;
	}
	.mylist img{
		float: left;
		margin-right: 15px;
		width:25% ;
		height: 90px;
	}
	.mylist div{
		height:90px;
	}
	.mylist p{
		line-height: 25px;
	}
	.bookname{
		padding-top: 10px;
		font-weight: bold;
	}
	.intro{
		width: 165px;
		font-size: 13px;
		color: #aaa;
		/*多行文本省略*/
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
		overflow: hidden;
	}
	.icon-shanchu{
		position: absolute;
		top: 47px;right:14px;
		font-size: 21px;
	}
</style>