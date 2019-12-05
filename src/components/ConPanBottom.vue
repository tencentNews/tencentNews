<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:08:26
 * @LastEditors: 玉兰琼馨
 * @LastEditTime: 2019-12-04 21:53:56
 -->
<template>
    <div class="footer" >
        <div class="box"  v-for="(item,index) in all" :key="index">
            <video autoplay loop controls muted>
                <source :src="item.video" type="video/mp4">
            </video>
            <span class="footSpan">{{item.name}}</span>
            <ul> 
                <li @onclick="goPage1()">{{item.pageOne}}</li>
                <li @onclick="goPage2(index)">{{item.pageTwo}}</li>
                <li @onclick="goPage3(index)">{{item.pageThree}}</li>
            </ul>
            <div class="divBox">
                <div class="left">
                    <div class="leftBox box">
                        <img :src="item.imgOne" >
                        <span>{{item.styleOne}}</span>
                    </div>
                    <div class="leftBox">
                        <span>{{item.date}}</span>
                        <span>{{item.time}}</span>
                    </div>
                    <div class="leftBox box">
                        <img :src="item.imgTwo" >
                        <span>{{item.styleTwo}}</span>
                    </div>
                </div>
                <div class="right">
                    <i class="el-icon-thumb"></i>
                    <span>5</span>
                    <i class="el-icon-chat-square"></i>
                    <span>3</span>
                    <i class="el-icon-news"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'ConPanBottom',
  data () {
      return{
          all:[],
      }
  },
  created(){
      axios.get("http://localhost:3000/all")
      .then(res=>{
          this.all=res.data;
      })
      .catch(err=>{
          console.log(err);
      });
  },
  methods:{
      goPage1(){
         this.$router.push({path:""});
      },
      goPage2(index){
         this.$router.push({path:"/ConNBARank"});
      },
      goPage3(index){
         this.$router.push({path:"/ConPerson"});
      },
      goPage4(index){
         this.$router.push({path:"/Team"});
      }
  }
}
</script>
<style lang="scss" scoped type="text/css">
.footer{
    height:500px;
    width:100%;
    .foot{
        height:1.5rem;
    }
    .footSpan{
        float:left;
        font-size:12px;
        height:.2rem;
        line-height:.2rem;
        width:.4rem;
        background:#ebe7e7;
        text-align:center;
        margin:.02rem .05rem ;
    }
    ul{
        display:flex;
        align-items: center;
        margin-top:.02rem;
        li{
            font-size:12px;
            height:.2rem;
            line-height:.2rem;
            background:#ebe7e7;
            padding:0px .07rem;
        }
    }
    .divBox{
        width:95%;
        display:flex;
        justify-content:space-between;
        align-items: center;
        margin:.06rem auto;
        .left{
            .leftBox{
                    float:left;  
                    width: .7rem;
                    text-align: center;
                span{
                    font-size:12px;
                }
                img{
                    height: .15rem;
                    display: inline-block; 
                    text-align:center; 
                }
            }
            .box{
                width:.3rem;
            }
        }
        .right{
            i{
                font-size:14px;
            }
            span{
                margin-right:.1rem;
            }
        }
    }
}
video,source{
    width:100%;
    height:2rem;
}
</style>
