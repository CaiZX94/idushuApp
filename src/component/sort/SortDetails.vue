<template>
	<!--<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">-->
	<div>
		<div class="header">
			<router-link to="/sortbook"><span class="iconfont icon-iconfontzuojiantou arrow"></span></router-link>
			<p class="title">{{mintitles}}<span class="iconfont icon-leimupinleifenleileibie"></span></p>		
		</div>
		<div class="con">
			<ul class="sortlist">
				<li v-for="(v,i) in booklist" @click="read(i)">
					<router-link to="/bookdetails">
					<img :src="v.images" alt="" />
					<div>
						<p class="bookname">{{v.name}}</p>
						<p class="author">{{v.author}}&nbsp;|</p>
						<p class="des">{{v.intro}}</p>
						<p class="readnum">{{v.ratings}}人气&nbsp;|&nbsp;{{v.wordcount}}万字</p>
						<p class="lianzai">{{v.serialize}}</p>
					</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
	<!--</transition>-->
	
</template>

<script>
	export default{
		data(){
			return{
				booklist:[],
				mintitles:'',
			}
		},
		methods:{
			read(i){
				id=this.booklist[i].id;
			}
		},
		mounted(){
			this.mintitles=mintitle;
			this.$http.get('src/data/booklist.json').then(
				function(res){
					for(let i=0;i<res.body.length;i++){
						switch(this.mintitles){
							case '玄幻':if(res.body[i].type=='玄幻'){
											this.booklist.push(res.body[i]);
										};break;
							case '修真':if(res.body[i].type=='修真'){
											this.booklist.push(res.body[i]);
										};break;
							case '都市':if(res.body[i].type=='都市'){
											this.booklist.push(res.body[i]);
										};break;
							case '历史':if(res.body[i].type=='玄幻'){
											this.booklist.push(res.body[i]);
										};break;
							case '游戏':if(res.body[i].type=='修真'){
											this.booklist.push(res.body[i]);
										};break;
							case '文学':if(res.body[i].type=='历史'){
											this.booklist.push(res.body[i]);
										};break;
						}
						
					}
				}
			)
		},
		destoryed(){
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
		z-index: 2;
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
	.arrow{
		position: fixed;
		top: 13px;left: 10px;
		color: #fff;
	}
	
	/*con*/
	.con{
		position: absolute;
		top: 40px;left: 0;
		padding: 0 20px 150px;
		width: 100%;
		height: 100%;
		background: #fff;
		box-sizing: border-box;
		z-index: 1;
	}
	.type{
		position: fixed;
		top: 40px;left: 0px;
		width: 100%;height: 40px;
		line-height: 40px;
		background: #fff;
		border-bottom: 1px solid #eee;
		z-index: 1;
	}
	.type li{
		float: left;
		font-size: 14px;
		margin: 0 10px;
	}

	.sortlist{
		position: absolute;
		top: 7px;left: 0;
		padding: 10px 20px;
		width: 100%;
		background: #fff;
		box-sizing: border-box;
	}
	.sortlist li{
		position: relative;
		width: 100%;
		height: 100px;
	}
	.sortlist li img{
		float: left;
		width: 25%;height: 80px;
		margin-right: 15px;
	}
	.sortlist li p{
		line-height: 20px;
		font-size: 12px;
	}
	.bookname{
		font-weight: bold;
	}
	.author{
		color: #aaa;
	}
	.des{
		color: #aaa;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.sortlist .lianzai{
		position: absolute;
		bottom: 19px;right: 5px;
		color: #FF7272;
		font-size: 12px;
		line-height: 15px;
		border: 1px solid #FF7272;
	}
</style>