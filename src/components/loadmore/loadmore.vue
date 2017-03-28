<template>
	<div class="loadmore"
    :class="{'loadmore_line': (type === 'line' || type === 'lineDot'), 'loadmore_dot': type === 'lineDot' }">
    <i class="loading" v-if="type === 'default'"></i>
    <span class="loadmore__tips" v-text="type === 'lineDot' ? '' : text"></span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      default: '正在加载'
    }
  }
}
</script>

<style lang="scss">
    .loadmore {
        width: 85%;
        margin: 1.5em auto;
        line-height: 1.6em;
        font-size: 14px;
        text-align: center
    }

    .loadmore__tips {
        display: inline-block;
        vertical-align: middle
    }

    .loadmore_line {
        border-top: 1px solid #e5e5e5;
        margin-top: 2.4em
    }

    .loadmore_line .loadmore__tips {
        position: relative;
        top: -.9em;
        padding: 0 .55em;
        background-color: #fff;
        color: #999
    }

    .loadmore_dot .loadmore__tips {
        padding: 0 .16em
    }

    .loadmore_dot .loadmore__tips:before {
        content: " ";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #e5e5e5;
        display: inline-block;
        position: relative;
        vertical-align: 0;
        top: -.16em
    }
</style>