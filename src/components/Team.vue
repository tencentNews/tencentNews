<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:53:53
 * @LastEditors: 玉兰琼馨
 * @LastEditTime: 2019-12-05 11:42:51
 -->
 <template>
    <div class="person">
    <ConPersonHeader></ConPersonHeader>
        <div class="perBox">
            <span>球员</span>
            <span>数据</span>
        </div>
        <ul v-for="(value,index) in persons" :key="index">
            <li>
                <div class="liBox2">
                    <span class="pBox">{{value.num}}</span>
                    <img :src="value.img">
                    <div>
                        <span>{{value.team}}</span><br>
                        <p>{{value.fen}} {{value.ban}}</p>
                    </div>
                </div>
                <span>{{value.shu}}</span>
            </li>
        </ul>
    </div>
 </template>
<script>
import axios from 'axios';
import ConPersonHeader from "@/components/ConPersonHeader.vue";

export default {
    name: 'Team',
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
        display: flex;
        justify-content: space-between;
        span{
            font-size:14px;
            float:left;
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
                    padding-left: .1rem;
                    p{
                        font-size:12px;
                        color:gray;
                    }
                    span{
                        font-size:14px;    
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