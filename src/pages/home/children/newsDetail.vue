<template>
  <div class="page has-navbar" v-nav="{ title: '新闻详情', showBackButton: true }" v-tabbar-menu-index="0">
    <div class="page-content">
      <div class="article">
        <h3>新闻标题</h3>
        <p><span class="date">2017-03-30</span><span class="author">张老师</span></p>
        <h4>小标题</h4>
        <p>新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文</p>
        <h4>小标题</h4>
        <p>新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文新闻正文</p>
        <p><img src='http://unsplash.it/g/640/320?random&gravity=center' alt=''/></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
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
  }
</style>