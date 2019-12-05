<template>
	<div class="detailsaicheng">
		赛程
		<!--<div class="hotBox"  v-for="(value,key,index) in allScreen" :key="index">
            <p class="pSpan">{{key}}</p>
            <div class="hot">
	            <ul v-for="(item,index) in value" :key="index">
	                <li>
	                    <div class="hotBox1">
	                        <span>{{item.hour}}</span><br>
	                        <span class="spanBox">{{item.styleDay}}</span>
	                    </div>
	                </li>
	                <li>
	                    <div class="hotBox2">
	                            <img :src="item.imgOne" >
	                            <span>{{item.userOne}}</span>
	                    </div>
	                    <div class="hotBox2">
	                        <img :src="item.imgTwo" >
	                        <span>{{item.userTwo}}</span>
	                    </div>
	                </li>
	                <li class="spanBox"> 
	                    <span>{{item.numOne}}</span>
	                    <span class="spanBox2">{{item.numTwo}}</span>
	                </li>
	                <li class="spanBox">
	                    <i class="el-icon-video-play"></i>
	                    <span>{{item.title}}</span>
	                </li>
	            </ul>
	        </div>
        </div>-->
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"DetailSaiCheng",
	    data(){
	        return {
	            panScreens:{},
	            name:"item.id",
	            allScreen:{}
	        }
	    },
	    created(){
	    	// let name=this.$store.state.content;
	    	// console.log("saicheng store的"+name);
	    	// axios.get('/panScreens?q='+name)
		    // .then(res=>{ 
		    //     console.log(res.data);
		    //     this.allScreen = res.data;
		    //     console.log(this.allScreen);
		    // })
		    // .catch(err=>{
		    //     console.log(err);
		    // });
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.detailsaicheng{
	    background-color: white;
	    /*width:100%;
	    height:800px;
	    padding-top: .4rem;*/
	   	width: 92%;
	   	margin: 0 auto;
	   	padding-top: .2rem;
	    .pSpan{
	        // position: fixed;
	        // top: .4rem;
	    }
	    p{
	        height: .2rem;
	        background: #d4cece;
	        width: 100%;
	        padding: .1rem 0px 0px .1rem;
	    }
	    .hot{
	        // margin-top:.3rem;
	        ul{
	        display:flex;
	        height:.5rem;
	        justify-content: space-between;
	        align-items: center;
	        width:95%;
	        border-top: 1px solid #d4cece;
	        margin: 0px auto;
	        li{
	            width:22%;
	            .hotBox1{
	                font-size:12px;
	                .spanBox{
	                    color:#aaa7a7;
	                }  
	            }
	            .hotBox2{
	                font-size:12px;
	                img{
	                    width:.14rem;
	                }
	            }
	        }
	        .spanBox{
	            color:#aaa7a7;
	            font-size:12px;
	            text-align:right;
	            .spanBox2{
	                color:black;
	            }
	            }
	        }
	    }
	}
	.box:nth-child(2){
	    margin-top:.3rem;
	}
</style>