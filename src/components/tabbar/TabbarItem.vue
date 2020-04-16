<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:'TabbarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'#d4237a'
      }
    },
    data(){
      return{
        //isActive:false,
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1;
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    }

}
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  margin-top: 3px;
}

.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>