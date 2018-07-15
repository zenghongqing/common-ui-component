<template>
  <div id="app">
    <el-button markup="warning" large @click="handleClick">button</el-button>
    <el-cascading-address @conform="conform"></el-cascading-address>
    <el-loading svgType="spin" :showText="true" lrpos="{position: absolute; top: 0px;left: 0px;}" loadingText="正在急速加载中。。。。"></el-loading>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick (e) {
      alert(e)
    },
    conform (msg) {
      console.log(msg)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
