import App from './App'

// Routes
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [
        //地址为空时跳转home页面
        {
            path: '',
            redirect: 'home'
        },
        {
            path: 'login',
            name: 'login',
            meta: {
                hideTabbar: true
            },
            component: r => require.ensure([], () => r(require('./pages/login/login.vue')), 'login')
        },
        {
            path: 'home',
            name: 'home',
            meta: {
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/home/home.vue')), 'home')
        },
        {
            path: 'home/newsList',
            name: 'newsList',
            meta: {
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/home/children/newsList.vue')), 'newsList')
        },
        {
            path: 'home/news',
            name: 'newsDetail',
            meta: {
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/home/children/newsDetail.vue')), 'newsDetail')
        },
        {
            path: 'teach',
            name: 'teach',
            meta: {
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/teach/teach.vue')), 'teach')
        },
        {
            path: 'teach/play',
            name: 'play',
            meta: {
                hideTabbar: true,
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/teach/children/play.vue')), 'play')
        },
        {
            path: 'operate',
            name: 'operate',
            meta: {
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/operate/operate.vue')), 'operate')
        },
        {
            path: 'operate/taskList',
            name: 'taskList',
            meta: {
                hideTabbar: true,
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/operate/children/taskList.vue')), 'taskList')
        },
        {
            path: 'operate/classTaskList',
            name: 'classtasklist',
            meta: {
                hideTabbar: true,
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/operate/children/classTaskList.vue')), 'classtasklist')
        },
        {
            path: 'operate/tips',
            name: 'tips',
            meta: {
                hideTabbar: true,
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/operate/children/tips.vue')), 'tips')
        },
        {
            path: 'operate/task',
            name: 'task',
            meta: {
                hideTabbar: true,
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/operate/children/task.vue')), 'task')
        },
        {
            path: 'operate/comment',
            name: 'comment',
            meta: {
                hideTabbar: true,
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/operate/children/comment.vue')), 'comment')
        },
        {
            path: 'topic',
            meta: {
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/topic/topic.vue')), 'topic')
        },
        {
            path: 'user',
            meta: {
                auth: true
            },
            component: r => require.ensure([], () => r(require('./pages/my/user.vue')), 'user')
        },
        {
            path: '*',
            redirect: 'home'
        }
    ]
}]