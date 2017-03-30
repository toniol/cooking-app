import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

// vuex routes
import store from './vuex/'
import routes from './routes'
import { getSess } from './utils'

Vonic.app.setConfig('beforeEach', (to, from, next) => {
    if (to.matched.some(record => record.meta.hideTabbar)) {
        // $tabbar.$emit('hideTabbar')
    } else {
        // $tabbar.$emit('showTabbar')
    }

    if (to.matched.some(record => record.meta.auth)) {
        let userinfo = getSess('userinfo')
        if (userinfo) {
            // console.log('登录成功')
            next()
        } else {
            if (to.path !== "/login") {
                // console.log('登录失败')
                next({name: 'login'});
            }
        }
    } else {
        next()
    }
})

Vue.use(Vonic.app, {
    routes,
    store
})


