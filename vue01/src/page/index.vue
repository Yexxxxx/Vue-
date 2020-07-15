
<template>
  <div id="index">
    <!--<headTop></headTop>-->
    <div class="index_top">
      <div class="index_title">
        <img src="../assets/address.png">
        <p style="margin-left: 50px;margin-top:30px;font-size:30px;font-weight:600;">{{address}}</p>
        <img src="../assets/scan.png" style="right:150px;">
        <img src="../assets/chat.png" style="right:50px;">
      </div>
      <div class="search">
        <input :placeholder="str" v-model="search">
      </div>
    </div>
    <div class="index_ad">
        <Rotation></Rotation>
    </div>
    <div class="index_activity">
      <activity></activity>
    </div>
    <div class="index_recommend">
      <recommend></recommend>
    </div>
    <div class="index_activity_box">
      <index_activity_box></index_activity_box>
    </div>
    <div class="high_price">
      <Rotation_hprice></Rotation_hprice>
    </div>
    <div class="content">
      <Content ref="con"></Content>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../components/footer'
  import Rotation from '../components/Rotation'
  import Rotation_hprice from '../components/Rotation_hprice'
  import activity from '../components/activity'
  import recommend from '../components/recommend'
  import Content from '../components/content'
  import index_activity_box from '../components/index_activity_box'
  export default {
    data() {
      return {
        indexNumTop: '',
        scrollTop: '',
        str: "华莱士",
        search: '',
        address: '城关街道崇宁社区',
        Stores:'',
      }
    },
    name: "index",
    mounted() {
      window.addEventListener('scroll', this.getScroll);
      console.log(this.$refs.con)
    },
    destroyed() {
      window.removeEventListener('scroll', this.getScroll);
    },
    methods: {
      //监听滚动
      getScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var viewportSize = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        console.log(scrollTop, viewportSize)
      },

    },
      components: {
        Footer,
        Rotation,
        Rotation_hprice,
        activity,
        recommend,
        index_activity_box,
        Content,
      }
  }
</script>

<style>
  #index{
    width: 100%;
    height: 10000px;
    overflow: hidden;
    display: block;
    top: 0;
  }
  .index_top{
    width: 100%;
    height: 200px;
    top: 0;
    background-color: deepskyblue;

  }
  .index_title{
    width: 100%;
    height: 35%;
    display: flex
  }
  .index_title > img {
    width: 50px;
    height: 50px;
    margin-top:20px;
    position:absolute
  }
  .search > input  {
    width: 90%;
    height: 40%;
    background-color: lightgrey;
  /*搜索图标设定*/
    background-image: url("../assets/search.png");
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 10px 14px;
    padding-left:30px;
    /*边框设定*/
    border-radius:25px;
    border:0px;
  }
  .search{
    width: 100%;
    height: 60%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 6%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #FAFAFA;


  }
  .index_ad{
    width: 100%;
    height: 300px;
    background-color: #FAFAFA;
  }
  .index_activity{
    width: 100%;
    height: 500px;
  }
  .index_recommend{
    width: 100%;
    height: 340px;
  }
  .index_activity_box{
    width: 100%;
    height: 550px;
    border-radius:15px
  }
  .high_price{
    width: 100%;
    height: 400px;
  }
  .content{
    background-color:lightblue;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
  }
</style>
