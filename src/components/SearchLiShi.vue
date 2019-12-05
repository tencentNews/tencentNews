<template>
	<div class="lishi" v-show="isshow">
		<ul>
			<h3>历史搜索</h3>
			<router-link :to="tiao">
				<li v-for="ls in lishi">
					<img src="../assets/img/searchlishi.jpg" alt="" />
					<span @click="sou(ls.name)">{{ls.name}}</span>
					<i @click="shan(ls.id)" class="el-icon-close"></i>
				</li>
			</router-link>
			<div class="chu" @click="qing">清除历史搜索</div>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"SearchLiShi",
      inject:["reload"],
	    data(){
	        return {
	            lishi:[

	            ],
	            isshow:true,
	            tiao:""
	        }
	    },
	    created(){
		    axios.get('http://localhost:3000/lishi')
		    .then((response)=> {
		        console.log(response.data);
		        this.lishi = response.data;
		        if(this.lishi.length==0){
		        	this.isshow=false;
		        }
		    })
		    .catch(function (error) {
		        console.log(error);
		    });
	  	},
		methods:{
			shan(value){
				console.log(value);
				axios.delete('http://localhost:3000/lishi/'+value)
			    .then((response)=> {
			        console.log(response.data);
              console.log("成功");
              axios.get('http://localhost:3000/lishi')
              .then((response)=> {
                  console.log(response.data);
                  this.lishi = response.data;
                  if(this.lishi.length==0){
                    this.isshow=false;
                  }
              })
              .catch(function (error) {
                  console.log(error);
              });
              // this.reload();             
			    })
			    .catch(function (error) {
			        console.log(error);
			    });
			},
			qing(){
				this.lishi.forEach(item=>{
					axios.delete('http://localhost:3000/lishi/'+item.id)
				    .then((response)=> {
                 axios.get('http://localhost:3000/lishi')
                .then((response)=> {
                    this.lishi = response.data;
                    if(this.lishi.length==0){
                      this.isshow=false;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
				    })
				    .catch(function (error) {
				        console.log(error);
				    });
				})
			},
			sou(content){
	    		console.log(content);
    			let url="name="+content;
    			axios.post('http://localhost:3000/lishi',url)
			    .then((response)=> {
			        console.log("成功");
			    })
			    .catch(function (error) {
			        console.log(error);
			    });
				this.tiao="/SearchDetail/"+content;
	    		this.$store.commit('sousuo',content);
	    	}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.lishi{
		width:100%;
		overflow:hidden;
		padding-top: .25rem;
		border-bottom: .1rem solid #f9f9f9;
		ul{
			h3{
				color: #212121;
				font-size: .13rem;
				margin: 0 4%;
			}
			li{
				color: #2d2d2d;
				font-size: .12rem;
				padding: 0 4%;
				height: .42rem;
				line-height: .42rem;
				border-bottom: 1px solid #f9f9f9;
				img{
					width: .15rem;
					height: .15rem;
					float: left;
					margin-right: .09rem;
					margin-top: .12rem;
				}
				i{
					color: #dedee6;
					font-size: .09rem;
					float: right;
					line-height: .42rem;
					margin-right: .06rem;
				}
			}
			.chu{
				width: 100%;
				height: .44rem;
				line-height: .44rem;
				text-align: center;
				color: #484848;
				font-size: .13rem;
			}
		}
	}
</style>
