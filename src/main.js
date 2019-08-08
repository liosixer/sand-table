import Vue from 'vue';
import App from './App.vue';
import router from './vue/router';
import './assets/scss/global.scss';
import '@/assets/scss/iconfont/iconfont.css';
import '@/assets/scss/iconfont/font.css';

import VeeValidate, {
	Validator
} from 'vee-validate';
import VueCountdown from '@/vue/plugins/vue-countdown';
import zhCN from 'vee-validate/dist/locale/zh_CN';

import axios from '@/vue/plugins/axios';
import filters from '@/vue/filter';
import EventBus from '@/vue/event-bus';
//添加String Format 全局函数
import StringFormat from '@/core/utils/string-format.js';
//添加vue-friendly-iframe组件
import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.use(VueCountdown);
Vue.use(axios);
Vue.use(filters);
Vue.use(EventBus);
Vue.component('vue-friendly-iframe', VueFriendlyIframe);

Validator.localize('zh-CN', zhCN);
Vue.use(VeeValidate, {
	locale: 'zh-CN'
});

import {
	Lazyload,
	Icon,
	Cell,
	CellGroup,
	loading,
	Button,
	Toast
} from 'vant';
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(loading);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Lazyload, {
	preLoad: 1.3,
	error: require('@/assets/images/goods_default.png'),
	loading: require('@/assets/images/is_empty.png'),
	attempt: 1,
	listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'],
	lazyComponent: true,
	adapter: {
		loaded({
			bindType,
			el,
			naturalHeight,
			naturalWidth,
			$parent,
			src,
			loading,
			error,
			Init
		}) {
			// LoadedHandler(el)
			console.log(naturalHeight, naturalWidth, src, loading);
		},
		loading(listender, Init) {
			console.log('loading');
		},
		error(listender, Init) {
			console.log('error')
		}
	}
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
