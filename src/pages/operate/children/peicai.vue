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
        </div>
    </div>
</template>

<script>
    import zlModal from './modal/zlModal'
    import flModal from './modal/flModal'
    import twlModal from './modal/twlModal'
    import toolsModal from './modal/toolsModal'
    import wdModal from './modal/wdModal'

    export default {
        data(){
            return {
                zlmodal: undefined,
                flmodal: undefined,
                twlmodal: undefined,
                toolsmodal: undefined,
                wdmodal: undefined
            }
        },
        created() {
            this.$store.dispatch('hideLoading')
        },
        mounted() {
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
            }
        }
    }
</script>