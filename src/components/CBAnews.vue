<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-03 09:54:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
    <div class="newsBox">
        <ul>
            <li v-for="(cnew,index) in cnews" :key="index">
                <div class="content">
                    <p>{{cnew.newCon}}</p>
                    <p style="font-size:12px;color:#ccc;margin-top:.1rem">
                        <span>{{cnew.author}}</span>
                        <span>{{cnew.comDate}}</span>
                        <span>{{cnew.count}}</span>
                    </p>
                </div>
                <img :src="cnew.img" alt="">
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
       cnews:[]
    }
  },
  created(){
        axios.get("http://localhost:3000/news")
        .then(res=>{
            console.log(res.data);
            this.cnews=res.data;
        })
  }
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
ul{
    width:100%;
    margin-top:.1rem;
    margin-bottom:.5rem;
}
li{
    width:100%;
    height:1rem;
    font-size:16px;
    background:#fff;
    padding:.1rem .2rem;
    box-sizing:border-box;
    img{
        width:35%;
        height:100%;
        float:right;
    }
}
.content{
    width:60%;
    height:1rem;
    float:left;
}
</style>
