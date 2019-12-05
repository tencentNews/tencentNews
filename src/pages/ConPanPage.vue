<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:08:26
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 19:59:13
 -->
<template>
  <div class="box">
    <ContestHeader></ContestHeader>
    <ConPanTop></ConPanTop>
    <ConPanBottom></ConPanBottom>
    <MyFooter1 class="feet"></MyFooter1>
    
  </div>
</template>

<script>
import ContestHeader from '../components/ContestHeader';
import ConPanTop from '../components/ConPanTop';
import ConPanBottom from '../components/ConPanBottom';
import MyFooter1 from '../components/MyFooter1';

export default {
  name: 'ConPanPage',
  data () {
    return{}
  },
  components:{
      ContestHeader,ConPanTop,ConPanBottom
      ,MyFooter1
  }
}
</script>

<style scoped>
.box{
  position:relative;
}

.feet{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
