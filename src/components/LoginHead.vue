<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-02 16:47:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
    <div class="loginBox">
        <p>登录</p>
        <div class="logincon">
            <el-input placeholder="请输入用户名" v-model="username" clearable class="text"></el-input>
            <el-input placeholder="请输入密码" v-model="userpass" show-password class="text"></el-input>
            <input type="text" class="checkma" v-model="vcode" > 
            <span  @click="generatedCode" class="checkCode">{{ccode}}</span>
            <el-button plain class="btnLogin" @click="handeChange">登录</el-button>
            <router-link to='/ForgetCodePage'> 
               <span class="forgetCode">忘记密码</span>
            </router-link>
        </div>
        <div class="tableTitle"><span class="midText">其它登录方式</span></div>
        <div class="imgBox">
            <img src="../assets/img/weixin.png" alt="">
            <img src="../assets/img/weibo.jpg" alt="">
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
  name: 'LoginHead',
  data () {
    return {
        username:'',
        userpass:'',
        ccode:'', 
        vcode:'',
    }
  },
  methods:{
        checkCode(){
            let vcode = this.vcode
            let ccode = this.ccode
            if (vcode !== ccode) {
            Toast({
                message: '验证码输入错误',
                position: 'bottom',
                duration: 2000
            });
            // alert("验证码输入错误");
        } else {
            return 1
            }
    },
       //登录验证
       handeChange(){
           console.log("aa")
            let codestatus = this.checkCode();
            if(codestatus!=1){
                Toast({
                message: '验证码输入错误',
                position: 'bottom',
                duration: 5000
            });
        } 
        else if(this.username==""||this.userpass==""){
                   Toast({
                message: '输入框不能为空',
                position: 'bottom',
                duration: 2000
            });
                // alert("输入框不能为空");
            }else {
                axios.get('http://localhost:3000/usermsg')
                .then(res=>{
                    console.log(res.data);
                    let msg=res.data;
                    console.log(msg);
                    for(let i in msg){
                        if(msg[i].userName==this.username){
                            if(msg[i].userName==this.username && msg[i].passWord==this.userpass){
                                localStorage.setItem('userName',this.username);
                                // alert("登录成功");
                                this.$router.push('/MyPage')   
                         } else{
                              Toast({
                                message: '用户名或密码错误',
                                position: 'bottom',
                                duration: 2000
                            });
                        }
                    } 
                    else{   
                         Toast({
                            message: '用户名或密码错误',
                            position: 'bottom',
                            duration: 500
                        });
                    }  
                } 
            })
                .catch(err=>{
                    console.log("服务器错误" +err);
                })
            }
    
    },
      //点击后随机生成验证码
       generatedCode(){
           console.log("yanzhengma");
            const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            let code = ''
            for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * 36)
            code += random[index]
          }
           
           this.ccode = code;
           console.log(this.ccode);
       }
   },  
        mounted () {
            this.generatedCode();
    }
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.loginBox{
    width:100%;
}
p{
    width:100%;
    height:2rem;
    background-image:url(../assets/img/login.png);
    background-size:cover;
    margin-bottom:.3rem;
    font-size:22px;
    text-align:center;
}
.logincon{
    height:2.85rem;
}
.text{
    width:2.3rem;
    margin-top:.2rem;
    margin-left:.75rem;
    outline: none;
}
.btnLogin{
    width:2.3rem;
    margin-top:.2rem;
    margin-left:.75rem;
}
.checkma{
    width:1.1rem;
    height:.4rem;
    margin-top:.2rem;
    margin-left:.75rem;
    float:left;
    border:none;
    outline: none;
    text-align:center;
    border-bottom:1px solid #ccc;
    background:#f1f9ff;
    font-size:20px;
}
.checkCode{
    display:block;
    float:left;
    width:.8rem;
    height:.4rem;
    line-height:.4rem;
    margin-top:.2rem;
    margin-left:.35rem;
    text-align:center;
    font-size:20px;
    color:powderblue;
    border:1px solid #eee;
}
.imgBox{
    height:1.1rem;
    padding-left:1.2rem;
    padding-top:.3rem;
    box-sizing: border-box;
}
img{
    width:.5rem;
    height:.5rem;
    margin-right:.3rem;
}
.forgetCode{
    float:right;
    margin-right:.7rem;
    margin-top:.3rem;
    color:#ccc;
} 
.tableTitle {
    position: relative;
    margin: .4rem auto 0;
    width: 100%;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 14px;
    color: #ccc;
  }
 .midText {
    position: absolute;
    left: 50%;
    background-color: #f1f9ff;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
  }
</style>
