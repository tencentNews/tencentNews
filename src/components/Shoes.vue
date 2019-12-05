<!--
 * @Description: 
 * @Author: losn
 * @Date: 2019-11-26 09:59:08
 * @LastEditors: losn
 * @LastEditTime: 2019-12-04 18:10:32
 -->

<template>
    <div class="box">
        <div class="shoeBox">
            <div class="leftBag">
                <p class="word word1">ADIDAS  PUREHIPHOP </p>
                <p class="word word2"> HUMAN P.D.O</p>
                <p class="date">发售日期    19.11.29</p>
                <p class="money">$1500</p>
            </div>
            <div class="rightBag">
                <img class="photo" src="../assets/img/shoes.png" alt="">
            </div>
        </div>
        <div class="sale_article">
            <img  class="picture" src="../assets/img/shoes.png" alt="">
            <!-- todo:此处需要调整 调整啥啊-->
            <span> 你的一字一句犹如嘻嘻嘻嘻嘻嘻嘻 </span>
        </div>
        <div class="not_more">
            <span>哥哥，这次真的没了啦~</span>
        </div>

    </div> 
</template>
<script>

export default {
    name:"MentHead",
     data(){
        return {
         
        }
    }

}
</script>
<style lang="scss"    scoped>
.shoeBox{
    width: 100%;
    height:2rem;
    background-color: pink;
    overflow-x:hidden; 
    .leftBag{
        width: 50%;
        height:2rem;
        float: left;
        .word{
            color: black;
            font-size: .15rem;
            line-height: .3rem;
            text-indent: .2rem;
            font-weight: 600;
        }
        .word1{
            margin-top: .4rem;
        }
        .word2{
            margin-top: .1rem;
        }
        .date{
            color:gray;
            margin-top: .1rem;
            text-indent: .2rem;
            font-size: .1rem;
        }
        .money{
            text-indent: .2rem;
            margin-top: .1rem;
            color: #d9383d;
        }
    }
    .rightBag{
        width: 50%;
        height:2rem;
        float: left;
        .photo{
            width: 1.8rem;
            height: 1.8rem;
            margin:0 auto;
        }
    }
    
}
.not_more{
        width: 100%;
        height: 2rem;
       
        span{
            color: rgb(128, 124, 125);
            line-height: 1rem;
            text-align: center;
            width: 100%;
            font-size: 16px;
            display: inline-block;
        }
}
.sale_article {
    /*width: 100%;*/
    height: 1rem;
    padding: .3rem .2rem;
    border-bottom: 1px solid #333;
    img{
        width: .8rem;
        height: .8rem;
        float: left;
    }
    span{
        //float: left;
        margin-left: .2rem;
        font-size: 18px;
        display: inline-block;
        width: 60%;
    }
    
}


</style>