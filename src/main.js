/*
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-25 17:30:23
 * @LastEditors: losn
 * @LastEditTime: 2019-12-04 20:02:59
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'//引入store
Vue.config.productionTip = false;
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
 Vue.use(ElementUI);
 import MintUI from 'mint-ui' ;
 import 'mint-ui/lib/style.css' ;
 import BScroll from 'better-scroll';
 import Axios from "axios";

 import VideoPlayer from 'vue-video-player'
 require('video.js/dist/video-js.css')
 require('vue-video-player/src/custom-theme.css')
 Vue.use(VideoPlayer)
 

Axios.defaults.baseURL = '/api/'
Vue.use(MintUI);
new Vue({
  el: '#app',
  router,
  store,//使用store
  template: '<App/>',
  components: { App }
})
/* eslint-disable no-new */

