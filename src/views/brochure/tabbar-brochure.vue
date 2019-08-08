<template>
	<van-swipe :autoplay="3000" vertical>
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
					'//59.110.166.21:15015/sand_table/company/company_01.jpg',
					'//59.110.166.21:15015/sand_table/company/company_02.jpg',
					'//59.110.166.21:15015/sand_table/company/company_03.jpg',
					'//59.110.166.21:15015/sand_table/company/company_04.jpg',
					'//59.110.166.21:15015/sand_table/company/company_05.jpg',
					'//59.110.166.21:15015/sand_table/company/company_06.jpg',
					'//59.110.166.21:15015/sand_table/company/company_07.jpg',
					'//59.110.166.21:15015/sand_table/company/company_08.jpg',
					'//59.110.166.21:15015/sand_table/company/company_09.jpg',
					'//59.110.166.21:15015/sand_table/company/company_10.jpg',
					'//59.110.166.21:15015/sand_table/company/company_11.jpg',
					'//59.110.166.21:15015/sand_table/company/company_12.jpg'
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
