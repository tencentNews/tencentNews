<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:53:53
 * @LastEditors: 玉兰琼馨
 * @LastEditTime: 2019-12-05 11:41:49
 -->
 <template>
    <div class="person">
    <ConPersonHeader></ConPersonHeader>
        <div class="perBox">
            <span>球员</span>
            <div class="per">
                <span class="son">球队</span>
                <span>数据</span>
            </div>
        </div>
        <ul v-for="(value,index) in persons" :key="index">
            <li>
                <div class="liBox2">
                    <span class="pBox">{{value.num}}</span>
                    <img :src="value.img">
                    <div>
                        <p>{{value.user}}</p>
                        <span class="pBox">{{value.fen}}</span>
                        <span>{{value.ban}}</span>
                        <span>{{value.zhu}}</span>
                    </div>
                </div>
                <span>{{value.team}}</span>
                <span>{{value.shu}}</span>
            </li>
        </ul>
    </div>
 </template>
<script>
import axios from 'axios';
import ConPersonHeader from "@/components/ConPersonHeader.vue";

export default {
    name: 'ContestBall',
    components:{
        ConPersonHeader
    },
    data () {
        return{
            persons:[],
        }
    },
    created() {
        axios.get('http://localhost:3000/persons')
        .then((res)=> {
            this.persons = res.data;
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
</script>
<style lang="scss" scoped type="text/css">
.person{
    margin-top:.4rem;
    .perBox,ul{
        width:90%;
        height:.2rem;
        margin:0px auto;
        border-bottom:1px solid  #e9dede;
        line-height: .2rem;
        span{
            font-size:14px;
            float:left;
        }
        .per{
            float:right;
            span{
                font-size:12px;
            }
             .son{
                margin-right:.49rem;
            }
        }
        
        li{
            width:100%;
            height:.4rem;
            display:flex;
            justify-content: space-between;
            align-items: center;
            .liBox2{
                height:.4rem;
                width:2rem;
                span{
                    font-size:14px;
                    float:left;
                    line-height: .4rem;
                    margin-right: .1rem;
                }
                img{
                    height:.3rem;  
                    width:.3rem;  
                    margin: .05rem auto;
                    float:left;
                    border-radius:50%;
                    border:1px solid #e9dede;
                }
                div{
                    height:.4rem;
                    float:left;
                    p{
                        margin-left: .1rem;
                        font-size:14px;
                    }
                    span{
                        color:gray;
                        font-size:12px;    
                        line-height: unset;
                    }
                }
            }
        }
    }
}
.person ul{
    height:.4rem;
}
.pBox{
    margin-left:.1rem;
}
</style>  