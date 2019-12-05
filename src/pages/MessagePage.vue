<!--
 * @Author: your name
 * @Date: 2019-11-09 14:56:17
 * @LastEditTime: 2019-11-29 21:16:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Myfooter.vue
 -->
<template>
    <div class="insBox">
         <i class="el-icon-arrow-left" @click="back"></i>
        <span>消息</span>
        <div class="msgCon">
            <img src="../assets/img/msg.png" alt="">
            <p>暂无消息</p>
        </div>
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
img{
    width:.7rem;
    height:.7rem;
    margin-top:2.2rem;
    margin-left:1.5rem;
}
p{
    text-align:center;
    margin-top:.2rem;
    color:#ccc;
}
.msgCon{
    height:6rem;
    background:#f9f9f9;
}
</style>