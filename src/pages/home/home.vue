<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '首页' }" v-tabbar-menu-index="0">
    <div class="page-content">
      <swiper ref="swiper" 
        direction="horizontal" 
        width="100%" 
        height="150" 
        pager-color="#ea5a49" 
        pager-bg-color="#e5e4e3"
        hide-pager="false"
      >
        <swiper-item>
          <h1 style="color: #0a9dc7;" @click="onClick()">Item 1</h1>
        </swiper-item>

        <swiper-item>
          <h1 style="color: #44cc00;">Item 2</h1>
        </swiper-item>

        <swiper-item>
          <h1 style="color: #ffc900;">Item 3</h1>
        </swiper-item>
      </swiper>

      <list class="list-ios">
        <item>
          <h2>专业动态</h2>
        </item>
        <item class="item-avatar item-ios">
          <router-link :to="{name: 'newsDetail'}">
            <img src="../../assets/images/baian.jpg" style="border-radius: 0"> 
            <div class="title"> 标题一 </div> 
            <div class="item-note"> 说明说明说明说明 </div> 
          </router-link>
        </item>
        <item class="item-avatar item-ios">
            <img src="../../assets/images/baian.jpg" style="border-radius: 0"> 
            <div class="title"> 标题二 </div> 
            <div class="item-note"> 说明说明说明说明 </div>
        </item>
      </list>

      <list class="list-ios">
      
        <item>
          <h2>通知动态</h2>
        </item>
        <item class="item-avatar item-ios">
            <img src="../../assets/images/baian.jpg" style="border-radius: 0"> 
            <div class="title"> 标题一 </div> 
            <div class="item-note"> 说明说明说明说明 </div> 
        </item>
        <item class="item-avatar item-ios">
          <img src="../../assets/images/baian.jpg" style="border-radius: 0"> 
            <div class="title"> 标题二 </div> 
            <div class="item-note"> 说明说明说明说明 </div>
        </item>
      </list>
    </div>
  </div>
</template>
<script>
  import { Swiper, SwiperItem } from '../../components/swiper/'

  export default {
    data () {
      return {

      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      onClick () {
        console.log('swiper click')
      }
    }
  }
</script>
<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }
  .swiper .swiper-item {
    padding-top: 50px;
    background-color: #eee;
    text-align: center;
  }
  .list-ios::before {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    left: 0;
    top: 0;
    bottom: auto;
    right: auto;
    height: 1px;
    width: 100%;
    transform-origin: 0% 0%;
    -webkit-transform-origin: 0% 0%;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(0.5);
  }
  .item-ios.item-avatar .title, 
  .list-ios>.item.item-avatar .title {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 6px;
    color: #444;
  }
  .item-ios.item-avatar .item-note,
  .list-ios>.item.item-avatar .item-note  {
    float: left;
    color: #aaa;
    font-size: 14px;
  }
  .item-ios.item-avatar img:first-of-type, 
  .list-ios>.item.item-avatar img:first-of-type {
    position: absolute;
    top: 16px;
    left: 0;
    max-width: 40px;
    max-height: 40px;
    width: 100%;
    height: 100%;
    min-width: 48px;
    min-height: 48px;
  }
</style>
