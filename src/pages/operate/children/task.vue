<template>
  <div class="page has-navbar" v-nav="{ title: '任务详情', showBackButton: true }" v-tabbar-menu-index="2">
    <div class="page-content">
      <br>
      <h2 class="item item-divider">
        原材料
      </h2>
      <div class="item item-borderless item-icon-right thin-border">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        <span>{{materials}}</span>
        <!-- <span class="von-badge" v-for="item in materials"><div class="von-badge-num">{{item}}</div></span> -->
        <!-- <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i> -->
      </div>

      <br>
      <h2 class="item item-divider">
        调味料
      </h2>
      <div class="item item-borderless item-icon-right thin-border">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        <span>{{flavorings}}</span>
        <!-- <span class="von-badge" v-for="item in flavorings"><div class="von-badge-num">{{item}}</div></span> -->
        <!-- <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i> -->
      </div>

      <br>
      <h2 class="item item-divider">
        工具
      </h2>
      <div class="item item-borderless item-icon-right thin-border">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        <span>{{tools}}</span>
        <!-- <span class="von-badge" v-for="item in tools"><div class="von-badge-num">{{item}}</div></span> -->
        <!-- <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i> -->
      </div>

      <br>
      <h2 class="item item-divider">
        做法步骤
      </h2>
      <div class="item item-borderless thin-border">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        <c-textarea placeholder="请填写详细步骤" :rows="6" :showCounter="false" v-model="content"></c-textarea>
      </div>
      <br>
      <div class="padding">
        <md-button class="md-button button button-positive button-block" @click.native="clicked()">
          提交任务
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
    import CTextarea from '../../../components/cTextarea/c-textarea.vue'
    import { ajax } from '../../../config/ajax'
    import { getSess, setSess } from '../../../utils'

    export default {
      data () {
          return {
              content: '',
              materials: '', // 原材料数据
              flavorings: '', // 调味料数据
              tools: '' // 工具数据
          }
      },
      components: {
          CTextarea 
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
                  self.materials = res.data.data[0].material
                  self.flavorings = res.data.data[0].flavoring
                  self.tools = res.data.data[0].tools
                  self.$store.dispatch('hideLoading')
              }
            })
            .catch(function(err){
                console.log(err);
            })
        },
        clicked () {
          let self = this
          let userinfo = getSess('userinfo')

          ajax({
            api: 'task',
            method: 'post',
            params: {
              type: 'taskCommit',
              taskid: self.$route.query.id,
              userid: userinfo.id,
              step: self.content
            }
          })
          .then(function(res){
            if(!res.data.errcode){
              $dialog.alert({
                // 标题
                title: '提示', 
                // 内容
                content: '任务提交成功',
                // 按钮文本
                okText: '确定'
              })
              self.$store.dispatch('hideLoading')
            } else {
              $dialog.alert({
                // 标题
                title: '提示', 
                // 内容
                content: '[' + res.data.errcode + '] ' + res.data.errmsg,
                // 按钮文本
                okText: '确定'
              })
            }
          })
          .catch(function(err){
              console.log(err);
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
    .grade-a .item {
        min-height: auto;
        padding: 10px;
        white-space: normal;
    }
    .von-badge {
        margin-bottom: 5px;
        margin-right: 5px;
        padding: 5px 10px;
        height: auto;
        .von-badge-num {
            font-size: 14px;
        }
    }
</style>

