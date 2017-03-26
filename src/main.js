import Vue from 'vue'
import Vonic from 'vonic/src/index.js'
import FastClick from 'fastclick'

// routes
import routes from './routes'

// vuex
import store from './vuex/'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(Vonic.app, {
  routes,
  store
})
