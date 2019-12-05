<!--
 * @Description: 
 * @Author: 张紫霞
 * @Date: 2019-11-26 10:08:26
 * @LastEditors: 玉兰琼馨
 * @LastEditTime: 2019-12-05 10:46:04
 -->
<template>
  <div class="head" >
    <div>
        <ul>
            <li v-for="(type,index) in panbox" :key="index" v-on:click="addClass(index)" v-bind:class="{ bgColors1:index==current1}">{{type}}</li>
        </ul>
        <ul >
            <li v-for="(type2,index) in pan2" :key="index" v-on:click="add(index)" v-bind:class="{ bgColors2:index==current2}">{{type2}}</li>
        </ul>
        <ul >
            <li v-for="(type3,index) in pan3" :key="index" v-on:click="cla(index)" v-bind:class="{ bgColors2:index==current3}">{{type3}}</li>
        </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'ConPanTop',
    data () {
        return{
            current1:0,
            current2:0,
            current3:0,
            panbox:[],
            pan2:[],
            pan3:[]
        }
    },
    created(){   
        fetch('http://localhost:3000/panText')
        .then(res=>{ 
            return res.json();
        })
        .then(data=>{
            this.panbox=data;
        })
        .catch(err=>{
            console.log(err);
        })
        fetch('http://localhost:3000/panText2')
        .then(res=>{ 
            return res.json();
        })
        .then(data=>{
            this.pan2=data;
        })
        .catch(err=>{
            console.log(err);
        })
        fetch('http://localhost:3000/panText3')
        .then(res=>{ 
            return res.json();
        })
        .then(data=>{
            this.pan3=data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods: {
        addClass:function(index){
        this.current1=index;
        },
        add:function(index){
        this.current2=index;
        },
        cla:function(index){
        this.current3=index;
        }
    },
    mounted() {
    }
}
</script>
<style lang="scss" scoped type="text/css">
.head{
    width:100%;
    height:1.2rem;
    background:white;
    margin-top:.4rem;
    div{
        width:100%;
        height:1.2rem;
        background:#f8f3f3;
        ul{
            height:.4rem;
            display:flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            width: 95%;
            margin: 0px auto;
            li{
                flex-shrink: 0;
                height: .2rem;
                line-height: .2rem;
                margin-right: .2rem;
                margin-top: .1rem;
                text-align: center;
            }
        }
    }
}
ul .bgColors1{
  background: #a9aece;
  color:blue;
 margin: auto;
 border-radius:3px;
}
ul .bgColors2{
  background: #a9aece;
  color:blue;
 border-radius:3px;
}
</style>
