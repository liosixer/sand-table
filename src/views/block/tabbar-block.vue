<template>
	<!-- <van-tabs v-model="active" animated @click="onClick">
		<van-tab v-for="image in images" :title="image.name"> -->
			<!-- <van-image width="100%" height="40%" lazy-load :src="image.url" /> -->
			<!-- <van-image width="100%" lazy-load :src="image.url" /> -->
			<!-- <img v-lazy="image.url" width="100%" height="40%" /> -->
		<!-- </van-tab>
	</van-tabs> -->
	
	<vue-friendly-iframe :src="iframe_url"></vue-friendly-iframe>
</template>

<script>
// import { Tab, Tabs, Image } from 'vant';

export default {
	data() {
		return {
			iframe_url: '',
			theTimeId: 0,
			// images: [
			// 	{ url: '//59.110.166.21:15015/sand_table/block/block_01.jpg', name: '户型A' },
			// 	{ url: '//59.110.166.21:15015/sand_table/block/block_02.jpg', name: '户型B' },
			// 	{ url: '//59.110.166.21:15015/sand_table/block/block_03.jpg', name: '户型B' },
			// 	{ url: '//59.110.166.21:15015/sand_table/block/block_04.jpg', name: '户型C' },
			// 	{ url: '//59.110.166.21:15015/sand_table/block/block_05.jpg', name: '户型D' }
			// ]
		};
	},
	// methods: {
	// 	onClick(name, title) {
	// 		this.$toast(title);
	// 	}
	// },
	// components: {
	// 	[Tab.name]: Tab,
	// 	[Tabs.name]: Tabs,
	// 	[Image.name]: Image
	// }
	mounted() {
		this.iframe_url = 'http://dddonline.cn/QviaUf';
	},
	activated() {
		//重新载入当前页面
		this.iframe_url = '';
		this._isShow = false;
		setTimeout(() => {
			this.iframe_url = 'http://dddonline.cn/QviaUf';
			this.onCheckIFrame(this.$el.firstChild, this.resizeFrame);
		}, 0);
	},
	methods: {
		onCheckIFrame(frame, callback) {
			this.theTimeId = setInterval(
				(function() {
					return function() {
						if (frame != null) {
							callback();
						}
					};
				})(frame, callback),
				500
			);
		},
		resizeFrame() {
			this.$el.firstChild.width = '100%';
			this.$el.firstChild.height = '100%';
			clearInterval(this.theTimeId);
		}
	}
};
</script>

<style></style>
