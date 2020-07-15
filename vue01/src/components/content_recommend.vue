<template>
  <div>
    <div class="con_com">
      <div class="c_box">
      </div>
      <div class="c_box">
        <span class="lable" v-for="(x,index) in text" :key="index">{{x}}</span>
      </div>
    </div>
    <div ref="Storelist" class="content_store" id="content_store" v-for="(store, index) in stores" :key="index">
      <img :src="store.img">
      <div ref="Storelist" class="span_box">

      <span  class="title" >{{store.title}}</span>
        <div>
        <span class="score">{{store.score}}<span style="font-size: 12px;color:inherit;margin-top:5px;">分</span></span>
        <span class="sale">月售{{store.sale}}</span>
        <span class="time">{{store.time}}分钟</span>
        <span class="distance">{{store.distance}}m</span>
        </div>
        <div>
        <span class="send_fare">起送{{store.send_fare}}￥</span>
          <span class="ex_fare">{{store.ex_fare}}</span>
        </div>
        <div>
      <span class="rate">{{store.rate}}</span>
        </div>
        <div>
      <span class="c_lab"  v-for="(label,i) in store.labels" :key="i">{{label}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "content_recommend",
      mounted() {
        this.Storelist = this.$refs.Storelist
      },
      methods:{

      },
      data() {
        return {
          Storelist:'',
          text: ["717狂欢节", "津贴优惠", "满减优惠", "品质联盟"],
          stores: [
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
            {
              title: 'xxx奶茶店',
              img: require('../assets/commodity/6.jpg'),
              score: 4.6,
              send_fare: 10,
              sale: 115,
              time: 30,
              distance: 900,
              ex_fare: "免配送费",
              rate: "'红红火火恍恍惚惚'",
              labels: ['满5减5', '满10减10', '满40减40', '满80减80', '满100减100', '不要钱'],
            },
          ]
        }
      },
    }
</script>

<style>
.con_com{
  width: 100%;
  height: 80px;
  background-color: aqua;
}
.c_box{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
}
 .lable{
   width: 130px;
   height: 30px;
   float: left;
   font-size: 20px;
   border-radius: 5px;
   background-color: lightgrey;
   margin-left: 30px;
   margin-right: 30px;
  }
  .content_store{
    width: 95%;
    height: 200px;
    background-color: white;
    border-radius: 15px;
    margin: 10px auto;
    display: flex;
  }
  .content_store > img{
    width: 180px;
    height: 180px;
    margin: 10px 10px 0 10px;
  }
  .span_box{
    width: 100%;
    height: 100%;
    margin-top: 10px;
    display: block;
  }
.span_box > span{
  height:auto;
  justify-content: normal;
}
.span_box > div{
  display: flex;
  width: inherit;
}
.title{
  font-size: 24px;
  font-weight: 800;
  width: auto;
  color: #000;
}
.score{
  font-size: 18px;
  color: darkorange;
}
.sale{
  font-size: 18px;
  margin:3px 10px;
  color: grey;
}
.time,.distance{
  font-size: 18px;
  margin-top: 3px;
  margin-left:400px;
  color: grey;
}
.distance{
  margin-left:50px;
  color: grey;
}
.send_fare{
  font-size: 18px;
  color: grey;
  margin-top: 5px ;
}
.ex_fare{
  font-size: 18px;
  margin-left: 10px;
  color: gray;
  margin-top: 5px ;
}
.rate{
  font-size: 18px;
  width: 300px;
  height: 25px;
  color: #FF7011;
  background-color: #FFD6BB;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px ;
}
  .c_lab{
    font-size: 18px;
    border: 1px solid #F79090;
    color: red;
    margin: 15px 5px;
  }

</style>
