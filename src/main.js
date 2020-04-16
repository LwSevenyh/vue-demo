// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 1.import...from...的from命令后面可以跟很多路径格式，若只给出vue，axios这样的包名，则会自动到node_modules中加载；若给出相对路径及文件前缀，则到指定位置寻找。
// 2.可以加载各种各样的文件：.js、.vue、.less等等。

// 其实最完整的写法是 import Vue from "../node_modules/vue/dist/vue.js"; 从node_modules中加载相应名称的模块
import Vue from 'vue'
// 完整的写法 import App from './App.vue';
import App from './App'
// 完整的写法 import router from './route.js';
import router from './router'
import iView from 'view-design'
// 它会阻止你显示显示生产模式的消息，常用作指令
Vue.config.productionTip = false

Vue.use(iView, {

})

/* eslint-disable no-new */
/*
在js里面，new 一个对象，需要赋值给某个值（变量），
用Vue实例化的时候，不需要赋值给值（变量），
所以要单独给配一条规则，给new Vue这行代码上面加这个注释，把这行代码规则的校验跳过，通过eslint-disable。
*/
new Vue({
  el: '#app',
  router,
  components: { App }, // 是声明有哪些组件
  template: '<App/>' // 使用哪个组件
})
