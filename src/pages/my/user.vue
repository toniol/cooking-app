<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '我的' }">
    <div class="page-content">
      <blur :blur-amount=40 :url="url" :height="160">
        <div class="center">
          <img :src="url">
          <p>张三</p>
        </div>
      </blur>

      <list>
        <item class="item-icon-left item-icon-right">
          修改密码
          <i class="icon ion-ios-unlocked-outline"></i>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
        <item class="item-icon-left item-icon-right">
          关于我们
          <i class="icon ion-ios-world-outline"></i>
          <i class="icon ion-ios-arrow-right"></i>
        </item>
      </list>
    </div>
  </div>
</template>

<script>
  import Blur from '../../components/cBlur/cBlur'

  export default {
    components: {
      Blur
    },
    data () {
      return {
        url: "https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg"
      }
    }
  }
</script>

<style lang="scss" scoped>
  .center {
    position: relative;
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
</style>
