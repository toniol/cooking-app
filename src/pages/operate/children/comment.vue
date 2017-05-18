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
                                <th>答案</th>
                                <th>是否正确</th>
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
                            <tr v-for="(item, index) in value">
                                <td v-if="index === 0" :rowspan="value.length">{{item.p_type}}</td>
                                <td>{{item.p_name}}</td>
                                <td>{{item.commit_shuliang}}</td>
                                <td>{{item.p_shuliang}}</td>
                                <td><i :class="['icon',
                                            item.isRight === 'True' ? 'ion-ios-checkmark-empty balanced' : 'ion-ios-close-empty assertive'
                                        ]">
                                    </i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    
            <von-input type="text" v-model="pingfen" placeholder="评分为百分制" label="评分"></von-input>
    
            <div class="item item-borderless thin-border">
                <div class="hairline-top"></div>
                <div class="hairline-bottom"></div>
                <c-textarea placeholder="请填写评语" :rows="6" :showCounter="false" v-model="comment"></c-textarea>
            </div>
            <br>
            <br>
            <div class="padding">
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
            peicai: _.groupBy([
            {
                commit_shuliang: "0",
                id: "e100913d-0ba6-4dca-809d-b3c1dc841f75",
                isRight: "False",
                p_name: "羊肉",
                p_shuliang: "400",
                p_type: "工具"
            },
            {
                commit_shuliang: "0",
                id: "e100913d-0ba6-4dca-809d-b3c1dc841f75",
                isRight: "False",
                p_name: "羊肉",
                p_shuliang: "400",
                p_type: "辅料"
            }, {
                commit_shuliang: "370",
                id: "e1e90ce6-7b22-4c8b-ad16-d2683c1026e5",
                isRight: "True",
                p_name: "猪肉",
                p_shuliang: "500",
                p_type: "主料"
            }, {
                commit_shuliang: "0",
                id: "e100913d-0ba6-4dca-809d-b3c1dc841f75",
                isRight: "False",
                p_name: "羊肉",
                p_shuliang: "400",
                p_type: "主料"
            }, {
                commit_shuliang: "370",
                id: "e1e90ce6-7b22-4c8b-ad16-d2683c1026e5",
                isRight: "True",
                p_name: "猪肉",
                p_shuliang: "500",
                p_type: "辅料"
            }, 
            {
                commit_shuliang: "0",
                id: "e100913d-0ba6-4dca-809d-b3c1dc841f75",
                isRight: "False",
                p_name: "羊肉",
                p_shuliang: "400",
                p_type: "调味料"
            }, {
                commit_shuliang: "0",
                id: "e100913d-0ba6-4dca-809d-b3c1dc841f75",
                isRight: "False",
                p_name: "羊肉",
                p_shuliang: "400",
                p_type: "辅料"
            }], 'p_type'),
            pingfen: '',
            comment: ''
        }
    },
    created() {
        let taskinfo = this.$route.params.taskinfo
        if (taskinfo) {
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

<style>
/*.peicaiTable {
    max-height: 240px;
    overflow: auto;
    margin-bottom: 20px;
}*/

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
</style>
