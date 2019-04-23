/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'xiaocao',
		portrait: '../../static/c8806d04a48c14b244d1cda04c551d1.jpg',
		level:'钻石会员'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
					src: "/static/temp/banner3.jpg",
					background: "rgb(203, 87, 60)",   
				},{
					src: "/static/temp/banner2.jpg",
					background: "rgb(205, 215, 218)",
				},{
					src: "/static/temp/banner4.jpg",
					background: "rgb(183, 73, 69)",
				}]
/* 购物车 */
const cartList = [{
	id: 1,
	image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553005139&di=3368549edf9eee769a9bcb3fbbed2504&imgtype=jpg&er=1&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F5F%2FDB%2FwKhQh1T7iceEGRdWAAAAADQvqk8733.jpg',
	attr_val: '春装款 L',
	stock: 15,
	title: 'OVBE 长袖风衣',
	price: 278.00,
	number: 1
}, {
	id: 3,
	image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
	attr_val: '激光导航 扫拖一体',
	stock: 3,
	title: '科沃斯 Ecovacs 扫地机器人',
	price: 1348.00,
	number: 5
}];
//详情展示页面
const detailData = {
					title: '纯种金毛幼犬活体有血统证书',
					title2: '拆家小能手 你值得拥有',
					favorite: true,
					imgList: [{
							src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
						},
						{
							src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
						},
						{
							src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
						},
						{
							src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
						},
					],
					episodeList: [
						1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
					],
					guessList: [{
							src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg',
							title: '猫眼指甲油',
							title2: '独树一帜的免照灯猫眼指甲'
						},
						{
							src: 'http://m.china-7.net/uploads/14778449362891.jpg',
							title: '创意屋',
							title2: '创意屋形上下双层高低床'
						}
					],
					evaList: [{
							src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
							nickname: 'Ranth Allngal',
							time: '09-20 12:54',
							zan: '54',
							content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。'
						},
						{
							src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
							nickname: 'Ranth Allngal',
							time: '09-20 12:54',
							zan: '54',
							content: '楼上说的好有道理。'
						}
					]
				}
const shareList= [{
					type: 1,
					icon: '/static/temp/share_wechat.png',
					text: '微信好友'
				},{
					type: 2,
					icon: '/static/temp/share_moment.png',
					text: '朋友圈'
				},{
					type: 3,
					icon: '/static/temp/share_qq.png',
					text: 'QQ好友'
				},{
					type: 4,
					icon: '/static/temp/share_qqzone.png',
					text: 'QQ空间'
				}]
const lazyLoadList =  [
					{src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'},
					{src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'},
					{src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'},
					{src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'},
					{src: 'http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg'},
					{src: 'http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg'},
					{src: 'http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg'},
					{src: 'http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg'},
					{src: 'http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg'},
					{src: 'http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg'},
					{src: 'http://pic1.win4000.com/wallpaper/d/5991569950166.jpg'},
					{src: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg'},
					{src: 'http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg'},
					{src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg'},
					{src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg'},
					{src: 'http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg'},
					{src: 'http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg'},
					{src: 'http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg'},
					{src: 'http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg'},
					{src: 'http://pic1.win4000.com/mobile/3/57888a298d61d.jpg'},
				]

export default {
	carouselList,
	cartList,
	detailData,
	lazyLoadList,
	userInfo,
	shareList
}
