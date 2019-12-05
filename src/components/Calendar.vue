<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-26 16:41:00
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 09:46:10
 -->
<template>     
    <div class="box">
      
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" > 1<br/>月</div>
      <div class="swiper-slide" > 2<br/>月</div>
      <div class="swiper-slide" > 3<br/>月</div>
      <div class="swiper-slide" > 4<br/>月</div>
      <div class="swiper-slide" > 5<br/>月</div>
      <div class="swiper-slide" > 6<br/>月</div>
      <div class="swiper-slide" > 7<br/>月</div>
      <div class="swiper-slide" > 8<br/>月</div>
      <div class="swiper-slide" > 9<br/>月</div>
      <div class="swiper-slide" > 10<br/>月</div>
      <div class="swiper-slide" > 11<br/>月</div>
      <div class="swiper-slide" > 12<br/>月</div>
    </div>
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
  </div>
    </div> 
</template>
<script>

import Swiper from 'swiper'
import 'swiper/css/swiper.css';

export default {
    name:"MentPart",
     data(){
        return {
            
        }
    },
    mounted(){
    //    new Swiper ('.swiper-container', {})
      new Swiper('.swiper-container', {
        slidesPerView: 9,
        //spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
     })
    }
}
</script>
<style lang="scss"   scoped>
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
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
</style>