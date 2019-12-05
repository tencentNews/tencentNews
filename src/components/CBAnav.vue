<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-03 10:03:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
     <div class="navBox">
         <ul>
             <li>
                <router-link to='/LoaddingPage'>
                    <img src="../assets/img/cbanav1.png" alt="">
                    <span>赛程</span>
                </router-link>
             </li>
             <li>
                <router-link to='/LoaddingPage'>
                    <img src="../assets/img/cbanav2.png" alt="">
                    <span>排行</span>
                </router-link>
             </li>
             <li>
                <router-link to='/LoaddingPage'>
                    <img src="../assets/img/cbanav2.png" alt="">
                    <span>视频</span>
                </router-link>
             </li>
         </ul>
     </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
  name: 'LoginHead',
  data () {
    return {
       watchs:[]
    }
  },
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
ul{
    width:100%;
    height:.5rem;
    background:#fff;
    display:flex;
    justify-content:space-around;
    margin-top:.1rem;
    img{
        width:.3rem;
        height:.3rem;
        float:left;
        margin-top:.1rem;
    }
    span{
        float:left;
        margin-top:.15rem;
        font-size:18px;
        margin-left:.1rem;
    }
}
</style>
