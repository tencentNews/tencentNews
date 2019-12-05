<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-07 16:44:37
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 19:31:49
 -->
<template>
    <div class="box">
        <!-- <MentPart2></MentPart2> -->
        
        <div class="bigBox">
            
            <div v-for="(pig,index) in heyPig" :class="{leftBox:true, response:pig}" :key="index" @click="changeCls2(index)"> 
                {{buttonText[index]}}
            </div>        
            
        </div>
   
        <!-- <MentPhoto></MentPhoto> -->
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


        
        
        
        <!-- <Camera></Camera> -->

        <div class="camera">
            <img class="picture" src="../assets/img/camera.jpg" alt="">
              发布 
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import BScroll from 'better-scroll';

let m = {
    buttonText:['湿人社区', '发兽日历'],
    heyPig : [true, false],
}
export default {
  name: 'Apartment',
	props:['name'],
  data () {
    return m ;
    return{
    words: [],
      scroll:null,
      value:false
};

    
  },
  components:{
  },
  updated() {
    this.scroll.refresh()
  },
  mounted() {
        this.changeCls2(0);
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
    methods:{
        changeCls2(index) {
            if(index==0 ){
                this.$set(this.heyPig, 1, false)
                this.$set(this.heyPig, 0, true)
                this.showTable('/')
                // this.$router.push({path:'/Community/MentPhoto'});
            }else if(index==1){
                this.$set(this.heyPig, 1, true)
                this.$set(this.heyPig, 0, false)
                this.showTable('/')
                // this.$router.push({path:'/Community/Calendar'});     
            }
        },
        showTable(path){
            this.$router.push({path:path})
        },

       
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

<style lang="scss" scoped>
body{
  overflow-x:hidden; 
}
.middle{
  // margin-top: .7rem;
  display: flex;
  flex-direction: column;
  height: 100%;  
}
.headBox{
  // position:fixed; 
  z-index:10;
}
.feet{
  position: sticky;
  bottom: 0;
  left: 0;
}

.box .bigBox .response {
    background-color: #3883f6;
    color:#fff;
    border-radius: 30px;

}
.bigBox{
    // margin-top: .7rem;
    width: 100%;
    overflow-x:hidden; 
    height: .6rem;
    // background-color: pink;
    font-size: .2rem;
    color:white;
    line-height: .4rem;
    .leftBox{
        width: 1.2rem;
        height:.4rem;
        color:#333;
        // background-color: #3883f6;
        border-radius: 30px;
        float: left;
        margin-left: .5rem;
        text-align: center;
    }
    .rightBox{
        width: 1.2rem;
        height:.4rem;
        color:#333;
        border-radius: 30px;
        float: left;
        text-align: center;
        margin-left: .4rem;
    }
}

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

.camera{
  position: fixed;
  margin-left: .9rem;
  bottom: 1rem;
  width: 1.8rem;
  height: .6rem;
  border-radius: 30px;
  background-color: white;
  display: flex;
  align-items:center;
   font-size: .2rem;
    font-weight: 600;
    box-shadow: 3px 3px 5px black;
  .picture{
    width: .4rem;
    height:.4rem;
    margin-left: .5rem;
    margin-right: .1rem;
   
  }
}

</style>