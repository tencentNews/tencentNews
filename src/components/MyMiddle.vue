<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-11-30 16:57:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="myBox">
      <div class="login">
            <p>
               <!-- <img src="../assets/img/head.png" alt="" > -->
                 <img :src="imgs" alt="" class="imgs">
            </p>
            <p>
                <router-link to="/LoginPage" v-show="isShow">登录/</router-link>
                <router-link to="/RegisterPage" v-show="isShow">注册</router-link>
                <span v-show="isName">{{name}}</span>     
            </p>
            
      </div>
      <div class="list">
          <div class="vip">
              <p>
                  <img src="../assets/img/head1.png" alt="">
              </p>
              <p>
                  <span>会员中心</span>
                  <span>首月半价</span>
              </p>
          </div>
          <div class="purse">
              <p>
                  <img src="../assets/img/head2.png" alt="">
              </p>
              <p>
                  <span>我的钱包</span>
                  <span>钻石/观赛卷</span>
              </p>
          </div>
          <div class="pack">
              <p>
                  <img src="../assets/img/head3.png" alt="">
              </p>
              <p>
                  <span>我的背包</span>
                  <span>道具/奖品</span>
              </p>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
       name:'',
       isShow:'',
       isName:'',
       imgs:'',
       
    //    hasImg:'',
    //    hasHead:''
    }
  },
   methods:{
       showUser(){
           let username=localStorage.getItem("userName");
           this.name=username;
        //    console.log(this.name);
       }
   },
       mounted () {
            this.showUser();
            // console.log(this.name);
            if(this.name==null){
                this.isShow=true;
                this.isName=false;
                this.imgs="static/img/head.png";
            }else{
                this.isShow=false;
                this.isName=true;
                // this.imgs="static/img/head1.jpg";
                this.hasImg=true;
                this.hasHead=false;
                axios.get('http://localhost:3000/headImg/')
                .then(res=>{
                    let imgCon=res.data;
                    console.log(res.data);
                    for(let i in imgCon){
                        if(imgCon[i].userName==this.name){
                             this.imgs=imgCon[i].src;
                             console.log(this.imgs);
                        }else{
                            this.imgs="static/img/head1.jpg"
                        }
                        
                    }
                })
            }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.myBox{
    width:100%;
    height:1.8rem;
    background:#fff;
    margin-bottom:.15rem;
    margin-top:.6rem;
    
}
.login{
    width:100%;
    height:.9rem;
     line-height:.9rem;
    border-bottom:1px solid #ccc;
    display:flex;
    img{
    width:.5rem;
    height:.5rem;
    box-sizing: border-box;
    margin-top:.2rem;
    margin-left:.15rem;
}
}
.imgs{
    border-radius:50%;
}
.login p:nth-child(1){
    margin-right:.3rem;
}
.login p:nth-child(2){
    display:flex;
    font-size:18px;
}
.list{
    display:flex;
    justify-content:space-around;
}
.vip{
    display:flex;
    span{
        display:block;
    }
     
    span:nth-child(2){
        font-size:13px;
        color:#d6b48b;
    }
    img{
        width:.5rem;
        height:.5rem;
        margin-top:.16rem;
    }
}
.vip p:nth-child(2){
    margin-top:.25rem;
}
.purse{
    display:flex;
    span{
        display:block;
    }
    span:nth-child(2){
        font-size:13px;
        color:#7e848d;
    }
    img{
        width:.5rem;
        height:.5rem;
        margin-top:.16rem;
    }
}
.purse p:nth-child(2){
    margin-top:.25rem;
}
.pack{
    display:flex;
    span{
        display:block;
    }
     span:nth-child(2){
        font-size:13px;
        color:#7e848d;
    }
    img{
        width:.5rem;
        height:.5rem;
        margin-top:.16rem;
    }
}
.pack p:nth-child(2){
    margin-top:.25rem;
}

</style>
