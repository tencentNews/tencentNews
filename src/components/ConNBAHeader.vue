<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:08:26
 * @LastEditors: 玉兰琼馨
 * @LastEditTime: 2019-12-05 14:32:34
 -->

<template>
  <div class="header">
      <div class="top">
        <i class="el-icon-arrow-left" @click="test()"></i>
        <span>NBA</span>
        <i class="el-icon-date"></i>
    </div>
      <ul>
            <li>
                <div :class="{'red':footerCls[0]}" @touchstart="changeCls(0)" @click="goNBA()">
                    <span>赛程</span>
                </div>
            </li>
            <li>
                <div :class="{'red':footerCls[1]}" @touchstart="changeCls(1)" @click="goRank()">
                    <span>排行</span>
                </div>
            </li>
            <li>
                <div :class="{'red':footerCls[2]}" @touchstart="changeCls(2)"  @click="goPerson()">
                    <span>球员榜</span>
                </div>
            </li>
            <li>
                <div :class="{'red':footerCls[3]}" @touchstart="changeCls(3)" @click="goTeam()" >
                    <span>球队榜</span>
                </div>
            </li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ConNBAHeader',
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
      goNBA(){
         this.$router.push({path:"/ConNBAPage/ConHotTop"});
      },
      goRank(){
         this.$router.push({path:"/ConNBAPage/ConNBARank"});
      },
      goPerson(){
         this.$router.push({path:"/ConNBAPage/ConPerson"});
      },
      goTeam(){
         this.$router.push({path:"/ConNBAPage/Team"});
      },
      test(){
          this.$router.push({path:"/ContestPage"});
      }
  }
}
</script>
<style lang="scss" scoped type="text/css">
.red span{
        font-weight: 550 !important;
        font-size:18px !important;
        height:.3rem !important;
        display:block !important;
        padding-bottom: 0.05rem !important;
        border-bottom:1px solid blue !important;
        color:blue;
    }
    .header ul p{
        color: #363636;
        text-align: center;
    }
.header{
  position: fixed;
  width:100%;
  background:white;
  top:0px;
}
ul{
  display:flex;
  justify-content: space-around;
  align-items: center;
  width:80%;
  margin:0px auto;
}
ul li{
  height:.4rem;
  line-height: .4rem;
    font-size:15px;

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
