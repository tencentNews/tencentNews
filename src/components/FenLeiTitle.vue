<template>
	<div class="fenleititle">
		<i class="el-icon-arrow-left" @click="back()"></i>
		<h3>频道定制</h3>
	</div>
</template>

<script>
	export default {
	    name:"FenLeiTitle",
	    data(){
	        return {
	
	        }
	    },
	    methods:{
	        back(){
	            this.$router.go(-1);
	        }
	    }
	
	}
</script>

<style lang="scss" scoped="scoped">
	.fenleititle{
		width: 100%;
		height: .41rem;
		line-height: .41rem;
		border-bottom: 1px solid #f2f2f2;
		position: relative;
		i{
			color: #202020;
			font-size: .18rem;
			position: absolute;
			left: 4%;
			top: 30%;
		}
		h3{
			color: black;
			font-size: .17rem;
			text-align: center;
			font-weight: normal;
		}
	}
</style>