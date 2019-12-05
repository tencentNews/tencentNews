<template>
	<div class="searchdetail">
		<div class="tt">
			<DetailTitle :name="name"></DetailTitle>
			<DetailFenLei :name="name"></DetailFenLei>
		</div>
		<router-view :name="name"></router-view>
	</div>
</template>

<script>
	import DetailTitle from '../components/DetailTitle';
	import DetailFenLei from '../components/DetailFenLei';

	export default {
		name: 'SearchDetail',
		props:['name'],
		data() {
			return {

			}
		},
		components: {
			DetailTitle,DetailFenLei
		},
		created(){
			console.log("searchdetail"+this.name);
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.tt{
		position: sticky;
		top: 0;
		left: 0;
		background: white;
		z-index: 3;
	}
</style>
