<template>
	<vue-friendly-iframe :src="iframe_url"></vue-friendly-iframe>
</template>

<script>
export default {
	data() {
		return {
			iframe_url: '',
			theTimeId: 0
		};
	},
	computed: {
		// 读取和设置
		isShow: {
			get: function() {
				return _isShow;
			},
			set: function(flag) {
				this._isShow = flag;
			}
		}
	},
	mounted() {
		this.iframe_url = 'https://vr.justeasy.cn/view/7064596.html';
	},
	activated() {
		//重新载入当前页面
		this.iframe_url = '';
		this._isShow = false;
		setTimeout(() => {
			this.iframe_url = 'https://vr.justeasy.cn/view/7064596.html';
			this.onCheckIFrame(this.$el.firstChild, this.resizeFrame);
		}, 0);
	},
	methods: {
		onCheckIFrame(frame, callback) {
			this.theTimeId = setInterval(
				(function() {
					return function() {
						if (frame != null) {
							callback();
						}
					};
				})(frame, callback),
				1000
			);
		},
		resizeFrame() {
			this.$el.firstChild.width = '100%';
			this.$el.firstChild.height = '100%';
			clearInterval(this.theTimeId);
		}
	}
};
</script>

<style scoped>
div {
	color: red;
}
</style>
