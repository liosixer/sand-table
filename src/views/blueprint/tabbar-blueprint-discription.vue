<template>
	<div class="container">
		<!-- <van-divider style="border: 2px #6C609E solid ;"></van-divider> -->
		<van-row style="height: 100%;" type="flex" align="center" justify="center">
		  <van-col span="10">
				<van-row type="flex" justify="end" align="center">
					<van-col span="5" style="font-size: 40px; margin-right: 10px; color: #6C609E;" >{{ type }}</van-col>
					<van-col span="4" style="color: #6C609E;">户型</van-col>
				</van-row>
			</van-col>
			<van-col span="2" type="flex" justify="center" align="center">
				<p style="font-size: 1.5rem; color: #6C609E;">|</p>
			</van-col>
		  <van-col span="12">
				<van-row style="color: #6C609E;">{{ house_type }}</van-row>
				<van-row style="font-size: 12px; color: #6C609E;">{{ house_discription }}</van-row>
			</van-col>
		</van-row>
	</div>
</template>

<script>
	import { Row, Col, Divider } from 'vant';
	export default{
		name:"blueprint-discription",
		data(){
			return{
				type: "A",
				house_type: "----",
				house_discription: "----",
			}
		},
		methods:{
			setValue(_type, _house){
				this.type = _type;
				this.house_type = _house.house_type;
				this.house_discription = _house.house_discription;
			}
		},
		components:{
			[Row.name]: Row,
			[Col.name]: Col,
			[Divider.name]: Divider
		}
	}
</script>

<style scoped="scoped">
	.container{
		position: relative; 
		height: 100%; 
		width: 100%;
	}
</style>
