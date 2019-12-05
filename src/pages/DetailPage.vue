 <!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-03 11:27:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="myBox">
      <DetailHead :id="id"></DetailHead>
  </div>
</template>

<script>
import DetailHead from '../components/DetailHead' 
 
export default {
  name: 'CBAPage',
  props:['id'],
  data () {
    return {
       
    }
  },
  components:{
        DetailHead
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
 
</style>
