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
  .router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
  a {
    text-decoration: none;
  }
  .navbar {
    z-index: 12;
  }
  .page-content {
    z-index: 11;
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
</style>
