<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-07 16:44:37
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 17:28:26
 -->
<template>
    <div class="box">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                        <a v-bind:href="img.href"><img :src="img.src" ></a>
                    </div>
                </div>      
            </div> 

            <p class="talk-one">活动 &nbsp;  &nbsp; &nbsp; &nbsp;  票选定最高价   赢心仪球星签名照</p>
            <div class="picBox">
                <img src="../assets/img/pic1.jpg" alt="">
                <img src="../assets/img/pic2.jpg" alt="">
                <img src="../assets/img/pic1.jpg" alt="">
                <img src="../assets/img/pic2.jpg" alt="">
                <img src="../assets/img/pic1.jpg" alt="">
                <img src="../assets/img/pic2.jpg" alt="">
                <img src="../assets/img/pic1.jpg" alt="">
                <img src="../assets/img/pic2.jpg" alt="">
            </div>

            <div class="lemon">
                <div class="tou">
                    <img class="touPic" src="../assets/img/tou.jpg" alt="">
                    <img class="touFans" src="../assets/img/fans.jpg" alt="">
                </div>
               
            </div>
            <p class="kakao"> 只有五块钱，各位怎么选？</p>
            <p class="kakao2">楼主：要是我,我选五个贾玲.各位对不住，先走一步。</p>
            <div class="popo">
                <img class="lvyue" src="../assets/img/pic1.jpg" alt="">
                <img class="lvyue" src="../assets/img/pic2.jpg" alt="">
            </div>
           
            <div class="lemon">
                <div class="tou">
                    <img class="touPic" src="../assets/img/tou.jpg" alt="">
                    <img class="touFans" src="../assets/img/fans.jpg" alt="">
                </div>
               
            </div>
            <p class="kakao"> 只有五块钱，各位怎么选？</p>
            <p class="kakao2">楼主：要是我,我选五个贾玲.各位对不住，先走一步。</p>
             <div class="popo">
                <img class="lvyue" src="../assets/img/pic1.jpg" alt="">
                <img class="lvyue" src="../assets/img/pic2.jpg" alt="">
            </div>
            <div class="lemon">
                <div class="tou">
                    <img class="touPic" src="../assets/img/tou.jpg" alt="">
                    <img class="touFans" src="../assets/img/fans.jpg" alt="">
                </div>
               
            </div>
            <p class="kakao"> 只有五块钱，各位怎么选？</p>
           
            <p class="kakao2">楼主：要是我,我选五个贾玲.各位对不住，先走一步。</p>
             <div class="popo">
                <img class="lvyue" src="../assets/img/pic1.jpg" alt="">
                <img class="lvyue" src="../assets/img/pic2.jpg" alt="">
            </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css';
import axios from 'axios';
export default {
  name: 'Apartment',
//   props:['curryName'],
  data () {
    return {
     imgs:[
        ]
    }
  },
created(){
    // fetch('api/bannerimgs')
    fetch('http://localhost:3000/bannerimgs')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.imgs = data;
         this.$nextTick(function () {
              let mySwiper = new Swiper('.swiper-container',{
                   autoplay:true,
                    speed:100,
                    grabCursor:true,
                    loop: true,
              });
        });
     })
     .catch(err=>{
       console.log(err);
     })
  },
  components:{

  },
  methods:{
   
  
 } 
}
</script>
<style lang="scss" scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
  width:98%;
  height: 1.7rem; 
  margin-top:.1rem;
  margin-left: auto;
  border-radius: 10px;
}
img{
  width:100%;
  height: 100%;
}
.talk-one
{
    width: 100%;
    height: .3rem;
    font-size: 16px;
    color: black;
    line-height: .3rem;
    text-indent: .2rem;
    font-weight: 600;
}
.picBox{
    width: 100%;
    height:1.5rem;
    // background-color: pink;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    margin:0 auto;
    img{
        width: 2rem;
        display: block;
        height: 1.25rem;
        margin-left: .1rem;
    }

}
.lemon{
    width: 100%;
    height: .65rem;
    // background-color: pink;
    .touPic{
        width: 1.8rem;
        height: .5rem;
        float: left;
        margin-left: .1rem;
    }
    .touFans{
        width: .8rem;
        height: .4rem;
        float: right;
        margin-right: .2rem;
    }
    
}
.kakao{
        height: .2rem;
        font-size: 20px;
        font-weight: 600;
        margin-top: .1rem;
        text-indent: .2rem;
    }
    .kakao2{
        height: .2rem;
        font-size: 16px;  
        text-indent: .2rem;
        color: gray;
        margin-top: .1rem;
    }
    
    .popo{
        width: 100%;
        height: 1.3rem;
        display: flex;
        justify-content: space-around;
        .lvyue{
            width: 48%;
        }
    }
</style>