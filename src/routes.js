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
            path: 'home', 
            component: r => require.ensure([], () => r(require('./pages/home/home.vue')), 'home')
        },
        {
            path: 'teach', 
            component: r => require.ensure([], () => r(require('./pages/teach/teach.vue')), 'teach')
        },
        {
            path: 'teach/play',
            name: 'play',
            component: r => require.ensure([], () => r(require('./pages/teach/children/play.vue')), 'play')
        },
        {
            path: 'operate', 
            component: r => require.ensure([], () => r(require('./pages/operate/operate.vue')), 'operate')
        },
        {
            path: 'operate/taskList',
            name: 'taskList',
            component: r => require.ensure([], () => r(require('./pages/operate/children/taskList.vue')), 'taskList')
        },
        {
            path: 'operate/task',
            name: 'task',
            component: r => require.ensure([], () => r(require('./pages/operate/children/task.vue')), 'task')
        },
        {
            path: 'topic',
            component: r => require.ensure([], () => r(require('./pages/topic/topic.vue')), 'topic')
        },
        {
            path: 'user', 
            component: r => require.ensure([], () => r(require('./pages/my/user.vue')), 'user')
        }
    ]
}]
