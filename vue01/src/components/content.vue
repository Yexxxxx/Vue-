<template>
    <div id="content_box">
      <div class="title_box">
      <router-link v-for="(x,index) in title" :key="index" @click.native="addClassName(index)" :to="x.url">
        <span>{{x.text}}</span>
        <div :class="[flag==x.id?'active':'state']"></div>
      </router-link>
      </div>
      <router-view ref="con_in"></router-view>
    </div>
</template>

<script>
    export default {
        name: "content",
      mounted() {
        this.Storelist=this.$refs.con_in.data.Storelist
      },
      data(){
          return{
            Storelist:'',
            flag:0,
            title:[{
              id:0,
              text: "推荐",
              url:'/index/content_recommend',
            },
              {
                id:1,
                text: "超市",
                url:'/index/test',
              },
              {
                id:2,
                text: "水果",
                url:'/index',
              },
              {
                id:3,
                text: "买菜",
                url:'/index',
              },
      ]
          }
      },
      methods: {
        addClassName: function (index) {
          this.flag = index;
        },
      },
    }
</script>

<style scoped>
 #content_box{
   width: 100%;
   height: 100%;
 }
 .title_box{
   width: 100%;
   height: 80px;
   background-color: #FAFAFA;
 }
  span{
    float: left;
    font-size: 40px;
    font-weight: 900;
  }
  a{
    display: inline-block;
    margin-left: 40px;
    margin-top: 10px;
    width: 80px;
    height: 52px;
  }
  a > div{
    width: 50px;
    height: 5px;
    margin: 55px auto;
  }
  .active{
    background-color: lightskyblue;
  }
  .state{
    background-color: #FAFAFA;
  }
</style>
