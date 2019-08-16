<template>
	<div>
		
		<div v-lazy-container="{ selector: 'img'}" >
		  <img class="position_image" style="z-index: 0;" :data-src="bg" onclick="return false" />
		  <img class="position_image" v-show="road.flag" :data-src="road.url" onclick="return false" />
		  <img class="position_image" v-show="plazza.flag" :data-src="plazza.url" onclick="return false" />
		  <img class="position_image" v-show="school.flag" :data-src="school.url" onclick="return false" />
		  <img class="position_image" v-show="train.flag" :data-src="train.url" onclick="return false" />
		  <img class="position_image" v-show="metro.flag" :data-src="metro.url" onclick="return false" />
		  <img class="position_image" v-show="commerce.flag" :data-src="commerce.url" onclick="return false" />
		</div>
		<div style="position: absolute; bottom: 3.4rem; width: 100%;">
			<van-dropdown-menu direction="up">
				<van-dropdown-item title="区位周边" ref="item">
					<van-switch-cell v-model="road.flag" :title="road.title" />
					<van-switch-cell v-model="plazza.flag" :title="plazza.title" />
					<van-switch-cell v-model="school.flag" :title="school.title" />
					<van-switch-cell v-model="train.flag" :title="train.title" />
					<van-switch-cell v-model="metro.flag" :title="metro.title" />
					<van-switch-cell v-model="commerce.flag" :title="commerce.title" />
				</van-dropdown-item>
			</van-dropdown-menu>
		</div>
	</div>
</template>

<script>
// import { Popup } from 'vant';
import { DropdownMenu, DropdownItem, Row, Col, SwitchCell, Image } from 'vant';

export default {
	data() {
		return {
			value: 0,
			bg: require('@/assets/images/position/position_bg.png'),
			road: {flag: false, title: '道路', url: require('@/assets/images/position/position_road.png')},
			plazza: {flag: false, title: '广场', url: require('@/assets/images/position/position_plazza.png')},
			school: {flag: false, title: '学校', url: require('@/assets/images/position/position_school.png')},
			train: {flag: false, title: '火车', url: require('@/assets/images/position/position_train.png')},
			metro: {flag: false, title: '地铁', url: require('@/assets/images/position/position_metro.png')},
			commerce: {flag: false, title: '商业', url: require('@/assets/images/position/position_commerce.png')}
		};
	},
	mounted() {
		//渲染完成时候
		
		
	},
	updated() {
		console.log('[Updated]', this.road.flag, this.plazza.flag, this.school.flag, this.train.flag, this.metro.flag);
	},
	activated() {
		//激活的时候
		console.log('[Activated]', this.road.flag);
	},
	methods: {
		LoadedHandler(el){
			console.log("加载完毕");
		}
	},
	components: {
		[DropdownMenu.name]: DropdownMenu,
		[DropdownItem.name]: DropdownItem,
		[Row.name]: Row,
		[Col.name]: Col,
		[SwitchCell.name]: SwitchCell,
		[Image.name]: Image,
		// [Lazyload.name]: Lazyload
	}
};
</script>

<style scoped="scoped">

.position_image {
	position:absolute;
	width: 100%;
}

.position_image[lazy=loading] {
/*your style here*/
	width: 2rem;
	height: 2rem;
	text-align: center;
	left: 50%;
	top: 20%;
	transform: translate(-50%, -50%);
}
.position_image[lazy=error] {
/*your style here*/
	width: auto;
	text-align: center;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.position_image[lazy=loaded] {
/*your style here*/
}
	
</style>
