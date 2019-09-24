<template>
	<div class="container">
		<img class="blueprint_image load_image" style="z-index: 1000;" v-lazy="image_blueprint" />
		<img class="blueprint_image load_image" style="z-index: 1001;" v-show="show_house_appreciation" v-lazy="image_house_appreciation" />
		<img class="blueprint_image load_image" style="z-index: 1002;" v-if="image_present.length > 0" v-show="show_present" v-lazy="image_present" />
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
				show_house_appreciation:false,
				show_present:false
			}
		},
		methods:{
			setValue(_image_blueprint = "", _image_house_appreciation = "", _image_present = ""){
				this.image_blueprint = "";
				this.image_house_appreciation = "";
				this.image_present = "";
				
				this.image_blueprint = _image_blueprint;
				this.image_house_appreciation = _image_house_appreciation;
				this.image_present = _image_present;
			},
			initImageBox(house_appreciation, present){
				this.show_house_appreciation = house_appreciation;
				this.show_present = present;
			},
			showHouseAppreciation(flag){
				this.show_house_appreciation = flag;
			},
			showPresent(flag){
				if (this.image_present.length > 0){
					this.show_present = flag;
				}
			},
			onLoading(el){
				console.log(el);
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
