<template>
	<van-tabs v-model="active" animated @click="onClick">
		<van-tab v-for="index in 5" :title="'选项 ' + index">内容 {{ index }}</van-tab>
	</van-tabs>
</template>

<script>
// import { Sidebar, SidebarItem } from 'vant';
import { Tab, Tabs } from 'vant';

export default {
	data() {
		return {
			active: 0
		};
	},
	methods: {
		onClick(name, title) {
			this.$toast(title);
		}
	},
	components: {
		[Tab.name]: Tab,
		[Tabs.name]: Tabs
	}
};
</script>

<style></style>
