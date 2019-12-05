<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:08:26
 * @LastEditors: 玉兰琼馨
 * @LastEditTime: 2019-12-05 12:07:29
 -->
<template>
    <div class="nbaIndex">
        <div class="ball">
            <ConNBAHeader></ConNBAHeader>
            <ConHotTop class="top"></ConHotTop>
        </div>
        <!-- <router-view :name="name"></router-view> -->
    </div>
</template>

<script>
import ConNBAHeader from '../components/ConNBAHeader';
import ConHotTop from '../components/ConHotTop';

export default {
  name: 'ConNBAPage',
//   props:['name'],
  data () {
    return{}
  },
  components:{
      ConNBAHeader,ConHotTop
  },
//   created(){
// 			console.log("nbaIndex"+this.name);
// 		}
}
</script>
<style scoped>
.ball{
    position:relative;
    overflow-x: hidden;
}
</style>
