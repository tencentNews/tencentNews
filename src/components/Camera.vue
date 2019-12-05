<!--
 * @Description:
 * @Author: losn
 * @Date: 2019-11-28 14:55:08
 * @LastEditors: losn
 * @LastEditTime: 2019-11-30 15:31:31
 -->

<template>
    <div class="box">
       <div class="camera">
            <img class="picture" src="../assets/img/camera.jpg" alt="">
              发布 
        </div>
    </div>
</template>
<script>

export default {
    name: 'MyFooter',
    data() {
        return {
            

        }
    }
}
</script>

<style lang="scss"    scoped>

.camera{
  position: fixed;
  margin-left: .9rem;
  bottom: 1rem;
  width: 1.8rem;
  height: .6rem;
  border-radius: 30px;
  background-color: white;
  display: flex;
  align-items:center;
   font-size: .2rem;
    font-weight: 600;
    box-shadow: 3px 3px 5px black;
  .picture{
    width: .4rem;
    height:.4rem;
    margin-left: .5rem;
    margin-right: .1rem;
   
  }
}



</style>
