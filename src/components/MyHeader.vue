<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-11-30 17:06:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="mybox">
        <i class="el-icon-arrow-left" @click="back"></i>
       <p>我的</p>
       <span>
            <i class="el-icon-message" @click="msg"></i>
            <!-- <router-link to="/InstallPage" class="shezhi"> -->
            <i class="el-icon-setting" @click="removeLog"></i>
            <!-- </router-link> -->
       </span>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
       
    }
  },
  methods:{
    removeLog(){

        this.$router.push("./InstallPage");
        //  localStorage.removeItem("userName");
    },
    msg(){
        this.$router.push("./MessagePage");
    },
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.mybox{
    width:100%;
    height:.5rem;
    background:#fff;
    display:flex;
}
p{
    display: inline-block;
    width:70%;
    line-height:.5rem;
    padding-left:1.4rem;
    box-sizing: border-box;
    font-size:20px;
}
span{
    line-height:.5rem;
    font-size:22px;
    .el-icon-setting{
        padding-left:.1rem;
    }

}
.InstallPage{
  display:inline;
}
.el-icon-arrow-left{
  line-height:.5rem;
  font-size:22px;
  margin-left:.1rem;
}
</style>
