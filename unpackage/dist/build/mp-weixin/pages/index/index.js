(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0709":function(t,e,i){"use strict";var o=i("6cd5"),s=i.n(o);s.a},"1f07":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticClass:"scroll-x",attrs:{"scroll-x":"true"}},[i("view",{staticClass:"item-wrapper"},t._l(t.goodslist,function(e,o){return i("view",{key:o,staticClass:"item",attrs:{eventid:"32a5af7d-0-"+o},on:{click:function(i){t.detail(e)}}},[i("view",{staticClass:"icon"},[i("img",{staticClass:"img",attrs:{"lazy-load":"",src:e.goods_pic,alt:e.goods_short_title}})]),i("view",{staticClass:"tip"},[i("view",{staticClass:"fl"},[t._v(t._s(e.goods_sales)+"人已领")]),i("view",{staticClass:"fr"},[t._v(t._s(e.coupon_price)+"元券")])]),i("view",{staticClass:"desc"},[i("view",{staticClass:"title"},[t._v(t._s(e.goods_short_title))]),i("view",{staticClass:"row-price"},[i("view",{staticClass:"goods-price"},[t._v("原价 "+t._s(e.goods_price))]),i("view",{staticClass:"quanhou"},[t._v("券后 "+t._s(e.quanhou_price)+"元")])])])])}))])},s=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s})},"229a":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"someone-buy",class:t.showAndHide},[i("img",{staticClass:"avator",attrs:{src:t.src,alt:""}}),i("text",{staticClass:"username"},[t._v(t._s(t.data[t.index].virtualUser.userName))]),i("text",{staticClass:"content"},[t._v(t._s(t.data[t.index].description))])])},s=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s})},"2f59":function(t,e,i){"use strict";i.r(e);var o=i("bd8f"),s=i("6d78");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("9a31");var a=i("2877"),c=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,"0fcc46b4",null);e["default"]=c.exports},"364e":function(t,e,i){"use strict";var o=i("5b75"),s=i.n(o);s.a},3757:function(t,e,i){"use strict";i.r(e);var o=i("6f7a"),s=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);e["default"]=s.a},"3ea4":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page-body"},[i("back-top",{attrs:{mpcomid:"18c515e4-0"}}),i("view",{staticClass:"someone-buy"},[i("someone-buy",{attrs:{type:1,mpcomid:"18c515e4-1"}})],1),i("view",{staticClass:"carousel-section"},[i("view",{staticClass:"titleNview-placing"}),i("view",{staticClass:"titleNview-background",style:{backgroundColor:t.titleNViewBackground}}),i("swiper",{staticClass:"carousel",attrs:{circular:"",eventid:"18c515e4-1"},on:{change:t.swiperChange}},t._l(t.carouselList,function(e,o){return i("swiper-item",{key:o,staticClass:"carousel-item",attrs:{eventid:"18c515e4-0-"+o,mpcomid:"18c515e4-2-"+o},on:{click:function(i){t.navToDetailPage(e.id)}}},[i("image",{attrs:{src:e.src}})])})),i("view",{staticClass:"swiper-dots"},[i("text",{staticClass:"num"},[t._v(t._s(t.swiperCurrent+1))]),i("text",{staticClass:"sign"},[t._v("/")]),i("text",{staticClass:"num"},[t._v(t._s(t.swiperLength))])])],1),t._m(0),i("view",{staticClass:"banner"},[i("view",{staticClass:"left",attrs:{eventid:"18c515e4-2"},on:{click:function(e){t.channel("淘抢购")}}},[i("img",{attrs:{src:"http://img.kiwifruits.cn/index/taoqianggou.jpg",mode:"widthFix"}})]),i("view",{staticClass:"right"},[i("view",{staticClass:"top",attrs:{eventid:"18c515e4-3"},on:{click:function(e){t.channel("聚划算")}}},[i("img",{attrs:{src:"http://img.kiwifruits.cn/index/juhuasuan.jpg",mode:"widthFix"}})]),i("view",{staticClass:"bottom"},[i("view",{staticClass:"bottom-left",attrs:{eventid:"18c515e4-4"},on:{click:function(e){t.channel("每日上新")}}},[i("img",{attrs:{src:"http://img.kiwifruits.cn/index/newgoods.jpg",mode:"widthFix"}})]),i("view",{staticClass:"bottom-right",attrs:{eventid:"18c515e4-5"},on:{click:function(e){t.channel("9快9包邮")}}},[i("img",{attrs:{src:"http://img.kiwifruits.cn/index/9kuai9.jpg",mode:"widthFix"}})])])])]),i("view",{staticClass:"scroll-wrapper"},[t._m(1),i("scroll-view-x",{attrs:{goodslist:t.deserveList,mpcomid:"18c515e4-3"}})],1),t._m(2),i("goods-list",{attrs:{goodslist:t.goodslist,mpcomid:"18c515e4-4"}})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"marquee-box"},[i("view",{staticClass:"marquee-title"},[t._v("独家快报")]),i("view",{staticClass:"marquee"},[t._v("欢迎来到【独家折扣】,这里每天汇总最新购物优惠券,实时更新优惠券信息,让您享受白菜价网购的快感,先领优惠券再下单享受折上折,各种大额优惠券让您领到手软,更有购物反独家币活动与代理分销活动呦！")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"title"},[i("view",{staticClass:"h1-title"},[t._v("大家都在领")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"title"},[i("view",{staticClass:"h1-title"},[t._v("每日精选")]),i("text",{staticClass:"fr"},[t._v("每15分钟更新")])])}];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s})},"427e":function(t,e,i){"use strict";var o=i("63f4"),s=i.n(o);s.a},"42c3":function(t,e,i){},"4a11":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"someone-buy",props:{datalist:{type:Array},type:{type:Number}},data:function(){return{showAndHide:"",src:"",time:null,index:0,data:[{virtualUser:{userName:"So***1",md5:"08c284e9da33c8e1d15b5d612191d803419423116"},description:"刚刚获得1.16元返利！"},{virtualUser:{userName:"栗****妮",md5:"08bd64864f8a032491d02919b98c8af9e6a438030"},description:"刚刚获得2.46元返利！"},{virtualUser:{userName:"恋****梦",md5:"02dc54425120c4f6302fbab9a710a987007367b2f"},description:"刚刚获得3.64元返利！"},{virtualUser:{userName:"小****宝",md5:"07206404a647a634ca384b43c6b4d4086d9413215"},description:"刚刚获得2.33元返利！"},{virtualUser:{userName:"秋凉***求",md5:"0954df54c1baa4814199e0640dcac9dcd7b6a348b"},description:"刚刚获得1.31元返利！"},{virtualUser:{userName:"青与***欣",md5:"0ddc5452512bc4f6202fbcb9a750a989007347b2f"},description:"刚刚获得4.83元返利！"},{virtualUser:{userName:"我身***佛",md5:"07206404a247a634cd384543c9b4d2086b9413215"},description:"刚刚获得2.20元返利！"},{virtualUser:{userName:"命运***律",md5:"0f206544a94ea434d1384543c2e4d10a607c4b837"},description:"刚刚获得2.84元返利！"},{virtualUser:{userName:"老李***田",md5:"07206404a247ac34c6384243c0b4df08679413215"},description:"刚刚获得2.35元返利！"},{virtualUser:{userName:"茉****莉",md5:"06c28649d93dc4e1f25b50612171d10d4e3df9338"},description:"刚刚获得2.11元返利！"},{virtualUser:{userName:"韶m***c",md5:"0cc28659d93cc4e1825b536121d1d1004e3dc9338"},description:"刚刚获得3.17元返利！"},{virtualUser:{userName:"li***1",md5:"0bc28659d933c4e1725b586121c1d1074e3d29338"},description:"刚刚获得6.89元返利！"},{virtualUser:{userName:"王再***姣",md5:"04c28649d93ac4e1625b5a612141d1044e3d19338"},description:"刚刚获得3.90元返利！"},{virtualUser:{userName:"发威***猫",md5:"0286f4db9c0fb16d6b5ae9d45acab5f28cb40a79b"},description:"刚刚获得4.38元返利！"},{virtualUser:{userName:"汉口***雀",md5:"07206404a447ac34cc384f43c8b4dd08689413215"},description:"刚刚获得5.59元返利！"},{virtualUser:{userName:"小鲁***-",md5:"0b206544a947a434a1384443c234d107607c7b837"},description:"刚刚获得0.56元返利！"},{virtualUser:{userName:"星星***✨",md5:"02c28659d935c4e1d25b51612161d1014e3d89338"},description:"刚刚获得2.72元返利！"},{virtualUser:{userName:"囿于***歌",md5:"08c285e9dc33c6e1d15b5a612791d103469423116"},description:"刚刚获得2.41元返利！"},{virtualUser:{userName:"lo***花",md5:"08c28649d939c4e1825b546121b1d10d4e3de9338"},description:"刚刚获得4.99元返利！"},{virtualUser:{userName:"不识***端",md5:"0cc28659d933c4e1d25b50612181d1004e3d49338"},description:"刚刚获得7.98元返利！"}]}},components:{},onShow:function(){this.int()},onUnload:function(){clearTimeout(this.time)},onHide:function(){clearTimeout(this.time)},methods:{int:function(){var t=this,e=(t.data,t.data.length);t.src="https://ts.market.mi-img.com/thumbnail/webp/w66q80/FoundApp/"+t.data[0].virtualUser.md5,setTimeout(function(){t.showAndHide="show"},4e3),t.time=setInterval(function(){t.showAndHide="",t.index<e-1?t.index++:t.index=0,t.src="https://ts.market.mi-img.com/thumbnail/webp/w66q80/FoundApp/"+t.data[t.index].virtualUser.md5,setTimeout(function(){t.showAndHide="show"},4e3)},1e4)}}};e.default=o},5898:function(t,e,i){"use strict";var o=i("971c"),s=i.n(o);s.a},"5b5c":function(t,e,i){"use strict";i.r(e);var o=i("3ea4"),s=i("8380");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("5898"),i("364e");var a=i("2877"),c=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,"39b3703c",null);e["default"]=c.exports},"5b75":function(t,e,i){},"63f4":function(t,e,i){},6826:function(t,e,i){"use strict";i.r(e);var o=i("e5f8"),s=i("3757");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("9857");var a=i("2877"),c=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,"920a3fb0",null);e["default"]=c.exports},"6cd5":function(t,e,i){},"6d78":function(t,e,i){"use strict";i.r(e);var o=i("ee53"),s=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);e["default"]=s.a},"6f7a":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"back-top",props:{},data:function(){return{show:!1}},components:{},onPageScroll:function(t){var e=this;this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){t.scrollTop>900?e.show=!0:e.show=!1,e.timeoutId=void 0},10)},methods:{backTop:function(){t.pageScrollTo({scrollTop:0,duration:400})}}};e.default=i}).call(this,i("543d")["default"])},7626:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(i("a34a")),s=u(i("2f59")),n=u(i("fed1")),a=u(i("ebae")),c=u(i("6826")),r=u(i("89df"));function u(t){return t&&t.__esModule?t:{default:t}}function d(t,e,i,o,s,n,a){try{var c=t[n](a),r=c.value}catch(u){return void i(u)}c.done?e(r):Promise.resolve(r).then(o,s)}function l(t){return function(){var e=this,i=arguments;return new Promise(function(o,s){var n=t.apply(e,i);function a(t){d(n,o,s,a,c,"next",t)}function c(t){d(n,o,s,a,c,"throw",t)}a(void 0)})}}var f={data:function(){return{goodslist:[],showLoadMore:!1,fetchPageNum:0,inviteCodeMask:!1,userinfo:null,banner:[],deserveList:[],titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[]}},onShow:function(){},onLoad:function(){this.goodslist=r.default,this.deserveList=r.default.slice(0,12),this.loadData()},onReachBottom:function(){this.showLoadMore=!0,this.loadMoreText="没有更多数据了!"},onPullDownRefresh:function(){},computed:{},methods:{channel:function(e){t.showToast({title:e,icon:"none"})},loadData:function(){var t=l(o.default.mark(function t(){var e;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("carouselList");case 2:e=t.sent,this.titleNViewBackground=e[0].background,this.swiperLength=e.length,this.carouselList=e;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),swiperChange:function(t){var e=t.detail.current;this.swiperCurrent=e,this.titleNViewBackground=this.carouselList[e].background}},components:{goodsList:s.default,someoneBuy:a.default,scrollViewX:n.default,backTop:c.default}};e.default=f}).call(this,i("543d")["default"])},8380:function(t,e,i){"use strict";i.r(e);var o=i("7626"),s=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);e["default"]=s.a},"89df":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=[{goods_id:"569586329411",goods_pic:"https://gd1.alicdn.com/imgextra/i2/1779225003/TB2BlZSEgaTBuNjSszfXXXgfpXa_!!1779225003.jpg",goods_title:"家用中号垃圾袋 100只手提式背心袋 厨房客厅 加厚手提式背心袋",goods_short_title:"断点式家用加厚手提式垃圾袋",goods_cat:"4",goods_price:"14.90",goods_sales:"207237",goods_introduce:"加厚加大垃圾袋！高强度，可承重20斤，质地厚实，抗拉伸，超强韧性，材质环保安全，绚烂色彩，居家必方便手提，手提设计，压纹工艺，承受力大，结实耐用，已扎口不脏手，美妙生活！",is_tmall:"0",commission:"30.00",commission_type:2,commission_link:"",coupon_is_check:"1",coupon_type:"1",seller_id:"1779225003",coupon_id:"a8a4e27e8e864caca09beda02df763c8",coupon_price:"5.00",coupon_number:"20000",coupon_limit:"-1",coupon_over:"0",coupon_condition:"10.00",coupon_start_time:"2019-03-21 00:00:00",coupon_end_time:"2019-03-28 23:59:59",is_ali:1},{goods_id:"565118362191",goods_pic:"https://gd1.alicdn.com/imgextra/i1/277627577/TB2AzZxcwmTBuNjy1XbXXaMrVXa_!!277627577.jpg",goods_title:"拖鞋女夏天家用室内浴室拖鞋防滑洗澡软厚底居家男夏季家居凉拖鞋",goods_short_title:"拖鞋女夏天家用室内浴室拖鞋防滑洗澡软厚底居家男夏季家居凉拖鞋",goods_cat:"4",goods_price:"4.56",goods_sales:"248579",goods_introduce:"累计好评100万+拖鞋，品质值得信赖！超多款式可选，价格低到要尖叫，此时不买更待何时，居家浴室必备~~好看，耐穿，实用，便宜，居家必备，还有不买的理由？果断换号多撸几双！",is_tmall:"0",commission:"20.00",commission_type:2,commission_link:"",coupon_is_check:"1",coupon_type:"1",seller_id:"277627577",coupon_id:"6fa121b0547841f0ad5770041a597b0e",coupon_price:"1.00",coupon_number:"43500",coupon_limit:"-1",coupon_over:"6500",coupon_condition:"4.00",coupon_start_time:"2019-03-21 00:00:00",coupon_end_time:"2019-03-21 23:59:59",is_ali:1},{goods_id:"557124835119",goods_pic:"https://gd1.alicdn.com/imgextra/i1/2128718226/O1CN01r9tlk42AdYWCE9iiI_!!2128718226.jpg",goods_title:"清洁成人牙刷 家庭装 竹炭牙刷通用成人软毛牙刷包邮gmcGG1uWZU",goods_short_title:"成人软毛竹炭牙刷超细抑菌",goods_cat:"4",goods_price:"14.80",goods_sales:"180708",goods_introduce:"【全网低价，多套餐可选】可选10支牙刷+杯子套餐，柔软刷毛绿色健康，多效护理细致特护，天天让口腔做SPA，关爱您每一颗牙齿，特惠家庭装，速度入手！",is_tmall:"0",commission:"30.00",commission_type:2,commission_link:"",coupon_is_check:"1",coupon_type:"1",seller_id:"1779225003",coupon_id:"b9b3aea62c394b21b42b14d39c1f637b",coupon_price:"5.00",coupon_number:"20000",coupon_limit:"-1",coupon_over:"0",coupon_condition:"10.00",coupon_start_time:"2019-03-21 00:00:00",coupon_end_time:"2019-03-28 23:59:59",is_ali:1},{goods_id:"44194271189",goods_pic:"//img.alicdn.com/imgextra/i2/2018565099/O1CN01Q8qelt1nXO2hgJVKN_!!2018565099.png",goods_title:"2019新款春夏季男士浴室洗澡防滑拖鞋家居室内厚底情侣女士凉拖鞋",goods_short_title:"2019新款春夏季男士浴室洗澡防滑拖鞋家居室内厚底情侣女士凉拖鞋",goods_cat:"4",goods_price:"16.90",goods_sales:"45732",goods_introduce:"2件只需要13.9元！超值！采用环保PVC材料，按摩足部，气垫设计，加厚鞋底，舒适缓解足部！柔软舒适，防滑耐磨！居家必备！",is_tmall:"1",commission:"20.00",commission_type:2,commission_link:"",coupon_is_check:"1",coupon_type:"1",seller_id:"2417878172",coupon_id:"f5c8f50b5eab4f929aca8b4191392cb9",coupon_price:"3.00",coupon_number:"93000",coupon_limit:"-1",coupon_over:"7000",coupon_condition:"15.00",coupon_start_time:"2019-03-21 00:00:00",coupon_end_time:"2019-03-23 23:59:59",is_ali:1},{goods_id:"587329028235",goods_pic:"//img.alicdn.com/imgextra/i2/2770147476/O1CN01PEWwLq2563Um14IFl_!!2770147476.jpg",goods_title:"广告扇定制卡通扇子宣传扇定做1000把小扇子订制团扇大胶扇二维码",goods_short_title:"广告扇定制卡通扇子宣传扇",goods_cat:"7",goods_price:"3.30",goods_sales:"6202",goods_introduce:"精品唯美卡通扇1把+不锈钢大剪刀绝对值哭的价格，炎热的夏季马上来临，必备神器扇还送6寸不锈钢大剪刀一个，长度16厘米！超好的质量，超市至少4块一把！还包邮！评价不要提及剪刀哦！",is_tmall:"1",commission:"60.00",commission_type:2,commission_link:"",coupon_is_check:"1",coupon_type:"1",seller_id:"3020068136",coupon_id:"d0b413fd722a4f30ba7ddb88c45286c1",coupon_price:"2.00",coupon_number:"48500",coupon_limit:"-1",coupon_over:"1500",coupon_condition:"3.00",coupon_start_time:"2019-03-21 00:00:00",coupon_end_time:"2019-03-22 23:59:59",is_ali:1}];e.default=o},"8d22":function(t,e,i){"use strict";i("3661");var o=n(i("b0ce")),s=n(i("5b5c"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(s.default))},"971c":function(t,e,i){},9857:function(t,e,i){"use strict";var o=i("e876"),s=i.n(o);s.a},"9a31":function(t,e,i){"use strict";var o=i("42c3"),s=i.n(o);s.a},b378:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"scroll-view-x",props:{goodslist:{type:Array}},data:function(){return{}},onLoad:function(){},components:{},methods:{detail:function(e){t.showToast({title:"进入详情页",duration:2e3})}}};e.default=i}).call(this,i("543d")["default"])},bd8f:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"goods-list"},[t._l(t.goodslist,function(e,o){return i("view",{key:o,staticClass:"goods-item",attrs:{eventid:"69ca32b0-0-"+o},on:{click:function(i){t.detail(e)}}},[i("view",{staticClass:"goods-item-wrapper"},[i("view",{staticClass:"icon"},[i("img",{staticClass:"img",attrs:{"lazy-load":"",src:e.goods_pic,alt:e.goods_short_title}})]),i("view",{staticClass:"desc"},[i("view",{staticClass:"title"},[t._v(t._s(e.goods_short_title))]),i("view",{staticClass:"row-price"},[i("view",{staticClass:"goods-price"},[t._v("原价 "+t._s(e.goods_price))]),i("view",{staticClass:"goods-sales"},[t._v("已售 "+t._s(e.goods_sales))])]),i("view",{staticClass:"row-coupon"},[i("view",{staticClass:"quanhou"},[t._v("券后 "+t._s(e.quanhou_price)+"元")]),i("view",{staticClass:"coupon-price"},[i("view",{staticClass:"coupon-price-left"},[t._v(t._s(e.coupon_price))]),i("view",{staticClass:"coupon-price-right"},[t._v("元券")])])])])])])}),t.showLoadMore?i("view",{staticClass:"uni-loadmore"},[t._v(t._s(t.loadMoreText))]):t._e()],2)},s=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s})},d563:function(t,e,i){"use strict";i.r(e);var o=i("4a11"),s=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);e["default"]=s.a},dcb0:function(t,e,i){"use strict";i.r(e);var o=i("b378"),s=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);e["default"]=s.a},e5f8:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"back-top",class:t.show?"show":"",attrs:{eventid:"a30253bc-0"},on:{click:t.backTop}},[t._m(0)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"back-bg"},[i("view",{staticClass:"iconfont icon-shang"})])}];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s})},e876:function(t,e,i){},ebae:function(t,e,i){"use strict";i.r(e);var o=i("229a"),s=i("d563");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("427e");var a=i("2877"),c=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,"41ee7f64",null);e["default"]=c.exports},ee53:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"goods-list",props:{goodslist:{type:Array}},data:function(){return{title:"下拉刷新 + 加载更多",loadMoreText:"加载中...",showLoadMore:!1}},components:{},methods:{detail:function(e){console.log(e),t.navigateTo({url:this.getUrlType("PAGES_DETAIL")+"?goodId="+e.goods_id}),t.showToast({title:"进入详情页",duration:2e3})}}};e.default=i}).call(this,i("543d")["default"])},fed1:function(t,e,i){"use strict";i.r(e);var o=i("1f07"),s=i("dcb0");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("0709");var a=i("2877"),c=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,"fc1ecbde",null);e["default"]=c.exports}},[["8d22","common/runtime","common/vendor"]]]);