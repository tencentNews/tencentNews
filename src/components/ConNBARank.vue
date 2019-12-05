<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:08:26
 * @LastEditors: 玉兰琼馨
 * @LastEditTime: 2019-12-05 11:58:22
 -->
<template>
  <div class="ball">
    <ConNBAHeader></ConNBAHeader>
        <div class="hotBox"  v-for="(value,key,index) in allrank" :key="index">
            <p class="pSpan">{{key}}</p>
            <div class="hot">
            <ul v-for="(item,index) in value" :key="index">
                <li>
                    <div class="hotBox1">
                        <span>{{item.id}}</span>
                        <img :src="item.img">
                        <span class="spanBox">{{item.name}}</span>
                    </div>
                    <span>{{item.num1}}</span>
                    <span>{{item.num2}}</span>
                    <span>{{item.num3}}</span>
                    <span>{{item.num4}}</span>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
import ConNBAHeader from "@/components/ConNBAHeader.vue";
import axios from 'axios';
export default {
  name: 'ConNBARank',
  components:{
      ConNBAHeader
  },
  data () {
      return{
            rank:{},
            name:"item.id",
            allrank:{}
      }
  },
  created(){   
     axios.get('http://localhost:3000/rank')
     .then(res=>{ 
         console.log(res.data);
        this.allrank = res.data;
        console.log(this.allrank);
     })
     .catch(err=>{
         console.log(err);
     });
    }
}
</script>
<style lang="scss" scoped type="text/css">
.ball{
    background-color: white;
    width:100%;
    .hotBox{
        height:auto;
        p{
            height: .2rem;
            background: #d4cece;
            width: 100%;
            padding: .1rem 0px 0px .1rem;
        }
        .hot{
            ul{
            width:95%;
            border-top: 1px solid #d4cece;
            margin: 0px auto;
            li{
                height:.4rem;
                align-items: center;
                display:flex;
                justify-content: space-between;
                .hotBox1{
                    line-height: .4rem;
                    .spanBox{
                        color:#aaa7a7;
                    }  
                    img{
                        height:.2rem;
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
}

</style>
