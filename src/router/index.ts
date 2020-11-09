import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

/* Layout */
Vue.use(Router)

/*
  name:'router-name'             the name field is required when using <keep-alive>, it should also match its component's name property
                                 detail see : https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    roles: ['admin', 'editor']   will control the page roles (allow setting multiple roles)
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    hidden: true                 if true, this route will not show in the sidebar (default is false)
    alwaysShow: true             if true, will always show the root menu (default is false)
                                 if false, hide the root menu when has less or equal than one children route
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    noCache: true                if true, the page will not be cached (default is false)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
*/
export const constantRoutes: RouteConfig[] = [
    // {
    //   path: '/',
    //   component: () => import('@/views/login/login.vue'),
    // },
    {
        path: '/login',
        component: () => import('@/views/login/login.vue'),
    },
    {
      path: "/index",
      name: "index",
      component: () =>
        import(/* webpackChunkName: "articles" */ "@/views/index/index.vue")
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404.vue'),
    }
]

export const asyncRoutes: RouteConfig[] = [
    {
        path: '*',
        redirect: '/404',
    }
]

const createRouter = () => new Router({
    // scrollBehavior功能只在 HTML5 history 模式下可用，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {// 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    base: process.env.BASE_URL,
    routes: constantRoutes
})

const router = createRouter()

export default router
