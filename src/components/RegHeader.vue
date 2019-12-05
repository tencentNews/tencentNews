<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-12-02 16:43:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
    <div class="loginBox">
        <p>注册</p>
        <div class="logincon">
            <el-input placeholder="请输入用户名" v-model="username" clearable class="text"></el-input><span>*</span>
            <el-input placeholder="请输入手机号码" v-model="userphone" clearable class="text"></el-input><span>*</span>
            <el-input placeholder="请输入邮箱号" v-model="useremail" clearable class="text"></el-input><span>*</span>
            <el-input placeholder="请输入密码" v-model="password" show-password class="text"></el-input><span>*</span>
            <el-button plain class="btnReg" @click="handeChange" style="background:#f1f9ff">注册</el-button>
        </div>
         <div class="imgBox">
           @腾讯科技技术有限公司
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
        password:'',
        userphone:'',
        useremail:''   
 }
  },
  methods:{
      
       //登录验证
       handeChange(){
            //用户名验证
            // var name= /^[a-zA-Z0-9_-]{4,16}$/;
            var name= /[\u4E00-\u9FA5]/;
            //手机号码验证
            var phone= /^1[3,5,6,7,8,9]\d{9}$/;
            //邮箱验证
            var email=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //密码强度验证，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
            var pass= /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
            
           if(this.username==""||this.password==""){
                    Toast({
                    message: '带星号的为必填项',
                    position: 'bottom',
                    duration: 2000
            });
                // alert("输入框不能为空");
            }else if(!name.test(this.username)){
                Toast({
                    message: '请输入正确的用户名',
                    position: 'bottom',
                    duration: 2000
            });
            
            }else if(!phone.test(this.userphone)){
                     Toast({
                    message: '请输入正确的手机号',
                    position: 'bottom',
                    duration: 2000
            });
                
            }else if(!email.test(this.useremail)){
               Toast({
                    message: '请输入正确的邮箱',
                    position: 'bottom',
                    duration: 2000
            });
               
            }else if(!pass.test(this.password)){
               Toast({
                    message: '密码强度太弱',
                    position: 'bottom',
                    duration: 2000
            });
                alert("密码强度太弱");
            }
            else {
              var newData={
              "id":"",
              "userName":this.username,
              "userPhone":this.userphone,
              "userEmail":this.useremail,
              "passWord":this.password
            }
                axios.post('http://localhost:3000/usermsg',newData)
                .then(res=>{
                    console.log(res.data);
                    if(res.data){
                         this.$router.push('/LoginPage');  
                    }else{
                        Toast({
                            message: '请重新注册',
                            position: 'bottom',
                            duration: 2000
                        });
                    }
                      
                })
                .catch(err=>{
                  console.log("服务器错误"+err);
                }) 
            }
      },  
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
.btnReg{
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
span{
  margin-left:.2rem;
  color:red;
}
.imgBox{
    height:1.5rem;
    padding-left:1.1rem;
    padding-top:.8rem;
    box-sizing: border-box;
    color:#ccc;
}
img{
    width:.5rem;
    height:.5rem;
    margin-right:.3rem;
}
 
</style>
