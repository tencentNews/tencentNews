<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-07 16:44:37
 * @LastEdiwtors: losn
 * @LastEditTime: 2019-12-05 15:34:25
 -->
<template>
    <div class="box">
        <MentHead  class="headBox"></MentHead>
          <!-- <div class="pag"> -->
          <router-view :curryName = 'curryName' ></router-view>
          <!-- </div> -->
        <MyFooter1 class="feet"></MyFooter1> 
    </div>
</template>

<script>
import    MentHead   from '../components/MentHead';
import    MyFooter1  from '../components/MyFooter1';
import    Circle  from '../components/Circle';

import axios from 'axios'; 
import BScroll from 'better-scroll';

export default {
  name: 'Community',
	props:['name'],
  data () {
    return {
      curryName:'hot'
    }
  },
  components:{
    MentHead,MyFooter1,Circle
  },
  methods : {
    functionName : function (key) {
      console.log(key)
      this.curryName = key;
    }       
  }
 } 
</script>

<style lang="scss" scoped>
.headBox{
  position: sticky;
  top:0;
  left: 0;
  z-index: 10;
}
.feet{
  position: sticky;
  bottom: 0;
  left: 0;
}



</style>