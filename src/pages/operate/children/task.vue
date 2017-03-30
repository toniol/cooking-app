<template>
  <div class="page has-navbar" v-nav="{ title: '任务详情', showBackButton: true }" v-tabbar-menu-index="2">
    <div class="page-content">
      <br>
      <h2 class="item item-divider">
        原材料
      </h2>
      <div class="item item-borderless item-icon-right thin-border">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        <span class="von-badge" v-for="item in yclArray"><div class="von-badge-num">{{item}}</div></span>
        <!-- <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i> -->
      </div>

      <br>
      <h2 class="item item-divider">
        调味料
      </h2>
      <div class="item item-borderless item-icon-right thin-border">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        <span class="von-badge" v-for="item in twlArray"><div class="von-badge-num">{{item}}</div></span>
        <!-- <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i> -->
      </div>

      <br>
      <h2 class="item item-divider">
        工具
      </h2>
      <div class="item item-borderless item-icon-right thin-border">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        <span class="von-badge" v-for="item in toolsArray"><div class="von-badge-num">{{item}}</div></span>
        <!-- <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i> -->
      </div>

      <br>
      <h2 class="item item-divider">
        做法步骤
      </h2>
      <div class="item item-borderless thin-border">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        <c-textarea placeholder="请填写详细步骤" :rows="6" :showCounter="false" v-model="content"></c-textarea>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
    import CTextarea from '../../../components/cTextarea/c-textarea.vue'
    // import yclModal from './modal/yclModal'
    // import twlModal from './modal/twlModal'
    // import toolsModal from './modal/toolsModal'

    export default {
        data () {
            return {
                content: '',
                yclArray: ["土豆", "鸡块", "青椒", "红椒", "洋葱"], // 原材料数据
                twlArray: ["盐", "酱油", "醋", "胡椒粉", "咖喱", "辣椒", "耗油", "淀粉"], // 调味料数据
                toolsArray: ["刀", "铲子", "勺子", "剪刀"] // 工具数据
                // yclModal: undefined,
                // twlModal: undefined,
                // toolsModal: undefined
            }
        },
        components: {
           CTextarea 
        },
        mounted() {
            // $modal.fromComponent(yclModal, {
            //     title: '选择原材料',
            //     theme: 'default'
            // }).then((modal) => {
            //     this.yclModal = modal
            // })
            // $modal.fromComponent(twlModal, {
            //     title: '选择调味料',
            //     theme: 'default'
            // }).then((modal) => {
            //     this.twlModal = modal
            // })
            // $modal.fromComponent(toolsModal, {
            //     title: '选择工具',
            //     theme: 'default'
            // }).then((modal) => {
            //     this.toolsModal = modal
            // })
        },
        destroyed() {
            // if (this.yclModal)
            //     $modal.destroy(this.yclModal)
            // if (this.twlModal)
            //     $modal.destroy(this.twlModal)
            // if (this.toolsModal)
            //     $modal.destroy(this.toolsModal)
        },
        methods: {
            // showYclModal() {
            //     this.yclModal.show()
            // },
            // showTwlModal() {
            //     this.twlModal.show()
            // },
            // showToolsModal() {
            //     this.toolsModal.show()
            // }
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

