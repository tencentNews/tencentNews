<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-26 16:41:00
 * @LastEditors: losn
 * @LastEditTime: 2019-12-05 11:03:29
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
    buttonText:['湿人社区', '发兽日历'],
    heyPig : [true, false],
}

export default {
    name:"MentPart",
     data(){
        return m 
    },
    mounted(){
        this.changeCls2(0);
    },
    methods:{
        changeCls2(index) {
            if(index==0 ){
                this.$set(this.heyPig, 1, false)
                this.$set(this.heyPig, 0, true)
                // this.showTable('/')
                this.$router.push({path:'/Community/MentPhoto'});
            }else if(index==1){
                this.$set(this.heyPig, 1, true)
                this.$set(this.heyPig, 0, false)
                // this.showTable('/')
                this.$router.push({path:'/Community/Calendar'});     
            }
        },
        showTable(path){
            this.$router.push({path:path})
        },

        showTable1(){
           
        },
        showTable2(){

        }
    }
    
    
}
</script>
<style lang="scss"   scoped>
.box .bigBox .response {
    background-color: #3883f6;
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