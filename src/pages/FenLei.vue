<template>
	<div class="fenlei">
		<FenLeiTitle></FenLeiTitle>
		<FenLeiMine></FenLeiMine>
		<FenLeiMore></FenLeiMore>
	</div>
</template>

<script>
	import FenLeiTitle from '../components/FenLeiTitle';
	import FenLeiMine from '../components/FenLeiMine';
	import FenLeiMore from '../components/FenLeiMore';
	
	export default {
		name: 'FenLei',
		data() {
			return {

			}
		},
		components: {
			FenLeiTitle,FenLeiMine,FenLeiMore
		}
	}
</script>

<style lang="scss" scoped="scoped">
	
</style>