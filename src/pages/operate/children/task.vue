<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '任务详情', showBackButton: true }">
    <div class="page-content">
      <h2 class="item item-divider">
        原材料
      </h2>
      <div class="item item-borderless item-icon-right thin-border" @click="showYclModal()">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        选择原材料
        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
      </div>

      <h2 class="item item-divider">
        调味料
      </h2>
      <div class="item item-borderless item-icon-right thin-border" @click="showTwlModal()">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        选择调味料
        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
      </div>

      <h2 class="item item-divider">
        工具
      </h2>
      <div class="item item-borderless item-icon-right thin-border" @click="showToolsModal()">
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
        选择工具
        <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
      </div>

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
    import yclModal from './modal/yclModal'
    import twlModal from './modal/twlModal'
    import toolsModal from './modal/toolsModal'

    export default {
        data () {
            return {
                content: '',
                yclModal: undefined,
                twlModal: undefined,
                toolsModal: undefined
            }
        },
        components: {
           CTextarea 
        },
        mounted() {
            $modal.fromComponent(yclModal, {
                title: '选择原材料',
                theme: 'default'
            }).then((modal) => {
                this.yclModal = modal
            })
            $modal.fromComponent(twlModal, {
                title: '选择调味料',
                theme: 'default'
            }).then((modal) => {
                this.twlModal = modal
            })
            $modal.fromComponent(toolsModal, {
                title: '选择工具',
                theme: 'default'
            }).then((modal) => {
                this.toolsModal = modal
            })
        },
        destroyed() {
            if (this.yclModal)
                $modal.destroy(this.yclModal)
            if (this.twlModal)
                $modal.destroy(this.twlModal)
            if (this.toolsModal)
                $modal.destroy(this.toolsModal)
        },
        methods: {
            showYclModal() {
                this.yclModal.show()
            },
            showTwlModal() {
                this.twlModal.show()
            },
            showToolsModal() {
                this.toolsModal.show()
            }
        }
    }
</script>

