<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:08:26
 * @LastEditors: 玉兰琼馨
 * @LastEditTime: 2019-12-04 14:48:34
 -->

<template>
        <div class="der">
            <ul>
            <li>
                <div :class="{'red':footerCls[0]}" @touchstart="changeCls(0)" @click="goDe()">
                    <span>得分榜</span>
                </div>
            </li>
            <li>
                <div :class="{'red':footerCls[1]}" @touchstart="changeCls(1)" >
                    <span>助攻榜</span>
                </div>
            </li>
            <li>
                <div :class="{'red':footerCls[2]}" @touchstart="changeCls(2)" >
                    <span>篮板榜</span>
                </div>
            </li>
            <li>
                <div :class="{'red':footerCls[3]}" @touchstart="changeCls(3)">
                    <span>抢断榜</span>
                </div>
            </li>
            <li>
                <div :class="{'red':footerCls[4]}" @touchstart="changeCls(4)" @click="goGai()" >
                    <span>球队榜</span>
                </div>
            </li>
        </ul>
        </div>
</template>

<script>
export default {
  name: 'ConPersonHeader',
  data () {
    return{
    }
  }
 , computed: {
      footerCls(){
          return this.$store.state.footerCls;
      }
  },
  methods:{
      changeCls(index){
          this.$store.commit('changeFooterCls',index)
      },
      goDe(){
         this.$router.push({path:"/ConPersonPage"});
      }
    //   goZhu(){
    //      this.$router.push({path:"/ConPersonPage"});
    //   },
    //   goLan(){
    //      this.$router.push({path:"/ConPersonPage"});
    //   },
    //   goQiang(){
    //      this.$router.push({path:"/ConPersonPage"});
    //   },
    //   goGai(){
    //      this.$router.push({path:"/ConPersonPage"});
    //   }
  }
}
</script>
<style lang="scss" scoped type="text/css">
.red span{
        font-size:15px !important;
        color:white !important;
        display:block !important;
        height:.2rem !important;
        margin-top:.1rem !important;
        border-radius: 10px !important;
        line-height: .2rem !important;
        width: .6rem;
        text-align: center;
        background-color: #213ee7 !important;
    }
    .der ul p{
        color: #363636;
        text-align: center;
    }
.der{
  position: fixed;
  width:100%;
  background:white;
  top:.8rem;
}
ul{
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:80%;
  margin:0px auto;
}
ul li{
  height:.4rem;
  line-height: .4rem;
    font-size:12px;

}
.top {
    display:flex;
    justify-content:space-between;
    width:90%;
    height:.4rem;
    margin:0px auto;
    align-items: center;
    i,span{
        font-size:18px;
    }
}
</style>
