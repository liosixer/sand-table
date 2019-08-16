<template>
	<div>
		<van-row>
			<van-tabs v-model="active" animated swipeable @click="onClick" @change="onChange">
				<van-tab v-for="image in images" :key="image.url" :title="image.name">
					<van-image width="100%" height="20rem" lazy-load :src="image.url" @click="onImagePreview(image)" />
				</van-tab>
			</van-tabs>
		</van-row>
		
		
		
		<van-popup v-model="popupShow">
			<van-image width="24rem" height="20rem" fit="fill" :src="popup_url" />
		</van-popup>
	</div>
	
	
</template>

<script>
	import { Tab, Tabs, Image, Row, Col, Skeleton, Panel, Popup  } from 'vant';
	
	export default {
		data() {
			return {
				active: 0,
				images: [
					{url: require('@/assets/images/blueprint/blueprint_01.jpg'), name:"户型A"},
					{url: require('@/assets/images/blueprint/blueprint_02.jpg'), name:"户型B"},
					{url: require('@/assets/images/blueprint/blueprint_03.jpg'), name:"户型C"},
					{url: require('@/assets/images/blueprint/blueprint_04.jpg'), name:"户型D"},
					{url: require('@/assets/images/blueprint/blueprint_05.jpg'), name:"户型E"}
				],
				popupShow: false,
				popup_url: ""
			};
		},
		methods: {
			onClick(name, title) {
				this.$toast(title);
			},
			onChange(name, title){
				this.$toast(title);
			},
			onImagePreview(image){
				this.popupShow = true;
				this.popup_url = image.url;
			}
		},
		mounted() {
			// this.loading = false;
			console.log(blueprints);
		},
		components: {
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[Image.name]: Image,
			[Col.name]: Col,
			[Row.name]: Row,
			[Skeleton.name]: Skeleton,
			[Panel.name]: Panel,
			[Popup.name]: Popup
		}
	};
</script>

<style>
</style>
