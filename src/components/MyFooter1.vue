<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-12-04 20:28:55
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 19:53:04
 -->
<template>
	<div class="footer">
		<ul>
			<router-link to="/">
				<li :class="{'bian':footerCls[0]}" @touchstart="changeCls(0)">
					<i class="el-icon-s-home"></i>
					首页
				</li>
			</router-link>
			<router-link to="/ContestPage">
				<li :class="{'bian':footerCls[1]}" @touchstart="changeCls(1)">
					<i class="el-icon-trophy"></i>
					赛程
				</li>
			</router-link>
			<router-link to="/Community">
				<li :class="{'bian':footerCls[2]}" @touchstart="changeCls(2)">
					<i class="el-icon-chat-dot-square"></i>
					社区
				</li>
			</router-link>
			<router-link to="/MyPage">
				<li :class="{'bian':footerCls[3]}" @touchstart="changeCls(3)">
					<i class="el-icon-user"></i>
					我的
				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
	    name: 'MyFooter',
	    data() {
	        return {
	        	
	        }
	    },
	    computed: {
	        footerCls(){
	            return this.$store.state.footerCls;
	        }
	    },
	    methods:{
	        changeCls(Index){
	            this.$store.commit('changeFooterCls',Index);
	        }
	    }
	}
</script>

<style lang="scss" scoped="scoped">
	.footer{
		width: 100%;
		height: .5rem;
		background: white;
		ul{
			display: flex;
			justify-content: space-around;
			li{
				padding-top: .04rem;
				color: #9f9f9f;
				font-size: .1rem;
				i{
					font-size: .25rem;
					color: #737572;
					display: block;
				}
			}
			.bian{
				color: #0c65f3;
			}
			.bian i{
				color: #0c65f3;
			}
		}
	}
</style>