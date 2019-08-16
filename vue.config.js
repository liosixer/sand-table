const path = require('path');

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
// const express = require('express');

function resolve(dir = '') {
	return path.join(__dirname, './src', dir);
}

module.exports = {
	baseUrl: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./",
	productionSourceMap: !IS_PROD,
	lintOnSave: false,
	devServer: {
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:3000',
				changeOrigin: true,
				pathRewrite: {
					'/api': ''
				}
			}
		},
		disableHostCheck: true
	},
	chainWebpack: config => {
		config.plugins.delete('prefetch');
		config.plugins.delete('preload');
	},
	configureWebpack: {
		resolve: {
			alias: {
				core: resolve('core')
			}
		},
		optimization: {
			runtimeChunk: {
				name: entrypoint => `runtime~${entrypoint.name}`
			},
			splitChunks: {
				minChunks: 2,
				minSize: 20000,
				maxAsyncRequests: 20,
				maxInitialRequests: 30,
				name: false
			}
		}
	},
	css: {
		loaderOptions: {
			sass: {
				data: '@import "@/assets/scss/_var.scss";@import "@/assets/scss/_mixin.scss";'
			}
		}
	}
};
