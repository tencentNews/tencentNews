<!--
 * @Author: your name
 * @Date: 2019-11-09 14:56:17
 * @LastEditTime: 2019-12-04 17:24:04
 * @LastEditors: losn
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Myfooter.vue
 -->
<template>
    <footer>   
        <ul>
            <li>  
                <router-link to="/">
                    <i class=" el-icon-s-home"></i>
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/CBAPage">
                <i class="el-icon-goblet-full"></i>赛程
                </router-link>
            </li>
             
            <li>
                <router-link to="/">
                <i class="el-icon-chat-dot-square"> </i>
                社区
                </router-link>
            </li>
            <li>
                <router-link to="/MyPage">
                    <i class="el-icon-s-custom"></i>
                    我的
                </router-link>
            </li>
        </ul>
    </footer>  
</template>

<script>

export default {
  name: 'MyFooter',
  data () {
    return {
       
    }
  }
}
</script>
<style scoped>
footer{
  width:100%;
  height: .5rem;
  background-color:#fff;
  margin-top:.1rem;
}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
img{
    width:.3rem;
    height:.4rem;
}
.el-icon-s-home{
    display:block;
    text-align:center;
}
i{
    display:block;
    text-align:center;
    font-size:20px;
}
</style>