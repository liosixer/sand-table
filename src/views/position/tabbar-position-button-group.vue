<template>
	<vue-fab 
	:icon-type="currentSource" 
	:icon="mainIcon[currentSource]" 
	:activeIcon="'><'"
	mainBtnColor="#9e9e9e" 
	:clickAutoClose="false"
	 >
	  <fab-item  v-for="(item, idx) in menu[currentSource]" :idx="idx" :color="item.color" :title="item.title" :icon="item.icon" @clickItem="clickItem(item)" />
	</vue-fab>
</template>

<script>
	
	import EventBus from "../../vue/event-bus/index.js";
	import { POSITION_MODULE_SHOW } from "../../events/events.js";
	
	export default{
		name:"position-button-group",
		data () {
		  return {
		    currentSource: 'MaterialDesign',
		    mainIcon: {
		      iconfont: 'icon-jia',
		      MaterialDesign: '+'
		    },
		    menu: {
		      MaterialDesign: [
		        {
		          icon: '道路',
		          title: '',
		          color: '#999'
		        },
		        {
		          icon: '学校',
		          title: '',
		          color: '#999'
		        },
						{
						  icon: '火车',
						  title: '',
						  color: '#999'
						},
						{
						  icon: '地铁',
						  title: '',
						  color: '#999'
						},
						{
						  icon: '商业',
						  title: '',
						  color: '#999'
						}
		      ],
		      iconfont: [
		        {
		          icon: '交轨',
		          title: '',
		          color: '#483218'
		        },
		        {
		          icon: '地铁',
		          title: '',
		          color: '#c8d'
		        },
		        {
		          icon: '商场',
		          title: '',
		          color: '#3DB'
		        }
		      ]
		    }
		  }
		},
		methods: {
		  handleSource () {
		    this.currentSource === 'iconfont' ? this.currentSource = 'MaterialDesign' : this.currentSource = 'iconfont'
		  },
			clickItem: function (target) {
				this.$bus.$emit(POSITION_MODULE_SHOW, target);
			}
		}
	}
</script>

<style>
.vue-fab-material-icons{
	font-style: normal;
}
</style>
