export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Tổng quan',
        to: '/dashboard',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Đơn hàng',
        route: '/orders',
        icon: 'cil-calculator',
        items: [
          {
            name: 'Tất cả đơn hàng',
            to: '/orders/all_orders'
          },
          {
            name: 'Tạo đơn hàng',
            to: '/orders/create'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Vận chuyển',
        to: '/transport',
        icon: 'cil-cursor',

      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Sản phẩm',
        route: '/products',
        icon: 'cil-star',
        items: [
          {
            name: 'Tất cả sản phẩm',
            to: '/products/all_products'
          },
          {
            name: 'Nhóm sản phẩm',
            to: '/products/product_groups'
          },
          {
            name: 'Tồn kho',
            to: '/products/inventory'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Khách hàng',
        to: '/users',
        icon: 'cil-puzzle',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Khuyến mãi',
        to: '/discount',
        icon: 'cil-bell',
      },
    ]
  }
]