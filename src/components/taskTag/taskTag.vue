<template>
    <div class="page-content padding padding-top">
        <tag
            :key="tag"
            v-for="tag in dynamicTags"
            :closable="true"
            :close-transition="false"
            @close="handleClose(tag)"
        >{{tag}}
        </tag>

        <c-input
            class="input-new-tag task-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
        ></c-input>

        <c-button v-else class="button-new-tag task-button-new-tag" size="small" @click="showInput">{{buttonText}}</c-button>
    </div>
</template>

<script>
    import Tag from '../tag/tag'
    import CInput from '../cInput/c-input'
    import CButton from '../cButton/c-button'

    export default {
    props: {
        dynamicTags: {
            type: Array,
            default: []
        },
        buttonText: {
            type: String,
            default: "+ 新增标签"
        }
    },
    data() {
      return {
        inputVisible: false,
        inputValue: ''
      };
    },
    components: {
        Tag,
        CInput,
        CButton
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>


<style lang="scss">
.c-tag {
    margin-right: 5px;
    margin-bottom: 3px;
    vertical-align: middle;
}
.input-new-tag.task-tag {
    width: 78px;
    vertical-align: middle;
}
.input-new-tag.task-tag .c-input__inner {
    height: 24px;
    padding: 0 5px;
    border: 1px solid #bfcbd9;
}
.task-button-new-tag.c-button--small {
    padding: 5px 9px;
}
</style>