<template>
  <div class="page has-navbar" v-nav="{ title: '视频播放', showBackButton: true }"  v-tabbar-menu-index="1">
    <div class="page-content">
      <div class="article">
        <h3>{{detail.title}}</h3>
        <p><span class="date">{{detail.releasetime}}</span><span class="author">{{detail.author}}</span></p>
        
        <video :src="src" :poster="poster" width="100%" height="auto" controls="controls">
          Your browser does not support the video tag.
        </video>
        <br>
        <p>{{detail.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { ajax } from '../../../config/ajax'

  export default {
    data () {
      return {
        detail: {},
        src: '',
        poster: ''
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
            self.src = self.detail.videourl
          }
        })
        .catch(function(err){
          console.log(err)
        })
      }
    }  
  }
</script>

<style lang="scss" scoped>
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
    video {
      width: 100%;
    }
  }
</style>
