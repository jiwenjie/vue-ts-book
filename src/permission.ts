import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { PermissionModule } from '@/store/modules/permission'
import { Route } from 'vue-router'

const whiteList = ['/404'] // 不重定向白名单
router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start()
  if (to.path === "/") {
    next('/login')
  } else {
    next()
  }
  NProgress.done()
})

router.afterEach(() => {
    NProgress.done() // 结束Progress
})
