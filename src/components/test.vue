<!--
 * @Author: CoolWind
 * @Date: 2019-11-09 15:15:17
 * @LastEditors: losn
 * @LastEditTime: 2019-11-29 17:48:55
 * @Description: 
 -->
<template>
    <div class="footerBox">
        <div class="footer">
            <ul>
                <li>
                    <router-link to="/Index">
                        <div :class="{'red':footerCls[0]}" @touchstart="changeCls(0)">
                            <span class="iconfont icon-sy"></span>
                            <p>首页</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/ZzFuwupage">
                        <div :class="{'red':footerCls[1]}" @touchstart="changeCls(1)">
                            <span class="iconfont icon-fw"></span>
                            <p>服务</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <p>卖二手</p>
                </li>
                <li>
                    <router-link to="/MessagePage">
                        <div :class="{'red':footerCls[2]}" @touchstart="changeCls(2)">
                            <span class="iconfont icon-xx"></span>
                            <p>消息</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="ZzSelfcenter">
                        <div :class="{'red':footerCls[3]}" @touchstart="changeCls(3)">
                            <span class="iconfont icon-me"></span>
                            <p>我的</p>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div>
                <img src="../assets/images/footer01.png" alt="">
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'MyFooter',
    data() {
        return {
            foots: [],
            
        }
    },
    computed: {
        footerCls(){
            return this.$store.state.footerCls;
        }
    },
    methods:{
        changeCls(Index){
            this.$store.commit('changeFooterCls',Index)
        }
    }
}
</script>

<style scoped>
    @import url('../assets/font/iconfont.css');
    .footerBox{
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
    }
    .footer{
        width: 100%;
        position: relative;
    }
    .footer ul{
        width: 100%;
        height: .5rem;
        display: flex;
        justify-content: space-around;
    }
    .footer ul .iconfont{
        display: block;
        margin: .05rem auto;
        font-size: .2rem;
        color: #363636;
    }
    .footer ul p{
        font-size: .1rem;
        color: #363636;
        text-align: center;
    }
    .footer ul li div{
        width: 100%;
        height: 100%;
    }
    /* .red  */
    .red .iconfont{
        color: #ff3d68 !important;
    }
    .red p{
        color: #ff3d68 !important;
    }
    .footer ul li:nth-of-type(3) p{
        padding-top: .32rem;
    }
    .footer div img{
        width: .5rem;
        height: .5rem;
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -.25rem;
        top: -.18rem;
    }
</style>