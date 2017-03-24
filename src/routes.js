import App from './App'

// Routes
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home', 
            component: r => require.ensure([], () => r(require('./pages/home/Home.vue')), 'home')
        },
        {
            path: '/teach', 
            component: r => require.ensure([], () => r(require('./pages/teach/TeachList.vue')), 'teach')
        },
        {
            path: '/operate', 
            component: r => require.ensure([], () => r(require('./pages/operate/Operate.vue')), 'operate')
        },
        {
            path: '/topic',
            component: r => require.ensure([], () => r(require('./pages/topic/Topic.vue')), 'topic')
        },
        {
            path: '/user', 
            component: r => require.ensure([], () => r(require('./pages/my/User.vue')), 'user')
        }
    ]
}]
