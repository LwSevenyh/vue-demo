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
      component: () => import('@/components/iview_index.vue')
    },
    {
      path: '/col',
      name: 'col',
      component: () => import('@/components/col.vue')
    }
  ]
})
