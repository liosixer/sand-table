<template>
	<van-tabs v-model="active" @click="onTabClick" @change="onTabChange" sticky>
		<!-- <van-tab v-for="item in items" :title="item">
			
	  </van-tab> -->
		<van-tab :title="world.title" :disabled="world.disabled"><position-world v-once></position-world></van-tab>
		<van-tab :title="gat.title" :disabled="gat.disabled"><position-gat v-once></position-gat></van-tab>
		<van-tab :title="project.title" :disabled="project.disabled"><position-project v-once></position-project></van-tab>
	</van-tabs>
</template>

<script>
import PositionWorld from './tabbar-position-world.vue';
import PositionGat from './tabbar-position-gat.vue';
import PositionProject from './tabbar-position-project.vue';

export default {
	data() {
		return {
			active: 2,
			world: { title: '世界区位', disabled: false, show: false },
			gat: { title: '港澳台区位', disabled: false, show: false },
			project: { title: '项目区位', disabled: false, show: true }
		};
	},
	mounted() {
		//渲染完成时候
	},
	updated() {
		// console.log('[Updated]', this.road.flag, this.plazza.flag, this.school.flag, this.train.flag, this.metro.flag);
	},
	activated() {
		//激活的时候
		// console.log('[Activated]', this.road.flag);
	},
	methods: {
		onTabClick: function(name, title) {
			// this.$toast("[Click]:" + this.active);
			// switch name:
			if (title != this.project.title) {
				this.$toast('暂未开放');
			}
			
			if (title == this.project.title){
				// this.$toast("展示按钮组")
			}
		},
		onTabChange: function(name, title) {
			this.$toast(title);
		}
	},
	components: {
		[PositionWorld.name]: PositionWorld,
		[PositionGat.name]: PositionGat,
		[PositionProject.name]: PositionProject,
	}
};
</script>

<style></style>
