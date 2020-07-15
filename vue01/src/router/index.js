import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index.vue'
import store from '@/page/store.vue'
import my from '@/page/my.vue'
import order from '@/page/order.vue'
import shop from '@/page/shop.vue'
import test from '@/components/test.vue'
import content_recommend from '@/components/content_recommend.vue'

Vue.use(Router)
const Content = {
  template: '<div>content {{ $route.params.id }}</div>'
}

export default new Router({
  routes: [
    {
      path: '/',  // 这个是指默认渲染的文件，这里我渲染了index文件
      component: () => import('@/page/index.vue'),// es6语法，采用了比较炫酷的写法，具体看个人爱好，问题解决来自一位大佬
      children: [
        {
          path: '/',
          component:content_recommend,
        },
        {
          path: 'content_recommend',
          name:'content_recommend',
          component:content_recommend,
        },
        {
          path: 'test',
          name:'test',
          component:test,
        },
    ]
    },
    {
      path: '/index',
      name: 'index',
      component:index,
      children: [
        {
          path: '/',
          component:content_recommend,
        },
        {
          path: 'content_recommend',
          name:'content_recommend',
          component:content_recommend,
        },
        {
          path: 'test',
          name:'test',
          component:test,
        },
      ]
    },
    {
      path: '/my',
      name:'my',
      component: {
        index:my,
      },
    },
    {
      path: '/order',
      name: 'order',
      component: {
        index:order,
      },
    },
    {
      path: '/shop',
      name: 'shop',
      component: {
        index:shop,
      },
    },
  ]
});
