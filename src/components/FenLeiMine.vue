<template>
	<div class="fenleimine">
		<div class="tt">
			<span class="my">我的频道</span>
			<span class="shunxu">长按调整顺序</span>
			<span class="bianji" @click="xianshi">{{tishi}}</span>
		</div>
		<ul>
			<!--<router-link>-->
				<li v-for="my in mine">
					<img :src="my.img" alt="" />
					<span class="name">{{my.name}}</span>
					<img class="jian" src="../assets/img/fenleijian.jpg" v-show="xian" @click="jian(my.id,my.name,my.img)" alt="">
				</li>
			<!--</router-link>-->
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"FenLeiMine",
      inject:["reload"],
	    data(){
	        return {
	            mine:[],
              xian:false,
              tishi:"编辑"
	        }
	    },
	    created(){
		    axios.get('http://localhost:3000/mypindao')
		    .then((response)=> {
		        console.log(response.data);
		        this.mine = response.data;
		    })
		    .catch(function (error) {
		        console.log(error);
		    });
		},
		methods:{
	    xianshi(){
        if(this.xian){
          this.tishi="编辑";
          this.xian=false;
        }else{
          this.tishi="完成";
          this.xian=true;
        }
      },
      jian(id,name,img){
        //删除
        axios.delete('http://localhost:3000/mypindao/'+id)
        .then((response)=> {
            console.log(response.data);
            console.log("成功");
            axios.get('http://localhost:3000/mypindao')
            .then((response)=> {
                console.log(response.data);
                this.mine = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        })
        .catch(function (error) {
            console.log(error);
        });

        //添加
        let url="name="+name+"&img="+img;
        axios.post('http://localhost:3000/morepindao',url)
        .then((response)=> {
            console.log("成功");
            // window.location.reload();
            this.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
      }
	  }

	}
</script>

<style lang="scss" scoped="scoped">
	.fenleimine{
		width: 94%;
		margin:  0 auto;
		.tt{
			line-height: .55rem;
			.my{
				color: #474747;
				font-size: .12rem;
				margin-left: 2%;
			}
			.shunxu{
				color: #95969b;
				font-size: .1rem;
				margin-left: .23rem;
			}
			.bianji{
				color: #4f77bd;
				font-size: .12rem;
				float: right;
				margin-right: 2%;
			}
		}
		ul{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			li{
				width: .74rem;
				height: .74rem;
				background: #f7f7f7;
				flex-shrink: 0;
				margin-right: .18rem;
				margin-bottom: .15rem;
				border-radius: 10px;
				text-align: center;
        position: relative;
				img{
					width: .44rem;
					height: .44rem;
					margin-left: .15rem;
					margin-top: .08rem;
				}
				.name{
					display: block;
					color: #3e3e3e;
					font-size: .1rem;
					line-height: .21rem;
				}
        .jian{
          width: .19rem;
          height: .19rem;
          position: absolute;
          right: -4px;
          top: -12px;
        }
			}

		}
		ul li:nth-child(4n){
			margin-right: 0;
		}
	}
</style>
