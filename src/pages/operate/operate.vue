<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '模拟操作' }" v-tabbar-menu-index="2">
    <div class="page-content">
      <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>

      <div class="cookingCateList"> 
        <router-link v-for="item in taskTypeList" :to="{name: 'taskList', query: {id: item.id, tasklev: tabIndex+1, tasktype: item.tasktype }}"> 
          <div :class="['cooking-item', item.class]"> 
            <p class="label">{{item.tasktype}}</p> 
          </div> 
        </router-link> 
      </div>
    </div>
  </div>
</template>

<script>
  import { ajax } from '../../config/ajax'

  export default {
    data () {
      return {
        tabs: [
          "一级区",
          "二级区",
          "三级区"
        ],
        tabIndex: 0,
        taskTypeList: [],
        tasktype: ''
      }
    },
    created () {
      this.initData()
    },
    methods: {
      onTabClick (index) {
        this.tabIndex = index        
      },
      async initData () {
        let self = this
        // 获取通知公告
        ajax({
          api: 'task',
          params: {
            type: 'getTaskType'
          }
        })
        .then(function(res){
          if(!res.data.errcode){
            res.data.data.forEach(function(el) {
              switch (el.tasktype) {
                case '白案':
                  el['class'] = 'baian'
                  break;
                case '红案':
                  el['class'] = 'hongan'
                  break;
                case '冷拼':
                  el['class'] = 'lengping'
                  break;
                case '雕刻':
                  el['class'] = 'diaoke'
                  break;
                case '西点':
                  el['class'] = 'xidian'
                  break;
                case '西餐':
                  el['class'] = 'xican'
                  break;

                default:
                  break;
              }
            }, this);

            self.taskTypeList = res.data.data
            self.$store.dispatch('hideLoading')
          }
        })
        .catch(function(err){
            console.log(err);
        })
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
