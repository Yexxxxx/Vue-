import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index.vue'
import store from '@/page/store.vue'
import my from '@/page/my.vue'
import order from '@/page/order.vue'
import shop from '@/page/shop.vue'
import test from '@/page/test.vue'
// export default new Router({
//   routes,
// })
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  // 这个是指默认渲染的文件，这里我渲染了index文件
      name: 'index',
      component: () => import('@/page/index.vue')  // es6语法，采用了比较炫酷的写法，具体看个人爱好，问题解决来自一位大佬
    },
    {
    path: '/store',
    name:'store',
    component: store,
    },
    {
      path: '/my',
      name:'my',
      component: my,
    },
    {
      path: '/order',
      name:'order',
      component: order,
    },
    {
      path: '/shop',
      name:'shop',
      component: shop,
    },
    {
      path: '/test',
      name:'test',
      component: test,
    },
  ]
});
