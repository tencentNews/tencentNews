<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-11-26 21:26:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="loginBox">
      <LoginHead></LoginHead>
  </div>
</template>

<script>
import LoginHead from '../components/LoginHead' 
 
export default {
  name: 'LoginPage',
  data () {
    return {
  
    }
  },
  components:{
      LoginHead
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.loginBox{
  background:#f1f9ff;
}
</style>
