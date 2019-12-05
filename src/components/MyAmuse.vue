<!--
 * @Author: your name
 * @Date: 2019-11-26 11:46:17
 * @LastEditTime: 2019-11-29 19:04:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\tengxun\src\components\MyHeader.vue
 -->
<template>
  <div class="myBox">
       <p class="amuse">娱乐中心</p>
       <p>
           <ul>
                <li>
                   <img src="../assets/img/amuse1.png" alt="">
                   <span>游戏</span>
                </li>
                <li>
                   <img src="../assets/img/amuse2.png" alt="">
                   <span>NBA英雄</span>
                </li>          
                <li></li>
                <li></li>
           </ul>
       </p>
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
    height:1.35rem;
    background:#fff;
     
}
ul{
    display:flex;
    justify-content:space-around;
}
li{
    width:.6rem;
    height:.8rem;
    margin:.1rem .15rem .01rem;
    text-align:center;
    span{
        display:block;
    }
    img{
        width:.3rem;
        height:.3rem;
    }
}
.amuse{
    padding-left:.2rem;
    padding-top:.1rem;
    padding-bottom:.15rem;
    font-size:20px;
}
</style>
