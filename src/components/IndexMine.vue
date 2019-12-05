<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-12-04 18:03:53
 * @LastEditors: losn
 * @LastEditTime: 2019-12-04 21:47:07
 -->
<template>
	<div class="indexmine">
		<img class="touxiang" :src="this.imgs" alt="" />
		<p><span class="ming" @click="login(tishi)">{{tishi}}</span>{{this.name}}</p>
		<img class="xingxing" src="../assets/img/indexxx.png" alt="" />
		<img class="jiantou" src="../assets/img/indexjt.png" alt="" />
		<span class="tj">根据关注为您推荐首页</span>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
	   name:'',
	   imgs:"",
	   tishi:"请登录"
    }
  },
    //    mounted () {
    //        let username=localStorage.getItem("userName");
	// 	   this.name=username;
	// 	//    let username=localStorage.getItem("img");
	// 	//    this.name=username;
	// 	axios.get('http://localhost:3000/headImg/')
	// 	.then(res=>{
	// 		let imgCon=res.data;
	// 		console.log(res.data);
	// 		for(let i in imgCon){
	// 			if(imgCon[i].userName==this.name){
	// 					this.img=imgCon[i].src;
	// 					console.log(this.img);
	// 			}else{
	// 				this.img="static/img/head1.jpg"
	// 			}
				
	// 		}
	// 	})
	// }
	 methods:{
       showUser(){
           let username=localStorage.getItem("userName");
           this.name=username;
        //    console.log(this.name);
	   },
	   login(tishi){
		   console.log(tishi);
		   if(tishi=="请登录"){
			   this.$router.push('/LoginPage');
		   }
	   }
   },
       mounted () {
            this.showUser();
            // console.log(this.name);
            if(this.name==null){
                this.isShow=true;
                this.isName=false;
				this.imgs="static/img/head.png";
				this.tishi="请登录"
            }else{
                this.isShow=false;
                this.isName=true;
                // this.imgs="static/img/head1.jpg";
                this.hasImg=true;
				this.hasHead=false;
				this.tishi="欢迎您，";
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

<style lang="scss" scoped="scoped">
	.indexmine{
		width: 94%;
		margin: 0 auto;
		height: .42rem;
		/*background: pink;*/
		padding-top: .2rem;
		.touxiang{
			width: .29rem;
			height: .29rem;
			float: left;
			border-radius: 50%;
		}
		p{
			color: #3d3d3d;
			font-size: .12rem;	
			display: inline-block;
			line-height: .3rem;
			margin-left: .08rem;
			.ming{
				float: left;
				color: #3d3d3d;
				font-size: .12rem;	
			}
		}
		
		.tj{
			color: #9c9c9c;
			font-size: .11rem;
			line-height: .3rem;
			float: right;
			margin-right: .12rem;
		}
		.jiantou{
			width: .12rem;
			float: right;
			margin-right: .1rem;
		}
		.xingxing{
			width: .24rem;
			float: right;
		}
	}
</style>