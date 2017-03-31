<template>
  <div class="page has-navbar" v-nav="{ title: '新闻列表', showBackButton: true }" v-tabbar-menu-index="0">
    <div class="page-content">
      <list class="list-ios">
        <item v-for="item in zhuanyeList" :id="item.id" class="item-avatar item-ios">
          <router-link :to="{name: 'newsDetail', query: {id: item.id}}">
            <img :src="item.picurl" style="border-radius: 0"> 
            <div class="title"> {{item.title}} </div> 
            <div class="item-note"> {{item.releasetime}} </div> 
          </router-link>
        </item>
      </list>
    </div>
  </div>
</template>

<script>
  import { ajax } from '../../../config/ajax'

  export default {
    data () {
      return {
        zhuanyeList: []
      }
    },
    created () {
      this.initData()
    },
    methods: {
      async initData () {
        let self = this

        ajax({
          api: 'article',
          params: {
            type: 'getArticleList',
            funid: self.$route.query.funid
          }
        })
        .then(function(res){
          if(!res.data.errcode){
            self.zhuanyeList = res.data.data
          }
        })
        .catch(function(err){
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss">
  
</style>