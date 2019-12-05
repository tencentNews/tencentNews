<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-11-30 16:43:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="InstallBox">
      <InstallHead></InstallHead>
      <InstallCon></InstallCon>
  </div>
</template>

<script>
import InstallHead from '../components/InstallHead' 
import InstallCon from '../components/InstallCon' 
 
export default {
  name: 'InstallPage',
  data () {
    return {
  
    }
  },
  components:{
      InstallHead,InstallCon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.InstallBox{
    height:6.66rem;
    background:#f9f9f9;
}
</style>
