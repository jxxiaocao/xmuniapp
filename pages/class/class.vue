<template>
	<view class="shoppingcar page-body" :style="minHeight">
		
		<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'" :scroll-top="scrollLeftTop" scroll-with-animation>
			<view :key="index" class="nav-left-item" :class="type_id==item.type_id?'active':''" v-for="(item,index) in className" @click="categoryClickMain(item.type_id)">
					{{item.name}}
			</view>
		</scroll-view>

		
		<view class="nav-right dianpu" v-for="(item,index) in shopData" :key="index" scroll-with-animation>
			
			<scroll-view scroll-x="true" class="scrollView" 
			v-for="(ite,ind) in item.data"
			:key="ind"
			:id="ite.cart_id"
			:data-index="ind"
			:scroll-left="ite.scrollLeft">
				<view class="viewbox">
					<view class="shangpin" >
						<view class="shangpin-info">
							<view class="img">
								<image :src="ite.goods_image_url" mode="aspectFill"></image>
							</view>
							<view class="text-info">
								<view class="title-text" >
									<!-- <text class="biaoqian">特价</text> -->
									<text class="name">{{ ite.goods_name }}</text>
									<!-- <text class="bieming">{{ ite.goods_name }} </text> -->
									<!-- <text class="youhui">已降{{ ite.reduce_price }}</text> -->
								</view>
								<view class="title-text" >
									<text class="biaoqian">特价{{ ite.reduce_price }}</text>
									<!-- <text class="bieming">{{ ite.goods_name }} </text> -->
									<!-- <text class="youhui">已降{{ ite.reduce_price }}</text> -->
								</view>
								<view class="jiage" >
									<text class="danjia">￥{{ ite.goods_price }}</text>
									<text class="shuliang">x {{ite.goods_num }}</text>
								</view>
								<view class="numInput">
									<view v-if="ite.is_nature != 1">
										<text class="reduce iconfont" v-if="ite.goods_num" @tap="changeCount(ite,-1,ite.cart_id)" :class="ite.goods_num == 0 ? 'numbox-disabled' : ''">-</text>
										<input type="number" v-if="ite.goods_num" v-model="ite.goods_num" :id="ite.cart_id" @input="inputCarCount" />
										<text class="plus iconfont" @tap="changeCount(ite,1,ite.cart_id)">+</text>
									</view>
									<view v-else >
										<text class="plus iconfont" @tap="showBanner(ite,1,ite.cart_id)">+</text>
										<!-- <span class="plusnature" @tap="showBanner(ite,1,ite.cart_id)">选规格</span> -->
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 底部结算 -->
		<view class="bottom-jiesuan">
			<view class="info">
				<view>
					<view @click="showBottomPopup" class="car-img">
						<image :src="totalGoodsNum?'../../static/shopcar.png':'../../static/tab-cart.png'"  class="car-img"></image>
					</view> 
					<text v-if="allPrice">￥{{ allPrice }}</text>
					<span class="btn-prompt" v-else>免排队</span>
				</view>
			</view>
			<view class="btn" v-if="totalGoodsNum" @tap="jiesuan">结算</view>
			<view v-else class="btn-prompt">请先点餐</view>
		</view>
		
		 <!-- 弹出层 -->
		<view class="uni-banner" style="background:#FFFFFF;" v-if="bannerShow">
			<div>
					<view>
						<view class="page">
							<div style="text-align: center;">
								   <span class="pop-up-title1">
									  {{BannerGoodsInfo.goods_name}}
								   </span>
								   <a class="pop-up-title2 uni-icon uni-icon-close" href="javascript:void(0);"  @tap="closeBanner"></a>
							</div>
							
					
							
							<!-- <view v-for="(foods,index) in classifyData" :key="index" class="box"> -->
							<div style="position: relative;height: 12.416rem;overflow: hidden;width: 100%;overflow-y: scroll;">
								<div>
									<ul>
										<li>
											<view class="totalPriceWrapper"></view>
											<view class="uni-padding-wrap uni-common-mt" v-for="(foods,index) in natureArr" :key="index">
												<view class="uni-title uni-common-mt">{{foods.naturename}}</view>
												
												<view>
														<view class="filter-body-section-body style-flex style-flex-wrap">
															
															<view class="style-flex style-flex-wrap">
																<filter-radio-item v-for="(item, idx) in foods.data" :key="idx" :name="item.name" :value="BannerGoodsInfo.goods_id+foods.naturename+item.value" :price="item.price" :checked="item.checked" @change="radioChangeTypes(BannerGoodsInfo.goods_id,foods,item,item.value)"></filter-radio-item>
															</view>
															
														</view>
												</view>
											
											</view>
										</li>	
									
							        </ul>
								</div>
							</div>
						</view>
				</view>
				
				<!-- 底部 -->
				<view class="uni-card-footer">
					<view class="info">
						<view>
							<text>￥{{ popPrice }}</text>
						</view>
					</view>
					<view class="numInput">
							<text class="reduce iconfont"  @tap="changeCountPop(BannerGoodsInfo,-1,BannerGoodsInfo.cart_id)" :class="isCheckGoodsNum == 0 ? 'numbox-disabled' : ''">-</text>
							<input type="number"  v-model="isCheckGoodsNum" :id="isCheckGoodsNum" @input="inputCarCount" />
							<text class="plus iconfont" @tap="changeCountPop(BannerGoodsInfo,1,BannerGoodsInfo.cart_id)">+</text>
					</view>
				</view>
				
				<view class="uni-card-footer">
							<text class="uni-card-footer-confirm" @tap="popConfirm()">确定</text>
				</view>
			</div>
		</view>
		
		<view class="uni-mask" v-if="bannerShow"></view>
		<!-- 弹出层 #endif -->
		
		<!-- 底部 购物车-->
		<view v-if="showPopupBottom" v-on:hidePopup="hidePopup">
			<view class="uni-mask"   @click="hidePopup"></view>
			<view class="uni-popup uni-popup-bottom"  v-for="(info,key) in catArr" :key="key" >
				<!-- /**************** -->
				<view v-for="(item,k) in info" :key="k">
					<view class="popup-bottom-text-info">
						<view class="popup-bottom-left">
							<view class="popup-bottom-left-on">
								<text class="name">{{item.goods_name}}</text>
							</view>
							<view class="popup-bottom-left-down">
								<text class="biaoqian">{{item.goods_nature}}</text>
							</view>
						</view>
						<view class="popup-bottom-right">
							<view class="popup-bottom-right-text">
								<text class="biaoqian-left">￥{{item.goods_price}}</text>
								<text class="biaoqian-right numInput">
									<text class="reduce iconfont"  @tap="catchangeCount(item,-1,k)" :class="item.goods_num == 0 ? 'numbox-disabled' : ''">-</text>
									<input type="number"  v-model="item.goods_num" :id="item.goods_id" @input="inputCarCount" />
									<text class="plus iconfont" @tap="catchangeCount(item,1,k)">+</text>
								</text>
							</view>
						</view>
					</view>
				</view>
				
				<!-- /******************* -->
				
				<slot></slot>
			</view>
		</view>

	</view>
</template>

<script>
	import classifyData from '../../common/class.data.js'
	import uniTag from '../../components/uni-tag.vue'
	import axbCheckBox from '../../components/axb-checkbox/axb-checkbox.vue'
	import filterRadioItem from '../../components/axb-checkbox/axb-checkbox-item.vue'
	var startX=0;
	var endX=0;
export default {
	data() {
		let offsetTop = 0;
		offsetTop = 44;
		return {
			showPopupBottom: false,      //底部 购物车
			title: 'tag',
			type: 'default',
			inverted: true,
			isCheckNum:false,
			isCheckGoodsNum:1,
			goodsid:0,
			popPrice:0,
			popNature:'',
			popNature2:'',
			radioArr:[],
			multiArr:[],
			natureArr:[],
			// 全选，返回
			isCheckAll:false,
			bannerShow:false,       //弹出层
			popuptitle:'',
			allPrice: 0, //所有价格
			allShops: 0, //被选中的商店数量
			allCount: 0, //被选中的产品数量
			shopData:[
					{
						'store_name':'香奈儿专营店',
						'checked':false,
						'yunfei':10,
						'price':300,
						 checkedCount:0,
						'data':[
							{
								cart_id:1,
								goods_id:1,
								goods_name:' AAA可可小姐淡香水 50ml',
								goods_name2:' (又名：香奈儿 可可小姐淡香水（瓶装）50ml)',
								reduce_price:16,
								goods_price:100,
								goods_num:0,
								goods_image_url:'../../static/grid1.png',
								isChecked:false,
								is_nature:0,        //是否有规格
								nature:[],
								// 滚动条
								scrollLeft:0,
							},
							{
								cart_id:2,
								goods_id:2,
								goods_name:' 11香奈儿可可小姐淡香水 50ml',
								goods_name2:' (又名：香奈儿 可可小姐淡香水（瓶装）50ml)',
								reduce_price:16,
								goods_price:100,
								goods_num:0,
								goods_image_url:'../../static/grid2.png',
								isChecked:false,
								"is_nature": "1",
								"nature": [
									{
										"naturename": "佐料",
										"data": [
											{
												"name": "孜然",
												"value": "孜然",
												"price": "0.1",
												"is_open": "0"
											},
											{
												"name": "胡椒",
												"value": "胡椒",
												"price": "0.3",
												"is_open": "0"
											},
											{
												"name": "奶油",
												"value": "奶油",
												"price": "1",
												"is_open": "0"
											}
										],
										"minprice": "0.5",
										"maxchoose": "2"
									},
									{
										"naturename": "饮品",
										"data": [
											{
												"name": "可乐",
												"value": "可乐",
												"price": "2.5",
												"is_open": "0"
											},
											{
												"name": "雪碧",
												"value": "雪碧",
												"price": "2.1",
												"is_open": "0"
											}
										],
										"minprice": "2.5",
										"maxchoose": "1"
									},
									{
										"naturename": "饮品1",
										"data": [
											{
												"name": "可乐",
												"value": "可乐",
												"price": "2.5",
												"is_open": "0"
											},
											{
												"name": "雪碧",
												"value": "雪碧",
												"price": "2.2",
												"is_open": "0"
											}
										],
										"minprice": "2.5",
										"maxchoose": "1"
									}
								],
								// 滚动条
								scrollLeft:0,
							}
						],
					},
				],
			noData:false,
			//弹出层商品信息
			BannerGoodsInfo:[],
			// 选中的商品信息
			activePro:[],
			// 记录商品是否是从店铺进入的
			storeEnter:false,
			
			///0325
			scrollLeftTop: 0,
			type_id:0,      //分类id
			className:[],   //分类数组
			classFood:[],
			classifyData:classifyData,
			totalGoodsNum:0,
		    catArr:[],
		};
	},
	onLoad: function () {
		this.className = this.classifyData[0].className;
		let _this = this
		this.height = uni.getSystemInfoSync().windowHeight ;
		this.navLeftHeight = this.leftItemHeight * classifyData.length;
		this.diff =  this.navLeftHeight - this.height;
	},
	methods: {
		//统一的关闭popup方法
		hidePopup: function() {
			this.showPopupBottom = false;
			this.bannerShow = false;
		},
		//展示底部 购物车
		showBottomPopup: function() {
			if(this.totalGoodsNum>0){
				this.hidePopup();
				this.showPopupBottom = true;
			}
		},
		// 单击结算
		jiesuan(){
			let str = ''
			this.activePro.forEach((item,index) => {
				str += item.cart_id+'|'+item.goods_num + ',';
			});
			str = str.substring(0,str.length-1)
			if(str) {
				// 跳转到支付页面
			} else {
				uni.showToast({
					title: '请先选择要购买的商品',
					icon:'none',
					mask: false,
					duration: 1500
				});
			}
			if(this.noData) {
				uni.showToast({
					title: '请先添加要购买的商品',
					icon:'none',
					mask: false,
					duration: 1500
				});
			}
		},
        //购物车加减
        catchangeCount(val,way,index) {
			let vm = this;
			let goods_name = this.catArr[0][index].goods_name;
			let goods_img = this.catArr[0][index].goods_image_url;
			let goodsId = this.catArr[0][index].goods_id;
			let goods_price = this.catArr[0][index].goods_price/this.catArr[0][index].goods_num;
			let popNature = index;
			let popNature2 = this.catArr[0][index].goods_nature;
			if(way > 0) {
				//商品本身加减
				this.shopData.forEach(item => {
					let products = item.data;
					products.forEach(pros => {
						if(pros.goods_id == goodsId) {
							pros.goods_num++;
						}
					});
				});
				// 更新购物车数量
				this.setProDetail(goodsId,goods_price,goods_name,goods_img,popNature,popNature2,1);      //加入购物车
			} else {
				//商品本身加减
				this.shopData.forEach(item => {
					let products = item.data;
					products.forEach(pros => {
						if(pros.goods_id == goodsId) {
							pros.goods_num--;
						}
					});
				});
				this.setProDetail(goodsId,goods_price,goods_name,goods_img,popNature,popNature2,-1);      //加入购物车
			}
		},
        //普通加减
		changeCount(val,way,id) {
			if(way > 0) {
				this.totalGoodsNum++;
				val.goods_num++;
			} else {
				if(val.goods_num > 0) {
					val.goods_num--;
					this.totalGoodsNum--;
				}
			}
			let goods_name = val.goods_name;
			let goods_img = val.goods_image_url;
			let goodsId = val.goods_id;
			let goods_price = val.goods_price;
			let popNature = val.goods_id+val.goods_name;
			let popNature2 = '';
			// 更新购物车数量
			this.setProDetail(goodsId,goods_price,goods_name,goods_img,popNature,popNature2,1);      //加入购物车
		},
		inputCarCount(e) {
			let car_id = e.currentTarget.id;
			let goods_num = e.detail.value;
		},
		//加入购物车，并且结算
		setProDetail(goods_id,price,goods_name,goods_img,popNature,popNature2,num){
			if(this.catArr[0] && this.catArr[0][popNature]){
				let m = Number(this.catArr[0][popNature]['goods_num']) + Number(parseInt(num));
				if(m>0){
					if(num>0){
						this.catArr[0][popNature]['goods_price'] = (Number(this.catArr[0][popNature]['goods_price']) + Number(price)).toFixed(2);
					}else{
						this.catArr[0][popNature]['goods_price'] = (Number(this.catArr[0][popNature]['goods_price']) - Number(price)).toFixed(2);
					}
					this.catArr[0][popNature]['goods_num'] = m;
				}else{
					const arrst = {};
					//去掉不需要的
					for(let key in this.catArr[0]){
						if(key != popNature){
							arrst[key] = {};
							arrst[key]['goods_id']=this.catArr[0][key].goods_id;
							arrst[key]['goods_price']=this.catArr[0][key].goods_price;
							arrst[key]['goods_name']=this.catArr[0][key].goods_name;
							arrst[key]['goods_img']=this.catArr[0][key].goods_img;
							arrst[key]['goods_num'] = this.catArr[0][key].goods_num;
							arrst[key]['goods_nature'] = this.catArr[0][key].goods_nature;
						}
					}
					if(Object.keys(arrst).length == 0){
						this.hidePopup();
						this.catArr[0] = [];
					}else{
						this.catArr[0] = arrst;	
					}
				}
			}else{
				if(num>0){
					if(this.catArr[0]){
						this.catArr[0][popNature] = {};
						this.catArr[0][popNature]['goods_id']=goods_id;
						this.catArr[0][popNature]['goods_price']=price;
						this.catArr[0][popNature]['goods_name']=goods_name;
						this.catArr[0][popNature]['goods_img']=goods_img;
						this.catArr[0][popNature]['goods_num'] = num;
						this.catArr[0][popNature]['goods_nature'] = popNature2;
					}else{
						let r = {};
						r[popNature] = {};
						r[popNature]['goods_id']=goods_id;
						r[popNature]['goods_price']=price;
						r[popNature]['goods_name']=goods_name;
						r[popNature]['goods_img']=goods_img;
						r[popNature]['goods_num'] = num;
						r[popNature]['goods_nature'] = popNature2;
						this.catArr.push(r)
					}
				}
			}
			let total_price = 0;
			let total_num = 0;
			for(let key in this.catArr[0]){
				total_price = total_price+Number(this.catArr[0][key].goods_price);
				total_num = total_num+this.catArr[0][key].goods_num;
			}
			this.totalGoodsNum = total_num;
			this.allPrice = total_price;
		},
		categoryClickMain(index) {
			uni.showLoading({
				title: 'loading'
			});
			setTimeout(()=> {
				uni.hideLoading();
				},1000)
				this.type_id = index;
		},
		//弹出层
		showBanner(val) {
			this.popNature = '';
			this.popNature2 = '';
			this.popPrice = 0;
			this.BannerGoodsInfo = val;
			this.popuptitle = val.goods_name;
		    this.bannerShow = true;
			this.goodsid = val.goods_id;
			this.natureArr = val.nature;
		    this.isCheckGoodsNum = 1;
			this.handleChange('','',true)
		},
		//弹出点击确定
		popConfirm(){
			let goods_name = this.BannerGoodsInfo.goods_name;
			let goods_img = this.BannerGoodsInfo.goods_image_url;
			let goodsId = this.BannerGoodsInfo.goods_id;
			this.BannerGoodsInfo.goods_num = this.BannerGoodsInfo.goods_num+parseInt(this.isCheckGoodsNum);         //当前商品数量
			this.totalGoodsNum = this.totalGoodsNum+parseInt(this.isCheckGoodsNum);
			this.setProDetail(goodsId,this.popPrice,goods_name,goods_img,this.popNature,this.popNature2,parseInt(this.isCheckGoodsNum));      //加入购物车
			this.hidePopup();
		},
		closeBanner: function() {
		    this.hidePopup();
		},
		//标签
		setType() {
            this.type = 'success';
		},
		setInverted() {
		    this.inverted = !this.inverted;
		},
		// 单选时
		radioChangeTypes(goodsid,foods,itmes,e) {
			let max = foods.maxchoose
			let gnt = goodsid+foods.naturename;
			this.handleChange(e,gnt,false)
		},
		handleChange:function(val,type,mn){
			// 是否为全部
			let narr = this.BannerGoodsInfo.nature;
			let goods_name = this.BannerGoodsInfo.goods_name;
			let goodsId = this.BannerGoodsInfo.goods_id;
			let total_spe_price = 0;
			let num = parseInt(this.isCheckGoodsNum);
			let max = 1;
			for(let i =0; i<narr.length;i++){
				const arr = []
				let n=1
				let ismu = true
				let nature_name = narr[i].naturename;
				
				for(let m=0;m<narr[i].data.length;m++){
					let r = {}
					r.name = narr[i].data[m].name
					r.price = narr[i].data[m].price
					r.value = narr[i].data[m].value
					if(mn){
						if(m==0){
							r.checked = true
						}else{
							r.checked = false
						}
					}else{
						if(goodsId+nature_name+narr[i].data[m].value === type+val){
							r.checked = true
						}else{
							if(goodsId+nature_name === type){
								r.checked = false
							}else{
								r.checked = narr[i].data[m].checked
							}
						}
					}
					arr.push(r)
				}
				narr[i].data = arr
			}
			
			//计算价格
			let goods_price = this.BannerGoodsInfo.goods_price;
			let goods_nature = '';
			for(let i =0; i<narr.length;i++){
				for(let m=0;m<narr[i].data.length;m++){
					if(narr[i].data[m].checked){
						total_spe_price += narr[i].data[m].price*num
						goods_nature += narr[i].naturename+narr[i].data[m].name;
						this.popNature2 += narr[i].data[m].name+'  |  ';
					}
				}
			}
			this.popNature = goodsId+goods_name+goods_nature;
			let popTotalPrice = 0;
			popTotalPrice = goods_price*num+total_spe_price;
			this.popPrice = Number(popTotalPrice).toFixed(2);
		},
		//弹出 加减
		changeCountPop(val,way,id) {
			let vm = this;
			if(way > 0) {
				this.isCheckGoodsNum++;
			} else {
				if(val.goods_num > 0 && this.isCheckGoodsNum>1) {
					this.isCheckGoodsNum--;
				}
			}
			// 更新购物车数量
			this.handleChange(val,1,false)
		},
	},
	components:{
		uniTag,
		axbCheckBox,
		filterRadioItem
	},
	// 单间商品的价格 x 数量
	filters:{
		totalprice(price,count) {
			console.log('当前项',price,count);
			return price * count;
		}
	},
	computed: {
		minHeight() {
			var systemInfo = uni.getSystemInfoSync();
			return `min-height:${systemInfo.windowHeight}px`;
		}
	}
};
</script>
<style>
    .uni-mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}
	.uni-popup {
		position: absolute;
		z-index: 999;
		background-color: #ffffff;
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
	}

	.uni-popup-bottom {
		left: 0;
		bottom: 0;
		width: 100%;
		/* height: 100upx; */
		/* line-height: 100upx; */
	}
	.popup-bottom-text-info{
		height: 100upx;
		padding: 15upx 5upx 10upx 30upx;
	}
	.popup-bottom-left{
		width:55%;
		float: left;
	}
	.popup-bottom-right{
		width: 43%;
		float: right;
	}
	.popup-bottom-right-text{
		height: 98upx;
		padding-top:49;
	}
	.popup-bottom-left-on{
		font-size:29upx;
	}
	.popup-bottom-left-down{
		font-size: 10upx;
		color: #a09a9a;
	}
	.biaoqian-left{
        color: #FD395B;
	}
	.biaoqian-right{
		height: 98upx;
		line-height: 98upx;
	}
	.car-img{
		height:80upx;
		padding: 7upx;
		display: inline;
		float: left;
        width: 70upx;
		margin-right:5upx;
	}
</style>
<style lang="scss">
	.totalPriceWrapper{
		font-size: 1rem;
		/* line-height: 1.493333333333333rem; */
		border-bottom: 1px solid #e7e7e7;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding-left: 0.64rem;
	}
	
	.choose{
		border-color: #f87a7c;
		color: #f87a7c;
		background-color: #ffe7e7;
	}
	.tag-view {
	    margin: 10upx 20upx;
	    display: inline-block;
	}
	    /* 遮罩层 */
    .plusnature {
		float: right;
		height: 1.2rem;
		line-height: 1.2rem;
		padding: 0 .7rem;
		font-size: .597333333333333rem;
		color: #fff;
		background-color: #f87a7c;
		border-radius: 20px;
	}
	.plusnature span{
	   font-size: .597333333333333rem;
	}
	.pop-up-title1{
		// font-size: 16px;
		font-size: .64rem;
		line-height: 2.048rem;
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.pop-up-title2{
		justify-content:flex-end; text-align:right; padding:20upx;float: right;
	}
	
	.uni-mask {
	    background: rgba(0, 0, 0, 0.6);
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    left: 0;
	    top: 0;
	    z-index: 98;
	}
	.uni-card-footer-confirm{
		display: block;
		width: 100%;
		background: red;
		text-align: center;
		border-radius: 5upx;
		color: #fff;
		letter-spacing:5upx;
	}
	
	/* 弹出层形式的广告 */
	.uni-banner {
	    width: 85%;
		// min-height: 50%;
		// height: 55%;
	    position: fixed;
	    left: 50%;
	    top: 50%;
	    background: #FFF;
	    border-radius: 10upx;
	    z-index: 999;
	    transform: translate(-50%, -50%);
	}
	.numInput {
		overflow: hidden;
		float: right;
		text {
			float: left;
			font-size: 45upx;
			line-height: 50upx;
			display: inline-block;
			width: 43upx;
			height: 43upx;
			text-align: center;
			line-height: 37upx;
			border-radius: 50%;
			margin-top: 8upx;
		}
		input {
			display: inline-block;
			width: 80upx;
			float: left;
			text-align: center;
			color: #999;
		}
		
		.numbox-disabled {
			color: #c0c0c0;
		}
	}
	.numInput .plus{
		color: #fff;
		background-color: #f92e2e;
	}
	.numInput .reduce{
		color: #f92e2e;
		background-color: #fff;
		border: 1px solid red;
	}
	.shoppingcar{
		background-color: #FAFAFA;
		// padding-bottom: 98upx;
	}
	.shoppingcar .dianpu{
		background-color: #FFFFFF;
		margin-bottom: 20upx;
	}
	.shoppingcar .dianpu .dianpu-name{
		height: 70upx;
		box-sizing: border-box;
		padding: 20upx 32upx;
		border-bottom: 1px solid #FAFAFA;
		display: flex;
		margin-top: 1upx;
	}
	.shoppingcar .dianpu .select,
	.shoppingcar .dianpu .select-active{
		flex-shrink:0;
	}
	.shoppingcar .dianpu .dianpu-name .iconfont{
		font-size: 45upx;
		color: #FF6B94;
		line-height: 32upx;
		margin-right: 8upx;
	}
	.shoppingcar .dianpu .dianpu-name .text{
		font-size: 24upx;
		color: #333333;
		line-height: 31upx;
	}
	.shoppingcar .dianpu .shangpin{
		width: 750upx;
		padding: 22upx 32upx;
		display: flex;
		border-bottom: 1px solid #FAFAFA;
	}
	.shoppingcar .dianpu .shangpin .select,
	.shoppingcar .dianpu .shangpin .select-active{
		margin-top: 40upx;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info{
		display: flex;
		flex: 1;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info .img{
		width: 108upx;
		height: 108upx;
		margin-right: 10upx;
		flex-shrink:0;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info .img image{
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 8upx;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info .text-info {
		// width: 100%;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info .text-info .title-text{
		line-height: 34upx;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info .text-info .title-text .biaoqian{
		color: #FD395B;
		font-size: 26upx;
		margin-right: 10upx;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info .text-info .title-text .name{
		color: #333;
		font-size: 26upx;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info .text-info .title-text .bieming{
		color: #333;
		font-size: 20upx;
		margin: 0 6upx;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info .text-info .title-text .youhui{
		color: #FD395B;
		font-size: 24upx;
		float: right;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info .text-info .jiage{
		font-size: 24upx;
		color: #999999;
		display: inline-block;
		font-weight: 600;
	}
	.shoppingcar .dianpu .shangpin .shangpin-info .text-info .jiage .danjia{
		color: #FD395B;
		margin-right: 10upx;
	}
	.shoppingcar .dianpu .jiesuan{
		padding: 30upx 30upx 30upx;
		color: #333333;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		box-sizing: border-box;
	}
	.shoppingcar .dianpu .jiesuan .yuefei,
	.shoppingcar .dianpu .jiesuan .zongji{
		font-size: 22upx;
		lighting-color: 40upx;
	}
	.shoppingcar .bottom-jiesuan{
		width: 100%;
		height: 98upx;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		display: flex;
		box-shadow:0px 0px 4upx 0px rgba(0,0,0,0.1);
		
		/* #ifdef H5 */
		margin-bottom:100upx;
		/* #endif */
		position:fixed;
		// left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		align-items: center;
		// width: 690upx;
		height: 100upx;
		padding: 0 10upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		.checkbox{
			height:52upx;
			position:relative;
			image{
				width: 52upx;
				height: 100%;
				position:relative;
				z-index: 5;
			}
		}
		
	}
	.shoppingcar .bottom-jiesuan .info{
		box-sizing: border-box;
		padding: 0 30upx;
		width: 510upx;
		font-size: 24upx;
		color: #333333;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
	}
	.shoppingcar .bottom-jiesuan .info view{
		line-height: 100upx;
	}
	.shoppingcar .bottom-jiesuan .info .select,
	.shoppingcar .bottom-jiesuan .info .select-active{
		display: inline-block;
		vertical-align: middle;
	}
	.shoppingcar .bottom-jiesuan .info text{
		line-height: 98upx;
		color: #FD395B;
	}
	.shoppingcar .bottom-jiesuan .btn{
		width: 240upx;
		line-height: 98upx;
		color: #FFFFFF;
		font-size: 30upx;
		text-align: center;
		background-color: #FD395B;
	}
	.btn-prompt{
		font-size: 26upx;
		color: #9a9898;
	}
	/* 全选的文字 */
	.allSelectText {
		float: left;
		overflow: hidden;
		width: 150upx;
		.allText {
			float: left;
		}
	}
	.allSelectText > view:first-child {
		display: inline-block;
		float: left;
	} 
	.scrollView{
		width: 750upx;
	}
	.scrollView .viewbox{
		width: 900upx;
		display: flex;
		transition: all .2s ease-in 0s;
	}
	.scrollView .hong{
		width: 150upx;
		background-color: #FD395B;
		color: #FFFFFF;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	// 购物车没有数据提示
	.shoppingcar .car-no-data {
		width: 100%;
		height: 700upx;
		text-align: center;
		line-height: 700upx;
		color: #999;
		font-size: 30upx;
		vertical-align: middle;
		.iconfont {
			font-size: 40upx;
			margin-right: 20upx;
		}
	}
	
	//////////0325
		.page-body {
			display: flex;
			background: #fff;
			overflow: hidden;
		}
	
		.nav {
			display: flex;
			width: 100%;
		}
	
		.nav-left {
			width: 25%;
			background: #fafafa;
		}
	
		.nav-left-item {
			height: 100upx;
			border-right: solid 1px #f1f1f1;
			border-bottom: solid 1px #f1f1f1;
			font-size: 30upx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	
		.nav-right {
			width: 75%;
		}
		.box {
			display: block;
			overflow: hidden;
			border-bottom: 20upx solid #f3f3f3;
		}
		.box:last-child {
			border: none;
		}
		.nav-right-item {
			/* width: 28%; */
			height: 220upx;
			/* float: left; */
			text-align: center;
			padding: 11upx;
			font-size: 28upx;
			background: #fff;
			border-bottom: 1px solid #e7e7e7;
		}
	
		.nav-right-item image {
			width: 150upx;
			height: 150upx;
			float: left;
			float: left;
	        margin-right: 8px;
		}
		.uni-media-list-body{
			float: left;
			height: 150upx;
		}
	
		.active {
			color: #FF80AB;
			background: #fff;
			border-right: 0;
		}
		::-webkit-scrollbar {/*取消小程序的默认导航条样式*/
	   width: 0;
	   height: 0;
	   color: transparent;
	}
			
	
</style>
