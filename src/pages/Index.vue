<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-28 17:49:40
 * @LastEditors: losn
 * @LastEditTime: 2019-12-04 20:29:22
 -->
<template>
	<div class="index">
		<IndexTitle class="indextitle"></IndexTitle>
		<IndexMine class="mine"></IndexMine>
		<IndexCon></IndexCon>
		<IndexReMen></IndexReMen>
		<IndexYan></IndexYan>
		<IndexHuRen></IndexHuRen>
		<IndexTui></IndexTui>
		<router-link to="">
			<div class="gengduo">
				点击查看更多
			</div>
		</router-link>
		<!-- <shipin></shipin> -->
		<MyFooter1 class="foo"></MyFooter1>	
	</div>
</template>

<script>
	import IndexTitle from '../components/IndexTitle';
	import IndexCon from '../components/IndexCon';
	import IndexMine from '../components/IndexMine';
	import IndexReMen from '../components/IndexReMen';
	import IndexYan from '../components/IndexYan';
	import IndexHuRen from '../components/IndexHuRen';
	import IndexTui from '../components/IndexTui';
	import MyFooter1 from '../components/MyFooter1';
	import shipin from '../components/shipin';
	
	export default {
		name: 'Index',
		data() {
			return {

			}
		},
		components: {
			IndexTitle,IndexCon,IndexMine,IndexReMen,IndexYan,IndexHuRen,IndexTui,MyFooter1,shipin
		}
	}
	
</script>

<style lang="scss" scoped>
	.index{
		width: 100%;
		overflow: hidden;
		.indextitle{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10;
		}
		.mine{
			margin-top: .4rem;
		}
		.gengduo{
			width: 100%;
			height: .78rem;
			color: #9699a0;
			font-size: .14rem;
			line-height: .7rem;
			text-align: center;
			border-bottom: .1rem solid #fffbff;
			margin-bottom: .5rem;
		}
		.foo{
			position: fixed;
			left: 0;
			bottom: 0;
		}
	}
</style>