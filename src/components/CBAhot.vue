<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-03 11:38:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
    <div class="hotBox">
        <p class="title">热门比赛</p>
        <ul>
            <li v-for="(watch,index) in watchs" :key="index">
                <router-link :to='"/DetailPage/"+watch.id' class="lis">
                    <div class="team1">
                        <span>{{watch.teamOne}}</span>
                        <img :src="watch.oneImg" alt="">
                    </div>
                    <div class="grade">
                        <p class="gradeCon">
                            <span>{{watch.oneGrade}}</span>
                            <span>-</span>
                            <span>{{watch.twoGrade}}</span>
                        </p>
                        <p class="backPlay">集锦，回放</p>
                    </div>
                    <div class="team2">
                        <span>{{watch.teamTwo}}</span>
                        <img :src="watch.twoImg" alt="">
                    </div>
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
  created(){
      axios.get("http://localhost:3000/hotMatch")
      .then(res=>{
          console.log(res.data);
          this.watchs=res.data;
      })
  }
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.hotBox{
     width:100%;
     background:#fff;
}
.title{
    width:.8rem;
    height:.3rem;
    line-height:.3rem;
    text-align:center;
    color:#fff;
    margin-left:.2rem;
    background:blue;
}
ul{
    width:90%;
    margin:0 auto;
    background:#fff;
    padding-bottom:.1rem;
    // box-shadow: 3px 3px 3px 0 #ccc;
    box-shadow: #ccc 0px 0px 7px;
}
.lis{
    width:100%;
    height:.6rem;
    // background:skyblue;
    box-sizing:border-box;
    padding-top:.1rem;
    display:flex;
    justify-content:space-around;
}
.team1{
    height:.6rem;
    line-height:.6rem;
    span{
        float:left;
    }
    img{
        float:left;
        margin-top:.15rem;
        margin-left:.1rem;
    }
}
.grade{
    margin-top:.12rem;
    .backPlay{
        font-size:12px;
        color:#ccc;
    }
    .gradeCon{
        font-size:18px;
    }
}
.team2{
    height:.6rem;
    line-height:.6rem;
    span{
        float:left;
    }
    img{
        float:left;
        margin-top:.15rem;
        margin-left:.1rem;
    }
}
img{
    width:.3rem;
    height:.3rem;
}
</style>
