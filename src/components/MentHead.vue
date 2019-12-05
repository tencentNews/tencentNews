<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-26 09:59:08
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 16:30:16
 -->

<template>
    <div class="box">
        <div class="bigBox">
            <div class="circle" :class="{'red':footerCls[0]}" @touchstart="changeCls(0)" >
                圈子
            </div>
            <div class="circle"  :class="{'red':footerCls[1]}" @touchstart="changeCls(1)">
                热门
            </div>
            <div class="circle"  :class="{'red':footerCls[2]}" @touchstart="changeCls(2)">
                引力
            </div>
            <div class="circle"  :class="{'red':footerCls[3]}" @touchstart="changeCls(3)">
                关注
            </div>
        </div>
        <img class="man" src="../assets/img/man.jpg" alt="">
        
    </div> 
</template>
<script>

export default {
    name:"MentHead",
     data(){
        return {
         
        }
    }
    ,computed: {
      footerCls(){
          return this.$store.state.footerCls;
      }
  },
    methods:{
      changeCls(index){
        this.$store.commit('changeFooterCls',index)
        if(index==0){
            this.$router.push({path:'/Community/Circle'});
        } else if(index==1){
            this.$router.push({path:'/Community/HotDoor'});
        }else if(index==2){
            this.$router.push({path:'/Community/Apartment'});   
        }else if (index==3){
            this.$router.push({path:'/Community/MentPart2'});
        }
      }

  }

}
</script>
<style lang="scss"    scoped>
.box{
    background-color: white;
}
.bigBox{
    width: 80%;
    margin-left: .2rem;
    height: .7rem;
    overflow-x:hidden; 
    // background-color: pink;
    display: flex;
    justify-content: space-around;
    position: relative;
    .circle{
        width: 20%;
        height: .6rem;
        // background-color: red;
        font-size: .2rem;
        text-align: center;
        line-height: .6rem;
        font-weight: 600;
    }
}
.man{
    width: .4rem;
    height: .4rem;
    position: absolute;
    right: 0.05rem;
    top: .1rem;
}
.red {
        font-weight: 550 !important;
        font-size:.25rem !important;
        height:.5rem !important;
        display:block !important;
        border-bottom:1px solid blue !important;

    }
</style>