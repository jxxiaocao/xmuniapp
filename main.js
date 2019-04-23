import Vue from 'vue'
import store from './store'
import App from './App'
import Json from './Json' //测试用数据
import urlType_ from 'config/urlType'     //url链接
Vue.use(urlType_);//将全局函数当做插件来进行注册
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {msg, json};

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()