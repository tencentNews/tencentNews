 <!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-04 22:02:20
 * @LastEditors: losn
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="myBox">
        <IndexTitle class="tt"></IndexTitle>
        <!-- <CBAheader></CBAheader> -->
        <CBAhot></CBAhot> 
        <CBAnav></CBAnav> 
        <CBAnews></CBAnews> 
        <MyFooter1 class="footers"></MyFooter1> 
  </div>
</template>

<script>
import CBAheader from '../components/CBAheader' 
import IndexTitle from '../components/IndexTitle' 
import CBAhot from '../components/CBAhot' 
import CBAnav from '../components/CBAnav' 
import CBAnews from '../components/CBAnews' 
import MyFooter1 from '../components/MyFooter1' 
 
export default {
  name: 'CBAPage',
  data () {
    return {
       
    }
  },
  components:{
       CBAheader,CBAhot,CBAnav,CBAnews,MyFooter1,IndexTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.myBox{
    width:100%;
    background:#f9f9f9;
}
.footers{
    position:fixed;
    left:0;
    bottom:0;
}
.tt{
  position: sticky;
  left: 0;
  top: 0;
}
</style>
