<template>
  <Tabbar>
      <TabbarItem path='/home'>
        <img slot="item-icon"        src="~assets/img/tabbar/offHome.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/onHome.svg">
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path='/category'>
        <img slot="item-icon" src="~assets/img/tabbar/offCategory.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/onCategory.svg">
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path='/cart'>
        <img slot="item-icon" src="~assets/img/tabbar/offCart.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/onCart.svg">
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path='/profile' activeColor='blue'>
        <img slot="item-icon" src="~assets/img/tabbar/offProfile.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/onProfile.svg">
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
</template>

<script>
import Tabbar from './Tabbar';
import TabbarItem from './TabbarItem'
export default {
    name:'MainBar',
    components:{
        Tabbar,
        TabbarItem
    }


}
</script>

<style>

</style>