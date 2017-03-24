import App from './App'

// Routes
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [
        {
            path: '/home', 
            component: r => require.ensure([], () => r(require('./pages/Home.vue')), 'home')
        },
        {
            path: '/about', 
            component: r => require.ensure([], () => r(require('./pages/About.vue')), 'about')
        },
        {
            path: '/cart', 
            component: r => require.ensure([], () => r(require('./pages/Cart.vue')), 'cart')
        },
        {
            path: '/user', 
            component: r => require.ensure([], () => r(require('./pages/User.vue')), 'user')
        }
    ]
}]
