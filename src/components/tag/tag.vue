<template>
  <transition :name="closeTransition ? '' : 'tag-fade'">
    <span
      class="c-tag"
      :class="[type ? 'c-tag--' + type : '', {'is-hit': hit}]"
      :style="{backgroundColor: color}">
      <slot></slot>
      <i class="c-tag__close c-icon-close ion-ios-close-empty"
        v-if="closable"
        @click="handleClose"></i>
    </span>
  </transition>
</template>
<script>
  export default {
    name: 'cTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      closeTransition: Boolean,
      color: String
    },
    methods: {
      handleClose(event) {
        this.$emit('close', event);
      }
    }
  };
</script>

<style lang="scss">
    .tag-fade-enter-active, .tag-fade-leave-active {
	  	transition: opacity .2s;
	}
	.tag-fade-enter, .tag-fade-leave-active {
	  	opacity: 0;
	}
    .c-tag {
        background-color: #8391a5;
        display: inline-block;
        padding: 0 5px;
        height: 24px;
        line-height: 22px;
        font-size: 12px;
        color: #fff;
        border-radius: 4px;
        box-sizing: border-box;
        border: 1px solid transparent;
        white-space: nowrap
    }

    .c-tag .c-icon-close {
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        position: relative;
        cursor: pointer;
        font-size: 20px;
        height: 18px;
        width: 18px;
        line-height: 18px;
        vertical-align: middle;
        top: -1px;
        right: -2px
    }

    .c-tag .c-icon-close:hover {
        background-color: #fff;
        color: #8391a5
    }

    .c-tag--gray {
        background-color: #e4e8f1;
        border-color: #e4e8f1;
        color: #48576a
    }

    .c-tag--gray .c-tag__close:hover {
        background-color: #48576a;
        color: #fff
    }

    .c-tag--gray.is-hit {
        border-color: #48576a
    }

    .c-tag--primary {
        background-color: rgba(32,160,255,.1);
        border-color: rgba(32,160,255,.2);
        color: #20a0ff
    }

    .c-tag--primary .c-tag__close:hover {
        background-color: #20a0ff;
        color: #fff
    }

    .c-tag--primary.is-hit {
        border-color: #20a0ff
    }

    .c-tag--success {
        background-color: rgba(18,206,102,.1);
        border-color: rgba(18,206,102,.2);
        color: #13ce66
    }

    .c-tag--success .c-tag__close:hover {
        background-color: #13ce66;
        color: #fff
    }

    .c-tag--success.is-hit {
        border-color: #13ce66
    }

    .c-tag--warning {
        background-color: rgba(247,186,41,.1);
        border-color: rgba(247,186,41,.2);
        color: #f7ba2a
    }

    .c-tag--warning .c-tag__close:hover {
        background-color: #f7ba2a;
        color: #fff
    }

    .c-tag--warning.is-hit {
        border-color: #f7ba2a
    }

    .c-tag--danger {
        background-color: rgba(255,73,73,.1);
        border-color: rgba(255,73,73,.2);
        color: #ff4949
    }

    .c-tag--danger .c-tag__close:hover {
        background-color: #ff4949;
        color: #fff
    }

    .c-tag--danger.is-hit {
        border-color: #ff4949
    }
</style>