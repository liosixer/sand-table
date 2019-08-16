<template>
	<van-tabs v-model="active" animated @click="onClick">
		<van-tab v-for="image in images" :title="image.name">
			<!-- <van-image width="100%" height="40%" lazy-load :src="image.url" /> -->
			<van-image width="100%" lazy-load :src="image.url" />
			<!-- <img v-lazy="image.url" width="100%" height="40%" /> -->
		</van-tab>
	</van-tabs>
</template>

<script>
import { Tab, Tabs, Image } from 'vant';

export default {
	data() {
		return {
			active: 0,
			images: [
				{ url: '//59.110.166.21:15015/sand_table/block/block_01.jpg', name: '户型A' },
				{ url: '//59.110.166.21:15015/sand_table/block/block_02.jpg', name: '户型B' },
				{ url: '//59.110.166.21:15015/sand_table/block/block_03.jpg', name: '户型B' },
				{ url: '//59.110.166.21:15015/sand_table/block/block_04.jpg', name: '户型C' },
				{ url: '//59.110.166.21:15015/sand_table/block/block_05.jpg', name: '户型D' }
			]
		};
	},
	methods: {
		onClick(name, title) {
			this.$toast(title);
		}
	},
	components: {
		[Tab.name]: Tab,
		[Tabs.name]: Tabs,
		[Image.name]: Image
	}
};
</script>

<style></style>
