<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-26 16:41:00
 * @LastEditors: losn
 * @LastEditTime: 2019-12-04 20:33:22
 -->
<template>     
    <div class="box">
        <div class="bigBox">
            
            <div v-for="(pig,index) in heyPig" :class="{leftBox:true, response:pig}" :key="index" @click="changeCls2(index)"> 
                {{buttonText[index]}}
            </div>
            
        </div>
    </div> 
</template>
<script>

let m = {
    buttonText:['潮人社区', '发售日历'],
    heyPig : [true, false],
}

export default {
    name:"MentPart",
     data(){
        return m //是不感觉清爽了多了。切换商品还得拿到true和false ，不用
    },
    methods:{
        changeCls2(index) {
            if(index==0 ){
                this.$set(this.heyPig, 1, false)
                this.$set(this.heyPig, 0, true)
                this.showTable('/MentPhoto')
            }else if(index==1){
                this.$set(this.heyPig, 1, true)
                this.$set(this.heyPig, 0, false)
                this.showTable('/MentPhoto')
            }
        },
        //两种方式任你选择
        showTable(path){
            //如果这里是需要跳转+存储啥的 可以用这个
            this.$router.push({path:path})
        },

        //如果改变内容需要请求
        showTable1(){
            /*
                阿秀克斯。巴拉巴拉{
                    结果用通讯组件给他爸？？？？？？？
                    因为你这是子组件 这里可以子组件获取数据传递给父组件$emit()
                    也可以直接把标签信息给父组件让他自己改变数据----(这种没用过)（
                        是一样的就是父组件再请求一次 
                    ）
            */
        },
        //如果改变内容需要请求
        showTable2(){

        }
    }
    
    
}
</script>
<style lang="scss"   scoped>
.box .bigBox .response {
    background-color: #3883f6;//你偷偷写这句话不告诉我奥，过分分！
    color:#fff;
    border-radius: 30px;

}
.bigBox{
    // margin-top: .7rem;
    width: 100%;
    overflow-x:hidden; 
    height: .6rem;
    // background-color: pink;
    font-size: .2rem;
    color:white;
    line-height: .4rem;
    .leftBox{
        width: 1.2rem;
        height:.4rem;
        color:#333;
        // background-color: #3883f6;
        border-radius: 30px;
        float: left;
        margin-left: .5rem;
        text-align: center;
    }
    .rightBox{
        width: 1.2rem;
        height:.4rem;
        color:#333;
        border-radius: 30px;
        float: left;
        text-align: center;
        margin-left: .4rem;
    }
}

</style>