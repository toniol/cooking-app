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
        <item v-for="item in zhuanye" :id="item.id" class="item-avatar item-ios">
          <router-link :to="{name: 'newsDetail', query: {id: item.id}}">
            <img :src="item.picurl" style="border-radius: 0"> 
            <div class="title"> {{item.title}} </div> 
            <div class="item-note"> {{item.releasetime}} </div> 
          </router-link>
        </item>
        <item class="item-ios">
          <router-link :to="{name: 'newsList', query: {funid: '1'}}">
            查看更多>>
          </router-link>
        </item>
      </list>

      <list class="list-ios">
        <item>
          <h2>通知公告</h2>
        </item>
        <item v-for="item in tongzhi" :id="item.id" class="item-avatar item-ios">
          <router-link :to="{name: 'newsDetail', query: {id: item.id}}">
            <img :src="item.picurl" style="border-radius: 0"> 
            <div class="title"> {{item.title}} </div> 
            <div class="item-note"> {{item.releasetime}} </div>
          </router-link>
        </item>
        <item class="item-ios">
          <router-link :to="{name: 'newsList', query: {funid: '2'}}">
            查看更多>>
          </router-link>
        </item>
      </list>
    </div>
  </div>
</template>
<script>
  import { Swiper, SwiperItem } from '../../components/swiper/'
  import { ajax } from '../../config/ajax'

  export default {
    data () {
      return {
        zhuanye: [],
        tongzhi: []
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    created(){
      this.initData()
    },
    methods: {
      onClick () {
        console.log('swiper click')
      },
      async ajaxZhuanye () {
        let self = this
        // 获取专业动态
        ajax({
          api: 'article',
          params: {
            type: 'getArticleList',
            funid: '1'
          }
        })
        .then(function(res){
          if(!res.data.errcode){
            self.zhuanye = res.data.data.slice(0, 2)
          }
        })
        .catch(function(err){
            console.log(err);
        })
      },
      async ajaxTongzhi () {
        let self = this
        // 获取通知公告
        ajax({
          api: 'article',
          params: {
            type: 'getArticleList',
            funid: '2'
          }
        })
        .then(function(res){
          if(!res.data.errcode){
            self.tongzhi = res.data.data.slice(0, 2)
          }
        })
        .catch(function(err){
            console.log(err);
        })
      },
      async initData () {
        await this.ajaxZhuanye()
        await this.ajaxTongzhi()

        this.$store.dispatch('hideLoading')
      }
    }
  }
</script>
