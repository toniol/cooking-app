<template>
  <div :class="[
    type === 'textarea' ? 'c-textarea' : 'c-input',
    size ? 'c-input--' + size : '',
    {
      'is-disabled': disabled,
      'c-input-group': $slots.prepend || $slots.append,
      'c-input-group--append': $slots.append,
      'c-input-group--prepend': $slots.prepend
    }
  ]">
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="c-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <!-- input 图标 -->
      <slot name="icon">
        <i class="c-input__icon"
          :class="[
            'c-icon-' + icon,
            onIconClick ? 'is-clickable' : ''
          ]"
          v-if="icon"
          @click="handleIconClick">
        </i>
      </slot>
      <input
        v-if="type !== 'textarea'"
        class="c-input__inner"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autoComplete"
        :autofocus="autofocus"
        :min="min"
        :max="max"
        :step="step"
        :form="form"
        :value="currentValue"
        ref="input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      <i class="c-input__icon c-icon-loading" v-if="validating"></i>
      <!-- 后置元素 -->
      <div class="c-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
  </div>
</template>
<script>
  import emitter from '../../config/emitter';
  import calcTextareaHeight from './calcTextareaHeight';
  export default {
    name: 'CInput',
    componentName: 'CInput',
    mixins: [emitter],
    data() {
      return {
        currentValue: this.value,
      };
    },
    props: {
      value: [String, Number],
      placeholder: String,
      size: String,
      resize: String,
      readonly: Boolean,
      autofocus: Boolean,
      icon: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      name: String,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      form: String,
      maxlength: Number,
      minlength: Number,
      max: {},
      min: {},
      step: {},
      validateEvent: {
        type: Boolean,
        default: true
      },
      onIconClick: Function
    },
    computed: {
      validating() {
        return this.$parent.validateState === 'validating';
      }
    },
    watch: {
      'value'(val, oldValue) {
        this.setCurrentValue(val);
      }
    },
    methods: {
      handleBlur(event) {
        this.$emit('blur', event);
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
        }
      },
      inputSelect() {
        this.$refs.input.select();
      },
      resizeTextarea() {
        if (this.$isServer) return;
        var { autosize, type } = this;
        if (!autosize || type !== 'textarea') return;
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;
        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
      handleFocus(event) {
        this.$emit('focus', event);
      },
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
      },
      handleIconClick(event) {
        if (this.onIconClick) {
          this.onIconClick(event);
        }
        this.$emit('click', event);
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.$nextTick(_ => {
          this.resizeTextarea();
        });
        this.currentValue = value;
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.change', [value]);
        }
      }
    },
    created() {
      this.$on('inputSelect', this.inputSelect);
    },
    mounted() {
      this.resizeTextarea();
    }
  };
</script>

<style lang="scss">
  .c-input {
      position: relative;
      font-size: 14px;
      display: inline-block;
      width: 100%
  }

  .c-input.is-disabled .c-input__inner {
      background-color: #eef1f6;
      border-color: #d1dbe5;
      color: #bbb;
      cursor: not-allowed
  }

  .c-input.is-disabled .c-input__inner::-webkit-input-placeholder {
      color: #bfcbd9
  }

  .c-input.is-disabled .c-input__inner::-moz-placeholder {
      color: #bfcbd9
  }

  .c-input.is-disabled .c-input__inner:-ms-input-placeholder {
      color: #bfcbd9
  }

  .c-input.is-disabled .c-input__inner::placeholder {
      color: #bfcbd9
  }

  .c-input.is-active .c-input__inner {
      outline: none;
      border-color: #20a0ff
  }

  .c-input__inner {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #bfcbd9;
      box-sizing: border-box;
      color: #1f2d3d;
      display: block;
      font-size: inherit;
      height: 36px;
      line-height: 1;
      outline: none;
      padding: 3px 10px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%
  }

  .c-input__inner::-webkit-input-placeholder {
      color: #97a8be
  }

  .c-input__inner::-moz-placeholder {
      color: #97a8be
  }

  .c-input__inner:-ms-input-placeholder {
      color: #97a8be
  }

  .c-input__inner::placeholder {
      color: #97a8be
  }

  .c-input__inner:hover {
      border-color: #8391a5
  }

  .c-input__inner:focus {
      outline: none;
      border-color: #20a0ff
  }

  .c-input__icon {
      position: absolute;
      width: 35px;
      height: 100%;
      right: 0;
      top: 0;
      text-align: center;
      color: #bfcbd9;
      transition: all .3s
  }

  .c-input__icon:after {
      content: "";
      height: 100%;
      width: 0;
      display: inline-block;
      vertical-align: middle
  }

  .c-input__icon+.c-input__inner {
      padding-right: 35px
  }

  .c-input__icon.is-clickable:hover {
      cursor: pointer;
      color: #8391a5
  }

  .c-input__icon.is-clickable:hover+.c-input__inner {
      border-color: #8391a5
  }

  .c-input--large {
      font-size: 16px
  }

  .c-input--large .c-input__inner {
      height: 42px
  }

  .c-input--small {
      font-size: 13px
  }

  .c-input--small .c-input__inner {
      height: 30px
  }

  .c-input--mini {
      font-size: 12px
  }

  .c-input--mini .c-input__inner {
      height: 22px
  }

  .c-input-group {
      line-height: normal;
      display: inline-table;
      width: 100%;
      border-collapse: separate
  }

  .c-input-group>.c-input__inner {
      vertical-align: middle;
      display: table-cell
  }

  .c-input-group__append,.c-input-group__prepend {
      background-color: #fbfdff;
      color: #97a8be;
      vertical-align: middle;
      display: table-cell;
      position: relative;
      border: 1px solid #bfcbd9;
      border-radius: 4px;
      padding: 0 10px;
      width: 1%;
      white-space: nowrap
  }

  .c-input-group__append .c-button,.c-input-group__append .c-select,.c-input-group__prepend .c-button,.c-input-group__prepend .c-select {
      display: block;
      margin: -10px
  }

  .c-input-group__append .c-button,.c-input-group__append .c-select .c-input__inner,.c-input-group__append .c-select:hover .c-input__inner,.c-input-group__prepend .c-button,.c-input-group__prepend .c-select .c-input__inner,.c-input-group__prepend .c-select:hover .c-input__inner {
      border-color: transparent;
      background-color: transparent;
      color: inherit;
      border-top: 0;
      border-bottom: 0
  }

  .c-input-group__append .c-button,.c-input-group__append .c-input,.c-input-group__prepend .c-button,.c-input-group__prepend .c-input {
      font-size: inherit
  }

  .c-input-group__prepend {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0
  }

  .c-input-group__append {
      border-left: 0
  }

  .c-input-group--prepend .c-input__inner,.c-input-group__append {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0
  }

  .c-input-group--append .c-input__inner {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0
  }
</style>