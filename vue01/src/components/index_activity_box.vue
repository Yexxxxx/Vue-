<template>
    <div id="ac_box">
      <div class="box">
      <div v-for="(x,index) in one_line" :class="[index=='0'?'left':'right']" :key="index">
        <a :href="x.url">
        <span class="title">{{x.title}}</span>
        <img :src="x.img">
        <span style="font-size: 25px;">{{x.text}}</span>
        </a>
      </div>
      </div>


    <div class="title_box">
        <div class="label"  v-for="(label,index) in labels" :key="index">
        <span>{{label}}</span>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "index_activity_box",
      data(){
          return{
            labels:['星选好店','大牌惠吃','新店尝鲜','津贴联盟',],
            one_line:[
              {
                title:'天天特价',
                img:require('../assets/commodity/3.jpg'),
                url:'/my',
                text:'美食'
              },
              {
                title:'有趣的吃货',
                img:require('../assets/commodity/2.jpg'),
                url:'/my',
                text:'美食'
              },
            ],
            second_line:[
              {
                title:'',
                img:require('../assets/activity/冰淇淋.png'),
                url:'/my',
                text:'美食'
              },
              {
                title:'',
                img:require('../assets/activity/冰淇淋.png'),
                url:'/my',
                text:'美食'
              },
            ]
          }
      }
    }
</script>

<style scoped>
 #ac_box{
   width: 100%;
   height: 100%;
   margin: 0 auto;
 }
 .box{
   width: 100%;
   display: flex;
   justify-content: center;

 }
.box>div{
  float: left;
  background-color: white;
  border-bottom:2px solid #C0C0C0;
  width: 50%;
  height: 440px;
  display: flex;
  justify-content: center;
 }
  .label {
    background-color: lightgray;
    float: left;
    border-radius: 10px;
    width: 150px;
    height: 40px;
    margin: 10px 10px 30px 30px;
  }
 .label>span{
   font-size: 25px;
   text-align: center;
   line-height: inherit;
 }
  .left{
    border-top-left-radius: 15px;
    border-right:0.5px solid #C0C0C0;

  }
  .right{
    border-top-right-radius: 15px;
    border-left:0.5px solid #C0C0C0;
  }
  a{
    width: 88%;
  }
  img{
    width:100%;
    height: 350px;
    background-color: chocolate;

  }
  .title_box{
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    background-color: white;
    width: 100%;
    height: 60px;
    justify-content: center;
  }
  .title{
    display: block;
    font-size: 22px;
    font-weight: 800;
  }
</style>
