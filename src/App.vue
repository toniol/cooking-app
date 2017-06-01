<template>
  <div v-tabbar="{'menus': menus, menuColor: '#aaa', activeMenuColor: '#EA5A49', onMenuClick: menuClicked}">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <loading v-model="$store.state.isLoading"></loading>
  </div>
</template>

<script>
import Loading from './components/loading/loading'

export default {
  components: {
    Loading
  },
  data() {
    return {
      menus: [
        {
          iconOn: 'ion-ios-home',
          iconOff: 'ion-ios-home-outline',
          text: '首页',
          path: '/home'
        },
        {
          iconOn: 'ion-ios-videocam',
          iconOff: 'ion-ios-videocam-outline',
          text: '视频教学',
          path: '/teach'
        },
        {
          iconOn: 'ion-ios-flower',
          iconOff: 'ion-ios-flower-outline',
          text: '模拟操作',
          path: '/operate'
        },
        // {
        //     iconOn: 'ion-ios-chatboxes',
        //     iconOff: 'ion-ios-chatboxes-outline',
        //     text: '互动交流',
        //     path: '/topic',
        //     badge: '5'
        // },
        {
          iconOn: 'ion-ios-person',
          iconOff: 'ion-ios-person-outline',
          text: '我的',
          path: '/user'
        }
      ]
    }
  },

  methods: {
    menuClicked(menuIndex) {
      console.log(menuIndex)
    }
  },

  beforeDestroy() {
    $tabbar.$emit('hideTabbar')
  }
}
</script>

<style lang="scss">
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .2s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}

h2 {
  font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
  color: #888;
}

a {
  text-decoration: none;
}

[class*=list]:empty {
  display: none;
}

[class*=list]+.loadmore {
  margin-top: 89px;
}

.navbar {
  z-index: 3;
}

.page-content {
  z-index: 2;
}

.tabbar {
  z-index: 1;
}

.tabbar::before {
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
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-ios.item-avatar .item-note,
.list-ios>.item.item-avatar .item-note {
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



/*!
 * animate.css -http://daneden.me/animate
 * Version - 3.5.1
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2016 Daniel Eden
 */

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}
</style>
