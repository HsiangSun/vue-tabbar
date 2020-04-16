<template>
  <div id="app">
    <router-view></router-view>
    <MainBar/>
  </div>
</template>

<script>
import MainBar from './components/tabbar/MainBar'
export default {
  name:'App',
  components:{
    MainBar
  }
  
}
</script>

<style>
@import "./assets/css/base.css";
</style>
