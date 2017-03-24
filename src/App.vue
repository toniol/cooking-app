<template>
	<div>
		<div class="page" v-tabbar="{'menus': menus, menuColor: '#aaa', activeMenuColor: '#EA5A49', onMenuClick: menuClicked}">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
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
          {
              iconOn: 'ion-ios-chatboxes',
              iconOff: 'ion-ios-chatboxes-outline',
              text: '互动交流',
              path: '/topic',
              badge: '5'
          },
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