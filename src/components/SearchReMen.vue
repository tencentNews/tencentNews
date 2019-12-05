<template>
	<div class="searchremen">
		<h3>热门搜索</h3>
		<ul>
			<router-link :to="tiao">
				<li v-for="rm in re">
					<span :class="yanse">{{rm.id}}.</span>
					<span @click="sou(rm.name)">{{rm.name}}</span>
				</li>
			</router-link>
			<!--<li>
				<span class="xuhao">2.</span>
				{{this.re[1]}}
			</li>
			<li>
				<span class="xuhao">3.</span>
				{{this.re[2]}}
			</li>
			<li>
				<span class="xuhao2">4.</span>
				{{this.re[3]}}
			</li>
			<li>
				<span class="xuhao2">5.</span>
				{{this.re[4]}}
			</li>
			<li>
				<span class="xuhao2">6.</span>
				{{this.re[5]}}
			</li>-->
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"SearchReMen",
	    data(){
	        return {
	            re:[],
	            biao:true,
	            yanse:"xuhao",
	            tiao:""
	        }
	    },
	    created(){
		    axios.get('http://localhost:3000/remenss')
		    .then((response)=> {
		        console.log(response.data);
		        this.re = response.data;
		    })
		    .catch(function (error) {
		        console.log(error);
		    });
		},
		 methods:{
	    	sou(content){
	    		console.log(content);
    			let url="name="+content;
    			axios.post('http://localhost:3000/lishi',url)
			    .then((response)=> {
			        console.log("成功");
			    })
			    .catch(function (error) {
			        console.log(error);
			    });
				this.tiao="/SearchDetail/"+content;
	    		this.$store.commit('sousuo',content);
	    	}
	    }
	
	}
</script>

<style lang="scss" scoped="scoped">
	.searchremen{
		width: 94%;
		margin: 0 auto;
		h3{
			line-height: .42rem;
			color: #252525;
			font-size: .13rem;
		}
		ul{
			width: 100%;
			li{
				display: inline-block;
				width: 49%;
				color: #212121;
				font-size: .14rem;
				margin-bottom: .27rem;
				.xuhao{
					color: #e24a3f;
				}
				.xuhao2{
					color: #9a9da6;
				}
			}
		}
	}
</style>