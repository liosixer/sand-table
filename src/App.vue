<template>
	<div id="app">
		<keep-alive><router-view class="view-router" v-if="$route.meta.keepAlive"></router-view></keep-alive>
		<router-view class="view-router" v-if="!$route.meta.keepAlive"></router-view>
		<!-- <router-view name="navbar"></router-view> -->
		<router-view name="tabbar"></router-view>
	</div>
</template>

<script>
export default {
	mounted() {
		
		//禁止安卓手机返回
		// if (window.history && window.history.pushState) {
		// 	window.addEventListener('popstate', function() {
		// 		window.history.pushState('forward', null, '#');
		// 		window.history.forward(1);
		// 	});
		// }
		// window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
		// window.history.forward(1);
	}
};
</script>

<style lang="scss" src="./assets/scss/global.scss" />
