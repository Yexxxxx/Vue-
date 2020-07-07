<template>
    <div id="recommend">
      <p>专属 · 午后时光</p>
      <div style=" width:100%;display: flex; justify-content: center">
      <div v-for="(content,index) in contents" :key="index">
        <a :href="content.url">
          <img :src="content.img">
          <span>{{content.text}}</span>
          <span>{{content.text}}</span>
        </a>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "recommend",
      data(){
          return{
            contents:[
              {
                img:require('../assets/commodity/9.jpg'),
                url:'/my',
                text:'推荐一'
              },
              {
                img:require('../assets/commodity/10.jpg'),
                url:'/my',
                text:'推荐二'
              },
              {
                img:require('../assets/commodity/11.jpg'),
                url:'/my',
                text:'推荐三'
              },
            ]
          }
      }
    }
</script>

<style scoped>
#recommend{
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 15px;
}
  #recommend >div{
    float: left;
  }
#recommend >div >div{
  margin: 0 0 4% 4%;
}
  img{
    width: 100%;
    height: 180px;
    border-radius: 15px;
    object-fit:cover;
  }
  p{
    font-size: 30px;
    font-weight: 700;
    margin-left: 4%;
  }
  span{
    font-size: 25px;
    display: block;
  }
</style>
