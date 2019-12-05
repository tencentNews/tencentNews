<template>
	<div class="sreachkuang">
		<div class="kuang">
			<router-link :to="tiao">
				<i @click="sou" class="el-icon-search"></i>
			</router-link>
			<input type="text" placeholder="NBA" v-model="content" v-focus="true" @focus="jiao"/>
			<router-link to="/"><span>取消</span></router-link>
			<img v-show="isshow" @click="cha" src="../assets/img/chacha.jpg" alt="" />
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
	    name:"SearchKuang",
	    data(){
	    	return{
	    		content:"",
	    		tiao:"",
	    		isshow:false
	    	}
	    },
	    methods:{
	    	sou(){
	    		if(this.content==""){
	    			console.log("没东西");
	    			return false;
	    		}else{
	    			let url="name="+this.content;
	    			axios.post('http://localhost:3000/lishi',url)
				    .then((response)=> {
				        consloe.log("成功");
				    })
				    .catch(function (error) {
				        console.log(error);
				    });
//					this.content="";
					this.tiao="/SearchDetail/"+this.content;
//					console.log(this.tiao);
	    		}
	    		this.$store.commit('sousuo',this.content);
	    	},
	    	jiao(){
	    		console.log("来了");
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
	   	},
	   	directives:{
			focus:{
			    inserted: function (el, {value}) {
			    	console.log(el,{value});
			        if (value) {
			            el.focus();
			        }
			    }
			}
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.sreachkuang{
		width: 100%;
		height: .41rem;
		box-shadow: 0px 2px 10px gainsboro;
		.kuang{
			width: 94%;
			height: .41rem;
			/*background: pink;*/
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