<template>
  <div class="page has-navbar" v-nav="{ title: '新闻详情', showBackButton: true }" v-tabbar-menu-index="0">
    <div class="page-content">
      <div class="article">
        <h3>{{detail.title}}</h3>
        <p><span class="date">{{detail.releasetime}}</span><span class="author">{{detail.author}}</span></p>
        <div v-html="detail.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ajax } from '../../../config/ajax'

  export default {
    data () {
      return {
        detail: {}
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
            type: 'getArticleDetail',
            id: self.$route.query.id
          }
        })
        .then(function(res){
          if(!res.data.errcode){
            self.detail = res.data.data[0]
          }
        })
        .catch(function(err){

        })
      }
    }  
  }
</script>

<style lang="scss">
  .article {
    padding: 20px;
    background-color: #fff;
    font-size: 16px;
    h3 {
      font-weight: 400;
      line-height: 1.5;
    }
    h4 {
      font-weight: 400;
    }
    .date {
      margin-right: 10px;
      font-size: 16px;
      color: #666;
    }
    .author {
      font-size: 16px;
      color: #094dcc;
    }
    p {
      line-height: 1.8;
    }
    img {
      width: 100%;
    }
  }
</style>