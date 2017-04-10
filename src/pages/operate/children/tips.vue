<template>
  <div class="page has-navbar" v-nav="{ title: '任务说明', showBackButton: true }"  v-tabbar-menu-index="2">
    <div class="page-content">
      <div class="padding">
        <div v-html="info.content"></div>

        <md-button class="md-button button button-positive button-block" @click.native="clicked()">
          进入任务
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { ajax } from '../../../config/ajax'

  export default {
    data () {
      return {
        info: {}
      }
    },
    created () {
        this.initData()
    },
    methods: {
      async initData () {
          let self = this
          // 获取通知公告
          ajax({
          api: 'task',
          params: {
              type: 'getTaskCon',
              id: self.$route.query.id
          }
          })
          .then(function(res){
          if(!res.data.errcode){
              self.info = res.data.data[0]
              self.$store.dispatch('hideLoading')
          }
          })
          .catch(function(err){
              console.log(err);
          })
      },
      clicked () {
        $router.push({ name: 'task', query: { id: this.$route.query.id }})
      } 
    }
  }
</script>