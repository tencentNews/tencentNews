<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:08:26
 * @LastEditors: 玉兰琼馨
 * @LastEditTime: 2019-12-04 14:51:59
 -->

<template>
  <div class="header">
      <ul>
          <li>
                  <div :class="{'red':footerCls[0]}" @click="goTest()"  @touchstart="changeCls(0)">
                      <span>赛事</span>
                  </div>
          </li>
          <li>
                  <div :class="{'red':footerCls[1]}"  @click="goHot()" @touchstart="changeCls(1)">
                      <span>热门</span>
                  </div>
          </li>
          <li>
                  <div :class="{'red':footerCls[2]}"  @touchstart="changeCls(2)">
                      <span>关注</span>
                  </div>
          </li>
          <li>
                  <div :class="{'red':footerCls[3]}"  @click="goPan()" @touchstart="changeCls(3)">
                      <span>硬盘</span>
                  </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'ContestHeader',
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
      goTest(){
         this.$router.push({path:"/ContestPage"});
      },
      goHot(){
         this.$router.push({path:"/ConHotPage"});
      },
      goPan(){
         this.$router.push({path:"/ConPanPage"});
      }
  }
}
</script>
<style scoped>
.red span{
        font-weight: 550 !important;
        font-size:18px !important;
        height:.3rem !important;
        display:block !important;
        padding-bottom: 0.05rem !important;
        border-bottom:1px solid blue !important;
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
</style>
