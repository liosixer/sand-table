<template>
	<!-- <van-cell-group>
	  <van-switch-cell v-model="checked" title="标题" />
	</van-cell-group> -->
	<div class="container">
		<van-row style="height: 33.3%;" type="flex" align="center" justify="center">
		  <van-col span="10" align="center">
				<van-button @click="onClickSize" :disabled="disableHouseAppreciation">户型尺寸</van-button>
			</van-col>
		  <van-col span="10" align="center">
				<van-button @click="onClickVentilate" :disabled="disableVentilate">通风演示</van-button>
			</van-col>
		</van-row>
		<van-row style="height: 33.3%;" type="flex" align="center" justify="center">
		  <van-col span="10" align="center">
		  	<van-button @click="onClickSquare" :disabled="disablePresent">赠送面积</van-button>
		  </van-col>
		  <van-col span="10" align="center">
		  	<van-button @click="onClickDirection" :disabled="disableDirection">朝向显示</van-button>
		  </van-col>
		</van-row>
		<van-row style="height: 33.4%;" type="flex" align="center" justify="center">
		  <van-col span="10" align="center">
		  	<van-button @click="onClickGlittering" :disabled="disableGlittering">户型亮点</van-button>
		  </van-col>
		  <van-col span="10" align="center">
		  	<van-button disabled>公摊面积</van-button>
		  </van-col>
		</van-row>
	</div>
</template>

<script>
	import { Row, Col } from 'vant';
	import { BLUEPRINT_MODULE_SHOW_HOUSE_APPRECIATION, 
	BLUEPRINT_MODULE_SHOW_PRESENT, 
	BLUEPRINT_MODULE_SHOW_DIRECTION, 
	BLUEPRINT_MODULE_SHOW_GLITTERING,
	BLUEPRINT_MODULE_SHOW_VENTILATE} from "../../events/events.js";
	export default{
		name:"blueprint-buttongroup",
		data(){
			return{
				showHouseAppreciation: true,
				disableHouseAppreciation: true,
				showPresent: true,
				disablePresent: true,
				showVentilate:true,
				disableVentilate: true,
				showGlittering:true,
				disableGlittering: true,
				showDirection: true,
				disableDirection: true,
			}
		},
		methods:{
			onClickSize(){
				this.showHouseAppreciation = !this.showHouseAppreciation;
				this.$toast(this.showHouseAppreciation ? "显示尺寸" : "隐藏尺寸");
				
				this.$bus.$emit(BLUEPRINT_MODULE_SHOW_HOUSE_APPRECIATION, this.showHouseAppreciation);
			},
			onClickSquare(){
				this.showPresent = !this.showPresent;
				this.$toast(this.showPresent ? "显示赠送面积" : "隐藏赠送面积");
				this.$bus.$emit(BLUEPRINT_MODULE_SHOW_PRESENT, this.showPresent);
			},
			onClickDirection(){
				this.showDirection = !this.showDirection;
				this.$toast(this.showDirection ? "显示朝向" : "隐藏朝向积");
				this.$bus.$emit(BLUEPRINT_MODULE_SHOW_DIRECTION, this.showDirection);
			},
			onClickVentilate(){
				this.showVentilate = !this.showVentilate;
				this.$toast(this.showVentilate ? "显示通风演示" : "隐藏通风演示");
				this.$bus.$emit(BLUEPRINT_MODULE_SHOW_VENTILATE, this.showVentilate);
			},
			onClickGlittering(){
				this.showGlittering = !this.showGlittering;
				this.$toast(this.showGlittering ? "显示户型亮点" : "隐藏户型亮点");
				this.$bus.$emit(BLUEPRINT_MODULE_SHOW_GLITTERING, this.showGlittering);
			},
			setValue(house){
				this.showHouseAppreciation = house.showHouseAppreciation;
				this.showPresent = house.showPresent;
				this.showDirection = house.showDirection;
				this.showGlittering = house.showGlittering;
				this.showVentilate = house.showVentilate;
			},
			initButtons(house){
				this.disableHouseAppreciation = !house.image_house_appreciation.length > 0;
				this.disablePresent = !house.image_present.length > 0;
				this.disableVentilate = !house.image_ventilate.length > 0;
				this.disableGlittering = !house.image_glittering.length > 0;
				this.disableDirection = !house.image_direction.length > 0;
			}
		},
		components:{
			[Row.name]: Row,
			[Col.name]: Col
		}
	}
</script>

<style scoped="scoped">
	.container{
		position: relative; 
		height: 100%; 
		width: 100%;
	}
	.van-button--default{
		color: floralwhite;
		background-color: #6C609E;
		border: 1px solid #6C609E;
		border-radius: 4px;
	}
</style>
