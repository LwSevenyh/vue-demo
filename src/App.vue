<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- router-view 当做是一个容器，它渲染的组件是你使用 vue-router 指定的。
    当路径改变，vue-router 会被对应路由下的组件所替换 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
