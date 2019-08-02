<template>
	<van-swipe :autoplay="3000" vertical >
		<van-swipe-item v-for="(image, index) in images" :key="index" >
			<img v-lazy="image" width="100%" height="100%" />
		</van-swipe-item>
	</van-swipe>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'vant';

	export default {
		data() {
			return {
				images: [
					'//mamaqunaer.oss-cn-shanghai.aliyuncs.com/android/201711/ff9e85124638b593212148aad47c893b.JPEG',
					'//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
					'//localhost:8080/assets/images/qc_code.png'
				]
			}
		},
		methods: {

		},

		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem
		}
	}
</script>

<style>
</style>
