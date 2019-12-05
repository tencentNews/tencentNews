<!--
 * @Author: your name
 * @Date: 2019-11-09 14:56:17
 * @LastEditTime: 2019-12-04 21:52:33
 * @LastEditors: losn
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Myfooter.vue
 -->
<template>
    <div class="conBox">
        <div class="accounts">
            <router-link to="/LoaddingPage">
                 <span class="accoun">关于腾讯体育</span>
            </router-link>
            <span class="goImg">
                <i class="el-icon-arrow-right" v-show="isRight" @click="goShow"></i>
                <i class=" el-icon-success" v-show="isExact" style="color:skyblue" @click="reShow"></i>
            </span>
        </div>
        <div class="tv">
            <router-link to="/LoaddingPage">
                <span class="accoun">投电视</span>
            </router-link>
            <span class="goImg">
                <i class="el-icon-arrow-right" v-show="isRight1" @click="goShow1"></i>
                <i class=" el-icon-success" v-show="isExact1" style="color:skyblue" @click="reShow1"></i>
            </span>
        </div>
        <div class="play">
            <p class="playCon">
                <router-link to="/LoaddingPage">
                    <span class="accoun">WiFi和大王卡下自动播放</span>
                </router-link>
                <span class="goImg"><i class="el-icon-arrow-right"></i></span>
            </p>
            <p class="playCon">
                <router-link to="/LoaddingPage">
                    <span class="accoun">推送设置</span>
                 </router-link>
                <span class="goImg"><i class="el-icon-arrow-right"></i></span>
            </p>
            <p class="playCon">
                <router-link to="/LoaddingPage">
                    <span class="accoun">清除缓存</span>
                </router-link>
                <span class="goImg"><i class="el-icon-arrow-right"></i></span>
            </p>
        </div>
        <div class="help">
            <p class="helpCon">
                <router-link to="/LoaddingPage">
                    <span class="accoun">帮助与反馈</span>
                </router-link>
                <span class="goImg"><i class="el-icon-arrow-right"></i></span>
            </p>
            <p class="helpCon">
                <router-link to="/LoaddingPage">
                    <span class="accoun">版本</span>
                </router-link>
                <span class="news">发现新版本</span>
                <span class="goImg">
                    <i class="el-icon-arrow-right" v-show="isRight3" @click="goShow3"></i>
                    <i class=" el-icon-success" v-show="isExact3" style="color:skyblue" @click="reShow3"></i>
                </span>
            </p>
        </div>
         <div class="backLogin">
            <!-- <span class="accoun">退出登录</span> -->
            <el-button type="text" @click="dialogVisible = true" class="accoun" style="color:red">退出当前账号</el-button>
            <el-dialog class="tank"
                 
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <!-- <img src="static/img/head1.jpg" v-show="isShows" style="width:.5rem;height:.5rem;margin-left:1.25rem;">  -->
                <img :src="imgs" v-show="isShows" style="width:.5rem;height:.5rem;margin-left:1.25rem;"> 
                <p style="text-align:center">{{name}}</p>
                <p style="text-align:center;color:#ccc">{{message}}</p>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false" style="margin-right:.6rem">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false,removeLog()" style="margin-right:.2rem">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <p style="margin-top:.6rem;text-align:center;color:#ccc">@腾讯科技技术有限公司</p>
    </div> 
</template>

<script>
import axios from 'axios'
export default {
  name: 'InstallCon',
  props:['userName'],
  data () {
    return {
        dialogVisible: false,
        name:'',
        isShows:"",
        message:'',
        imgs:'',
        isExact:false,
        isRight:true,
        isExact1:false,
        isRight1:true,
        isExact3:false,
        isRight3:true,
    }
  },
   methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      showUser(){
           let username=localStorage.getItem("userName");
           this.name=username;
           console.log(this.name);
       },
        removeLog(){
           localStorage.removeItem("userName");
           this.$router.push('/MyPage');
           console.log("jjjj");
       },
       goShow(){
           this.isRight=false;
           this.isExact=true;
       },
       reShow(){
           this.isRight=true;
           this.isExact=false;
       },
        goShow1(){
           this.isRight1=false;
           this.isExact1=true;
       },
       reShow1(){
           this.isRight1=true;
           this.isExact1=false;
       },
        goShow3(){
           this.isRight3=false;
           this.isExact3=true;
       },
       reShow3(){
           this.isRight3=true;
           this.isExact3=false;
       },
    },
     mounted (){
        this.showUser();
        if(this.name==null){
            this.isShows=false;
            this.message="亲，您还未登录";
        }else{
            this.isShows=true;
            this.message="亲爱的用户大大，您确定要退出当前的账号吗？不要走，留下来好不好";
             axios.get('http://localhost:3000/headImg/')
                .then(res=>{
                    let imgCon=res.data;
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
<style lang="scss">
.accounts{
    width:100%;
    height:.5rem;
    line-height:.5rem;
    background:#fff;
    margin-top:.2rem;
    display:flex;
    justify-content: space-between;
    font-size:18px;
}
.el-icon-arrow-right{
    line-height:.5rem;
}
.accounts span :nth-child(1){
    padding-left:.2rem;
}
.accoun{
    margin-left:.2rem;
    font-size:18px;
    color:#000;
}
.goImg{
    margin-right:.2rem;
    font-size:18px;
    line-height:.5rem;
}
.tv{
    width:100%;
    height:.5rem;
    line-height:.5rem;
    background:#fff;
    margin-top:.2rem;
    display:flex;
    justify-content: space-between;
    font-size:18px;
}
.tv span :nth-child(1){
    padding-left:.2rem;
}
.play{
    width:100%;
    height:1.5rem;
    background:#fff;
    margin-top:.2rem;
    font-size:18px;
    .playCon{
        height:.5rem;
        line-height:.5rem;
        width:100%;
        background:#fff;
        border-bottom:1px solid #eee;
        display:flex;
        justify-content: space-between;
    }
}
.help{
    width:100%;
    height:1rem;
    background:#fff;
    margin-top:.2rem;
    font-size:18px;
    .helpCon{
        height:.5rem;
        line-height:.5rem;
        width:100%;
        background:#fff;
        border-bottom:1px solid #eee;
        display:flex;
        justify-content: space-between;
    }
}
.backLogin{
    width:100%;
    height:.5rem;
    line-height:.5rem;
    background:#fff;
    margin-top:.2rem;
    padding-left:1.2rem;
    box-sizing:border-box;
    font-size:18px;
}
.backLogin span :nth-child(1){
    padding-left:.2rem;
}
.el-dialog{
    margin-top:1.6rem !important;
    width: 90% !important;
}

.el-message-box{
    width:2.8rem;
}
.news{
    display:inline-block;
    font-size:12px;
    width:.8rem;
    height:.3rem;
    line-height:.3rem;
    text-align:center;
    border-radius:10px;
    background:red;
    margin-top:.1rem;
    color:#fff;
}
 
</style>