<template>
    <div class="page has-navbar"
         v-nav="{ title: '已完成任务', showBackButton: true }"
         v-tabbar-menu-index="2">
        <div class="page-content">
            <div v-if="isteacher">
                <div class="item item-divider">
                    选择班级
                </div>
                <item class="item-icon-right"
                      @click.native="showActionSheet('weixin')">
                    {{classname}}
                    <!--<span class="item-note"></span>-->
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
            </div>
    
            <div class="item item-divider">
                学生列表
            </div>
    
            <list>
                <item v-for="item in tasklist"
                      class="item-icon-left item-icon-right"
                      @click.native="scandetail(item)">
                    {{item.username}} (得分: {{item.fenshu}})
                    <span class="item-note">{{item.releasetime.split(' ')[0]}}</span>
                    <i class="icon ion-ios-person-outline"></i>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
            </list>
    
            <loadmore type="line"
                      v-show="showloadmore"
                      text="·暂无数据·"></loadmore>
        </div>
    </div>
</template>

<script>
import Loadmore from '../../../components/loadmore/loadmore.vue'
import { ajax } from '../../../config/ajax'

export default {
    components: {
        Loadmore
    },
    data() {
        return {
            classList: [],
            tasklist: [],
            showloadmore: false,
            isteacher: false,
            classname: '选择班级'
        }
    },
    created() {
        this.initData()
    },
    methods: {
        async initData() {
            let userinfo = this.$store.state.userinfo

            if(userinfo.type === '教师'){
                this.isteacher = true
                await this.getClass()
            } else {
                await this.getTaskList(userinfo.classid)
            }

            this.$store.dispatch('hideLoading')
        },
        getClass() {
            let self = this
            let taskid = self.$route.query.taskid

            ajax({
                api: 'task',
                params: {
                    type: 'teacherGetTaskClass',
                    taskid: taskid
                }
            }).then(function (res) {
                if (!res.data.errcode) {
                    self.classList = res.data.data
                    self.classname = self.classList[0].classname
                    self.getTaskList(self.classList[0].id)
                }
            }).catch(function (err) {
                console.log(err)
            })
        },
        getTaskList(classid) {
            let self = this
            let taskid = this.$route.query.taskid
            let userinfo = this.$store.state.userinfo
            let type = ''
            let params = {}

            if(userinfo.type === '教师'){
                params = {
                    type: 'GetTaskCommitListByclassid',
                    taskid: taskid,
                    classid: classid
                }
            } else {
                params = {
                    type: 'GetTaskCommitListByclassid',
                    taskid: taskid,
                    classid: userinfo.classid
                }
            }
            ajax({
                api: 'task',
                params: params
            }).then(function (res) {
                if (!res.data.errcode) {
                    self.tasklist = res.data.data
                    if (self.tasklist.length === 0) {
                        self.showloadmore = true
                    } else {
                        self.showloadmore = false
                    }
                }
            }).catch(function (err) {
                console.log(err)
            })
        },
        showActionSheet(theme) {
            let self = this
            let buttons = {}

            this.classList.forEach(function (el) {
                buttons[el.classname] = function () {
                    self.classname = el.classname
                    self.getTaskList(el.id)
                }
            })
            $actionSheet.show({
                theme: theme || '',
                title: '班级列表',
                cancelText: '取消',
                buttons: buttons
            })
        },
        scandetail(item) {
            this.$router.push({name: 'comment', query: {id: item.id, userid: item.userid, taskid: this.$route.query.taskid}, params: {taskinfo: item}})
        }
    }
}
</script>