<!--
 * @Author: your name
 * @Date: 2019-11-09 14:56:17
 * @LastEditTime: 2019-11-29 18:12:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Myfooter.vue
 -->
<template>
    <div class="insBox">
         <i class="el-icon-arrow-left" @click="back"></i>
        <span>设置</span>
    </div> 
</template>

<script>

export default {
  name: 'InstallHead',
  data () {
    return {
       
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>
<style scoped>
.insBox{
    width:100%;
    height:.5rem;
    line-height:.5rem;
    background:#fff;
}
i{
    padding-left:.1rem;
    box-sizing:border-box;
    font-size:20px;
}
span{
    display:inline-block;
    width:90%;
    text-align:center;
    font-size:18px;
}
</style>