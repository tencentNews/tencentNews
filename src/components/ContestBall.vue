<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:53:53
 * @LastEditors: 玉兰琼馨
 * @LastEditTime: 2019-12-04 14:54:26
 -->
 <template>
    <div class="ball">
        <div class="box" v-for="(value,key,index) in alltypes" :key="index">
            <p>{{key}}</p>
            <ul v-for="(type,index) in value" :key="index">
                <a v-bind:href="type.href" class="aBox">
                    <div class="ballLeft">
                        <img :src="type.img">
                        <span>{{type.name}}</span>
                    </div>
                    <div class="ballRight">
                        <i class="el-icon-caret-right"></i>
                    </div>
                </a>
            </ul>
        </div>
    </div>
 </template>
<script>
import axios from 'axios';
export default {
    name: 'ContestBall',
    data () {
        return{
            types:[],
            name:"type.id",
            alltypes:{}
        }
    },
    created() {
        axios.get('http://localhost:3000/types')
        .then((res)=> {
            console.log(res.data);
            this.alltypes = res.data;
            console.log(this.alltypes);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
</script>
<style lang="scss" scoped type="text/css">
.ball{
    margin-top:.4rem;
}
.box{
    margin:0px auto;
    ul{
        height:.4rem;
        line-height:.4rem;
        background:white;
        margin:0px auto;
        .aBox{
            margin:0px auto;
            width:90%;
            height:.4rem;
            border-bottom:1px solid #dddfe6;
            .ballLeft{
                float:left;
                img{
                    width: .2rem;
                    height: .2rem;
                    margin: .1rem;
                    display: block;
                    float: left;
                }
                span{
                    color:#444444;
                    font-size:14px;
                }
            }
            .ballRight{
                color:#969ba3;
                font-size:15px;
                float:right;
                i{
                    font-size:.2rem;
                }
            }
        }
    }   
}
    p{
        padding-left:.2rem;
        height:.3rem;
        line-height:.4rem;
        font-size:13px;
        width:100%;
        background-color: #f9f9f9;
    }

</style>  