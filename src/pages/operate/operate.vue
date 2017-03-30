<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '模拟操作' }" v-tabbar-menu-index="2">
    <div class="page-content">
      <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>

      <div class="cookingCateList"> 
        <router-link :to="{name: 'taskList'}"> 
          <div class="cooking-item baian"> 
          <p class="label">白案区</p> 
          </div> 
        </router-link> 
        <router-link :to="{name: 'taskList'}"> 
          <div class="cooking-item hongan"> 
          <p class="label">红案区</p> 
          </div> 
        </router-link> 
        <router-link :to="{name: 'taskList'}"> 
          <div class="cooking-item lengping"> 
          <p class="label">冷拼区</p> 
          </div> 
        </router-link> 
        <router-link :to="{name: 'taskList'}"> 
          <div class="cooking-item diaoke"> 
          <p class="label">雕刻区</p> 
          </div> 
        </router-link> 
        <router-link :to="{name: 'taskList'}"> 
          <div class="cooking-item xidian"> 
          <p class="label">西点区</p> 
          </div> 
        </router-link> 
        <router-link :to="{name: 'taskList'}"> 
          <div class="cooking-item xican"> 
          <p class="label">西餐区</p> 
          </div> 
        </router-link> 
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: [
          "一级区",
          "二级区",
          "三级区"
        ],
        tabIndex: 0
      }
    },
    methods: {
      onTabClick (index) {
        this.tabIndex = index
      }
    }
  }
</script>

<style lang="scss">
.cookingCateList {
	margin-top: 49px;
	background: #fff;
	overflow: hidden
}

.cookingCateList a {
	text-decoration: none
}

.cookingCateList .cooking-item {
	position: relative;
	height: 160px;
	margin-bottom: 5px;
	background-size: cover
}

.cookingCateList .cooking-item:before {
	content: "";
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.4)
}

.cookingCateList .cooking-item.baian {
	background-image: url(../../assets/images/baian.jpg)
}

.cookingCateList .cooking-item.hongan {
	background-image: url(../../assets/images/hongan.jpg)
}

.cookingCateList .cooking-item.lengping {
	background-image: url(../../assets/images/lengping.jpg)
}

.cookingCateList .cooking-item.diaoke {
	background-image: url(../../assets/images/diaoke.jpg)
}

.cookingCateList .cooking-item.xidian {
	background-image: url(../../assets/images/xidian.jpg)
}

.cookingCateList .cooking-item.xican {
	background-image: url(../../assets/images/xican.jpg)
}

.cookingCateList .cooking-item .label {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	height: 36px;
	line-height: 36px;
	z-index: 1;
	margin-top: -18px;
	margin-bottom: 0;
	text-align: center;
	color: #fff;
	font-size: 24px
}
</style>
