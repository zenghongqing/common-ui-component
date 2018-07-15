<template>
  <div class="loading-layout" :style="layoutLoadingStyle">
    <div class="loading">
      <p v-html="svgShow" :style="svgStyle"></p>
      <p class="loadingText" :style="{color: color}" v-if="showText">{{loadingText}}</p>
    </div>
  </div>
</template>
<script>
import * as allsvg from './svg'
export default {
  name: 'ElLoading',
  props: {
    svgType: {
      type: String
      // default: 'bars'
    },
    color: {
      type: String,
      default: '#20a0ff'
    },
    size: {
      type: Object,
      default: function () {
        return {
          width: '50px',
          height: '50px'
        }
      }
    },
    showText: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '拼命加载中...'
    },
    lbgColor: {
      type: Object,
      default: function () {
        return {
          color: 'rgba(255,255,255,.5)'
        }
      }
    },
    lsize: {
      type: Object,
      default: function () {
        return {
          width: '100%',
          height: '100%'
        }
      }
    },
    lpos: {
      type: Object,
      default: function () {
        return {
          position: 'absolute',
          top: '0',
          left: '0'
        }
      }
    }
  },
  created () {
    console.log(this.svgType, allsvg)
  },
  data () {
    return {}
  },
  computed: {
    svgShow () {
      return allsvg[this.svgType]
    },
    svgStyle () {
      return {fill: this.color, width: this.size.width, height: this.size.height}
    },
    layoutLoadingStyle () {
      return {
        position: this.lpos.position,
        top: this.lpos.top,
        left: this.lpos.left,
        width: this.lsize.width,
        height: this.lsize.height,
        'background-color': this.lbgColor.color
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .loading-layout {
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 2001;
    .loading {
      position: absolute;
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
      text-align: center;
      p {
        margin: 0 auto;
      }
      svg {
        fill: inherit;
        height: inherit;
        width: inherit;
      }
    }
    .loadingText {
      white-space: nowrap;
    }
  }
</style>
