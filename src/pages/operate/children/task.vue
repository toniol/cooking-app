<template>
    <div class="page has-navbar"
         v-nav="{ title: '任务详情', showBackButton: true }"
         v-tabbar-menu-index="2">
        <div class="page-content">
            <br>
           
            <h2 class="item item-divider">
                            做法步骤
                          </h2>
            <div class="item item-borderless thin-border">
                <div class="hairline-top"></div>
                <div class="hairline-bottom"></div>
                <c-textarea placeholder="请填写详细步骤"
                            :rows="6"
                            :showCounter="false"
                            :readonly="readonly"
                            v-model="content"></c-textarea>
            </div>
            <br>
            <div class="padding" v-if="isshow">
                <md-button class="md-button button button-positive button-block"
                           @click.native="clicked()">
                    提交任务
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
import CTextarea from '../../../components/cTextarea/c-textarea.vue'
import { ajax } from '../../../config/ajax'

export default {
    data() {
        return {
            isshow: true,
            readonly: false,
            content: '',
            wendu: '',
            materials: '', // 原材料数据
            flavorings: '', // 调味料数据
            tools: '' // 工具数据
        }
    },
    components: {
        CTextarea
    },
    created() {
        let userinfo = this.$store.state.userinfo

        if(userinfo.type === '教师'){
            this.isshow = false
            this.readonly = true
        }
        this.initData()
    },
    methods: {
        async initData() {
            // await this.getTaskCon()
            await this.getTaskCommit()

            this.$store.dispatch('hideLoading')
        },
        getTaskCon() {
            let self = this
            ajax({
                api: 'task',
                params: {
                    type: 'getTaskCon',
                    id: self.$route.query.taskid
                }
            }).then(function (res) {
                if (!res.data.errcode) {
                    self.materials = res.data.data[0].material
                    self.flavorings = res.data.data[0].flavoring
                    self.tools = res.data.data[0].tools
                }
            }).catch(function (err) {
                console.log(err);
            })
        },
        getTaskCommit() {
            let self = this
            let userinfo = this.$store.state.userinfo

            ajax({
                api: 'task',
                params: {
                    type: 'studentGetTaskCommit',
                    taskid: self.$route.query.taskid,
                    userid: userinfo.id
                }
            }).then(function (res) {
                if (!res.data.errcode) {
                    if (res.data.data[0].step) {
                        self.content = res.data.data[0].step
                    }
                }
            }).catch(function (err) {
                console.log(err);
            })
        },
        clicked() {
            let self = this
            let userinfo = this.$store.state.userinfo

            ajax({
                api: 'task',
                method: 'post',
                params: {
                    type: 'taskCommit',
                    taskid: self.$route.query.taskid,
                    userid: userinfo.id,
                    step: self.content
                }
            }).then(function (res) {
                if (!res.data.errcode) {
                    $dialog.alert({
                        // 标题
                        title: '提示',
                        // 内容
                        content: '任务提交成功',
                        // 按钮文本
                        okText: '确定'
                    })
                    self.$store.dispatch('hideLoading')
                } else {
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
.grade-a .item {
    min-height: auto;
    padding: 10px;
    white-space: normal;
}

.von-badge {
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 5px 10px;
    height: auto;
    .von-badge-num {
        font-size: 14px;
    }
}
</style>

