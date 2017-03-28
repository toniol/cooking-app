<template>
  <button :disabled="disabled" class="c-button"
    @click="handleClick"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'c-button--' + type : '',
      size ? 'c-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain
      }
    ]"
  >
    <i class="c-icon-loading" v-if="loading"></i>
    <i :class="'c-icon-' + icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'cButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>

<style lang="scss">

.c-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 4px
}

.c-button+.c-button {
    margin-left: 10px
}

.c-button:focus,.c-button:hover {
    color: #20a0ff;
    border-color: #20a0ff
}

.c-button:active {
    color: #1d90e6;
    border-color: #1d90e6;
    outline: none
}

.c-button::-moz-focus-inner {
    border: 0
}

.c-button [class*=c-icon-]+span {
    margin-left: 5px
}

.c-button.is-loading {
    position: relative;
    pointer-events: none
}

.c-button.is-loading:before {
    pointer-events: none;
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: hsla(0,0%,100%,.35)
}

.c-button.is-disabled,.c-button.is-disabled:focus,.c-button.is-disabled:hover {
    color: #bfcbd9;
    cursor: not-allowed;
    background-image: none;
    background-color: #eef1f6;
    border-color: #d1dbe5
}

.c-button.is-disabled.c-button--text {
    background-color: transparent
}

.c-button.is-disabled.is-plain,.c-button.is-disabled.is-plain:focus,.c-button.is-disabled.is-plain:hover {
    background-color: #fff;
    border-color: #d1dbe5;
    color: #bfcbd9
}

.c-button.is-active {
    color: #1d90e6;
    border-color: #1d90e6
}

.c-button.is-plain:focus,.c-button.is-plain:hover {
    background: #fff;
    border-color: #20a0ff;
    color: #20a0ff
}

.c-button.is-plain:active {
    background: #fff;
    border-color: #1d90e6;
    color: #1d90e6;
    outline: none
}

.c-button--primary {
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff
}

.c-button--primary:focus,.c-button--primary:hover {
    background: #4db3ff;
    border-color: #4db3ff;
    color: #fff
}

.c-button--primary:active {
    outline: none
}

.c-button--primary.is-active,.c-button--primary:active {
    background: #1d90e6;
    border-color: #1d90e6;
    color: #fff
}

.c-button--primary.is-plain {
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d
}

.c-button--primary.is-plain:focus,.c-button--primary.is-plain:hover {
    background: #fff;
    border-color: #20a0ff;
    color: #20a0ff
}

.c-button--primary.is-plain:active {
    background: #fff;
    border-color: #1d90e6;
    color: #1d90e6;
    outline: none
}

.c-button--success {
    color: #fff;
    background-color: #13ce66;
    border-color: #13ce66
}

.c-button--success:focus,.c-button--success:hover {
    background: #42d885;
    border-color: #42d885;
    color: #fff
}

.c-button--success:active {
    outline: none
}

.c-button--success.is-active,.c-button--success:active {
    background: #11b95c;
    border-color: #11b95c;
    color: #fff
}

.c-button--success.is-plain {
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d
}

.c-button--success.is-plain:focus,.c-button--success.is-plain:hover {
    background: #fff;
    border-color: #13ce66;
    color: #13ce66
}

.c-button--success.is-plain:active {
    background: #fff;
    border-color: #11b95c;
    color: #11b95c;
    outline: none
}

.c-button--warning {
    color: #fff;
    background-color: #f7ba2a;
    border-color: #f7ba2a
}

.c-button--warning:focus,.c-button--warning:hover {
    background: #f9c855;
    border-color: #f9c855;
    color: #fff
}

.c-button--warning:active {
    outline: none
}

.c-button--warning.is-active,.c-button--warning:active {
    background: #dea726;
    border-color: #dea726;
    color: #fff
}

.c-button--warning.is-plain {
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d
}

.c-button--warning.is-plain:focus,.c-button--warning.is-plain:hover {
    background: #fff;
    border-color: #f7ba2a;
    color: #f7ba2a
}

.c-button--warning.is-plain:active {
    background: #fff;
    border-color: #dea726;
    color: #dea726;
    outline: none
}

.c-button--danger {
    color: #fff;
    background-color: #ff4949;
    border-color: #ff4949
}

.c-button--danger:focus,.c-button--danger:hover {
    background: #ff6d6d;
    border-color: #ff6d6d;
    color: #fff
}

.c-button--danger:active {
    outline: none
}

.c-button--danger.is-active,.c-button--danger:active {
    background: #e64242;
    border-color: #e64242;
    color: #fff
}

.c-button--danger.is-plain {
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d
}

.c-button--danger.is-plain:focus,.c-button--danger.is-plain:hover {
    background: #fff;
    border-color: #ff4949;
    color: #ff4949
}

.c-button--danger.is-plain:active {
    background: #fff;
    border-color: #e64242;
    color: #e64242;
    outline: none
}

.c-button--info {
    color: #fff;
    background-color: #50bfff;
    border-color: #50bfff
}

.c-button--info:focus,.c-button--info:hover {
    background: #73ccff;
    border-color: #73ccff;
    color: #fff
}

.c-button--info:active {
    outline: none
}

.c-button--info.is-active,.c-button--info:active {
    background: #48ace6;
    border-color: #48ace6;
    color: #fff
}

.c-button--info.is-plain {
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d
}

.c-button--info.is-plain:focus,.c-button--info.is-plain:hover {
    background: #fff;
    border-color: #50bfff;
    color: #50bfff
}

.c-button--info.is-plain:active {
    background: #fff;
    border-color: #48ace6;
    color: #48ace6;
    outline: none
}

.c-button--large {
    padding: 11px 19px;
    font-size: 16px;
    border-radius: 4px
}

.c-button--small {
    padding: 7px 9px;
    font-size: 12px;
    border-radius: 4px
}

.c-button--mini {
    padding: 4px;
    font-size: 12px;
    border-radius: 4px
}

.c-button--text {
    border: none;
    color: #20a0ff;
    background: transparent;
    padding-left: 0;
    padding-right: 0
}

.c-button--text:focus,.c-button--text:hover {
    color: #4db3ff
}

.c-button--text:active {
    color: #1d90e6
}

</style>