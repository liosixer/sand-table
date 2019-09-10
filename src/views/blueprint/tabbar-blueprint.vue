<template>
	<v-touch 
	v-on:swiperight="onSwipeRight" 
	>
		<van-row>
			<van-tabs v-model="active" animated swipeable @click="onClick" @change="onChange">
				<van-tab v-for="image in images" :key="image.url" :title="image.name">
					<van-image class="load_image" lazy-load :src="image.url" @click="onImagePreview(image)" />
				</van-tab>
			</van-tabs>
		</van-row>
		
		<van-popup v-model="popupShow">
			<van-image width="24rem" height="20rem" fit="fill" :src="popup_url" />
		</van-popup>
		  </div>
	</v-touch>
	
	
</template>

<script>
	import { Tab, Tabs, Image, Row, Col, Skeleton, Panel, Popup  } from 'vant';
	
	// import {Tabs, TabPane, ScrollView} from 'mand-mobile';
	
	export default {
		data() {
			return {
				active: 0,
				popupShow: false,
				popup_url: ""
			};
		},
		computed:{
			images(){
				var _images = [];
				for (var i = 1; i < 5; i++) {
					var end = (i < 10 ? '0' + i.toString() : i.toString()) + '.jpg';
					var _name = "户型:" + i;
					_images.push({url:require('@/assets/images/blueprint/blueprint_' + end), name:_name});
				}
				return _images;
			}
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
			},
			onSwipeRight(e){
				//阻止页面左滑跳转
			}
		},
		mounted() {
			// console.log(images());
			// this.loading = false;
			// console.log(blueprints);
		},
		components: {
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[Image.name]: Image,
			[Col.name]: Col,
			[Row.name]: Row,
			[Skeleton.name]: Skeleton,
			[Panel.name]: Panel,
			[Popup.name]: Popup,
		}
	};
</script>

<style scoped="scoped">


</style>
