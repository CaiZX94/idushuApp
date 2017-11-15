<template>
	<!--<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">-->
		<div>
			<div class="header">
				<p class="title">分类<span class="iconfont icon-leimupinleifenleileibie"></span></p>		
			</div>
			<div class="searchbar">
				<span class="iconfont icon-sousuo search" @click="search"></span>
				<input type="text" placeholder="搜索" @focus="focus" v-model="msg"/>
				<span v-show="bool" @click="cancel" class="cancel">取消</span>
			</div>
			<div class="con">
				<ul class="connav">
					<router-link to="/sortdetails">
					<li @click="select(i)" v-for="(v,i) in booktype"><span class="bg1"></span><p>{{v}}</p></li>
					<!--<li @click="select"><span class="bg2"></span><p>修真</p></li>
					<li @click="select"><span class="bg3"></span><p>都市</p></li>
					<li @click="select"><span class="bg4"></span><p>历史</p></li>
					<li @click="select"><span class="bg5"></span><p>游戏</p></li>
					<li @click="select"><span class="bg6"></span><p>文学</p></li>-->
					</router-link>
				</ul>
				
				<div>
					<p class="type hot">热门小说</p>
					<ul class="booklist">
						<router-link to="/bookdetails">
						<li v-for="(v,i) in hotbooklist" @click="read(i)">
							<img :src="v.images" alt="" />
							<p class="name">{{v.name}}</p>
							<p class="author">{{v.author}}</p>
						</li>
						</router-link>
					</ul>
				</div>
				<div>
					<p class="type free">限时免费</p>
					<ul class="booklist">
						<router-link to="/bookdetails">
						<li v-for="(v,i) in freebooklist" @click="read1(i)">
							<img :src="v.images" alt="" />
							<p class="name">{{v.name}}</p>
							<p class="author">{{v.author}}</p>
						</li>
						</router-link>
					</ul>
				</div>
				<div>
					<p class="type rank">推荐榜</p>
					<ul class="booklist">
						<router-link to="/bookdetails">
						<li v-for="(v,i) in rankbooklist" @click="read2(i)">
							<img :src="v.images" alt="" />
							<p class="name">{{v.name}}</p>
							<p class="author">{{v.author}}</p>
						</li>
						</router-link>
					</ul>
				</div>
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
				msg:'',
				bool:false,
				booktype:['玄幻','修真','都市','历史','游戏','文学'],
				hotbooklist:[],
				freebooklist:[],
				rankbooklist:[],
				mintitles:'',
			}
		},
		components:{
			'v-footer':vfooter
		},
		methods:{
			cancel(){
				this.bool=false;
				this.msg='';
			},
			search(){
				
			},
			focus(){
				this.bool=true;
			},
			select(i){
				this.mintitles=this.booktype[i]
			},
			read(n){
				id=this.hotbooklist[n].id;
			},
			read1(n){
				id=this.freebooklist[n].id;
			},
			read2(n){
				id=this.rankbooklist[n].id;
			}
		},
		mounted(){
			this.$http.get('src/data/booklist.json').then(function(res){
				for(let i=0;i<10;i++){
					this.hotbooklist.push(res.body[i]);
				}
				for(let i=60;i<70;i++){
					this.freebooklist.push(res.body[i]);
				}
				for(let i=20;i<30;i++){
					this.rankbooklist.push(res.body[i]);
				}
			})
		},
		destroyed(){
			mintitle=this.mintitles;
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
	
	/*搜索条*/
	.searchbar{
		position: fixed;
		top: 40px;left: 0;
		padding: 7px 10px;
		width: 100%;height: 40px;
		background: #f1f1f1;
		box-sizing: border-box;
		z-index: 1;
	}
	.searchbar input{
		width: 88%;
	}
	.searchbar input{
		height: 25px;
		border: 1px solid #eee;
		outline: none;
		border-radius: 4px;
		font-size: 14px;
		padding-left:30px ;
	}
	.search{
		position: fixed;
		top: 52px;left:15px;
	}
	.cancel{
		position: fixed;
		top: 47px;right:14px;
		display: block;
		padding-top: 3px;
		width: 40px;height: 27px;
		background: #f1f1f1;
		border-radius: 0  4px 4px 0;
		text-align: center;
		box-sizing: border-box;
		font-size: 14px;
	}
	
	/*con*/
	.con{
		position: absolute;
		top: 80px;left: 0;
		padding: 0 10px 150px;
		width: 100%;
		height: 100%;
		background: #fff;
		box-sizing: border-box;
	}
	
	.connav{
		width: 100%;
		padding-bottom: 20px;
		overflow: hidden;
		border-bottom: 1px solid #eee;
	}
	.connav li{
		margin-top: 20px;
		float: left;
		width: 33%;height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 14px;
		font-weight: bold;
	}
	.connav li span{
		display: inline-block;
		width: 30px;height: 30px;
	}
	.connav .bg1{
		background: url('../../assets/images/sprite.0.50.png') no-repeat -59px -25px;
	}
	.connav .bg2{
		background: url('../../assets/images/sprite.0.50.png') no-repeat 1px 1px;
	}
	.connav .bg3{
		background: url('../../assets/images/sprite.0.50.png') no-repeat 4px -59px;
	}
	.connav .bg4{
		background: url('../../assets/images/sprite.0.50.png') no-repeat -28px -29px;
	}
	.connav .bg5{
		background: url('../../assets/images/sprite.0.50.png') no-repeat 2px -28px;
	}
	.connav .bg6{
		background: url('../../assets/images/sprite.0.50.png') no-repeat -59px 3px;
	}
	.connav li p{
		margin-top: -30px;
	}
	
	
	.con > div{
		margin: 10px 0 20px;
		padding-bottom: 40px;
		border-bottom: 1px solid #eee;
		background: #fff;
	}
	.con div:last-child{
		padding-bottom: 80px;
	}
	.booklist{
		position: relative;
		top: 15px;
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		
	}
	.booklist li{
		display: inline-block;
		width: 28%;
		height: 130px;
		margin: 0px 7px;
		text-align: left;
		font-size: 13px;
	}
	.type{
		padding-left: 5px;
	}
	.hot{
		border-left: 3px solid #ff7272;
	}
	.free{
		border-left: 3px solid #26a2ff;
	}
	.rank{
		border-left: 3px solid #ffe9a1;
	}
	.booklist li img{
		width: 100%;
		height: 100px;
	}
</style>