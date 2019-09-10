<template>
	<div :height="screenHeight">
		<!-- <van-swipe ref="my-swiper" :loop="false" :touchable="true" :vertical="true">
		  <van-swipe-item :key="index" v-for="(image, index) in images">
				<img class="load_image" :height="screenHeight" :width="screenWidth" v-lazy="image" />
			</van-swipe-item>
		</van-swipe> -->
		
		<md-swiper 
			ref="swiper"
			:default-index="0"
			:dragable="true"
			:autoplay="0"
			:is-prevent="true"
			transition="slideY">
			<md-swiper-item  :key="$index" v-for="(image, $index) in images">
				<img class="load_image" :height="screenHeight" :width="screenWidth" v-lazy="image" />
			</md-swiper-item>
		</md-swiper>
	</div>
</template>

<script>
import { Swiper, SwiperItem } from 'mand-mobile';
// import { Swipe, SwipeItem } from 'vant';

export default {
	data() {
		return {
			screenHeight: 100,
			screenWidth: 100,
			images: []
		};
	},
	computed: {
	},
	methods: {
		onResize(){
			this.screenHeight = window.innerHeight;
			this.screenWidth = window.innerWidth;
		},
		onGroupImages(){
			var _images = [];
			for (var i = 1; i < 13; i++) {
				var end = (i < 10 ? '0' + i.toString() : i.toString()) + '.jpg';
				_images.push(require('@/assets/images/company/company_' + end));
			}
			return _images;
		}
	},

	created() {
		// this.$refs.my-swiper.height = "200px";
		
		this.images = this.onGroupImages();
	},
	
	mounted() {
		//渲染的时候计算当前高度
		this.onResize();
		
	},
	
	updated() {
		// console.log("[resize]");
	},
	
	activated() {
		//监听Resize
		window.onresize = this.onResize;
		if (this.images.length == 0){
			this.images = this.onGroupImages();
		}
		//重新resize一次
		this.onResize();
	},
	deactivated() {
		//注销掉resize
		this.images = [];
		window.onresize = null;
	},
	
	components: {
		// [Swipe.name]: Swipe,
		// [SwipeItem.name]: SwipeItem,
		[Swiper.name]: Swiper,
		[SwiperItem.name]: SwiperItem,
	}
};
</script>

<style scoped="scoped">
</style>
