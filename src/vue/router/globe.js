const Navbar = () =>
	import(/* webpackChunkName: "Navbar" */'@/vue/components/Navbar/');

const Tabbar = () =>
	import( /* webpackChunkName: "Tabbar" */ '@/vue/components/Tabbar/');
import asyncLoader from 'core/async-loader';

export default [{
		path: '/globe',
		name: 'globe',
		components: {
			default: asyncLoader('globe/tabbar-globe'),
			tabbar: Tabbar,
			navbar: Navbar
		},
		meta: {
			//创建后， 保留当前页面
			keepAlive: true
		}
	}
	// ,{
	// 	path: '*',
	// 	redirect: {
	// 		name: 'globe'
	// 	}
	// }
];
