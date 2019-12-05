<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-26 16:41:00
 * @LastEditors: losn
 * @LastEditTime: 2019-12-02 17:19:34
 -->
<template>     
    <div class="box">
        <div class="bigBox">
            <!--
            <div  class="leftBox response" v-show="!showCommentInput1" @click="showCommentInput = !showCommen" > 
                潮人社区
            </div>
            <div class="rightBox response" v-show="!showCommentInput2" @click="showCommentInput = !showCommen" >
                发售日历
            </div>
            -->
            <div  class="leftBox response" :style="cls_sty1" @click="changeCls(1)" > 
                潮人社区
            </div>
            <div class="rightBox response" :style="cls_sty2" @click="changeCls(2)">
                发售日历
            </div>
        </div>
    </div> 
</template>
<script>

export default {
    name:"MentPart",
     data(){
        return {
            cls_sty1 : 'background:white;color:black', //默认颜色
            cls_sty2 : 'background:white;color:black',
            showCommentInput1:false,  //首先用这个标识 状态如果是false就是
            showCommentInput2:false, //用逗号？你是不是傻了 那哟用啥，我都试了，只能逗号
        }
    },
    methods:{
        changeCls(index) {
            if(index == 1 && this.showCommentInput1 == false) { //如果是第一个的标签点击就改成红色并且将flag改变
                this.cls_sty1 = 'background:blue;color:white'
                this.showCommentInput1 = !this.showCommentInput1
            } else if(index == 1 && this.showCommentInput1) { //相反操作
                this.cls_sty1 = 'background:white;color:black' 
                this.showCommentInput1 = !this.showCommentInput1
            }

            //同上
            if(index == 2 && this.showCommentInput2 == false) {
                this.cls_sty2 = 'background:white;color:black'
                this.showCommentInput2 = !this.showCommentInput2
            } else if(index == 2 && this.showCommentInput2) {
                this.cls_sty2 = 'background:blue;color:white' 
                this.showCommentInput2 = !this.showCommentInput2
            }
        }
        
    }
    
    
}
</script>
<style lang="scss"   scoped>
 .response {
          background-color: #3883f6;
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
        // background-color: #3883f6;
        border-radius: 15px;
        float: left;
        margin-left: .5rem;
        text-align: center;
    }
    .rightBox{
        width: 1.2rem;
        height:.4rem;
        background-color: #3883f6;
        border-radius: 15px;
        float: left;
        text-align: center;
        margin-left: .4rem;
    }
}

</style>