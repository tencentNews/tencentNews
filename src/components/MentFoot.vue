<!--
 * @Description:
 * @Author: losn
 * @Date: 2019-11-28 14:55:08
 * @LastEditors: losn
 * @LastEditTime: 2019-12-04 17:58:59
 -->

<template>
    <div class="box">
       <div class="footBox">
           
           <div  class="bigBag" :class="{'bigBag': true, 'bigBagCurr':footerCls[0]}" @touchstart="changeCls(0)">
                   
                    <div class="imgBox">
                        <router-link to="/Index">
                            <i class="el-icon-house" ></i>
                        </router-link>
                    </div>
                    <p class="words">
                         首页
                   </p>

                    
           </div>
            

            
           <div  class="bigBag" :class="{'bigBag': true, 'bigBagCurr':footerCls[1]}" @touchstart="changeCls(1)">
                   

               <div class="imgBox">
                    <router-link to="/Champing">
                         <i class="el-icon-trophy"></i>
                    </router-link> 
                </div>
               <p class="words">
                   赛程
                    </p>
           </div>
             

            
            <div class="bigBag"  :class="{'bigBag': true, 'bigBagCurr':footerCls[2]}" @touchstart="changeCls(2)">
                    

               <div class="imgBox">
                <router-link to="/Apartment"> 
                    <i class="el-icon-orange"></i>
                </router-link> 
                </div>
                <p class="words">
                  社区
                </p>
                    
            </div>
            


            
            <div  class="bigBag" :class="{'bigBag': true, 'bigBagCurr':footerCls[3]}" @touchstart="changeCls(3)">
                <div class="imgBox">
                <router-link to="/MyPage">
                    <i class="el-icon-user" ></i>  
                </router-link>
                </div>

                <p class="words">
                   我的
                </p>

           </div>
           
       </div>
    </div>
</template>
<script>

export default {
    name: 'MyFooter',
    data() {
        return {
            foots: [   ],

        }
    },
    created() {
    },
    computed: {
        footerCls(){
            return this.$store.state.footerCls;
        }
    },
    methods:{
    //     back(){
    //       this.$router.push("/MinePage");
    //    },
        changeCls(index){
            this.$store.commit('changeFooterCls',index)
        }
    },
    watch : {
        footerCls(){
            return this.$store.state.footerCls;
        }
    }
}
</script>
<style lang="scss"    scoped>
.footBox{
    width: 100%;
    height: .8rem;
    // background-color: pink;
    display: flex;
    justify-content: space-around;
    position:fixed;
    bottom: .14rem;
    z-index: 11;
    background-color: #ffffff;
    .bigBag{
        width: 20%;
        margin-bottom: .12rem;
        height: .75rem;
        // background-color: skyblue;

    }
}
.imgBox{
            width: 100%;
            height: .5rem;
            display: flex;
            align-items: center;
            text-align: center;
            margin-top: .2rem;
        }
        p{
            width: 100%;
            height: .25rem;
            // background-color: #a53c3c;
            text-align: center;
            line-height: .25rem;
            text-indent: .05rem;
            font-size: 16px;
        }
i{
    font-size: .3rem;
    display: block;
    width: .4rem;
    height: .4rem;
    margin-left: .2rem;
}
.bigBagCurr{
    i{
        color:#1264ec;
    }
  color:#1264ec;
}
</style>
