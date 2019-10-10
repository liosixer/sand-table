<template>
	
	<div :height="containerHeight">
		
		<div style="height: 8%; ">
			<van-tabs v-model="active" @click="onTabClick" @change="onTabChange">
				<van-tab v-for="item in items" :key="item" :title="item + '户型'"></van-tab>
			</van-tabs>
		</div>
		<div style="height: 42%; background: #F2F2F2;"
			v-swipeleft="()=>onTouchHandler(1)"
			v-swiperight="()=>onTouchHandler(-1)"
		>
			<blueprint-imagebox ref="imageBox"></blueprint-imagebox>
		</div>
		<div style="height: 10%; background: #F7F8FA;">
			<blueprint-discription ref="discriptionBox"></blueprint-discription>
		</div>
		<div style="height: 40%; background: #F2F2F2;">
			<blueprint-buttongroup ref="buttonGroupBox"></blueprint-buttongroup>
		</div>
	</div>
	
</template>

<script>
	
	import BluePrint_ImageBox from "./tabbar-blueprint-imagebox.vue";
	import BluePrint_Discription from "./tabbar-blueprint-discription.vue";
	import BluePrint_ButtonGroup from "./tabbar-blueprint-buttongroup.vue";
	
	import { BLUEPRINT_MODULE_SHOW_HOUSE_APPRECIATION,
	BLUEPRINT_MODULE_SHOW_PRESENT, 
	BLUEPRINT_MODULE_SHOW_DIRECTION, 
	BLUEPRINT_MODULE_SHOW_GLITTERING,
	BLUEPRINT_MODULE_SHOW_VENTILATE} from "../../events/events.js";
	
	export default {
		data() {
			return {
				active: 0,
				screenHeight: 0,
				screenWidth: 0,
				containerHeight:0,
				items: ["A", "B", "C" ,"D"],
				houseMap: {
					"A": {
						house_discription:"建面约132.63平方米", 
						house_type:"三房两厅两卫", 
						image_bp:require("@/assets/images/blueprint/blueprint_0.jpg"), 
						image_present:require("@/assets/images/blueprint/present_0.png"), 
						image_house_appreciation:require("@/assets/images/blueprint/house_appreciation_0.png"),
						image_ventilate:require("@/assets/images/blueprint/ventilate_0.gif"),
						image_glittering:require("@/assets/images/blueprint/glittering_0.png"),
						image_direction:require("@/assets/images/blueprint/direction_0.png"),
						show_present:false,
						show_house_appreciation:false,
						show_ventilate:false,
						show_glittering:false,
						show_direction: false
						},
					"B": {
						house_discription:"建面约113.93平方米", 
						house_type:"两房两厅两卫", 
						image_bp:require("@/assets/images/blueprint/blueprint_1.jpg"), 
						image_present:require("@/assets/images/blueprint/present_1.png"), 
						image_house_appreciation:require("@/assets/images/blueprint/house_appreciation_1.png"),
						image_ventilate:require("@/assets/images/blueprint/ventilate_1.gif"),
						image_glittering:require("@/assets/images/blueprint/glittering_1.png"),
						image_direction:require("@/assets/images/blueprint/direction_1.png"),
						show_present:false,
						show_house_appreciation:false,
						show_ventilate:false,
						show_glittering:false,
						show_direction: false
						},
					"C": {
						house_discription:"建面约142.1平方米", 
						house_type:"四房两厅两卫", 
						image_bp:require("@/assets/images/blueprint/blueprint_2.jpg"), 
						image_present:require("@/assets/images/blueprint/present_2.png"), 
						image_house_appreciation:require("@/assets/images/blueprint/house_appreciation_2.png"),
						image_ventilate:require("@/assets/images/blueprint/ventilate_2.gif"),
						image_glittering:require("@/assets/images/blueprint/glittering_2.png"),
						image_direction:require("@/assets/images/blueprint/direction_2.png"),
						show_present:false,
						show_house_appreciation:false,
						show_ventilate:false,
						show_glittering:false,
						show_direction: false
						},
					"D": {
						house_discription:"建面约71.92平方米", 
						house_type:"两室一厅一卫", 
						image_bp:require("@/assets/images/blueprint/blueprint_3.png"), 
						image_present:"", 
						image_house_appreciation:require("@/assets/images/blueprint/house_appreciation_3.png"),
						image_ventilate:"",
						image_glittering:require("@/assets/images/blueprint/glittering_3.png"),
						image_direction:require("@/assets/images/blueprint/direction_3.png"),
						show_present:false,
						show_house_appreciation:false,
						show_ventilate:false,
						show_glittering:false,
						show_direction: false
						},
				},
				curHouse: null
			};
		},
		computed:{
		},
		methods: {
			onResize(){
				this.screenHeight = window.innerHeight;
				this.screenWidth = window.innerWidth;
			},
			onTabClick(name, title) {
				// this.$toast(title);
			},
			onTabChange(index, title){
				this.$toast(title);
				
				var type = this.items[index];
				this.curHouse = this.houseMap[type];
				this.initImageBox(this.curHouse);
				this.setImageBox(this.curHouse);
				this.setDiscriptionBox(type, this.curHouse);
				this.initButtonGroupBox(this.curHouse);
				this.setButtonGroupBox(this.curHouse);
			},
			initImageBox(house){
				this.$refs.imageBox.initImageBox(house.show_house_appreciation, house.show_present, house.show_direction, house);
			},
			setImageBox(house){
				//添加图片
				this.$refs.imageBox.setValue(house);
			},
			setDiscriptionBox(type, house){
				this.$refs.discriptionBox.setValue(type, house);
			},
			setButtonGroupBox(house){
				this.$refs.buttonGroupBox.setValue(house)
			},
			initButtonGroupBox(house){
				this.$refs.buttonGroupBox.initButtons(house);
			},
			onTouchHandler(index){
					var curIndex = this.active;
					curIndex += index;
					if (curIndex >= 0 && curIndex < this.items.length )
					{
						this.active = curIndex;
					}
			}
		},
		created() {
			this.$bus.$on(BLUEPRINT_MODULE_SHOW_HOUSE_APPRECIATION, (args) =>{
				this.curHouse.show_house_appreciation = args;
				this.$refs.imageBox.showHouseAppreciation(args);
			});
			this.$bus.$on(BLUEPRINT_MODULE_SHOW_PRESENT, (args) =>{
				this.curHouse.show_present = args;
				this.$refs.imageBox.showPresent(args);
			});
			this.$bus.$on(BLUEPRINT_MODULE_SHOW_VENTILATE, (args) =>{
				this.curHouse.show_ventilate = args;
				this.$refs.imageBox.showVentilate(args);
			});
			this.$bus.$on(BLUEPRINT_MODULE_SHOW_DIRECTION, (args) =>{
				this.curHouse.show_direction = args;
				this.$refs.imageBox.showDirection(args);
			});
			this.$bus.$on(BLUEPRINT_MODULE_SHOW_GLITTERING, (args) =>{
				this.curHouse.show_glittering = args;
				this.$refs.imageBox.showGlittering(args);
			});
		},
		
		mounted() {
			
			this.onResize();
			this.containerHeight = this.screenHeight - 400;
			
			setTimeout(()=>{
				//赋值给各个子页面
				this.curHouse = this.houseMap["A"];
				this.setImageBox(this.curHouse);
				this.setDiscriptionBox("A", this.curHouse);
				this.initButtonGroupBox(this.curHouse);
				this.setButtonGroupBox(this.curHouse);
			}, 0);
		},
		components: {
			[BluePrint_ImageBox.name]: BluePrint_ImageBox,
			[BluePrint_Discription.name]: BluePrint_Discription,
			[BluePrint_ButtonGroup.name]: BluePrint_ButtonGroup,
		}
	};
</script>

<style scoped="scoped">


</style>
