<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '任务列表', showBackButton: true }">
    <div class="page-content">
      <div class="tasklist">
        <div class="tasklist-item"> 
            <router-link :to="{name: 'task'}"> 
                <img alt="" src="../../../assets/images/photo-1471347334704-25603ca7d537.jpg" /> 
                <div class="tasklist-cover"> 
                    <h3>任务标题</h3> 
                    <p class="tips clearfix"> <span class="info">等级: 一级</span> <span class="info">类别: 白案</span> <span class="author">赵四</span> </p> 
                </div> 
            </router-link> 
        </div>
        <div class="tasklist-item"> 
            <router-link :to="{name: 'task'}"> 
                <img alt="" src="../../../assets/images/photo-1471347334704-25603ca7d537.jpg" /> 
                <div class="tasklist-cover"> 
                    <h3>任务标题</h3> 
                    <p class="tips clearfix"> <span class="info">等级: 一级</span> <span class="info">类别: 白案</span> <span class="author">赵四</span> </p> 
                </div> 
            </router-link> 
        </div>
        <div class="tasklist-item"> 
            <router-link :to="{name: 'task'}"> 
                <img alt="" src="../../../assets/images/photo-1471347334704-25603ca7d537.jpg" /> 
                <div class="tasklist-cover"> 
                    <h3>任务标题</h3> 
                    <p class="tips clearfix"> <span class="info">等级: 一级</span> <span class="info">类别: 白案</span> <span class="author">赵四</span> </p> 
                </div> 
            </router-link> 
        </div>
        <div class="tasklist-item"> 
            <router-link :to="{name: 'task'}"> 
                <img alt="" src="../../../assets/images/photo-1471347334704-25603ca7d537.jpg" /> 
                <div class="tasklist-cover"> 
                    <h3>任务标题</h3> 
                    <p class="tips clearfix"> <span class="info">等级: 一级</span> <span class="info">类别: 白案</span> <span class="author">赵四</span> </p> 
                </div> 
            </router-link> 
        </div>
      </div>
      <loadmore type="line" text="烹饪是一门艺术"></loadmore>
    </div>
  </div>
</template>

<script>
    import Loadmore from '../../../components/loadmore/loadmore.vue'

    export default {
        components: {
            Loadmore
        }
    }
</script>

<style lang="scss" scoped>
    .page-content {
      background-color: #fff;
    }
    .tasklist {
        padding: 10px;
        background: #fff
    }

    .tasklist .tasklist-item {
        position: relative;
        margin-bottom: 10px;
        max-height: 180px;
        overflow: hidden
    }

    .tasklist .tasklist-item img {
        width: 100%
    }

    .tasklist .tasklist-item .tasklist-cover {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        color: #fff;
        background: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.6) 50%,rgba(0,0,0,.85));
        background: linear-gradient(180deg,transparent 0,rgba(0,0,0,.6) 50%,rgba(0,0,0,.85));
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000",endColorstr="#d9000000",GradientType=0)
    }

    .tasklist .tasklist-item .tasklist-cover h3 {
        margin: 0;
        padding: 5px 10px;
        font-size: 16px;
        color: #fff
    }

    .tasklist .tasklist-item .tasklist-cover .tips {
        margin: 0;
        padding: 0 10px 5px;
        font-size: 12px
    }

    .tasklist .tasklist-item .tasklist-cover .tips .info {
        float: left;
        margin-right: 10px
    }

    .tasklist .tasklist-item .tasklist-cover .tips .author {
        float: right
    }
</style>
