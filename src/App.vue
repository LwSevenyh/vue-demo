<template>
  <div id="app" class="container">
    <!-- <a href="#/col">Col</a> -->
    <!-- router-view 当做是一个容器，它渲染的组件是你使用 vue-router 指定的。
    当路径改变，vue-router 会被对应路由下的组件所替换 -->
    <div>
      <div>
        <span>
          <router-link to="/iview_index">IView</router-link>
        </span>
      </div>
    </div>
    <div style="margin: 50px;">
      <router-view/>
    </div>
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
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
