<template>
	<van-swipe :touchable="true" :loop="true" :vertical="true">
		<van-swipe-item v-for="(image, index) in images" :key="index">
			<img class="brochure_image" v-lazy="image" />
		</van-swipe-item>
	</van-swipe>
</template>

<script>
// require styles
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

export default {
	data() {
		return {
			images: []
		};
	},
	methods: {},

	created() {
		this.images = [];
		for (var i = 1; i < 13; i++) {
			var end = (i < 10 ? '0' + i.toString() : i.toString()) + '.jpg';
			this.images.push(require('@/assets/images/company/company_' + end));
		}
	},

	components: {
		[Swipe.name]: Swipe,
		[SwipeItem.name]: SwipeItem
	}
};
</script>

<style scoped="scoped">

.brochure_image {
	position:absolute;
	width: 100%;
	height: 100%;
}

.brochure_image[lazy=loading] {
/*your style here*/
	width: 2rem;
	height: 2rem;
	text-align: center;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.brochure_image[lazy=error] {
/*your style here*/
	width: auto;
	text-align: center;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.brochure_image[lazy=loaded] {
/*your style here*/
}
	
</style>

