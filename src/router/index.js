import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'list',
        name: 'List',
        component: () => import('../views/List.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/Order.vue')
      },
      {
        path: 'product/:id', // 用動態路由去商品明細頁
        name: 'SingleProduct',
        component: () => import('../views/SingleProduct.vue')
      },
      {
        path: 'shopcart',
        name: 'ShoppingCart',
        component: () => import('../views/ShoppingCart.vue')
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('../views/Checkout.vue')
      },
      {
        path: 'checkout/:orderID', // 用動態路由去結帳頁
        name: 'CheckoutPay',
        component: () => import('../views/CheckoutPay.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/Orders.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/Coupons.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  // 切換路由時回到畫面頂部
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
