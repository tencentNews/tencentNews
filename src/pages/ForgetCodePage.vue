<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-02 11:08:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="codeBox">
       <ForgetHead></ForgetHead>
       <ForgetCon></ForgetCon>
  </div>
</template>

<script>
import ForgetHead from '../components/ForgetHead' 
import ForgetCon from '../components/ForgetCon' 
 
export default {
  name: 'ForgetCodePage',
  data () {
    return {
  
    }
  },
  components:{
      ForgetHead,ForgetCon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.CodeBox{
    height:6.66rem;
    background:#f9f9f9;
}
</style>
