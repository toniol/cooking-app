<template>
    <div class="page has-navbar"
         v-nav="{ title: '任务说明', showBackButton: true }"
         v-tabbar-menu-index="2">
        <div class="page-content">
            <div class="padding">
                <div v-html="info.content"></div>
                
                <md-button class="md-button button button-positive button-block"
                           @click.native="peicai()">
                    配 菜
                </md-button>

                <md-button class="md-button button button-positive button-block"
                           @click.native="steps()">
                    步 骤
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
import { ajax } from '../../../config/ajax'

export default {
    data() {
        return {
            info: {}
        }
    },
    created() {
        this.initData()
    },
    methods: {
        async initData() {
            let self = this
            ajax({
                api: 'task',
                params: {
                    type: 'getTaskCon',
                    id: self.$route.query.taskid
                }
            }).then(function (res) {
                if (!res.data.errcode) {
                    self.info = res.data.data[0]
                    self.$store.dispatch('hideLoading')
                }
            }).catch(function (err) {
                console.log(err);
            })
        },
        steps() {
            $router.push({ name: 'task', query: { taskid: this.$route.query.taskid } })
        },
        peicai(){
            $router.push({ name: 'peicai', query: { taskid: this.$route.query.taskid } })
        }
    }
}
</script>