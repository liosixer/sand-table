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
				<van-button disabled>通风演示</van-button>
			</van-col>
		</van-row>
		<van-row style="height: 33.3%;" type="flex" align="center" justify="center">
		  <van-col span="10" align="center">
		  	<van-button @click="onClickSquare" :disabled="disablePresent">赠送面积</van-button>
		  </van-col>
		  <van-col span="10" align="center">
		  	<van-button disabled>朝向显示</van-button>
		  </van-col>
		</van-row>
		<van-row style="height: 33.4%;" type="flex" align="center" justify="center">
		  <van-col span="10" align="center">
		  	<van-button disabled>户型亮点</van-button>
		  </van-col>
		  <van-col span="10" align="center">
		  	<van-button disabled>公摊面积</van-button>
		  </van-col>
		</van-row>
	</div>
</template>

<script>
	import { Row, Col } from 'vant';
	import { BLUEPRINT_MODULE_SHOW_HOUSE_APPRECIATION, BLUEPRINT_MODULE_SHOW_PRESENT } from "../../events/events.js";
	export default{
		name:"blueprint-buttongroup",
		data(){
			return{
				showHouseAppreciation: true,
				disableHouseAppreciation: true,
				showPresent: true,
				disablePresent: true,
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
			setValue(houseAppreciation, present){
				this.showHouseAppreciation = houseAppreciation;
				this.showPresent = present;
			},
			initButtons(houseAppreciation, present){
				this.disableHouseAppreciation = !houseAppreciation ;
				this.disablePresent = !present;
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
