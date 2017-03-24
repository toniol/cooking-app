import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// routes
import routes from './routes'

Vue.use(Vonic.app, {
  routes: routes
})
