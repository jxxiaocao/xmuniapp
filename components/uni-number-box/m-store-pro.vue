<template>
	<!-- 门店商品图文 -->
	<view class="m-store-item">
		<view class="m-img">
			<image style="width: 100%;height: 100%;" :src="rowData.img" mode="aspectFit"></image>
		</view>
		<view class="m-text">
			<view class="m-title">
				{{rowData.name}}
			</view>
			<view class="m-descripe">
				{{rowData.descripe}}
			</view>
			<view>
				<view class="m-price">
					{{rowData.price}}
				</view>
				<view class="m-distance numInput">
					<view v-if="rowData.is_nature != 1">
						<text class="reduce iconfont" v-if="rowData.goods_num" @tap="touchOnGoods($event,rowData,-1)" :class="rowData.goods_num == 0 ? 'numbox-disabled' : ''">-</text>
						<input type="number" v-if="rowData.goods_num" v-model="rowData.goods_num" :id="rowData.cart_id" @input="inputCarCount" />
						<text class="plus iconfont" @tap="touchOnGoods($event,rowData,1)">+</text>
					</view>
					<view v-else >
						<text class="plus iconfont" @tap="touchOnGoods($event,rowData,2)">+</text>
						<!-- <span class="plusnature" @tap="showBanner(ite,1,ite.cart_id)">选规格</span> -->
					</view>
					<!-- <image @tap="touchOnGoods($event,rowData)" style="width:40upx;height: 40upx;" src="../../static/img/icon/shop_icon_buy.png" mode="aspectFit"></image> -->
				</view>
				
			</view>
			<view class="m-old-price">
				非会员价
				<view class="m-num">
					{{rowData.oldprice}}
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"m-store-pro",
		props:{
			rowData:{
				type:Object,
				rowData:{}
			}
		},
		methods:{
		 touchOnGoods(e,data,type){
			 this.$emit("touchOnGoods",{
				 element:e,
				 data:data,
				 type:type
			 })
		 }
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.reduce{
		color: #f92e2e;
		background-color: #fff;
		border: 1px solid red;
	}
	.plus{
		color: #fff;
		background-color: #f92e2e;
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
			width: 30upx;
			float: left;
			text-align: center;
			color: #999;
		}
		
		.numbox-disabled {
			color: #c0c0c0;
		}
	}
.m-store-item{
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: flex-end;
	margin-top: 30upx;
	margin-bottom: 30upx;
	.m-img{
		flex: 0 0 150upx;
		height: 170upx;
		background: #eee;
	}
	.m-text{
		flex:1;
		padding: 0 20upx;
		.m-title{
			font-size: 32upx;
			color:#4c4c4c;
		}
		.m-descripe{
			font-size: 24upx;
			color:#999999;
			margin-top: 10upx;
		}
		.m-price{
			font-size: 28upx;
			color:#ff582b;
			font-weight: bold;
			margin-top: 5upx;
			width: 50%;
            float: left;
		}
		.m-old-price{
			display: flex;
			flex-direction: row;
			font-size: 18upx;
			color:#999999;
			margin-top: 5upx;
			width: 100%;
			.m-num{
				// font-size:  20upx;
			}
		}
	}
	.m-distance{
		flex: 0 1 80upx;
		color:#b2b2b2;
		font-size: 20upx;
		text-align: right
	}
}
</style>
