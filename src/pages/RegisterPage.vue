<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-11-28 17:35:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="regBox">
      <RegHeader></RegHeader>
  </div>
</template>

<script>
import RegHeader from '../components/RegHeader' 
 
export default {
  name: 'Register',
  data () {
    return {
  
    }
  },
  components:{
      RegHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.regBox{
  background:#f1f9ff;
}
</style>
