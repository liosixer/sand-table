<template>
	<van-tabbar v-model="active" style="z-index: 1999">
		<van-tabbar-item v-for="(tab, index) in tabbar" :icon="tab.icon" :to="tab.path" :dot="tab.dot" :info="tab.info" :key="index">
			{{tab.name}}
		</van-tabbar-item>
	</van-tabbar>
</template>


<script>
	import {
		Tabbar,
		TabbarItem
	} from 'vant';
	
	// import EventBus from '../../event-bus/index.js';
	// import { TABBAR_CHANGE } from '../../../events/events.js'
	
	export default {
		data() {
			return {
				active: 0,
				tabbar: [{
						name: '电子楼书',
						path: '/brochure',
						pathName: 'brochure',
						icon: 'building',
						dot: false,
						info: ''
					},
					{
						name: '全景鸟瞰',
						path: '/globe',
						pathName: 'globe',
						icon: 'globe',
						dot: false,
						info: ''
					},
					{
						name: '单体楼栋',
						path: '/block',
						pathName: 'block',
						icon: 'block',
						dot: false,
						info: ''
					},
					{
						name: '户型鉴赏',
						path: '/blueprint',
						pathName: 'blueprint',
						icon: 'blueprint',
						dot: false,
						info: ''
					},
					{
						name: '区位交通',
						path: '/position',
						pathName: 'position',
						icon: 'position-active',
						dot: false,
						info: ''
					}
				]
			};
		},

		watch: {
			$route: 'changeActive'
		},

		created() {
			const toName = this.$route.name;
			this.setActive(toName);
		},

		methods: {
			changeActive({
				name
			}) {
				this.setActive(name);
			},
			setActive(name) {
				
				this.tabbar.forEach((tab, i) => {
					if (tab.pathName == name) {
						this.active = i;
						//发送tabbarchange 事件
						return false;
					}
				});
			}
		},

		components: {
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem
		}
	};
</script>
