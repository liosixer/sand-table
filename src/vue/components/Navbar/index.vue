<template>
	<van-nav-bar :title="title" :fixed="fixed" style="z-index: 1999" />
</template>

<script>
	import { NavBar } from 'vant';
	import EventBus from "../../event-bus/index.js";
	import {TABBAR_CHANGE} from "../../../events/events.js"
	
	export default {
		data() {
			return{
				title: "微沙盘",
				fixed: true
			};
		},
		methods: {
			
		},
		
		/* 创建 */
		created: function() {
			//监听TABBAR_CHANGE 事件
			this.$bus.item_list.push(TABBAR_CHANGE);
			
			this.$bus.$on(TABBAR_CHANGE, (args)=>{
				console.log("当前索引值", args);                                
				this.title = args[0];
			})
		},
		
		components: {
			[NavBar.name]: NavBar
		}
	}
</script>

<style>
</style>
