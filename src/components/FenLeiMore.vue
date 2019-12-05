<template>
	<div class="fenleimore">
		<div class="tt">
			<span class="gengduo">更多频道</span>
			<span class="tianjia">点击添加到我的频道</span>
		</div>
		<ul>
			<!--<router-link>-->
				<li v-for="mm in more">
					<img :src="mm.img" alt="" />
					<span class="name">{{mm.name}}</span>
					<img class="jia" @click="jia(mm.id,mm.name,mm.img)" src="../assets/img/fenleijia.jpg" alt="" />
				</li>
			<!--</router-link>-->
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"FenLeiMore",
      inject:["reload"],
	    data(){
	        return {
	            more:[]
	        }
	    },
	    created(){
		    axios.get('http://localhost:3000/morepindao')
		    .then((response)=> {
		        console.log(response.data);
		        this.more = response.data;
		    })
		    .catch(function (error) {
		        console.log(error);
		    });
		},
		methods:{
        jia(id,name,img){
            //删除
            axios.delete('http://localhost:3000/morepindao/'+id)
            .then((response)=> {
                console.log(response.data);
                console.log("成功");
                axios.get('http://localhost:3000/morepindao')
                .then((response)=> {
                    console.log(response.data);
                    this.more = response.data;
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
            axios.post('http://localhost:3000/mypindao',url)
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
	.fenleimore{
		width: 92%;
		margin: 0 auto;
		.tt{
			line-height: .31rem;
			.gengduo{
				color: #444444;
				font-size: .12rem;
				margin-left: 2%;
			}
			.tianjia{
				color: #95959d;
				font-size: .1rem;
				margin-left: .23rem;
			}
		}
		ul{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			padding-top: .13rem;
			li{
				width: .72rem;
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
				.jia{
					width: .13rem;
					height: .13rem;
					position: absolute;
					right: 8px;
					top: -1px;
				}
			}

		}
		ul li:nth-child(4n){
			margin-right: 0;
		}
	}
</style>
