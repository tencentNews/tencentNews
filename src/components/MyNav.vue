<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-11-26 17:16:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="myBox">
        <ul>
            <li>
                <img src="../assets/img/nav1.png" alt="">
                <span>我的兴趣</span>
            </li>
             <li>
                <img src="../assets/img/nav2.png" alt="">
                <span>我的打卡</span>
            </li>
             <li>
                <img src="../assets/img/nav3.png" alt="">
                <span>我的社区</span>
            </li>
             <li>
                <img src="../assets/img/nav4.png" alt="">
                <span>签到</span>
            </li>
             <li>
                <img src="../assets/img/nav5.png" alt="">
                <span>体育商城</span>
            </li>
             <li>
                <img src="../assets/img/nav6.png" alt="">
                <span>免流观赛</span>
            </li>
             <li>
                <img src="../assets/img/nav12.png" alt="">
                <span>观看历史</span>
            </li>
             <li>
                <img src="../assets/img/nav8.png" alt="">
                <span>神奇扭蛋机</span>
            </li>
             <li>
                <img src="../assets/img/nav9.png" alt="">
                <span>专家预测</span>
            </li>
             <li>
                <img src="../assets/img/nav10.png" alt="">
                <span>彩经收藏</span>
            </li>
             <li>
                <img src="../assets/img/nav11.png" alt="">
                <span>书城</span>
            </li>
            <li>
                 
            </li>
             
        </ul>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 

<style lang="scss" scoped="" type="text/css">
.myBox{
    width:100%;
    height:2.6rem;
    background:#fff;
    margin-bottom:.15rem;
}
ul{
    width:100%;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
li{
    width:.6rem;
    height:.8rem;
    text-align:center;
    margin:.1rem .15rem .01rem;
    img{
    width:.32rem;
    height:.3rem;
    }
    span{
        display:block;
    }
}
 
</style>
