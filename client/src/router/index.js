import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
// import Dashboard from '@/views/Dashboard'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/thong-ke',
      name: 'Trang Chủ',
      component: Full,
      children: [
        {
          path: 'thong-ke',
          name: 'Thống Kê',
          component: Page500
        },
        {
          path: '/quan-ly-kho',
          name: 'Quản Lý Kho',
          component: Page404
        },
        {
          path: '/quan-ly-nhan-vien',
          name: 'Quản Lý Nhân Viên',
          component: Page404
        },
        {
          path: '/san-pham',
          name: 'Sản Phẩm',
          component: Page404
        },
        {
          path: '/khuyen-mai',
          name: 'Khuyến Mãi',
          component: Page404
        }
      ]
    },
    {
      path: '/dang-nhap',
      name: 'Đăng Nhập',
      component: Login
    },
    {
      path: '/dang-ky',
      name: 'Đăng Ký',
      component: Register
    },
    {
      path: '/ban-hang',
      name: 'Bán Hàng',
      component: Page404
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        }
      ]
    }
  ]
})
