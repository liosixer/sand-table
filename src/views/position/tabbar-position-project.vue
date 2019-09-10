<template>
	<div id="position-project" ref="image_box">
		<scale-box ref="scaleBox">
			<img ref="image_bg" :style="'opacity: ' + (loaded - 0)" @load="sourceLoaded" :src="bg" />
			
			<img class="position_image" ref="image_road" v-show="road.flag" :style="'opacity: ' + (loaded + 1)" :src="road.url"/>
			<!-- <img v-show="road.flag" :style="'opacity: ' + (loaded + 2)" @load="sourceLoaded" :src="plazza.url"> -->
			<img class="position_image" ref="image_school" v-show="school.flag" :style="'opacity: ' + (loaded + 3)" :src="school.url"/>
			<img class="position_image" ref="image_train" v-show="train.flag" :style="'opacity: ' + (loaded + 4)" :src="train.url"/>
			<img class="position_image" ref="image_metro" v-show="metro.flag" :style="'opacity: ' + (loaded + 5)" :src="metro.url"/>
			<img class="position_image" ref="image_commerce" v-show="commerce.flag" :style="'opacity: ' + (loaded + 6)" :src="commerce.url"/>
		</scale-box>
		
		<position-button-group class="float_buttons" ref="float_buttons"></position-button-group>
	</div>
	
	
</template>

<script>
import scaleBox from 'vue-scale-box';
import PositionButtonGroup from './tabbar-position-button-group.vue';
import { POSITION_MODULE_SHOW } from "../../events/events.js";

export default {
	name: 'position-project',
	components: {
		scaleBox,
		[PositionButtonGroup.name]: PositionButtonGroup
	},
	data() {
		return {
			loaded: false,
			bg: require('@/assets/images/position/position_bg.jpg'),
			road: { flag: false, title: '道路', url: require('@/assets/images/position/position_road.png') },
			// plazza: { flag: false, title: '广场', url: require('@/assets/images/position/position_plazza.png') },
			school: { flag: false, title: '学校', url: require('@/assets/images/position/position_school.png') },
			train: { flag: false, title: '火车', url: require('@/assets/images/position/position_train.png') },
			metro: { flag: false, title: '地铁', url: require('@/assets/images/position/position_metro.png') },
			commerce: { flag: false, title: '商业', url: require('@/assets/images/position/position_commerce.png') }
		};
	},
	methods: {
		sourceLoaded() {
			this.loaded = true;
			
			//计算当前页面的高度， 再精简
			var boxHeight = window.innerHeight - 102;
			this.$refs.image_box.style.height = boxHeight.toString() + "px";
			
			//把按鈕組的位置擺放好
			this.$refs.float_buttons.$el.style.top = (boxHeight - 10).toString() + "px";
			
			//根据现状分析， 当前只需要更新一次， 
			this.$refs.scaleBox.update();
		}
	},
	created() {
		this.$bus.$on(POSITION_MODULE_SHOW, (args) => {
			var active = false;
			switch (args.icon){
				case "道路":
					this.road.flag = !this.road.flag;
					active = this.road.flag;
					break;
				case '学校':
					this.school.flag = !this.school.flag;
					active = this.school.flag;
					break;
				case '火车':
					this.train.flag = !this.train.flag;
					active = this.train.flag;
					break;
				case '地铁':
					this.metro.flag = !this.metro.flag;
					active = this.metro.flag;
					break;
				case '商业':
					this.commerce.flag = !this.commerce.flag;
					active = this.commerce.flag;
					break;
			}
			args.color = active ? "#000" : "#999";
		})
	},
	mounted() {
		// this.$refs.viewer.$viewer.show();
		console.log("[innerHeight]", window.innerHeight);
		console.log("[availHeight]", screen.availHeight);
		// this.$refs.button_group.style.offsetX
	},
	updated() {
		// this.$refs.scaleBox.update();
	}
};
</script>

<style scoped="scoped">
.position_image {
	position: absolute;
	/* width: 100%; */
	top: 0px;
}

#position-project {
	width: 100%;
	height: 40rem;
	margin: 0.25rem 0 0.25rem 0;
	/* margin: 1rem; */
	background-color: #f9f9f9;
	box-shadow: rgba(0, 0, 0, 0.3) 0 2px 10px;
	border: #fff 1px solid;
}
img {
	display: block;
	/* position: absolute; */
}

.float_buttons{
	left: 1rem;
}
</style>
