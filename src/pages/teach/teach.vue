<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '视频教学' }" v-tabbar-menu-index="1">
    <div class="page-content">
    <div class="list list-ios" style="padding-left: 5px;">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/2">
          <router-link :to="{name: 'play'}">
            <div class="videoBox"> 
              <div class="cover"> 
                <img alt="" src="../../assets/images/photo-1466495227171-d05d7e3ac2b3.jpg"> 
                <span class="label"><i class="ion-ios-at-outline"></i>张三</span> 
              </div> 
              <p class="title">标题</p> 
            </div>
          </router-link>
        </flexbox-item>
        <flexbox-item :span="1/2">
          <router-link :to="{name: 'play'}">
            <div class="videoBox"> 
              <div class="cover"> 
                <img alt="" src="../../assets/images/photo-1471347334704-25603ca7d537.jpg"> 
                <span class="label"><i class="ion-ios-at-outline"></i>李四</span> 
              </div> 
              <p class="title">标题</p> 
            </div>
          </router-link>
        </flexbox-item>
        <flexbox-item :span="1/2">
          <router-link :to="{name: 'play'}">
            <div class="videoBox"> 
              <div class="cover"> 
                <img alt="" src="../../assets/images/photo-1471347334704-25603ca7d537.jpg"> 
                <span class="label"><i class="ion-ios-at-outline"></i>李四</span> 
              </div> 
              <p class="title">标题</p> 
            </div>
          </router-link>
        </flexbox-item>
        <flexbox-item :span="1/2">
          <router-link :to="{name: 'play'}">
            <div class="videoBox"> 
              <div class="cover"> 
                <img alt="" src="../../assets/images/photo-1471347334704-25603ca7d537.jpg"> 
                <span class="label"><i class="ion-ios-at-outline"></i>李四</span> 
              </div> 
              <p class="title">标题</p> 
            </div>
          </router-link>
        </flexbox-item>
      </flexbox>
      </div>
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from '../../components/flexbox/index.vue'

  export default {
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
  .videoBox {
    position: relative;
    margin: 5px 5px 5px 0;
    z-index: 10;
    .cover {
      position: relative;
      border-radius: 5px;
      height: 100px;
      overflow: hidden;
      img {
        width: 100%;
        min-height: 100%
      }
      .label {
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        padding-top: 5px;
        font-size: 12px;
        color: #fff;
        background: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.6) 50%,rgba(0,0,0,.85));
        background: linear-gradient(180deg,transparent 0,rgba(0,0,0,.6) 50%,rgba(0,0,0,.85));
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000",endColorstr="#d9000000",GradientType=0);
        .ion-ios-at-outline {
          margin-left: 5px;
          font-size: 20px;
          vertical-align: middle
        }
      }
    }
    .title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #333
    }
  }
</style>
