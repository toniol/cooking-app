import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// vuex routes
import store from './vuex/'
import routes from './routes'
Vue.use(Vonic.app, {
  routes,
  store
})
