import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/LoginAndRegister/Login'
import Welcome from "@/components/welcome/Welcome";
import productSearch from "@/components/product/productSearch";
import productDetail from "@/components/product/productDetail";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Welcome
  },
  {
    path: '/loginOrRegister',
    component: Login
  },
  {
    path: '/productSearch',
    name: 'productSearch',
    component: productSearch
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    component: productDetail
  }
  // {
  //   path: '/',
  //   redirect: '/welcome'
  // },
  // //  主页
  // {
  //   path: '/home',
  //   name: 'Home',
  //   redirect: '/welcome',
  //   component: Home,
  //   children: [
  //     {
  //       path: '/login',
  //       component: Login
  //     },
  //     {
  //       path: '/welcome',
  //       component: Welcome
  //     },
  //     {
  //       name:'productDetail',
  //       path: '/productdetail/:productId',
  //       component: ProductDetail
  //     }
  //   ]
  // },
  // {
  //   path: '/test',
  //   component: Test
  // },
  // //  商品详情页面
  // {
  //   name: 'userDetail',
  //   path: '/userdetail',
  //   redirect: '/userdetail/showuser',
  //   component: User,
  //   children:[
  //     //  展示页
  //     {path:'/userdetail/showuser', component: ShowUser},
  //     //  我的主题
  //     {path: '/userdetail/theme', component: Theme},
  //     //  @我
  //     {path: '/userdetail/callme',component: CallMe},
  //     //  私信
  //     {path: '/userdetail/privateletter',component: PrivateLetter},
  //     //  发言
  //     {path: '/userdetail/speak',component: Speak},
  //     //  收藏的产品
  //     {path: '/userdetail/collectibleproducts',component: CollectibleProducts},
  //     //  订单
  //     {path: '/userdetail/order',component: Order},
  //     //  发布的产品
  //     {path: '/userdetail/releasedproducts',component: ReleasedProducts},
  //     //  设置用户个人信息
  //     {path: '/userdetail/userinfo',component: UserInfo},
  //     //  设置收货地址
  //     {path: '/userdetail/address',component: Address},
  //     //  用户验证
  //     {path: '/userdetail/certification',component: Certification}
  //   ]
  // }
]

const router = new VueRouter({
  routes
})

export default router
