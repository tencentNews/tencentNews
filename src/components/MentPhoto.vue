<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-26 16:41:00
 * @LastEditors: losn
 * @LastEditTime: 2019-12-04 14:24:07
 -->
<template>
      <div class="box">
            <!-- 这是一个神仙按钮 -->
            <!-- <input type="button" @click="shenxian_desc" value="降序按钮" />
            <input type="button" @click="shengxu_desc" value="升序按钮" /> -->
            <div class="iamyou">
            <div class="photoBox" >
               
                <div :class="getClassName(index)" v-for="(picture,index) in words" :key="index">
                      <img class="photo" :src="picture.img" />
                      <p class="wordBox">{{ picture.words }}</p>
                      <p class="goodphotoBox">
                        <img class="file" src="../assets/img/headFile.jpg" alt />
                        <span class="name">李小臭</span>
                        <span class="goods">{{ picture.num }}个赞</span>
                      </p>
                </div>
    
            </div>
            </div>
            <span ref="downSpan" style="display: none;">
                加载中……
            </span> 
      </div>
</template>
<script>
import axios from "axios";
import BScroll from 'better-scroll';

export default {
  name: "MentPart",
  data() {
    return {
      words: [],
      scroll:null,
      value:false
    };
    
  },
  updated() {
    this.scroll.refresh()
  },
  mounted() {
       this.scroll = new BScroll('.iamyou',{
            scrollY: true,//开启纵向滚动。
            click: true,
            
            pullUpLoad: {
                threshold: -10 // 在上拉到超过底部 10px 时，触发 pullingUp 事件
            }
        });
        this.scroll.on('pullingUp', () => {
          console.log("laile")
            this.$refs.downSpan.style.display = "block";
            //发请求
            axios
            .get("http://localhost:3000/words")
            .then(res => {
              this.words = this.words.concat(res.data);
              this.$refs.downSpan.style.display = "none";
              //console.log(this.words)
              this.scroll = this.scroll = new BScroll('.iamyou',{
                  scrollY: true,//开启纵向滚动。
                  click: true,
                  pullUpLoad: {
                      threshold: -10 // 在上拉到超过底部 10px 时，触发 pullingUp 事件
                  }
              });
            })
            .catch(err => {
              console.log(err);
            });                
        })        
        this.scroll.on('pullingDown', () => {
            
        }) 
  },
  methods: {
    getClassName: function (index){
      /*
        console.log("---")
        if ((index+1) % 2 == 0)
          return 'rightBox'
          //return {rightBox:true}
        else
          return 'leftBox'
          //return {leftBox:true}
        */
        return ((index + 1) % 2) == 0?'rightBox':'leftBox'
    },
    shenxian_desc: function (){
      console.log(this.words)//
      function desc(a,b) {
          return b.num - a.num
      }
      this.words.sort(desc)
    },
    shengxu_desc: function (){
      console.log(this.words)//
      function desc(a,b) {
          return a.num - b.num
      }
      this.words.sort(desc)
    }
  },
  created() {
    axios
      .get("http://localhost:3000/words")
      .then(res => {
        this.words = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>



<style lang="scss"   scoped>
.iamyou{
    width: 100%;
    height: 5rem;
    //height:100%;
    //background-color: rgb(148, 22, 22);
    overflow:auto;
}
.photoBox {
    width: 100%;
    height:auto;
    // background-color: pink;
    //overflow-x: hidden;
    //overflow-y: hidden;
    display: inline-block;
    justify-content: space-around;
    .leftBox {
            width: 48%;
            height: 3rem;
            // background-color: #666666;
            float: left;
            .photo {
                width: 100%;
                border-radius: 10px;
            }
    }
    .rightBox {
            width: 48%;
            height: 3rem;
            float: right;
            .photo {
                border-radius: 10px;
                width: 100%;
            }
    }
    .wordBox{
        width: 100%;
        // background-color: #33d1d6;
        height: .75rem;
        font-size: .15rem;
        line-height: .3rem;
        font-weight: 500;
        text-indent: .1rem;
    }
    .goodphotoBox{
        width: 100%;
        height: .45rem;
        // background-color: pink;
        display: flex;
        align-items: center;
        .file{
            width: .25rem;
            height: .25rem;
            margin-left: .1rem;
            // margin-top: .2rem;
            
        }
        .name {
          font-size: .15rem;
          font-weight: 600;
          margin-left: .1rem;

        }
        .goods{
          margin-left: .4rem;

        }
    }

}



</style>