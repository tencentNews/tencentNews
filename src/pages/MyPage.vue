<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-04 21:00:49
 * @LastEditors: losn
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="myBox">
       <MyHeader class="myHeader"></MyHeader>
       <div class="center"> 
       <MyMiddle></MyMiddle>
       <MyNav></MyNav>
       <MyAmuse></MyAmuse>
       <MyBanner></MyBanner>
       </div>
       <MyFooter1 class="myFooter"></MyFooter1>
      
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader' 
import MyMiddle from '../components/MyMiddle' 
import MyNav from '../components/MyNav' 
import MyAmuse from '../components/MyAmuse' 
import MyBanner from '../components/MyBanner' 
import MyFooter1 from '../components/MyFooter1' 
export default {
  name: 'HelloWorld',
  data () {
    return {
       
    }
  },
  components:{
       MyHeader,MyMiddle,MyNav,MyAmuse,MyFooter1,MyBanner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.myBox{
  background:#eaedea;
  display:flex;
  height:100%;
  flex-direction:column;
}
.myHeader{
  position:fixed;
  top:0;
  z-index:2;
}
.myFooter{
  position:fixed;
  bottom:0;
  z-index:2;
}
</style>
