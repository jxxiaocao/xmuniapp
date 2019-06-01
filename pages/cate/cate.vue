<template>
	<view class="m-store-store">
		<view class="m-store-banner">
			<view class="m-content">
				<view class="m-message">
					<view class="m-img">
					</view>
					<view class="m-body">
						<view class="m-title">
							蔬菜001号(中关村店)
						</view>
						<view class="m-text">
							公告：全场绿色蔬菜活动特价8.5折进行中
						</view>
						<view class="m-time">
							营业：07:00-23:00
						</view>
					</view>
					<view class="m-phone">
						<image style="width: 40upx;height:40upx;" src="../../static/img/icon/shop_icon_phone.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="category-list">
			<!-- 左侧分类导航 -->
			<scroll-view  scroll-y="true" class="left" >
		        <view class="row" v-for="(category,index) in categoryList"  :class="[index==showCategoryIndex?'on':'']" @tap="showCategory(index)">
					<view class="text">
						<view class="block"></view>
						{{category.title}}
					</view>
				</view>
		    </scroll-view>
			
			<!-- 右侧子导航 -->
			<scroll-view  scroll-y="true" class="right" >
			    <view class="category" v-for="(item,index) in shopData"  >
					<view class="list">
						<!-- <view class="box" v-for="(box,i) in category" :key="i"> -->
							<!-- 商品列表 -->
							<m-store-pro @touchOnGoods="touchOnGoods" :rowData="item"></m-store-pro>
						<!-- </view> -->
					</view>
				</view>
			</scroll-view>
		</view>		
		<m-footer-car :price="'￥'+carPrice" :num="carNum" @handleFn="showSpec(false)"></m-footer-car>
		
		 <!-- 弹出层 -->
		<!-- 规格-模态层弹窗 -->
		<view 
			class="popup spec" 
			:class="isSpecClass"
			@touchmove.stop.prevent="stopPrevent"
		>
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content">
				<view class="a-t" style="width:100%;">
					<div style="width: 86%;">
						   <span class="pop-up-title1">
							  蔬菜001号(中关村店)
						   </span>
						   <!-- <a class="pop-up-title2 uni-icon uni-icon-close" href="javascript:void(0);"  @tap="closeBanner"></a> -->
					</div>
					<!-- <image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image> -->
					<view class="right">
						<a class="pop-up-title2 uni-icon uni-icon-close" href="javascript:void(0);"  @tap="closeBanner"></a>

					<!-- 	<text class="price">¥328.00</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view> -->
					</view>
				</view>
				
 					<div style="position: relative;height:66%;overflow: hidden;width: 100%;overflow-y: scroll;">
		<!--			<div>
						<ul>
							<li> -->
								<view class="totalPriceWrapper"></view>
								<!-- <view class="uni-padding-wrap uni-common-mt attr-list" v-for="(foods,index) in natureArr" :key="index"> -->
								<view class="attr-list" v-for="(foods,index) in natureArr" :key="index">
									<view class="item-title">{{foods.naturename}}</view>
									
									<view class="item-list">
											<view class="filter-body-section-body style-flex style-flex-wrap">
												
												<view class="style-flex style-flex-wrap">
													<filter-radio-item v-for="(item, idx) in foods.data" :key="idx" :name="item.name" :value="BannerGoodsInfo.goods_id+foods.naturename+item.value" :price="item.price" :checked="item.checked" @change="radioChangeTypes(BannerGoodsInfo.goods_id,foods,item,item.value)"></filter-radio-item>
												</view>
												
											</view>
									</view>
								
								</view>
						<!-- 	</li>	
						
				        </ul>
					</div> -->
				</div>
				<!-- <view v-for="(item,index) in specList" :key="index" class="attr-list">
					<text>{{item.name}}</text>
					<view class="item-list">
						<text 
							v-for="(childItem, childIndex) in specChildList" 
							v-if="childItem.pid === item.id"
							:key="childIndex" class="tit"
							:class="{selected: childItem.selected}"
							@click="selectSpec(childIndex, childItem.pid)"
						>
							{{childItem.name}}
						</text>
					</view>
				</view> -->
				<view class="uni-card-footer">
					<view class="info">
						<view>
							<text>￥{{ popPrice }}</text>
						</view>
					</view>
					<view class="numInput">
							<!-- <text class="reduce iconfont"  @tap="changeCountPop(BannerGoodsInfo,-1,BannerGoodsInfo.cart_id)" :class="isCheckGoodsNum == 0 ? 'numbox-disabled' : ''">-</text> -->
							<!-- <input type="number"  v-model="isCheckGoodsNum" :id="isCheckGoodsNum" @input="inputCarCount" /> -->
							<!-- <text class="plus iconfont" @tap="changeCountPop(BannerGoodsInfo,1,BannerGoodsInfo.cart_id)">+</text> -->
					</view>
				</view>
				
				    <button class="btn" @tap="popConfirm()">确定</button>
				
				
				
				<!-- <view class="uni-card-footer">
							<text class="uni-card-footer-confirm" @tap="popConfirm()">确定</text>
				</view> -->
				
			</view>
			
		</view>
		<!-- 弹出层 #endif -->
		
		<!-- 购物车规格-模态层弹窗 -->
		<view v-if="bannerShow">
			<view class="popup spec" :class="specClass" @touchmove.stop.prevent="discard" @tap="hideSpec">
				<!-- 遮罩层 -->
				<view class="mask"></view>
				<view class="layer" @tap.stop="discard">
					<view class="m-shopcar-box">
						<view class="m-header">
							<view class="m-line">
								<view class="">
									购物车
								</view>
								<view class="m-light">
									共{{carNum}}件商品
								</view>
							</view>
							<view class="m-clear-car" @tap="clearCar">
								清空购物车
							</view>
						</view>
						<view v-for="(item,index) in insideCarGoods" :key="index" class="m-shopcar-item">
							<view class="m-title">
								{{item.goods_name}}
								<view class="pop-spec">{{item.goods_name}}</view>
							</view>
							<view class="m-price">
								{{item.price}}
							</view>
							<view class="m-controne">
								<uni-number-box :rowData="item" @change="bindChange" :min="item.num" :max="9"></uni-number-box>
							</view>
						</view>
					</view>
					<m-footer-car :price="'￥'+carPrice" :num="carNum" @handleFn="showSpec(false)"></m-footer-car>
				</view>
			</view>
		</view>
		
		
		<view class="good_box" v-show="!hide_good_box"  :style="'left:'+bus_x+'px;top:'+bus_y+'px'"></view>
	</view>
</template>
<script>
	import classifyData from '../../common/class.data.js'
	import uniTag from '../../components/uni-tag.vue'
	import axbCheckBox from '../../components/axb-checkbox/axb-checkbox.vue'
	import filterRadioItem from '../../components/axb-checkbox/axb-checkbox-item.vue'
	
	import mFooterCar from '@/components/uni-number-box/m-footer-car.vue' // 底部购物车
	import mStorePro from '@/components/uni-number-box/m-store-pro.vue' // 商品列表
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue" // 加减数字
	// 抛物线计算
	function bezier (pots, amount) {
		  var pot;
		  var lines;
		  var ret = [];
		  var points;
		  for (var i = 0; i <= amount; i++) {
			points = pots.slice(0);
			lines = [];
			while (pot = points.shift()) {
			  if (points.length) {
				lines.push(pointLine([pot, points[0]], i / amount));
			  } else if (lines.length > 1) {
				points = lines;
				lines = [];
			  } else {
				break;
			  }
			}
			ret.push(lines[0]);
		}
		function pointLine(points, rate) {
				var pointA, pointB, pointDistance, xDistance, yDistance, tan, radian, tmpPointDistance;
				var ret = [];
				pointA = points[0];//点击
				pointB = points[1];//中间
				xDistance = pointB.x - pointA.x;
				yDistance = pointB.y - pointA.y;
				pointDistance = Math.pow(Math.pow(xDistance, 2) + Math.pow(yDistance, 2), 1 / 2);
				tan = yDistance / xDistance;
				radian = Math.atan(tan);
				tmpPointDistance = pointDistance * rate;
				ret = {
				  x: pointA.x + tmpPointDistance * Math.cos(radian),
				  y: pointA.y + tmpPointDistance * Math.sin(radian)
				};
				return ret;
		}
	  return {
	    'bezier_points': ret
	  };
	}
	export default {
		components:{
			mStorePro,
			uniNumberBox,
			mFooterCar,
			filterRadioItem
		},
		data() {
			return {
				isSpecClass: 'none',   //6.1
				specClass: 'none',
				
				
				
				specShow:false,
				// 购物车小球动画start
				 hide_good_box: false,
				 bus_x:0,
				 bus_y:0,
				 finger:{},
				 busPos:{},
				 linePos:[],
				 timer:null,
				 bannerShow:false,
				 specBannerShow:false,
				 popPrice:0,
				 natureArr:[],
				 
				 //弹出层商品信息
				 BannerGoodsInfo:[],
				// 购物车小球动画end
				carPrice:"0", //加入到购物车的总价钱
				carNum:0, //加入到购物车的总个数
				insideCarGoods:[],// 加入到购物车的商品列表
				
				specClass: '',//购物车规格弹窗css类，控制开关动画
				showCategoryIndex:0,
				//商品分类信息列表
				categoryList:[
					{id:1,title:'生鲜果蔬',banner:'../../static/img/category/banner.jpg'},
					{id:2,title:'鲜花绿植',banner:'../../static/img/category/banner.jpg'}
				],
			    shopData:[
					{   
						cart_id:1,
						id:1,
						goods_name:'精品秋葵600g',
						descripe:"脆糯营养，口感好，健康绿色",
						img:'../../static/img/1.jpg',
						price:"￥9",
						oldprice:"￥100",
						is_nature:0,        //是否有规格
						nature:[],
						goods_num:0,
					},
					{   
						cart_id:1,
						id:2,
						goods_name:'精品秋葵600g',
						descripe:"脆糯营养，口感好，健康绿色",
						img:'../../static/img/2.jpg',
						price:"￥8",
						oldprice:"￥100",
						goods_num:0,
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
					}
				],
			}
		},
		methods:{
				//规格弹窗开关 //6.1
	        toggleSpec() {
				this.isSpecClass = 'show';
			},
			//统一的关闭popup方法
			hidePopup: function() {
				// this.isSpecClass = 'none';
				setTimeout(() => {
					this.isSpecClass = 'none';
				}, 250);
				// this.bannerShow = false;
			},
			closeBanner: function() {
			    this.hidePopup();
			},
			//分类切换显示
			showCategory(index){
				this.showCategoryIndex = index;
			},
			// popup start
			//关闭规格弹窗
			hideSpec() {
				this.specClass = 'hide';
				//回调
			
				this.selectSpec&&this.specCallback&&this.specCallback();
				this.specCallback = false;
				setTimeout(() => {
					this.specClass = 'none';
				}, 200);
			},
			//规格弹窗
			showSpec(fun) {
				if(this.carNum>0){
					this.bannerShow = true;
					this.specClass = 'show';
					this.specCallback = fun;
				}
			},
			specCallback(){
				return;
			},
			discard(){
				
			},
			// popup end
			// 点击加入 加入购物车start
			touchOnGoods(obj){
				console.log(123456);
				console.log(obj);
				const e = obj.element;
				const data = obj.data;
				const type = obj.type;
				if(type==-1){
					data.goods_num--;
				} else if(type==2){
					//有规格可以选择
					this.specBannerShows(data);
				}else{
					if(this.timer){ // 清除一下动画
						clearInterval(this.timer);
					}
					this.finger = {}; var topPoint = {};
					this.finger['x'] = e.target.x;//点击的位置
					this.finger['y'] = e.target.y;
					if (this.finger['y'] < this.busPos['y']) {
					  topPoint['y'] = this.finger['y'] - 150;
					} else {
					  topPoint['y'] = this.busPos['y'] - 150;
					}
					topPoint['x'] = Math.abs(this.finger['x'] - this.busPos['x']) / 2;

					if (this.finger['x'] > this.busPos['x']) {
					  topPoint['x'] = (this.finger['x'] - this.busPos['x']) / 2 + this.busPos['x'];
					} else {//
					  topPoint['x'] = (this.busPos['x'] - this.finger['x']) / 2 + this.finger['x'];
					}
					data.goods_num++;
					data.goodsChooseSpec = data.id+data.goods_name; 
					this.linePos = bezier([this.busPos, topPoint, this.finger], 30);
					this.startAnimation(e,data);
				}
			},
			//规格 弹出层
			specBannerShows: function(val) {
				this.specBannerShow = true;
				this.popNature = '';
				this.popNature2 = '';
				this.popPrice = 0;
				this.BannerGoodsInfo = val;
				this.popuptitle = val.goods_name;
			    this.bannerShow = true;
				this.goodsid = val.goods_id;
				this.natureArr = val.nature;
			    this.isCheckGoodsNum = 1;
				this.toggleSpec();
				// this.handleChange('','',true)
			},
			//弹出点击确定
			popConfirm(){
				let goods_name = this.BannerGoodsInfo.goods_name;
				let goods_img = this.BannerGoodsInfo.goods_image_url;
				let goodsId = this.BannerGoodsInfo.goods_id;
				this.BannerGoodsInfo.goods_num = this.BannerGoodsInfo.goods_num+parseInt(this.isCheckGoodsNum);         //当前商品数量
				this.totalGoodsNum = this.totalGoodsNum+parseInt(this.isCheckGoodsNum);
				// this.setProDetail(goodsId,this.popPrice,goods_name,goods_img,this.popNature,this.popNature2,parseInt(this.isCheckGoodsNum));      //加入购物车
				this.hidePopup();
			},
			//点 动态
			startAnimation: function (e,data) {
				var index = 0, that = this,
				bezier_points = that.linePos['bezier_points'];
				that.hide_good_box= false
				that.bus_x=that.finger['x'];
			    that.bus_y=that.finger['y'];
				var len = bezier_points.length;
				index = len;
				that.timer = setInterval(function () {
					index--;
					that.bus_x= bezier_points[index]['x'];
					that.bus_y= bezier_points[index]['y'];
					if (index < 1) {
					  clearInterval(that.timer);
					  that.hide_good_box= true;
					  that.addGoodSum(e,data)
					}
				}, 25);
			},
			// 购物车价钱与个数计算， 根据你的需求计算(加入购物车，并且结算)
			addGoodSum(e,data){
				let newdata = {...data};
				let price = data.price.replace("￥",'');
				data.num=1;
				let index = this.insideCarGoods.findIndex(item=>item.goodsChooseSpec==newdata.goodsChooseSpec);
				if(index==-1){
					this.insideCarGoods.push(data);
				}else{
					this.insideCarGoods[index].num+=1;
				}
				
				this.numPrice();
			},
			/* 数字输入框改变 
			getdata对象返回三个参数 
			newval新值 
			oldval旧值 
			rowData是绑定给组件的rowdata对象
			此地方为模拟数据 一般情况下 此地方会改成http请求
			*/
			bindChange(getdata){
				let inputnewNum = getdata.newval;
				let inputoldNum = getdata.oldval;
				let rowData = getdata.rowData;
				let obj = this.insideCarGoods.filter((item)=>item.id==rowData.id)[0];
				let oldprice = obj['price'].replace("￥",'')*1;
				obj['price']="￥"+(oldprice*inputnewNum);
				obj['num']=inputnewNum;
				this.numPrice();
			},
			numPrice(){
				let price = 0;
				let num =0;
				this.insideCarGoods.forEach((item)=>{
					price+=item.price.replace("￥",'')*1;
					num+=item.num*1;
				})
				this.carPrice=price;
				this.carNum=num;
			},
			
			//6.1 s
				// 单选时
			radioChangeTypes(goodsid,foods,itmes,e) {
				let max = foods.maxchoose
				let gnt = goodsid+foods.naturename;
				this.handleChange(e,gnt,false)
			},
			handleChange:function(val,type,mn){
				// 是否为全部
				let narr = this.BannerGoodsInfo.nature;
				console.log(narr);
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
			
			//6.1 e
			
			//清空购物车
			clearCar(){
				this.insideCarGoods=[];
				this.bannerShow = false;
				this.specClass = 'hide';
				this.carNum = 0;
				this.shopData.forEach((item)=>{
					item.goods_num = 0;
				})
			}
		},
		watch:{
			insideCarGoods(val){
				console.log(val);
			}
		},
		onLoad() {
			let hh = 0;
			const that = this;
			that.busPos['x'] = 45;//购物车的位置
			//  #ifdef H5
			hh = document.body.clientHeight;
			that.busPos['y'] = hh - 56;
			//  #endif  
			
			//  #ifdef MP-WEIXIN  
			wx.getSystemInfo({
				success: function(res) {
					hh = res.windowHeight;
					that.busPos['y'] = hh - 56;
				}
			})
			//  #endif  
		}
		
	}
</script>
<style lang="scss">
	
	@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(-100%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(-100%);
			}
			100% {
				transform: translateY(0);
			}
		}
		.pop-spec{
			font-size: 8px;
            color: #918a8a;
		}
	.m-store-banner{
		min-height: 270upx;
		position: relative;
		padding-top: 20upx;
		background:#eee;
		// background:url("../../static/img/storebanner.png");
		background-size: 100% 200upx;
		background-repeat: no-repeat;
		.m-content{
			width: 690upx;
			position: relative;
			bottom: 10upx;
			left: 30upx;
			right: 30upx;
			margin-top: 30upx;
			background:#fff;
			border-radius: 15upx;
			box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
			z-index: 100;
			.m-message{
				padding:20upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: flex-end;
				.m-img{
					flex:0 0 135upx;
					height: 135upx;
					// background:url("../../static/img/storebanner.png");
				}
				.m-body{
					flex: 1;
					// padding: 20upx;
					padding-left: 10upx;
					padding-bottom: 0;
					.m-title{
						font-size: 32upx;
						color:#333333
					}
					.m-text{
						font-size: 20upx;
						color:#999999;
						line-height: 38upx;
						margin-top: 10upx;
					}
					.m-time{
						font-size: 20upx;
						color:#999999;
						margin-top: 10upx;
					}
				}
				.m-phone{
					flex:0 0 40upx;
					text-align: right
				}
			}
		}
	}
	.popup {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 300;
		display: none;
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}
		.layer {
			position: fixed;
			z-index: 22;
			bottom: -70%;
			width: 100%;
			// padding: 0;
		
			border-radius: 20upx 20upx 0 0;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;
			// 购物车
			.m-shopcar-box {
				width: 100%;
				// padding: 30upx 0;
				.m-header{
					padding: 30upx 30upx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					.m-line{
						display: flex;
						color:#333333;
						font-size: 30upx;
						.m-light{
							color:#333333;
							font-size: 22upx;
							padding-left: 10upx;
						}
					}
					.m-clear-car{
						color:#333333;
						font-size:22upx;
					}
				}
				.m-shopcar-item{
					margin-left: 30upx;
					margin-right: 30upx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items:center;
					border-top: 1px solid #eee;
					padding: 20upx;
					&:last-of-type{
						border-bottom: 1px solid #eee;
					}
					.m-title{
						color:#4c4c4c;
						font-size: 26upx;
					}
					.m-price{
						color:#ff582b;
						font-size: 26upx;
					}
					.m-controne{
						// flex: 
					}
				}
			}
			.btn {
				width: 100%;
				height: 100upx;
				.button {
					width: 100%;
					height: 80upx;
					border-radius: 40upx;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #f47952;
					font-size: 28upx;
				}
			}
		}
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			display: block;
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		&.service {
			.row {
				margin: 30upx 0;
				.title {
					font-size: 30upx;
					margin: 10upx 0;
				}
				.description {
					font-size: 28upx;
					color: #999;
				}
			}
		}
		&.spec {
			.title {
				font-size: 30upx;
				margin: 30upx 0;
			}
			.sp {
				display: flex;
				view {
					font-size: 28upx;
					padding: 5upx 20upx;
					border-radius: 8upx;
					margin: 0 30upx 20upx 0;
					background-color: #f6f6f6;
					&.on {
						padding: 3upx 18upx;
						border: solid 1upx #f47925;
					}
				}
			}
			.length{
				margin-top: 30upx;
				border-top: solid 1upx #aaa;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 20upx;
				.text{
					font-size: 30upx;
				}
				.number{
					display: flex;
					justify-content: center;
					align-items: center;
					.input{
						width: 80upx;
						height: 60upx;
						margin: 0 10upx;
						background-color: #f3f3f3;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
						input{
							width: 80upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;
							text-align: center;
							font-size: 26upx;
						}
					}
					
					.sub ,.add{
						width: 60upx;
						height: 60upx;
						background-color: #f3f3f3;
						border-radius: 5upx;
						.icon{
							font-size: 30upx;
							width: 60upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;
							
						}
					}
				}
			}
			
		}
	}
	// 商品列表样式
	.category-list{
		width: 100%;
		background-color: #fff;
		display: flex;
		padding-bottom: 99upx;
		
		.left,.right{
			background: #fff;
			position: absolute;
			top: 289upx;
			/*  #ifdef  APP-PLUS  */
			top: calc(100upx + var(--status-bar-height));
			/*  #endif  */
			bottom: 0upx;
		}
		.left{
			width: 24%;
			left: 0upx;
			background-color: #f6f3f3;
			
			.row{
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;
				.text{
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color:#999999;
					.block{
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}
				&.on{
					height: 100upx;
					background-color: #fff;
					.text{
						font-size: 30upx;
						// font-weight: 600;
						// color: #2d2d2d;
						.block{
							width: 10upx;
							height: 80%;
							top: 10%;
							// background-color: #f06c7a;
						}
					}
				}
			}
		}
		.right{
		   width: 76%;
			left: 24%;
			.category{
// 				width: 94%;
				padding: 20upx 5upx 0 30upx;
			
				.list{
					margin-top: 40upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					.box{
						width: 100%;
					}
				}
			}
		}
	}
	/*抛物线小球*/
	.good_box{
	  width: 10px;
	  height: 10px;
	  position: fixed;
	  border-radius: 50%;
	  overflow: hidden;
	  left: 50%;
	  top: 50%;
	  z-index: +99;
	  background:#ff582b;
	}
</style>

<style lang='scss'>
	page{
		background: $page-color-base;
		padding-bottom: 160upx;
	}
	.icon-you{
		font-size: $font-base + 2upx;
		color: #888;
	}
	.carousel {
		height: 722upx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		padding: 20upx 30upx;
		
		.title{
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}
		.price-box{
			display:flex;
			align-items:baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			color:$uni-color-primary;
		}
		.price{
			font-size: $font-lg + 2upx;
		}
		.m-price{
			margin:0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
		}
		.coupon-tip{
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx); 
		}
		.bot-row{
			display:flex;
			align-items:center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;
			text{
				flex: 1;
			}
		}
	}
	/* 分享 */
	.share-section{
		display:flex;
		align-items:center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;
		.share-icon{
			display:flex;
			align-items:center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position:relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;
			&:after{
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position:absolute;
				background: $uni-color-primary;
			}
		}
		.icon-xingxing{
			position:relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}
		.tit{
			font-size: $font-base;
			margin-left:10upx;
		}
		.icon-bangzhu1{
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}
		.share-btn{
			flex: 1;
			text-align:right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}
		.icon-you{
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}
	
	.c-list{
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20upx 30upx;
			position:relative;
		}
		.tit{
			width: 140upx;
		}
		.con{
			flex: 1;
			color: $font-color-dark;
			.selected-text{
				margin-right: 10upx;
			}
		}
		.bz-list{
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			text{
				display: inline-block;
				margin-right: 30upx;
			}
		}
		.con-list{
			flex: 1;
			display:flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}
		.red{
			color: $uni-color-primary;
		}
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;
		.e-header{
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.tit{
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10upx;
			}
		}
	}
	.eva-box{
		display: flex;
		padding: 20upx 0;
		.portrait{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;
			.con{
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}
			.bot{
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color:$font-color-light;
			}
		}
	}
	/*  详情 */
	.detail-desc{
		background: #fff;
		margin-top: 16upx;
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;
				
			text{
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 10upx 30upx;
		height:50%;
		margin-bottom:92upx;
		.a-t{
			display: flex;
			image{
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;
				.price{
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}
				.selected-text{
					margin-right: 10upx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			/* padding-top: 30upx; */
			padding-left: 10upx;
		}
		.item-list{
			/* padding: 20upx 0 0; */
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}
			.selected{
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
			.btn{
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;
			.yticon{
				font-size: 40upx;
				color: #ccc;
				line-height: 48upx;
				color: $font-color-light;
			}
			&.active, &.active .yticon{
				color: $uni-color-primary;
			}
			.icon-fenxiang2{
				font-size: 42upx;
				transform: translateY(-2upx);
			}
			.icon-shoucang{
				font-size: 46upx;
			}
		}
		.yticon-img{
			width: 32px;
            height: 20px;
		}
		.action-btn-group{
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
			margin-left: 20upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255,255,255,.5);
			}
			.action-btn{
				display:flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base ;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
	
</style>

