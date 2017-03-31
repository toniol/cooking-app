import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

// vuex routes
import store from './store/index'
import routes from './routes'
import { getSess } from './utils'

Vonic.app.setConfig('beforeEach', (to, from, next) => {
    if (to.matched.some(record => record.meta.hideTabbar)) {
        // $tabbar.$emit('hideTabbar')
    } else {
        // $tabbar.$emit('showTabbar')
    }

    if (to.matched.some(record => record.meta.auth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        let userinfo = getSess('userinfo')
        if (!userinfo) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

Vue.use(Vonic.app, {
    routes,
    store
})


