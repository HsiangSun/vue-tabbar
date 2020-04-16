<template>
  <div>
    <h1>购物车</h1>

    <mark>中国互联网Top10</mark>
    <ul>
      <li v-for="person in persions" :key="person.name">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Cart',
  data(){
    return{
      persions:this.$store.getters.filterByMoney(20)
    }
  },
}
</script>

<style>

</style>