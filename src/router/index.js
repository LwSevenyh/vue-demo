/*
 * @Author: your name
 * @Date: 2020-08-14 18:49:12
 * @LastEditTime: 2021-04-25 20:18:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue-demo/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/iview_index',
      name: 'iview_index',
      // component: HelloWorld // 命名路由组件
      component: () => import('@/components/dragon-loading.vue')
    },
    {
      path: '/col',
      name: 'col',
      component: () => import('@/components/col.vue')
    },
    {
      path: '/cache',
      name: 'cache',
      component: () => import('@/cache/index.vue')
    }
  ]
})
