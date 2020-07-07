<template>
  <div id="Rotaion-hprice">
    <v-touch v-on:swipeleft="goright" v-on:swiperight="goleft" class="box" style="touch-action: pan-y!important;">
      <router-link :to="rotations[index].to" >
        <img :src="rotations[index].url">
      </router-link>
    </v-touch>
    <div class="bottom">
      <div v-for="x in nums" :class="[x==index?'active':'state']" >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Rotation-hprice",
    data(){
      return{
        nums : [0,1,2],
        index:0,
        rotations:[
          {
            to:'/my',
            url: require('../assets/ad/7.jpg'),
          },
          {
            to:'/my',
            url: require('../assets/ad/8.jpg'),
          },
          {
            to:'/my',
            url: require('../assets/ad/9.png'),
          },
        ]
      }
    },
    created(){
      setInterval(()=>{this.rotation()},3000)
    },
    methods:{
      rotation(){
        if (this.index == 2) {
          this.index=-1
          this.index++
        }else {
          this.index++

        }
      },
      goright(){
        if (this.index == 2) {
          this.index=-1
          this.index++
        }else {
          this.index++
        }
      },
      goleft(){
        if (this.index == 0) {
          this.index=3
          this.index--
        }else{
          this.index--
        }
      },
    }
  }
</script>

<style scoped>
  img{
    width: 900px;
    height: 350px;
    border-radius:30px;
  }
  .box{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bottom{
    background-color: white;
    width: 30%;
    height: 5px;
    display: flex;
    margin: 0 auto;
  }
  .bottom > div{
    border-radius:20px;
    border:0px solid #C0C0C0;
    width: 10%;
    height: inherit;
    margin: 0 auto;
  }
  .state{
    background: lightgray;
  }
  .active{
    background-color: cornflowerblue;
  }

</style>
