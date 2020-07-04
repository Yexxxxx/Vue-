<template>
  <div id="Rotaion">
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
      name: "Rotation",
      data(){
          return{
            nums : [0,1,2,3,4,5],
            index:0,
            rotations:[
              {
                to:'/my',
                url: require('../assets/ad/1.jpeg'),
              },
              {
                to:'/my',
                url: require('../assets/ad/2.jpg'),
              },
              {
                to:'/my',
                url: require('../assets/ad/3.jpg'),
              },
              {
                to:'/my',
                url: require('../assets/ad/4.jpg'),
              },
              {
                to:'/my',
                url: require('../assets/ad/5.jpg'),
              },
              {
                to:'/my',
                url: require('../assets/ad/6.jpg'),
              },
            ]
          }
      },
      created(){
        setInterval(()=>{this.rotation()},3000)
      },
      methods:{
        rotation(){
          if (this.index == 5) {
            this.index=0
            this.index++
          }else {
            this.index++
          }
        },
        goright(){
          if (this.index == 5) {
            this.index=0
            this.index++
          }else {
            this.index++
          }
        },
        goleft(){
          if (this.index == 0) {
            this.index=5
            this.index--
          }else{
            this.index--
          }
        },
      }
    }
</script>

<style scoped>
  #Rotaion{

  }
  img{
    width: 900px;
    height: 250px;
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
    margin-left: 8%;
  }
  .state{
    background: lightgray;
  }
  .active{
    background-color: cornflowerblue;
  }

</style>
