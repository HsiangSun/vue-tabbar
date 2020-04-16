<template>
  <div>
    <h1>Home</h1>
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
import {http} from '../../http/index.js'
export default {
  name:'Home',
  created(){
      http({
        url:'/home/multidata',
      }).then(res=>{console.log(res)}).catch(err=>{console.log(err)});
  }

}
</script>

<style>

</style>