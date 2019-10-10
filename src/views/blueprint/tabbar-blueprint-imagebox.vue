<template>
	<div class="container">
		<img class="blueprint_image load_image" style="z-index: 1000;" v-lazy="image_blueprint" />
		<img class="blueprint_image load_image" style="z-index: 1001;" v-show="show_house_appreciation" :src="image_house_appreciation" />
		<img class="blueprint_image load_image" style="z-index: 1002;" v-if="image_present.length > 0" v-show="show_present" :src="image_present" />
		<img class="blueprint_image load_image" style="z-index: 1003;" v-if="image_ventilate.length > 0" v-show="show_ventilate" :src="image_ventilate" />
		<img class="blueprint_image load_image" style="z-index: 1004;" v-show="show_direction" :src="image_direction" />
		<img class="blueprint_image load_image" style="z-index: 1005;" v-show="show_glittering" :src="image_glittering" />
	</div>
</template>

<script>
	export default{
		name:"blueprint-imagebox",
		data(){
			return{
				image_blueprint:"",
				image_house_appreciation:"",
				image_present:"",
				image_ventilate:"",
				image_direction:"",
				image_glittering:"",
				show_house_appreciation:false,
				show_present:false,
				show_ventilate: false,
				show_direction: false,
				show_glittering: false
			}
		},
		methods:{
			setValue(_house){
				this.image_blueprint = _house.image_bp;
				this.image_house_appreciation = _house.image_house_appreciation;
				this.image_present = _house.image_present;
				this.image_direction = _house.image_direction;
				this.image_ventilate = _house.image_ventilate;
				this.image_glittering = _house.image_glittering;
			},
			initImageBox(_house){
				this.show_house_appreciation = _house.show_house_appreciation;
				this.show_present = _house.show_present;
				this.show_direction = _house.show_direction;
				this.show_glittering = _house.show_glittering;
				this.show_ventilate = _house.show_ventilate;
			},
			showHouseAppreciation(flag){
				this.show_house_appreciation = flag;
			},
			showDirection(flag){
				this.show_direction = flag;
			},
			showGlittering(flag){
				this.show_glittering = flag;
			},
			showPresent(flag){
				if (this.image_present.length > 0){
					this.show_present = flag;
				}
			},
			showVentilate(flag){
				if (this.image_ventilate.length > 0){
					this.show_ventilate = flag;
				}
			},
			onLoading(el){
				// console.log(el);
			}
		},
		created() {
			
		},
		mounted() {
		}
	}
</script>

<style scoped="scoped">
	.blueprint_image {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0px;
	}
	.container{
		position: relative; 
		height: 100%; 
		width: 100%;
	}
	
	.load_image {
		/* width: 100%;
		height: 100%; */
	}
	
	.load_image[lazy='loading'] {
		/*your style here*/
		width: 2rem;
		height: 2rem;
		text-align: center;
		left: 50%;
		top: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
	}
	.load_image[lazy='error'] {
		/*your style here*/
		width: auto;
		text-align: center;
		left: 50%;
		top: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
	}
	.load_image[lazy='loaded'] {
		/*your style here*/
	}
</style>
