import Vue from 'vue';
import Router from 'vue-router';
// import {
// 	getLocalStorage
// } from '@/core/utils/local-storage';

// import home from './home';
// import items from './items';
// import user from './user';
// import order from './order';
// import login from './login';

import brochure from './brochure';
import globe from './globe';
import block from './block';
import blueprint from './blueprint';
import position from './position';

Vue.use(Router);

const RouterModel = new Router({
	// routes: [...home, ...items, ...user, ...order, ...login, ...brochure, ...globe, ...block, ...building, ...position]
	routes: [...brochure, ...globe, ...block, ...blueprint, ...position]
});

RouterModel.beforeEach((to, from, next) => {
	//当前无登录逻辑
	// const { Authorization, user_id } = getLocalStorage(
	//   'Authorization',
	//   'user_id'
	// );
	// if (!Authorization && !user_id) {
	//   if (to.meta.login) {
	//     next({ name: 'login', query: { redirect: to.name } });
	//     return;
	//   }
	// }
	next();
});

export default RouterModel;
