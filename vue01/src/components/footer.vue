<template>

  <div id="footer" >
    <div class="tab" v-for="(x,i) in tabs" :key="i" @click="addClassName(i)">
      <router-link :to="x.url">
        <div style="width: 35px;height: 35px;margin: 0 auto;padding-bottom: 5px">
          <img v-if="flag != i" :src="x.img">
          <img v-if="flag == i" :src="x.active">
        </div>
        <span>{{x.title}}</span>
      </router-link>
    </div>
  </div>
</template>

<script scoped>
    export default {
      name: "footer",
      data() {
        return{
          flag:0,
          tabs:[
            {
              title:"外卖",
              url:'/index',
              img: require('../assets/home.png'),
              active:require('../assets/home_fill.png')
            },
            {
              title:"超市",
              url:'/shop',
              img:require('../assets/shop.png'),
              active:require('../assets/shop_fill.png')
            },
            {
              title:"定单",
              url:'/order',
              img: require('../assets/text.png'),
              active: require('../assets/text_fill.png')
            },
            {
              title:"我的",
              url:'/my',
              img: require('../assets/my.png'),
              active: require('../assets/my_fill.png')
            },
          ]
        }
      },
      methods: {
        addClassName: function (index) {
          this.flag = index;
        },
      }
    }
</script>

<style>
  #footer{
    background-color: white;
    position: fixed;
    width: 100%;
    border:1px solid #C0C0C0;
    height:6%;
    bottom: 0;
    left: 0;
  }
  a{
    text-decoration:none;
  }
  span{
    color: black;
    display: flex;
    justify-content: center;
    font-size: 12px;
  }
  img{
    width: inherit;
    height: inherit;
    margin-top: 5px;

  }
  .tab{
    float: left;
    width:25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
