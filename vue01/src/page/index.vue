
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

    </div>
    <div class="index_recommend">

    </div>
    <div class="high_price">

    </div>
    <div class="content">

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../components/footer'
  import Rotation from '../components/Rotation'
  export default {
    data(){
      return{
        indexNumTop:'',
        scrollTop:'',
        str: "华莱士",
        search:'',
        address:'城关街道崇宁社区',
      }
    },
    name: "index",
    mounted(){
      window.addEventListener('scroll', this.getScroll);
    },
    destroyed(){
      window.removeEventListener('scroll', this.getScroll);
    },
    methods:{
      //监听滚动
      getScroll(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
      }

    },
    components:{
      Footer,
      Rotation,
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
    background-color: #E6E6E6;
  /*搜索图标设定*/
    background-image: url("../assets/search.png");
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 6px 6px;
    padding-left:30px;
    /*边框设定*/
    border-radius:18px;
    border:0px solid #C0C0C0;
  }
  .search{
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
  }
  .index_ad{
    width: 100%;
    height: 300px;
  }
  .index_activity{
    background-color: yellow;
    width: 100%;
    height: 450px;
  }
  .index_recommend{
    background-color: green;
    width: 100%;
    height: 500px;
  }
  .high_price{
    background-color: sienna;
    width: 100%;
    height: 300px;
  }
  .content{
    background-color:black;
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
  }
</style>
