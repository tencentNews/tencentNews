<template>
	<div class="search">
		<SearchKuang></SearchKuang>
		<SearchLiShi></SearchLiShi>
		<SearchReMen></SearchReMen>
	</div>
</template>

<script>
	import SearchKuang from '../components/SearchKuang';
	import SearchLiShi from '../components/SearchLiShi';
	import SearchReMen from '../components/SearchReMen';
	
	export default {
		name: 'Search',
		data() {
			return {

			}
		},
		components: {
			SearchKuang,SearchLiShi,SearchReMen
		}
	}
</script>

<style lang="scss" scoped="scoped">
	
</style>