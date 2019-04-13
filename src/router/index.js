import Vue from 'vue'
import Router from 'vue-router'
// import text1_1 from '@/components/page/text1_1'
Vue.use(Router);

export default new Router({
  linkActiveClass:"activeclass",
  mode:"hash",
  routes: [
    {
      path:'/',
      name: 'home',
      component: () => import('@/components/page/home')
    },
    {
      path: '/pos',
      name: 'Pos',
      component: () => import('@/components/page/Pos.vue'),
      // redirect:'/shop'

    },

    /**
     *    商品
     * */
    {
      path:'/shop',
      component: () => import('@/components/page/shop.vue'),
      children:[
        {
          path: '',
          name: 'shop1',
          component: () => import('@/components/page/shop/shop1.vue')

        },
        {
          path: '/shop2',
          name: 'shop2',
          component: () => import('@/components/page/shop/shop2.vue'),
          // beforeEnter:(to,from,next) =>{
          //   console.log('to',to);
          //   console.log('from',from);
          //   next();
          // }
        }
      ]
    },
    /**
     *  商品
     * */
    {
      component: () => import('@/components/page/good.vue'),
      path:'/good'
    },
    /**
     *    会员
     * */
    {
      path:'/member',
      // name: 'member',
      components: {
        default:() => import('@/components/page/vip/vipDefault.vue'),
        left:() => import('@/components/page/vip/vipLeft.vue'),
        right:() => import('@/components/page/vip/vipRight.vue')
}
    },
      /**
      *   统计
      * */
    {
      path:'/statistics',
      component: () => import('@/components/page/statistics.vue'),
      // beforeEnter:(to,from,next) => {
      //   console.log('from',from);
      //   console.log('to',to);
      //   next();
      // },

    },
    /**
     *    设置
     * */
    {
      path:'/setting',
      component: () => import('@/components/page/setting.vue')
    },
    /**
    *  测试页1
    * */
    {
      path: '/test1',
      component: () => import('@/components/page/test1.vue')
    },
    {
      path: '*',
      component: () => import('@/components/Error/404/index.vue')
    }
  ]
})
