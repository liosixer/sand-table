
export default {
	install(Vue) {
		Vue.prototype.$bus = new Vue({
			data() {
				return {
					item_list: []
				};
			},
			created() {
				this.$on('item_list', val => {
					
					const isArr = Array.isArray(val);
					if (isArr) {
						this.item_list = val;
					} else {
						throw Error('item_list必须为数组');
					}
				});
			},
			methods:{
				addEvent:function(event){
					//统一添加事件，并管理事件，
					// this.$bus.item_list.push(event);
				}
			}
		});
	}
};
