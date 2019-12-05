<template>
	<div class="detailtitle">
		<div class="kuang">
			<router-link to="/Search">
				<i class="el-icon-arrow-left"></i>
			</router-link>
			<input type="text" placeholder="NBA" v-model="content" @focus="jiao"/>
			<router-link to="/">
				<span>取消</span>
			</router-link>
			<img v-show="isshow" @click="cha" src="../assets/img/chacha.jpg" alt="" />
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
	    name:"DetailTitle",
	    props:['name'],
	    data(){
	    	return{
	    		content:this.name,
	    		isshow:false
	    	}
	    },
	    methods:{
	    	jiao(){
	    		setInterval(()=>{
	    			if(this.content==""){
		    			this.isshow=false;
		    		}else{
		    			this.isshow=true;
		    		}
	    		},500);
	    		
	    	},
	    	cha(){
	    		this.content="";
	    	}
	   	}
	}
</script>

<style lang="scss" scoped="scoped">
	.detailtitle{
		width: 100%;
		height: .41rem;
		background: white;
		.kuang{
			width: 94%;
			height: .41rem;
			margin: 0 auto;
			position: relative;
			i{
				color: #212121;
				font-size: .17rem;
				line-height: .41rem;
				font-weight: bold;
			}
			input{
				width: 80%;
				height: .3rem;
				/*background: skyblue;*/
				border: none;
				color: #9f9f9f;
				font-size: .14rem;
				padding-left: .06rem;
				outline: none;
			}
			span{
				color: #212121;
				font-size: .14rem;
				float: right;
				line-height: .41rem;
			}
			img{
				width: .09rem;
				height: .09rem;
				position: absolute;
				right: 14%;
				top: 40%;
			}
		}
	}
</style>