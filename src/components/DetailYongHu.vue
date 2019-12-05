<template>
	<div class="detailyonghu">
		<ul>
			<h3>用户</h3>
			<li v-for="yong in yonghu">
				<img class="yong" :src="yong.img" alt="" />
				<div class="right">
					<div class="top">
						<span class="mingcheng">{{yong.name}}</span>
						<img class="ti" src="../assets/img/tiyuhao.jpg" alt="" />
					</div>
					<span class="mc">{{yong.name2}}</span>
					<div class="bottom">
						<span class="fensi">{{yong.fensi}}粉丝</span>
						<span class="zan">{{yong.zan}}获赞</span>
					</div>
				</div>
				<span class="guanzhu">+关注</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"DetailYongHu",
	    data(){
	        return {
	            yonghu:[]
	        }
	    },
	    created(){
	    	let name=this.$store.state.content;
	    	console.log("yonghu store的"+name);
	    	axios.get('http://localhost:3000/yonghu?q='+name)
		    .then((response)=> {
		        console.log(response.data);
		        this.yonghu = response.data;
		    })
		    .catch(function (error) {
		        console.log(error);
		    });
		},
		 methods:{
	    	
	    }
	
	}
</script>

<style lang="scss" scoped="scoped">
	ul{
		width: 92%;
		margin: 0 auto;
		h3{
			color: #2f2f2f;
			font-size: .12rem;
			line-height: .46rem;
			font-weight: normal;
			padding-left: 2px;
		}
		li{
			width: 100%;
			height: .51rem;
			margin-bottom: .27rem;
			position: relative;
			.yong{
				width: .51rem;
				height: .51rem;
				float: left;
			}
			.right{
				width: 83%;
				float: right;
				.mingcheng{
					color: #327ae6;
					font-size: .12rem;
					float: left;
				}
				.ti{
					width: .47rem;
					height: .15rem;
					float: left;
					margin-left: 2px;
				}
				.mc{
					clear: both;
					display: block;
					color: #9fa0a2;
					font-size: .1rem;
					line-height: .2rem;
				}
				.bottom{
					line-height: .1rem;
				}
				.fensi{
					color: #9fa0a2;
					font-size: .1rem;
				}
				.zan{
					color: #9fa0a2;
					font-size: .1rem;
					margin-left: .1rem;
				}
			}
			.guanzhu{
				width: .66rem;
				height: .28rem;
				border: 1px solid #dfdfdf;
				color: #2e5fae;
				font-size: .12rem;
				line-height: .28rem;
				text-align: center;
				position: absolute;
				right: 0;
				top: 20%;
				border-radius: 5px;
			}
		}
	}
</style>