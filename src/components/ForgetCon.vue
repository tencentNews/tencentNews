<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-02 16:16:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
    <div class="loginBox">
        <div class="indexBox">
            <span class="btnPhone" @click="handePhone">手机号找回</span>
            <span class="btnEmail" @click="handeEmail">邮箱找回</span>
        </div>
        <div class="phoneBox" v-show="isPhone">
            <p style="margin-left:.8rem;">请输入您的手机号：</p>
            <el-input placeholder="请输入您的手机号" v-model="userphone" clearable class="text"></el-input>
             <p style="margin-left:.8rem;margin-top:.15rem;">请输入您的用户名：</p>
            <el-input placeholder="请输入您的用户名" v-model="username" clearable class="text"></el-input>
            <input type="text" class="checkma" v-model="vcode" > 
            <span  @click="generatedCode" class="checkCode">{{ccode}}</span>
            <el-button plain class="btnPhone" @click="handePhones">找回密码</el-button>
            <p style="margin-top:.3rem;margin-left:.8rem" v-show="isPassword">
                <span>亲爱的用户大大，您的密码找回来啦!</span><br>
                密码：{{password}}
            </p>
        </div>
        <div class="emailBox" v-show="isEmail">
            <p style="margin-left:.8rem;">请输入您的邮箱：</p>
            <el-input placeholder="请输入您的邮箱" v-model="useremail" clearable class="text"></el-input>
             <p style="margin-left:.8rem;margin-top:.15rem;">请输入您的用户名：</p>
            <el-input placeholder="请输入您的用户名" v-model="username" clearable  class="text"></el-input>
            <input type="text" class="checkma" v-model="vcode" > 
            <span  @click="generatedCode" class="checkCode">{{ccode}}</span>
            <el-button plain class="btnPhone" @click="handeEmails">找回密码</el-button>
            <p style="margin-top:.3rem;margin-left:.8rem" v-show="isPassword">
                <span>亲爱的用户大大，您的密码找回来啦!</span><br>
                密码：{{password}}
            </p>
        </div>
         <p style="margin-top:1.5rem;margin-left:1rem;color:#ccc">@腾讯科技技术有限公司提供</p>
  </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
  name: 'LoginHead',
  data () {
    return {
        userphone:'', //用户手机号
        useremail:'',  //用户邮箱
        username:'',   //用户名
        ccode:'',     //点击生成的验证码
        vcode:'',     //输入框中输入的验证码
        isPhone:true,   //是否显示手机找回密码的页面
        isEmail:false,  //是否显示邮箱找回密码的页面
        password:'',    //找回的密码
        isPassword:false  //是否显示找回的密码
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
        handePhone(){
            this.isPhone=true;
            this.isEmail=false;
    },
        handeEmail(){
            this.isPhone=false;
            this.isEmail=true;
    },
        handePhones(){
            console.log("aa")
            let codestatus = this.checkCode();
            if(codestatus!=1){
                Toast({
                    message: '验证码输入错误',
                    position: 'bottom',
                    duration: 2000
                });
            }else{
                axios.get('http://localhost:3000/usermsg?userPhone='+this.userphone)
                .then(res=>{
                    console.log(res.data);
                    let pass=res.data;
                    for(let i in pass){
                        if(pass[i].userPhone==this.userphone){
                            this.isPassword=true;
                            console.log(pass[i].passWord);
                            this. password=pass[i].passWord;
                             
                        }
                    }
                })
                .catch(err=>{
                    console.log("服务器错误");
                })
            }
        },
        handeEmails(){
            let codestatus = this.checkCode();
            if(codestatus!=1){
                Toast({
                    message: '验证码输入错误',
                    position: 'bottom',
                    duration: 2000
                });
            }else{
                axios.get('http://localhost:3000/usermsg?userEmail='+this.useremail)
                .then(res=>{
                    console.log(res.data);
                    let pass=res.data;
                    for(let i in pass){
                        if(pass[i].userEmail==this.useremail){
                            this.isPassword=true;
                            console.log(pass[i].passWord);
                            this. password=pass[i].passWord;
                        }
                    }
                })
                .catch(err=>{
                    console.log("服务器错误");
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
.phoneBox{
    height:2.85rem;
    margin-top:.3rem;
}
.text{
    width:2.3rem;
    margin-top:.2rem;
    margin-left:.75rem;
    outline: none;
}
.indexBox{
    margin-top:.2rem;
    width:100%;
    // margin-left:.35rem;
    padding-right:.5rem;
    box-sizing:border-box;
    display:flex;
    justify-content:space-around;
}
.btnPhone{
    width:2.3rem;
    height:.4rem;
    margin-left:.75rem;
    margin-top:.2rem;
}
.btnEmail{
    width:1.1rem;
    height:.4rem;
    margin-left:.75rem;
    margin-top:.2rem;
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
    height:1.3rem;
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
.emailBox{
    height:2.85rem;
    margin-top:.3rem;
}
.searchCodep{
    clear:both;
    margin-top:1rem;
    margin-left:1.7rem;
}
.searchCodes{
    clear:both;
    margin-top:1rem;
    margin-left:1.7rem;
}
</style>
