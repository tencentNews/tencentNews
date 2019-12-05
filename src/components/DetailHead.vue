<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-04 11:38:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
    <div class="DetailBox">
        <div class="header">
            <div class="headBack">
                <p class="nowhead" v-show="isShow">
                    <span><i class="el-icon-arrow-left" @click="back"></i></span>
                    <span>{{match.teamOne}}&nbsp;&nbsp;&nbsp;VS&nbsp;&nbsp;&nbsp;{{match.teamTwo}}</span>
                    <span><i class="el-icon-edit-outline"></i></span>
                </p>
                <p class="videohead" v-show="isChange">
                    <span><i class="el-icon-arrow-left" @click="back"></i></span>
                    <span>播放视屏</span>
                    <span><i class="el-icon-edit-outline"></i></span>
                </p>
            </div>
        </div>
        <div class="videos">
          
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
  name: 'DetailHead',
  props:['id'],
  data () {
    return {
        isShow:true,
        isChange:false,
        match:{},
        player: null
    }
  },
  created(){
      console.log(this.id);
      axios.get('http://localhost:3000/hotMatch/'+this.id)
      .then(res=>{
          console.log(res.data);
          this.match=res.data;
          console.log("ddd"+this.match.video_url);
      })
  },
    methods:{
        back(){
            this.$router.go(-1);
        },
  },
 
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.nowhead{
    width:100%;
    height:.5rem;
    display:flex;
    justify-content:space-around;
    align-items: center;
    color:#fff;
    font-size:18px;
    position:fixed;
    left:0;
    top:0;
} 
.videohead{
    width:100%;
    height:.5rem;
    background:-webkit-linear-gradient(left,rgba(174, 65, 184,.5),rgb(142, 173, 241)) no-repeat;
    display:flex;
    justify-content:space-around;
    align-items: center;
    font-size:20px;
    color:#fff;
    position:fixed;
    left:0;
    top:0;
}
.videos{
    width:100%;
    height:2.3rem;
    background:antiquewhite;
    img{
        width:100%;
        height:100%;
    }
}

</style>
