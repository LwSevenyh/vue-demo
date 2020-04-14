<style lang="less">
    @import "../src/styles/index.less";
</style>
<template>
  <div class="container">
    <div>
      <div>
        <span> <router-link> Split</router-link> </span>
      </div>
    </div>
    <div style="margin: 50px;">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
module.export = {
  data: function () {
    return {

    }
  },
  mounted: function () {

  },
  beforeDestroy: function () {

  },
  methods: {

  }
}
</script>
