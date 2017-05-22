<template>
    <div class="page has-navbar" v-nav="{ title: '点评任务', showBackButton: true }" v-tabbar-menu-index="2">
        <div class="page-content">
            <div class="padding peicaiTable">
                <div class="table-head">
                    <table>
                        <colgroup>
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>类别</th>
                                <th>名称</th>
                                <th>用量</th>
                                <th>正确用量</th>
                                <th>结果</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="table-body">
                    <table>
                        <colgroup>
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                            <col style="width: 20%" />
                        </colgroup>
                        <tbody v-for="(value, key) in peicai">
                            <tr v-for="(item, index) in value" :class="{error: item.error}">
                                <td v-if="index === 0" :rowspan="value.length">{{item.p_type}}</td>
                                <td>{{item.p_name}}</td>
                                <td>{{item.commit_shuliang}}</td>
                                <td>{{item.p_shuliang}}</td>
                                <td v-html="reason(item, value, index)">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="item item-borderless thin-border step">
                <div class="hairline-top"></div>
                <div class="hairline-bottom"></div>
                步骤：{{step}}
            </div>
            
            <div class="item item-borderless thin-border" v-if="!isteacher">
                <div class="hairline-top"></div>
                <div class="hairline-bottom"></div>
                评分：{{pingfen}}
            </div>
            <von-input v-else type="text" v-model="pingfen" placeholder="评分为百分制" label="评分："></von-input>
    
            <div class="item item-borderless thin-border">
                <div class="hairline-top"></div>
                <div class="hairline-bottom"></div>
                <c-textarea placeholder="请填写评语" :rows="6" :showCounter="false" v-model="comment" :readonly="!isteacher"></c-textarea>
            </div>
            <div class="padding" v-if="isteacher">
                <md-button class="md-button button button-positive button-block" @click.native="commit()">
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
import _ from 'lodash'

export default {
    components: {
        CTextarea,
        CInput
    },
    data() {
        return {
            peicai: [],
            pingfen: '',
            comment: '',
            step: '',
            error: false,
            isteacher: false
        }
    },
    created() {
        let taskinfo = this.$route.params.taskinfo
        let userinfo = this.$store.state.userinfo

        if(userinfo.type === '教师'){
            this.isteacher = true
        }

        if (taskinfo) {
            this.pingfen = taskinfo.fenshu
            this.comment = taskinfo.pingyu
            this.step = taskinfo.step
        }

        this.initData()

        this.$store.dispatch('hideLoading')
    },
    methods: {
        async initData() {
            let userinfo = this.$store.state.userinfo
            let self = this
            let taskid = self.$route.query.taskid
            let userid = self.$route.query.userid

            ajax({
                api: 'task',
                params: {
                    type: 'GetTaskPeicaiByUserid',
                    taskid: taskid,
                    userid: userid
                }
            }).then(function (res) {
                if (!res.data.errcode) {
                    self.peicai = _.groupBy(res.data.data, 'p_type')
                }
            }).catch(function (err) {
                console.log(err)
            })
        },
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
        },
        reason(item, value, index){
            if((item.isRight === 'True' && item.isCheck === "False") || (item.isRight === 'False' && item.isCheck === 'True')){
                this.$set(value[index], 'error', true)
                return '选料错误'
            } else {
                if(item.isCheck !== 'False' && item.isRight !== 'False'){
                    if(item.commit_shuliang !== item.p_shuliang){
                        this.$set(value[index], 'error', true)
                        return '用量错误'
                    } else {
                        return '<i class="icon ion-ios-checkmark-empty balanced"></i>'
                    }
                } else {
                    return '<i class="icon ion-ios-checkmark-empty balanced"></i>'
                }
                
            }
        }
    }
}
</script>

<style>
.step {
    overflow: auto;
    white-space: normal;
    line-height: 1.5;
}

.peicaiTable table {
    width: 100%;
}

.peicaiTable th,
.peicaiTable td {
    padding: 5px;
    background-color: #fff;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ddd;
}

.peicaiTable th {
    padding: 10px 5px;
}

.table-head {
    border-bottom: 1px solid #ddd;
}

.table-body {
    width: 100%;
    max-height: 240px;
    overflow-y: scroll;
    border-bottom: 1px solid #ddd;
}

.table-head table,
.table-body table {
    width: 100%;
    margin-bottom: -1px;
}

.table-body .icon {
    font-size: 28px;
}
.error:first-child td:first-child {
    color: #000;
    background: #fff;
} 
.error td {
    color: #fff;
    background-color: #EA5A49;
}
</style>
