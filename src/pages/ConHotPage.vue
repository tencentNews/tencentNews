<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:08:26
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 20:00:09
 -->
<template>
  <div class="box">
    <ContestHeader></ContestHeader>
    <ConHotTop></ConHotTop>
    <MyFooter1 class="feet"></MyFooter1>
    
  </div>
</template>

<script>
import ContestHeader from '../components/ContestHeader';
import ConHotTop from '../components/ConHotTop';
import MyFooter1 from '../components/MyFooter1';

export default {
  name: 'ConHotPage',
  data () {
    return{}
  },
  components:{
      ContestHeader,ConHotTop
      ,MyFooter1
  }
}
</script>

<style scoped>
.box{
  position:relative;
  overflow-x: auto;
}
.ConHotTop{
  margin-top:.4rem;
}

.feet{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
