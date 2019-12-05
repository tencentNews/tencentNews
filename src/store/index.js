/*
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-29 15:04:09
 * @LastEditors: losn
 * @LastEditTime: 2019-12-04 21:00:07
 */
import Vue from 'vue'
import VueX from 'vueX'

Vue.use(VueX)

export default new VueX.Store({
    state: {
        footerCls: [
            true,
            false,
            false,
            false
        ],
        headerCls:[
            true,
            false
        ],
		content:""
    },
    mutations: {
        changeFooterCls(state,index){
            if(index<0 || index>state.footerCls.length-1){
                return;
            }
            let footerCls = state.footerCls
            footerCls.forEach((item,index,arr)=>{
                arr[index] = false;
            });
            footerCls[index] = true;
            state.footerCls = false;
            state.footerCls = footerCls;
        },
		sousuo(state,con){
			state.content=con;
		}

    },
    changeheaderCls(state,index){
        if(index<0 || index>state.headerCls.length-1){
            return;
        }
        let headerCls = state.headerCls
        headerCls.forEach((item,index,arr)=>{
            arr[index] = false;
        });
        headerCls[index] = true;
        state.headerCls = false;
        state.headerCls = headerCls;
    },
    actions: {

    }
})
