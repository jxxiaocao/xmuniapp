<template>
	
	<view class="page-body">
		<back-top></back-top>
		<view class="someone-buy">
			<someone-buy :type = "1"></someone-buy>
		</view>
	
		<!-- 头部轮播 -->
		<view class="carousel-section">
				<!-- 标题栏和状态栏占位符 -->
				<view class="titleNview-placing"></view>
				<!-- 背景色区域 -->
				<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
				<swiper class="carousel" circular @change="swiperChange">
					<swiper-item 
						v-for="(item, index) in carouselList" :key="index"
						class="carousel-item" 
						@click="navToDetailPage(item.id)"
					>
						<image :src="item.src" />
					</swiper-item>
				</swiper>
				<!-- 自定义swiper指示器 -->
				<view class="swiper-dots">
					<text class="num">{{swiperCurrent+1}}</text>
					<text class="sign">/</text>
					<text class="num">{{swiperLength}}</text>
				</view>
			</view>
		
		
		<view class="marquee-box">
			<view class="marquee-title">独家快报</view>
			<view class="marquee">欢迎来到【独家折扣】,这里每天汇总最新购物优惠券,实时更新优惠券信息,让您享受白菜价网购的快感,先领优惠券再下单享受折上折,各种大额优惠券让您领到手软,更有购物反独家币活动与代理分销活动呦！</view> 
		</view>
		
		<view class="banner">
			<view class="left" @click="channel('淘抢购')" ><img src="http://img.kiwifruits.cn/index/taoqianggou.jpg" mode="widthFix"></view>
			<view class="right">
				<view class="top"   @click="channel('聚划算')" ><img src="http://img.kiwifruits.cn/index/juhuasuan.jpg" mode="widthFix"></view>
				<view class="bottom">
					<view class="bottom-left"  @click="channel('每日上新')" ><img src="http://img.kiwifruits.cn/index/newgoods.jpg" mode="widthFix"></view>
					<view class="bottom-right" @click="channel('9快9包邮')" ><img src="http://img.kiwifruits.cn/index/9kuai9.jpg" mode="widthFix"></view>
				</view>
			</view>
		</view>
		
		<view class="scroll-wrapper">
			<view class="title">
				<view class="h1-title">大家都在领</view>
			</view>
			<scroll-view-x :goodslist="deserveList"></scroll-view-x>
		</view>
		
		<view class="title">
			<view class="h1-title">每日精选</view>
			<text class="fr">每15分钟更新</text>
		</view>
		
		<!-- goods-list 模板 -->
		<goods-list :goodslist="goodslist"></goods-list>
		
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list.vue';
	import scrollViewX from '../../components/scroll-view-x.vue';
	import someoneBuy from '../../components/someone-buy.vue';
	import backTop from '../../components/back-top.vue';
	import goodsData from '../../common/goodsData.js';
	export default {
		data() {
			return {
				goodslist:[], //商品数据
				showLoadMore: false, //初次加载标志位
				fetchPageNum: 0, //页码
				inviteCodeMask:false ,//是否弹出绑定邀请码提示框
				userinfo:null,//用户信息
				banner:[],//专题banner
				deserveList:[],//大家都在领
				
				titleNViewBackground: '',   //轮播图切换修改背景色
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: []
			}
		},
		onShow() {
			
		},
		onLoad() {
			this.goodslist = goodsData;
			this.deserveList = goodsData.slice(0,12);
			this.loadData();
		},
		onReachBottom() {
			this.showLoadMore = true,
			this.loadMoreText = "没有更多数据了!"
		},
		onPullDownRefresh() {

		},
		computed: {

		},
		methods: {
			channel(text){
				uni.showToast({
					title: text,
					icon: "none",
				})
			},
			//请求数据
			async loadData(){
				let carouselList = await this.$api.json('carouselList');
				this.titleNViewBackground = carouselList[0].background;
				this.swiperLength = carouselList.length;
				this.carouselList = carouselList;
			},
			//轮播图切换修改背景色
			swiperChange(e){
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
		},
		components: {
			goodsList,
			someoneBuy,
			scrollViewX,
			backTop
		}
	}
</script>

<style lang="scss">
/* 头部 轮播图 */
.carousel-section{position:relative;padding-top:10px;.titleNview-placing{height:var(--status-bar-height);padding-top:44px;box-sizing:content-box;}.titleNview-background{position:absolute;top:0;left:0;width:100%;height:426upx;transition:.4s;}}
.carousel{width:100%;height:350upx;.carousel-item{width:100%;height:100%;padding:0 28upx;overflow:hidden;}image{width:100%;height:100%;border-radius:10upx;}}
.swiper-dots{display:flex;position:absolute;left:60upx;bottom:15upx;width:72upx;height:36upx;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);background-size:100% 100%;.num{width:36upx;height:36upx;border-radius:50px;font-size:24upx;color:#fff;text-align:center;line-height:36upx;}.sign{position:absolute;top:0;left:50%;line-height:36upx;font-size:12upx;color:#fff;transform:translateX(-50%);}}
</style>

<style scoped>
	.page-body{width:750upx;overflow:hidden;font-size:30upx;background:#f1f1f1;}.someone-buy{}.search-wrapper{position:absolute;z-index:10;top:15upx;left:50upx;width:550upx;height:50upx;line-height:50upx;padding:10upx 50upx;border:1px solid #f1f1f1;border-radius:50upx;background:rgba(255,255,255,.8);}.search{color:#888;font-size:30upx;display:flex;}.uni-icon{flex:0 0 60upx;}.placeholder{flex:1;}.swiper{width:750upx;height:313upx;}.swiper-item{width:750upx;display:block;}.swiper-item img{width:750upx;display:block;height:313upx;}.title{height:100upx;background:#fff;}.h1-title{display:inline-block;height:50upx;width:160upx;line-height:50upx;margin:25upx 0;border-top-right-radius:50upx;border-bottom-right-radius:50upx;padding:0 20upx;background:linear-gradient(to right,#ff8300,#ff5100);color:#fff;font-size:30upx;box-shadow:5px 10px 20px rgba(255,81,0,.4);}.title .fr{float:right;line-height:100upx;margin-right:30upx;font-size:20upx;color:#ccc;}.banner{width:750upx;height:430upx;overflow:hidden;display:flex;}.banner img{width:100%;}.banner>.left{flex:4;border-right:2px solid #f2f2f2;overflow:hidden;}.banner>.right{flex:7;}.right .top{width:100%;border-bottom:2px solid #f2f2f2;overflow:hidden;}.right .bottom{display:flex;width:100%;}.right .bottom .bottom-left{flex:6;overflow:hidden;border-right:1px solid #f2f2f2;}.right .bottom .bottom-right{flex:6;overflow:hidden;}.mask{position:fixed;top:0;left:0;bottom:0;right:0;width:100%;height:100%;background:rgba(7,17,27,0.5);z-index:499;}.marquee-box{width:100%;overflow:hidden;position:relative;background:#fff;margin:8upx 0;}.marquee-title{position:absolute;padding:10upx 20upx;color:#ff5100;top:0;left:0;z-index:3;background:#fff;font-size:24upx;}.marquee{padding:10upx 20upx;color:#000;display:inline-block;white-space:nowrap;animation:20s wordsLoop linear infinite normal;font-size:24upx;}@keyframes wordsLoop{0%{transform:translateX(750upx);-webkit-transform:translateX(750upx);}100%{transform:translateX(-100%);-webkit-transform:translateX(-100%);}}.scroll-wrapper{height:525upx;margin:8upx 0;background:#fff;}.scroll-title{}
</style>
