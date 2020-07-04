<template>
  <div id="test">
    <div v-for="(x,index) in text">
      {{x}}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        msg:'asdlfj',
        text : ["aaa",'bbb','ccc','ddd','fff'],
      }
    }
  }
</script>

<style>

</style>
