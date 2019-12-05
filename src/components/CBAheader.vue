<!--
 * @Author: your name
 * @Date: 2019-11-09 10:00:38
 * @LastEditTime: 2019-12-03 10:17:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\components\Navs.vue
 -->
<template>
    <div class="box">
         <div class="classBox">
            <ul>
                <li><router-link to="/Index">首页</router-link></li>
                <li>视频</li>
                <li style="color:blue">CBA</li>
                <li>NBA</li>
                <li>英超</li>
                <li>欧冠</li>
                <li>中超</li>
                <li>意甲</li>
                <li>德甲</li>
                <li>NCAA</li>
                <li>中国男足</li>
            </ul>
        </div>
    </div>
</template> 

<script>
export default {
    
}
</script> 

<style scoped>
.box{
    width:100%;
    background:#fff;
}
.classBox ul{
    display: flex;
    width: 100%;
    height: .4rem;
    overflow-x: auto; 
    padding:0 .2rem;
    box-sizing:border-box;
}
.classBox ul li{
    margin-right:32px;
    flex-shrink: 0; /*在一行显示*/
    text-align: center;
    line-height: .3rem;
    color:#636563;
}
 
</style> 