<template>
    <div class="page has-navbar"
         v-nav="{ title: '配菜', showBackButton: true }"
         v-tabbar-menu-index="2">
        <div class="page-content">
            <list>
                <item class="item-icon-right" @click.native="showzlmodal()"> 
                    主料
                    <span class="item-note">选择主料</span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
                <item class="item-icon-right" @click.native="showflmodal()">
                    辅料
                    <span class="item-note">选择辅料</span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
                <item class="item-icon-right" @click.native="showtwlmodal()">
                    调味料
                    <span class="item-note">选择调味料</span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
                <item class="item-icon-right" @click.native="showtoolsmodal()">
                    工具
                    <span class="item-note">选择工具</span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
                <item class="item-icon-right" @click.native="showwdmodal()">
                    温度
                    <span class="item-note">选择温度</span>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
            </list>
            <div class="padding">
                <md-button v-if="isshow" class="md-button button button-positive button-block"
                           @click.native="cimmit()">
                    提交配菜数据
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { ajax } from '../../../config/ajax'
    import zlModal from './modal/zlModal'
    import flModal from './modal/flModal'
    import twlModal from './modal/twlModal'
    import toolsModal from './modal/toolsModal'
    import wdModal from './modal/wdModal'

    export default {
        data(){
            return {
                isshow: true,
                zlmodal: undefined,
                flmodal: undefined,
                twlmodal: undefined,
                toolsmodal: undefined,
                wdmodal: undefined
            }
        },
        created() {
            let userinfo = this.$store.state.userinfo

            if(userinfo.type === '教师'){
                this.isshow = false
            }
            this.initData()
        },
        mounted () {
            $modal.fromComponent(zlModal, {
                title: '选择主料',
                theme: 'default'
            }).then((modal) => {
                this.zlmodal = modal
            })

            $modal.fromComponent(flModal, {
                title: '选择辅料',
                theme: 'default'
            }).then((modal) => {
                this.flmodal = modal
            })

            $modal.fromComponent(twlModal, {
                title: '选择调味料',
                theme: 'default'
            }).then((modal) => {
                this.twlmodal = modal
            })

            $modal.fromComponent(toolsModal, {
                title: '选择工具',
                theme: 'default'
            }).then((modal) => {
                this.toolsmodal = modal
            })

            $modal.fromComponent(wdModal, {
                title: '选择温度',
                theme: 'default'
            }).then((modal) => {
                this.wdmodal = modal
            })
        },
        destroyed() {
            if (this.zlmodal)
                $modal.destroy(this.zlmodal)
            if (this.flmodal)
                $modal.destroy(this.flmodal)
            if (this.twlmodal)
                $modal.destroy(this.twlmodal)
            if (this.toolsmodal)
                $modal.destroy(this.toolsmodal)
            if (this.wdmodal)
                $modal.destroy(this.wdmodal)
        },
        methods: {
            async initData() {
                let self = this
                let userinfo = this.$store.state.userinfo
                let userid = userinfo.id
                ajax({
                    api: 'task',
                    params: {
                        type: 'getPeicaiCon',
                        userid: userid,
                        taskid: self.$route.query.taskid
                    }
                }).then(function (res) {
                    if (!res.data.errcode) {
                        self.$store.state.peicai = res.data.data
                        self.$store.dispatch('hideLoading')
                        self.initModal()
                    }
                }).catch(function (err) {
                    console.log(err);
                })
            },
            showzlmodal() {
                this.zlmodal.show()
            },
            showflmodal() {
                this.flmodal.show()
            },
            showtwlmodal() {
                this.twlmodal.show()
            },
            showtoolsmodal() {
                this.toolsmodal.show()
            },
            showwdmodal() {
                this.wdmodal.show()
            },
            initModal () {
                this.$store.state.peicai.forEach(function(el) {
                    switch (el.p_type) {
                        case "主料":
                            if(el.ischeck === 'True') this.zlmodal.content.chosenTopics.push(el)
                            this.zlmodal.content.topics.push(this.calcmax(el))
                            break;
                        case "辅料":
                            if(el.ischeck === 'True') this.flmodal.content.chosenTopics.push(el)
                            this.flmodal.content.topics.push(this.calcmax(el))
                            break;
                        case "调料":
                            if(el.ischeck === 'True') this.twlmodal.content.chosenTopics.push(el)
                            this.twlmodal.content.topics.push(this.calcmax(el))
                            break;
                        case "工具":
                            if(el.ischeck === 'True') this.toolsmodal.content.chosenTopics.push(el)
                            this.toolsmodal.content.topics.push(this.calcmax(el))
                            break;
                        case "温度":
                            if(el.ischeck === 'True') this.wdmodal.content.chosenTopics.push(el)
                            this.wdmodal.content.topics.push(this.calcmax(el))
                            break;
                        default:
                            break;
                    }
                }, this);
            },
            calcmax(el){
                let max = Math.round(el.p_shuliang*(Math.random()+1))
                el.max = max
                return el
            },
            formatData(array){
                let formatData = []
                array.forEach(function(el, i) {
                        let formatDataItem = {}
                        formatDataItem.peicaiid = el.id
                        formatDataItem.shuliang = el.commit_shuliang
                        formatData.push(formatDataItem)
                }, this);
                return formatData
            },
            cimmit(){
                let commitData = this.zlmodal.content.chosenTopics.concat(
                    this.flmodal.content.chosenTopics,
                    this.twlmodal.content.chosenTopics,
                    this.toolsmodal.content.chosenTopics,
                    this.wdmodal.content.chosenTopics
                )

                let userinfo = this.$store.state.userinfo
                let userid = userinfo.id
                let self = this
                let peicaiCommit = this.formatData(commitData)

                this.$store.state.commitPeicai = commitData;
                this.$store.dispatch('showLoading')

                ajax({
                    api: 'task',
                    method: 'post',
                    params: {
                        type: 'PeicaiCommit',
                        userid: userid,
                        taskid: self.$route.query.taskid,
                        data: JSON.stringify(peicaiCommit)
                    }
                }).then(function (res) {
                    if (!res.data.errcode) {
                        $dialog.alert({
                            // 标题
                            title: '提示',
                            // 内容
                            content: '配菜数据提交成功',
                            // 按钮文本
                            okText: '确定'
                        })
                        self.$store.dispatch('hideLoading')
                    }
                }).catch(function (err) {
                    console.log(err);
                    $dialog.alert({
                        // 标题
                        title: '提示',
                        // 内容
                        content: '[' + res.data.errcode + '] ' + res.data.errmsg,
                        // 按钮文本
                        okText: '确定'
                    })
                    re.dispatch('hideLoading')
                })
            },
            steps() {
                $router.push({ name: 'task', query: { taskid: this.$route.query.taskid } })
            }
        }
    }
</script>