import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
// const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/charts/Charts')
const Widgets = () => import('@/views/widgets/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')
const Brands = () => import('@/views/icons/Brands')
const Flags = () => import('@/views/icons/Flags')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

// Custom----------------------------------------------
// Tổng quan
const Dashboard = () => import('@/views/Dashboard')

//Đơn hàng
const Order = () => import('@/views/orders/All')
const New = () => import('@/views/orders/New')
const NotYetShipped = () => import('@/views/orders/NotYetShipped')
const Unpaid = () => import('@/views/orders/Unpaid')
const CreateOrder = () => import('@/views/orders/Create')

//Vận chuyển
const Transport = () => import('@/views/transport/All')
const Ready = () => import('@/views/transport/Ready')
const InProcess = () => import('@/views/transport/InProcess')
const Completed = () => import('@/views/transport/Completed')

//Khuyến mãi
const Discount = () => import('@/views/discount/Discount')

//Sản phẩm
const AllProducts = () => import('@/views/products/AllProducts')
const ProductGroups = () => import('@/views/products/ProductGroups')
const Inventory = () => import('@/views/products/Inventory')

//Khách hàng
const Customer = () => import('@/views/customers/List')
const CreateCustomer = () => import('@/views/customers/Create')


Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Trang chủ',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Tổng quan',
          component: Dashboard
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: {
            label: 'Khách hàng'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Tất cả khách hàng',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'Chi tiết khách hàng'
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            },
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/coreui-icons',
          name: 'CoreUI Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'Icons library',
              component: CoreUIIcons
            },
            {
              path: 'brands',
              name: 'Brands',
              component: Brands
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        },
        {
          path: 'orders',
          redirect: '/orders/all',
          name: 'Đơn hàng',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/orders/all',
              name: 'Tất cả đơn hàng',
              component: Order
            },
            {
              path: '/orders/new',
              name: 'Đơn hàng mới',
              component: New
            },
            {
              path: '/orders/not_yet_shipped',
              name: 'Chưa giao hàng',
              component: NotYetShipped
            },
            {
              path: '/orders/unpaid',
              name: 'Chưa thanh toán',
              component: Unpaid
            },
            {
              path: '/orders/create',
              name: 'Tạo đơn hàng',
              component: CreateOrder
            }
          ]
        },
        {
          path: 'transport',
          redirect: '/transport/all',
          name: 'Vận chuyển',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/transport/all',
              name: 'Tất cả đơn hàng',
              component: Transport
            },
            {
              path: '/transport/ready',
              name: 'Chờ lấy hàng',
              component: Ready
            },
            {
              path: '/transport/in_process',
              name: 'Đang giao',
              component: InProcess
            },
            {
              path: '/transport/completed',
              name: 'Đã giao',
              component: Completed
            }
          ]

        },
        {
          path: '/discount',
          name: 'Khuyến mãi',
          component: Discount
        },
        {
          path: 'products',
          redirect: '/products/all_products',
          name: 'Sản phẩm',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/products/all_products',
              name: 'Tất cả sản phẩm',
              component: AllProducts
            },
            {
              path: '/products/product_groups',
              name: 'Nhóm sản phẩm',
              component: ProductGroups
            },
            {
              path: '/products/inventory',
              name: 'Tồn kho',
              component: Inventory
            }
          ]
        },
        {
          path: 'customers',
          redirect: '/customers/list',
          name: 'Khách hàng',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '/customers/list',
              name: 'Danh sách khách hàng',
              component: Customer
            },
            {
              path: '/customers/create',
              name: 'Tạo khách hàng',
              component: CreateCustomer
            }
          ]
        },
      ]
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
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

