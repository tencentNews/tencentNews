<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-25 17:30:23
 * @LastEditors: losn
 * @LastEditTime: 2019-12-04 22:02:02
 -->
<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide(){
    return {
      reload:this.reload
    };
  },
  data(){
    return {
      isRouterAlive:true
    };
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    }
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
img{
  margin: 0;
  padding: 0;
}
body{
  font-size: 14px;
  height: 100%;
  background-color: #f6f8f5;
}
#app{
/* margin-top:.2rem; */
background-color: #fff;

}
ul,li{
  list-style: none;
}
a{
  color: black;
  text-decoration: none;
}
</style>
