<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-07 16:44:37
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 16:23:13
 -->
<template>
    <div class="box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div :class="{'swiper-slide':true, 'curry_menu':(curryName == key)?true:false }" v-for="(value,key,index) in child_menu " :key="index" @click="highLight(key)"> {{value}} </div>
        </div>
      </div>
      <div class="photoBox">
              <div class="bag">
                        <div class="package" v-for="(photo,value) in imgs" :key="value">
                            <img class="img1"  :src="photo.img"  alt="">
                            <p class="bigBag"> {{photo.name}}</p>
                            <p class="smallBag">{{photo.follows}}个粉丝</p>
                            <div class="add"> + </div>
                        </div> 
                        
              </div>
             <div class="bag">
                        <div class="package" v-for="(photo,value) in imgs" :key="value" >
                            <img class="img1"  :src="photo.img"  alt="">
                            <p class="bigBag"> {{photo.name}}</p>
                            <p class="smallBag">{{photo.follows}}个粉丝</p>
                            <div class="add" @click="pick"> + </div>
                        </div> 
                        
              </div>
        <div class="words">NBA社区</div>
              <div class="bag">
                        <div class="package" v-for="(photo,value) in imgs" :key="value">
                            <img class="img1"  :src="photo.img"  alt="">
                            <p class="bigBag"> {{photo.name}}</p>
                            <p class="smallBag">{{photo.follows}}个粉丝</p>
                            <div class="add"> + </div>
                        </div> 
                        
              </div>
              <div class="bag">
                        <div class="package" v-for="(photo,value) in imgs" :key="value">
                            <img class="img1"  :src="photo.img"  alt="">
                            <p class="bigBag"> {{photo.name}}</p>
                            <p class="smallBag">{{photo.follows}}个粉丝</p>
                            <div class="add"> + </div>
                        </div> 
                        
              </div>
      </div>
    </div>

    
</template>

<script>


import Swiper from 'swiper'
import 'swiper/css/swiper.css';

import axios from 'axios';

export default {
  name: 'Apartment',
  props:['curryName'],
  data () {
    return {
      child_menu : {
        "hot":'推荐',
        'mbd':"MBA", 
        'nba':"NBA", 
        'buhui1':"电子竞技", 
        'buhui2':"斯诺克", 
        'buhui3':"斗地主"
      },
      imgs: [],

    }
  },
created() {
    axios
      .get("http://localhost:3000/imgs")
      .then(res => {
        this.imgs = res.data;
        console.log(this.imgs)
      })
      .catch(err => {
        console.log(err);
      });
  },
  components:{
  },
  methods:{
    highLight:function(key) {
      this.$parent.functionName(key)
    }
  },
  mounted() {
      
      new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        pagination: {
            // el: '.swiper-pagination',
            // clickable: true,
        }
     });
      
           
    }
 } 
</script>

<style lang="scss" scoped>
 .swiper-container {
      width: 100%;
      height: .3rem;
      margin-top: .1rem;
    }
    .swiper-slide {
      display: flex;
      text-align: center;
      font-size: 18px;
      background: #fff;
      margin-right: .1rem;
      /* Center slide text vertically */
      display: -webkit-box;
      font-weight: 600;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .words{
      width: 100%;
      height: .2rem;
      font-size: 18px;
      font-weight: 600;
      text-indent: .3rem;
      // margin-top: .1rem;
      margin-bottom: .15rem;
    }
    .photoBox{
      width: 100%;
      height: 100%;
      // background-color: pink;
      margin-top: .2rem;
      
        .bag{
          width: 100%;
          height:2rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          // background-color: pink;
          overflow-x: hidden;
        .package{
          width: 25%;
          height:2rem;
          text-align: center;
          // background-color: green;
          .img1{
            width: .8rem;
            height: .8rem;
            margin-left: .05rem;
          }
          .bigBag{
            font-size: .2rem;
            font-weight: 600;
            text-align: center;
            text-align: .1rem;
            margin-top: .1rem;
          }
          .smallBag{
            margin-top: .1rem;
            text-align: .2rem;
          }
          .add{
            margin-top: .1rem;
            color: rgb(0, 187, 255);
          }
        } 
      }
    }
    .curry_menu {
        color: red;
    }

</style>