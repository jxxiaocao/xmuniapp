<template>
	<view class="style-flex style-flex-wrap">
		<filter-radio-item v-for="(item, idx) in items" :key="idx"  :value="item.value" :price="item.price" :checked="item.checked" @change="radioChange"></filter-radio-item>
	</view>
</template>

<script>
	// import filterRadioItem from './axb-checkbox-item.vue'
	export default {
		props:{
			list:{
				type:Array,
				default: []
			},
			multi:{
				type:Boolean,
				default:false
			},
			goodsid:'',
			natureArr:'',
			maxchoose:'',
			
		},
		components:{
			// filterRadioItem
		},
		data() {
			return {
				items: this.list,
				maxchooses:this.maxchoose,
				resMulti: [],
			};
		},
		created(){
		},
		computed:{
		},
		methods:{
		}
	}
</script>

<style>
 .radio{display:inline-block;height:60upx;line-height:60upx;padding:0 22upx;background:#f7f7f7;border:1px solid #c3c3c3;border-radius:10upx;font-size:26upx;color:#7d7d7d;box-sizing:border-box;}.radio:not(:last-child){margin:0 20upx 30upx 0;}.radio-primay{background:#d5e4fd;color:#3c7ef6;border:1px solid #3c7ef6;}.radio-width-default{width:120upx;text-align:center;padding:0;background:#fff !important;}
</style>
