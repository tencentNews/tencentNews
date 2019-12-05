<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:08:26
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 19:58:05
 -->
<template>
  <div class="test">
    <ContestHeader></ContestHeader>
    <ContestBall></ContestBall>
    <MyFooter1 class="feet"></MyFooter1>
  </div>
</template>

<script>
import ContestHeader from '../components/ContestHeader';
import ContestBall from '../components/ContestBall';
import MyFooter1 from '../components/MyFooter1';
export default {
  name: 'ContestPage',
  data () {
    return{}
  },
  components:{
      ContestHeader,
      ContestBall,
    MyFooter1
  }
}
</script>

<style scoped>
.test{
  position:relative;
  overflow-x: auto;
}

.feet{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
