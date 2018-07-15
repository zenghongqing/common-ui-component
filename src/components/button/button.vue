<template>
  <button class="btn"
    :id="id"
    :class="customClass"
    :name="name"
    :disabled="disabled"
    :large="large"
    :markup="markup"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'ElButton',
  props: {
    id: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    markup: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
  $default-color: #9f9f9f;
  $default-hover-color: #2c3e50;
  $primary-color: #22a7f0;
  $primary-hover-color: #0d7cb9;
  $success-color: #019875;
  $success-hover-color: #01654e;
  $warning-color: #f4b350;
  $warning-hover-color: #d9920f;
  $error-color: #d91e18;
  $error-hover-color: #941410;
  $diabled-color: #dadada;
  @mixin button-color ($color, $hover-color) {
    color: $color;
    box-shadow: 0 0 0 1px $color inset;
    &:hover {
      color: $hover-color;
      box-shadow: 0 0 0 1px $hover-color inset;
    }
  }
  .btn {
    cursor: pointer;
    border: none;
    background: 0 0;
    border-radius: 3.5px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    padding: 6px 24px;
    text-decoration: none;
    outline: 0;
    &：disabled {
      cursor: not-allowed;
      color: $diabled-color !important;
      box-shadow: 0 0 0 1px $diabled-color inset !important;
    }
    &[large='large'] {
      font-size: 1.4rem;
    }
    &[markup='default'] {
      @include button-color($default-color, $default-hover-color);
    }
    &[markup='success'] {
      @include button-color($success-color, $success-hover-color);
    }
    &[markup='warning'] {
      @include button-color($warning-color, $warning-hover-color);
    }
    &[markup='error'] {
      @include button-color($error-color, $error-hover-color);
    }
  }
</style>
