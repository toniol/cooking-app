<template>
    <div class="page has-navbar"
         v-nav="{ title: '点评任务', showBackButton: true }"
         v-tabbar-menu-index="2">
        <div class="page-content">
            <br>
            <von-input type="text"
                       v-model="pingfen"
                       placeholder="评分为百分制"
                       label="评分"></von-input>
                       
            <div class="item item-borderless thin-border">
                <div class="hairline-top"></div>
                <div class="hairline-bottom"></div>
                <c-textarea placeholder="请填写评语"
                            :rows="6"
                            :showCounter="false"
                            v-model="comment"></c-textarea>
            </div>
            <br>
            <br>
            <div class="padding">
                <md-button class="md-button button button-positive button-block"
                           @click.native="commit()">
                    提 交
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
import CTextarea from '../../../components/cTextarea/c-textarea.vue'
import CInput from '../../../components/cInput/c-input'
import { ajax } from '../../../config/ajax'

export default {
    components: {
        CTextarea,
        CInput
    },
    data() {
        return {
            pingfen: '',
            comment: ''
        }
    },
    created() {
        let taskinfo = this.$route.params.taskinfo
        if(taskinfo) {
            this.pingfen = taskinfo.fenshu
            this.comment = taskinfo.pingyu
        }
        this.$store.dispatch('hideLoading')
    },
    methods: {
        commit() {
            let self = this
            let id = this.$route.query.id

            self.$store.dispatch('showLoading')

            ajax({
                api: 'task',
                params: {
                    type: 'teacherTaskCommit',
                    id: id,
                    pingfen: self.pingfen,
                    pingyu: self.comment
                }
            }).then(res => {
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
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>