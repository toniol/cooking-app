<template>
    <div class="page has-navbar"
         v-nav="{ title: '登录' }">
        <div class="page-content">
            <br>
            <von-input type="text"
                       v-model="username"
                       placeholder="用户名/手机/邮箱"
                       label="用户名"></von-input>
            <von-input type="password"
                       v-model="password"
                       placeholder="密码"
                       label="密码"
                       style="margin-bottom: 5px;"></von-input>
    
            <br>
            <br>
            <div class="padding">
                <md-button class="md-button button button-positive button-block"
                           @click.native="login()">
                    登 录
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
import { ajax } from '../../config/ajax'
import { getSess, setSess } from '../../utils'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    created() {
        let userinfo = getSess('userinfo')
        this.$store.dispatch('hideLoading')
        if (userinfo) {
            $router.replace({ name: 'home' })
        }
    },
    methods: {
        login() {
            let self = this
            ajax({
                api: 'login',
                params: {
                    'type': 'login',
                    'userid': self.username,
                    'pwd': self.password
                }
            }).then(function (res) {
                self.$store.dispatch('showLoading')
                if (!res.data.errcode) {
                    let userinfo = res.data.data[0]
                    let redirect = self.$route.query.redirect
                    setSess('userinfo', userinfo)
                    self.$store.commit('SAVED_USERINFO', userinfo)
                    self.$store.dispatch('hideLoading')
                    if (!redirect) {
                        $router.push({ name: 'home' })
                    } else {
                        $router.push({ path: redirect })
                    }
                } else {
                    self.$store.dispatch('hideLoading')
                    $dialog.alert({
                        // 标题
                        title: '提示',
                        // 内容
                        content: '[' + res.data.errcode + '] ' + res.data.errmsg,
                        // 按钮文本
                        okText: '确定'
                    })
                }
            }).catch(function (err) {
                console.log(err);
            })
        }
    }
}
</script>