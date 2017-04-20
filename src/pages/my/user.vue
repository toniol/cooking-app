<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '我的' }" v-tabbar-menu-index="4">
    <div class="page-content">
      <blur :blur-amount=40 :url="url" :height="160">
        <div class="center">
          <img :src="url">
          <p>{{username}}</p>
        </div>
      </blur>

      <!--
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
      -->

      <br>
      <br>
      <div class="padding">
        <md-button class="md-button button button-assertive button-block" @click.native="logout()">
          注 销
        </md-button>
      </div>

    </div>
  </div>
</template>

<script>
  import Blur from '../../components/cBlur/cBlur'
  import { removeSess, getSess } from '../../utils'

  export default {
    components: {
      Blur
    },
    data () {
      return {
        url: "https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg",
        username: ''
      }
    },
    created (){
      let userinfo = getSess('userinfo')
      if(userinfo){
        this.username = userinfo.username
        this.$store.dispatch('hideLoading')
      }
    },
    methods: {
      logout () {
        removeSess('userinfo')
        this.$store.commit('REMOVE_USERINFO')
        $router.push({name: 'login'})
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
