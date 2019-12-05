<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-12-04 18:03:52
 * @LastEditors: losn
 * @LastEditTime: 2019-12-04 20:16:20
 -->
<template>
	<div class="detailshipin">
		<ul>
			<router-link to="">
				<li v-for="quan in shipin">
					<div class="left">
						<p>{{quan.miaoshu}}</p>
						<div class="dt">
							<span class="di">{{quan.di}}</span>
							<span class="time">{{quan.time}}</span>
						</div>
					</div>
					<img :src="quan.img" alt="" />
				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"DetailShiPin",
	    data(){
	        return {
	            shipin:[]
	        }
	    },
	    created(){
	    	let name=this.$store.state.content;
	    	console.log("shipin store的"+name);
	    	axios.get('http://localhost:3000/detail?q='+name)
		    .then((response)=> {
		        console.log(response.data);
		        this.shipin = response.data;
		    })
		    .catch(function (error) {
		        console.log(error);
		    });
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.detailshipin{
		width: 92%;
		margin: 0 auto;
		padding-top: .13rem;
		ul{
			width: 100%;
			li{
				width: 100%;
				height: .81rem;
				margin-bottom: .24rem;
				.left{
					width: 2.21rem;
					height: .81rem;
					float: left;
					position: relative;
					p{
						color: #252525;
						font-size: .15rem;
						line-height: .21rem;
					}
					.dt{
						color: #9a999e;
						font-size: .11rem;
						position: absolute;
						bottom: 0;
					}
				}
				img{
					width: 1.12rem;
					height: .81rem;
					float: right;
				}
			}
		}
	}
</style>