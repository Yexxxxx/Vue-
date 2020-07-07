<template>
    <div id="activity">
      <div  class="box">
          <router-link v-for="(icon,index) in icon_category" :key="index" :to="icon.url">
            <div>
            <img class="top" :src="icon.img">
            </div>
            <span>{{icon.text}}</span>
          </router-link>
      </div>
      <div  class="box">
          <router-link  v-for="(icon,index) in icon_activity_1" :key="index" :to="icon.url">
            <div>
            <img :src="icon.img">
            </div>
            <span>{{icon.text}}</span>
          </router-link>
      </div>
      <div  class="box">
          <router-link  v-for="(icon,index) in icon_activity_2" :key="index" :to="icon.url">
            <div>
            <img :src="icon.img">
            </div>
            <span>{{icon.text}}</span>
          </router-link>
      </div>
    </div>
</template>

<script>
    export default {
      name: "activity",
      data (){
        return{
          icon_category:[
            {
              img:require('../assets/activity/冰淇淋.png'),
              url:'/my',
              text:'美食'
            },
            {
              img:require('../assets/activity/私房菜.png'),
              url:'/my',
              text:'商超便利'
            },
            {
              img:require('../assets/activity/生日蛋糕.png'),
              url:'/my',
              text:'水果'
            },
            {
              img:require('../assets/activity/啤酒.png'),
              url:'/my',
              text:'送药上门'
            },
            {
              img:require('../assets/activity/早餐.png'),
              url:'/my',
              text:'甜品饮品'
            },
          ],
          icon_activity_1:[
            {
              img:require('../assets/activity/饼干.png'),
              url:'/my',
              text:'晚餐'
            },
            {
              img:require('../assets/activity/花茶.png'),
              url:'/my',
              text:'速食简餐'
            },
            {
              img:require('../assets/activity/烤鸡腿.png'),
              url:'/my',
              text:'火锅香锅'
            },
            {
              img:require('../assets/activity/苹果.png'),
              url:'/my',
              text:'跑腿代购'
            },
            {
              img:require('../assets/activity/切片蛋糕.png'),
              url:'/my',
              text:'买菜'
            },
          ],
          icon_activity_2:[
            {
              img:require('../assets/activity/酸奶.png'),
              url:'/my',
              text:'超级会员'
            },
            {
              img:require('../assets/activity/甜甜圈.png'),
              url:'/my',
              text:'领券中心'
            },
            {
              img:require('../assets/activity/奶茶.png'),
              url:'/my',
              text:'鲜花绿植'
            },
            {
              img:require('../assets/activity/鱼.png'),
              url:'/my',
              text:'签到嬴饭钱'
            },
            {
              img:require('../assets/activity/炸丸子.png'),
              url:'/my',
              text:'全部分类'
            },
          ]
        }
      }
    }
</script>

<style scoped>
#activity {
  float: left;
  width: 100%;
  height:100%;
}
.box{
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
img{
  width: 60px;
  height:60px;
  margin-left: 60px;
  margin-right: 60px;
}
  .top{
    width: 100px;
    height:100px;
    margin-left: 40px;
    margin-right: 40px;
    background-color:lightskyblue;
    border-radius: 50px;
  }
  span{
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
</style>
