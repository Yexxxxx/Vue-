<template>
  <div id="app">
    <v-touch>
    <router-view></router-view>
    </v-touch>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './components/footer'

  export default {

    components:{
      Footer,
    }
  }
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    /*position: fixed;*/
    background-color: #FAFAFA;
  }
</style>
