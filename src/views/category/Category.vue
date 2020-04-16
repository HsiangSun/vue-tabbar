<template>
  <div>
    <h1>分类</h1>
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
import {SUB} from '@/store/mutations-type.js'
export default {
  name:'Category',
  created(){
    //修改store里面的值
    this.$store.commit(SUB) //避免使用字符串方法名

    //mutations的payload
    //this.$store.commit('sub',?)
    //this.$store.commit({
        //type:'sub',
        //{?}
    //})
    
  },
}
</script>

<style>

</style>