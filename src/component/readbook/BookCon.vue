<template>
	<div>
		<div class="header" :class="{evening:background==1}">
			<span class="title">{{title}}</span>
		</div>
		
		<div class="con" :class="{evening:background==1}">
			<p @click="toggleNav" v-for="v in bookCon" :class="{small:font==0,large:font==2}">{{v}}</p>
			
			<div class="nav">
				<!--上下导航-->
				<transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
					<div class="top" v-show="bool" >
						<router-link to="/sortbook"><span class="iconfont icon-iconfontzuojiantou"></span></router-link>
						<span class="backshelf">返回</span>
						<span class="next" @click="next(nextnum)">下一章</span>
					</div>
				</transition>
				<transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
					<div class="bottom"  v-show="bool">
						<ul>
							<li @click="showLeftBar"><span class="iconfont icon-fenlei"></span>目录</li>
							<li @click="showFontSize"><span class="iconfont icon-zihao"></span>字体</li>
							<li @click="showConBg"><span class="iconfont icon-yejianmoshi"></span>背景</li>
						</ul>
					</div>
				</transition>
				
				<!--选择字号-->
				<div class="fontSize" v-show="fontSize">
					<ul>
						<li v-for="(v,i) in fontSizelist" @click="selFontSize(i)" :class="{bg:font==i}">{{v}}</li>
					</ul>
				</div>
				
				<!--选择白/夜模式-->
				<div class="conBg" v-show="conBg">
					<ul>
						<li v-for="(v,i) in conBglist"  @click="selConBg(i)">{{v}}</li>
					</ul>
				</div>
			</div>
			<!--遮罩层-->
			<div class="mask" v-show="maskToggle"  @click="showLeftBar"></div>
		</div>
		
		<!--底部-->
		<transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
				<div class="leftBar" v-show="leftBarToggle">
					<div class="leftBarTop">
						<span class="iconfont icon-iconfontzuojiantou"  @click="showLeftBar"></span>
						<h4>目录</h4>
					</div>
					<ul>
						<li v-for="(v,i) in zhangjieTitle" @click="read(i)">{{v}}</li>
					</ul>
				</div>
		</transition>
		
		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				bool:false,
				leftBarToggle:false,
				maskToggle:false,
				fontSize:false,//字号
				conBg:false,//白夜模式
				zhangjieTitle:[],
				bookid:'',//每本书的id
				title:'',//每一章节的标题
				bookCon:[],//每一章节的内容
				conid:1,//每一章节内容的id
				nextnum:'',//下一章
				fontSizelist:['小号','中号','大号'],
				font:1,//控制字号选择后的li背景色
				conBglist:['白天模式','夜间模式'],
				background:0,//控制con背景色选择后的li背景色
			}
		},
		methods:{
			toggleNav(){//显示上下导航
				this.bool=!this.bool;
				if(this.fontSize==true||this.conBg){
					this.fontSize=false;
					this.conBg=false;
				}				
			},
			showLeftBar(){//显示左侧目录导航
				this.leftBarToggle=!this.leftBarToggle;
				this.maskToggle=!this.maskToggle;
			},
			showFontSize(){//显示字体选择条
				this.fontSize=!this.fontSize;
				this.conBg=false;
			},
			showConBg(){//显示背景选择条
				this.conBg=!this.conBg;
				this.fontSize=false;
			},
			read(i){//选中章节后阅读
				this.bool=!this.bool;
				this.leftBarToggle=!this.leftBarToggle;
				this.maskToggle=!this.maskToggle;
				if(this.fontSize==true||this.conBg){
					this.fontSize=false;
					this.conBg=false;
				}
				this.title=this.zhangjieTitle[i];
				this.conid=i+1;
			},
			next(n){//下一章
				this.conid=n+1;
//				this.bool=!this.bool;
			},
			selFontSize(i){//选择字号
				this.font=i;
			},
			selConBg(i){//选择背景色
				this.background=i;
			}
		},
		mounted(){
			//获取全局变量id的值
			this.bookid=id;
			//下一页
			this.nextnum=this.conid;
			//每本书的章节
			this.$http.get('http://39.108.14.248:3333/titles?id='+this.bookid,{param:{
				id:this.bookid,//获取每本书的id，从而获取该书的章节名称
			}}).then(function(res){
				this.zhangjieTitle=res.body.titles.split('-');//字符串切割
			})
			
//			开始加载时显示的页面
			this.$http.get('http://39.108.14.248:3333/book?book='+this.bookid+'&id='+this.conid,{param:{
				book:this.bookid,
				id:this.conid,
			}}).then(function(res){
				this.bookCon=res.body.content.split('。');//字符串切割
				this.title=res.body.title;
			})
		},
//		updated(){//发送请求太多，导致性能太差
//			//下一页
//			this.nextnum=this.conid;
//			//点击章节，数据更新后改变相应的内容
//			this.$http.get('http://39.108.14.248:3333/book?book='+this.bookid+'&id='+this.conid,{param:{
//				book:this.bookid,
//				id:this.conid,
//			}}).then(function(res){
//				this.bookCon=res.body.content.split('。');//字符串切割
//				this.title=res.body.title;
//			})
//		}
		
	}
	
</script>

<style scoped>
	/*头部*/
	.header{
		position: fixed;
		top: 0;left: 0;
		width: 100%;
		height: 50px;
		padding: 0 20px;
		box-sizing: border-box;
		background:#e9dfc7 ;
	}
	.title{
		display: inline-block;
		margin-left: 10px;
		text-align: left;
		width:195px;height: 50px;
		line-height:50px;
		font-size: 17px;	
		font-weight: bold;	
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.next{
		position: fixed;
		top: 16px;right: 34px;
		font-size: 14px;
	}
	
	/*主体内容*/
	.con{
		width: 100%;
		margin-top: 40px;
		padding:10px 20px;
		background:#e9dfc7;
		box-sizing: border-box;
	}
	.con p{
		margin: 20px 0;
		text-align: justify;
		line-height: 27px;
	}
	
	/*上下导航*/
	.nav{
		width: 100%;
	}
	.top,.bottom{
		width: 100%;
		position: fixed;
		left: 0;
		height: 50px;
		background: #736357;
		color: #fff;
		box-sizing: border-box;
	}
	.top{
		top: 0;
	}
	.bottom{
		width: 100%;
		height: 60px;
		bottom: 0;
	}
	.top .icon-iconfontzuojiantou{
		position: fixed;
		top: 13px;left:20px;
		color: #fff;
	}
	.top .backshelf{
		position: fixed;
		top: 12px;left: 55px;
		
		font-size: 14px;
	}
	.bottom ul{
		width: 100%;
		padding: 0px 20px;
	}
	.bottom li{
		float: left;
		width: 33%;
		height: 60px;
		line-height: 60px;
	}
	.bottom li span{
		margin-right: 5px;
	}
	
	/*遮罩层*/
	.mask{
		position:fixed ;
		top: 0;left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.4);
	}
	
	/*左侧目录导航*/
	.leftBar{
		position: fixed;
		top:0;left: 0;
		width: 80%;
		height: 100%;
		background: #e9dfc7;
		z-index: 1;
		overflow: auto;
	}
	.leftBarTop{
		position: fixed;
		top: 0;left: 0;
		width: 80%;
		height: 50px;
		background: #e9dfc7;
		border-bottom: 1px solid #000;
	}
	.icon-iconfontzuojiantou{
		position: fixed;
		top: 13px;left: 12px;
		font-size: 22px;
	}
	h4{
		position: fixed;
		top: 13px;left: 50px;
	}
	/*左侧目录导航ul列表*/
	.leftBar ul{
		margin-top: 60px;
		overflow: auto;
	}
	.leftBar ul li{
		padding: 0 10px;
		width: 100%;
		height: 35px;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	/*字号，背景色切换*/
	.fontSize,.conBg{
		position: fixed;
		bottom:60px ;left:0;
		width: 100%;
		height: 50px;
		background: #4c3b2e;
	}
	.fontSize ul,.conBg ul{
		margin: 10px auto;
		width: 300px;
		overflow: hidden;
	}
	.fontSize li,.conBg li{
		float: left;
		margin: 0 21px;
		padding: 3px 15px;
		border: 1px solid #fff;
		border-radius: 3px;
		font-size: 13px;
		color: #fff;
	}
	.conBg li{
		margin: 0 32px;
	}
	/*选中后li背景色*/
	.fontSize .bg,.conBg .bg{
		background: #fff;
		color: #4c3b2e;
	}
	/*字号*/
	.small{
		font-size: 12px;
	}
	.middle{
		font-size: 16px;
	}
	.large{
		font-size: 19px;
	}
	/*背景色*/
	.day{
		background:#e9dfc7;
		color: #000;
	}
	.evening{
		background:#444;
		color: #ccc;
	}
</style>