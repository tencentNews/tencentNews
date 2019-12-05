<template>
	<div class="detailfenlei">
		<ul>
			<li :class="{yangshi1}" @click="tiao(1)">全部<span v-show="isshow1"></span></li>
			<li :class="{yangshi2}" @click="tiao(2)">视频<span v-show="isshow2"></span></li>
			<li :class="{yangshi3}" @click="tiao(3)">赛程<span v-show="isshow3"></span></li>
			<li :class="{yangshi4}" @click="tiao(4)">用户<span v-show="isshow4"></span></li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: "DetailFenLei",
		props:['name'],
		data() {
			return {
				yangshi1:true,
				yangshi2:false,
				yangshi3:false,
				yangshi4:false,
				isshow1:true,
				isshow2:false,
				isshow3:false,
				isshow4:false
			}
		},
		mounted(){
			this.tiao(1);
		},
		methods: {
			tiao(index){
				if(index==1){
					this.$router.push({path:'/SearchDetail/DetailQuanBu'});
					this.yangshi1=true;
					this.yangshi2=false;
					this.yangshi3=false;
					this.yangshi4=false;
					this.isshow1=true;
					this.isshow2=false;
					this.isshow3=false;
					this.isshow4=false;
				}else if(index==2){
					this.$router.push({path:'/SearchDetail/DetailShiPin'});
					this.yangshi1=false;
					this.yangshi2=true;
					this.yangshi3=false;
					this.yangshi4=false;
					this.isshow1=false;
					this.isshow2=true;
					this.isshow3=false;
					this.isshow4=false;
				}else if(index==3){
					this.$router.push({path:'/SearchDetail/DetailSaiCheng'});
					this.yangshi1=false;
					this.yangshi2=false;
					this.yangshi3=true;
					this.yangshi4=false;
					this.isshow1=false;
					this.isshow2=false;
					this.isshow3=true;
					this.isshow4=false;
				}else if(index==4){
					this.$router.push({path:'/SearchDetail/DetailYongHu'});
					this.yangshi1=false;
					this.yangshi2=false;
					this.yangshi3=false;
					this.yangshi4=true;
					this.isshow1=false;
					this.isshow2=false;
					this.isshow3=false;
					this.isshow4=true;
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.detailfenlei {
		width: 94%;
		margin: 0 auto;
		background: white;
		ul {
			line-height: .44rem;
			li {
				color: #96979c;
				font-size: .14rem;
				display: inline-block;
				margin-right: .34rem;
				position: relative;
			}
			span {
				display: block;
				width: .25rem;
				height: 2px;
				background: #2a77ff;
				position: absolute;
				bottom: 5px;
				left: 1px;
			}
		}
		ul li:first-child {
			margin-left: 7px;
		}
		.yangshi1{
			color: #212121;
			font-size: .15rem;
		}
		.yangshi2{
			color: #212121;
			font-size: .15rem;
		}
		.yangshi3{
			color: #212121;
			font-size: .15rem;
		}
		.yangshi4{
			color: #212121;
			font-size: .15rem;
		}
	}
</style>