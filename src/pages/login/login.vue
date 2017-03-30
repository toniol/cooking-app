<template>
  <div class="page has-navbar" v-nav="{ title: '登录' }">
    <div class="page-content">
      <br>
      <von-input type="text" v-model="username" placeholder="用户名/手机/邮箱" label="用户名"></von-input>
      <von-input type="password" v-model="password" placeholder="密码" label="密码" style="margin-bottom: 5px;"></von-input>

      <br>
      <br>
      <div class="padding">
        <md-button class="md-button button button-positive button-block" @click.native="login()">
          登 录
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
  import ajax from '../../config/ajax'
  import { setSess } from '../../utils'

  export default {
    data(){
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
          ajax({
            api: 'login',
            params: {
              'type': 'login',
              'userid': this.username,
              'pwd': this.password
            }
          })
          .then(function(res){
              if(res.data.errcode === '0'){
                let userinfo = res.data.data[0]
                setSess('userinfo', userinfo)
                $router.push({name: 'home'})
              } else {
                $dialog.alert({
                  // 标题
                  title: '提示', 
                  // 内容
                  content: '用户名或密码错误，请重新登录',
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