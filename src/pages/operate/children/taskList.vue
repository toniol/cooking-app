<template>
    <div class="page has-navbar"
         v-nav="{ title: '任务列表', showBackButton: true }"
         v-tabbar-menu-index="2">
        <div class="page-content">
            <tabs :tab-items="tabs"
                  :tab-index="tabIndex"
                  :on-tab-click="onTabClick"></tabs>
            <div class="tasklist">
                <div class="tasklist-item"
                     v-for="item in taskingList"
                     v-show="showtasking" @click="gotoTasking(item)">
                    <!--<router-link :to="{name: 'tips', query: {id: item.id}}">-->
                        <img alt=""
                             :src="item.picurl" />
                        <div class="tasklist-cover">
                            <h3>{{item.title}}</h3>
                            <p class="tips clearfix"> <span class="info">等级: {{$route.query.tasklev}}</span> <span class="info">类别: {{$route.query.tasktype}}</span> <span class="author">{{item.author}}</span> </p>
                        </div>
                    <!--</router-link>-->
                </div>
                <div class="tasklist-item"
                     v-for="item in taskedList"
                     v-show="showtasked" @click="gotoTasked(item)">
                    <!--<router-link :to="{name: 'tips', query: {id: item.id}}">-->
                        <img alt=""
                             :src="item.picurl" />
                        <div class="tasklist-cover">
                            <h3>{{item.title}}</h3>
                            <p class="tips clearfix"> <span class="info">等级: {{$route.query.tasklev}}</span> <span class="info">类别: {{$route.query.tasktype}}</span> <span class="author">{{item.author}}</span> </p>
                        </div>
                    <!--</router-link>-->
                </div>
            </div>
            <loadmore type="line"
                      :text="loadmore"></loadmore>
        </div>
    </div>
</template>

<script>
import Loadmore from '../../../components/loadmore/loadmore.vue'
import { ajax } from '../../../config/ajax'
import { getSess } from '../../../utils'

export default {
    components: {
        Loadmore
    },
    data() {
        return {
            tabs: ['进行中', '已完成'],
            tabIndex: 0,
            tasklist: [],
            taskingList: [],
            taskedList: [],
            showtasking: true,
            showtasked: false,
            loadmore: '烹饪是一门艺术'
        }
    },
    created() {
        this.initData()
    },
    methods: {
        gotoTasking(item){
            let userinfo = getSess('userinfo')
            if(userinfo.type === '教师'){
                $router.push({name: 'task', query: {taskid: item.id}})
            } else {
                $router.push({name: 'tips', query: {taskid: item.id}})
            }
        },
        gotoTasked (item) {
            let userinfo = getSess('userinfo')
            if(userinfo.type === '教师'){
                $router.push({name: 'classtasklist', query: {taskid: item.id}})
            } else {
                // $router.push({name: 'tips', query: {taskid: item.id}})
            }
        },
        onTabClick(index) {
            this.tabIndex = index
            if (this.tabIndex === 1) {
                this.showtasking = false
                this.showtasked = true
            } else {
                this.showtasking = true
                this.showtasked = false
            }

            if (this.taskingList.length === 0) {
                this.loadmore = '·暂无数据·'
            } else {
                this.loadmore = '烹饪是一门艺术'
            }
            if (this.taskedList.length === 0) {
                this.loadmore = '·暂无数据·'
            } else {
                this.loadmore = '烹饪是一门艺术'
            }
        },
        async initData() {
            let userinfo = getSess('userinfo')
            let usertype = userinfo.type
            let userid = userinfo.id
            if(usertype === '教师'){
                usertype = 'teacher'
            } else {
                usertype = 'student'
            }
            let self = this
            // 获取通知公告
            ajax({
                api: 'task',
                params: {
                    type: 'getTaskList',
                    tasktype: self.$route.query.id,
                    tasklev: self.$route.query.tasklev,
                    usertype: usertype,
                    userid: userid,
                    limit: 0
                }
            }).then(function (res) {
                if (!res.data.errcode) {
                    self.tasklist = res.data.data
                    self.tasklist.forEach(function (el) {
                        if (el.isOpen === '开启') {
                            self.taskingList.push(el)
                        } else {
                            self.taskedList.push(el)
                        }
                    })
                    if (self.taskingList.length === 0) {
                        self.loadmore = '·暂无数据·'
                    }
                    self.$store.dispatch('hideLoading')
                } else {
                    self.loadmore = '·暂无数据·'

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

<style lang="scss" scoped>
.tasklist {
    margin-top: 49px;
    padding: 10px;
    background: #fff
}

.tasklist .tasklist-item {
    position: relative;
    margin-bottom: 10px;
    max-height: 180px;
    overflow: hidden
}

.tasklist .tasklist-item img {
    width: 100%
}

.tasklist .tasklist-item .tasklist-cover {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
    background: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, .6) 50%, rgba(0, 0, 0, .85));
    background: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, .6) 50%, rgba(0, 0, 0, .85));
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000", endColorstr="#d9000000", GradientType=0)
}

.tasklist .tasklist-item .tasklist-cover h3 {
    margin: 0;
    padding: 5px 10px;
    font-size: 16px;
    color: #fff
}

.tasklist .tasklist-item .tasklist-cover .tips {
    margin: 0;
    padding: 0 10px 5px;
    font-size: 12px
}

.tasklist .tasklist-item .tasklist-cover .tips .info {
    float: left;
    margin-right: 10px
}

.tasklist .tasklist-item .tasklist-cover .tips .author {
    float: right
}
</style>
