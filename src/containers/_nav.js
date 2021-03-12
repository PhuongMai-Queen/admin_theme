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
            to: '/orders/all'
          },
          {
            name: 'Đơn hàng mới',
            to: '/orders/new'
          },
          {
            name: 'Chưa giao hàng',
            to: '/orders/not_yet_shipped'
          },
          {
            name: 'Chưa thanh toán',
            to: '/orders/unpaid'
          },
          {
            name: 'Tạo đơn hàng',
            to: '/orders/create'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Vận chuyển',
        route: '/transport',
        // to: '/transport',
        icon: 'cil-cursor',
        items: [
          {
            name: 'Tất cả phiếu giao hàng',
            to: '/transport/all'
          },
          {
            name: 'Chờ lấy hàng',
            to: '/transport/ready'
          },
          {
            name: 'Đang giao',
            to: '/transport/in_process'
          },
          {
            name: 'Đã giao',
            to: '/transport/completed'
          }
        ]


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
        _name: 'CSidebarNavDropdown',
        name: 'Khách hàng',
        route: '/customers',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Danh sách khách hàng',
            to: '/customers/list'
          },
          {
            name: 'Tạo khách hàng',
            to: '/customers/create'
          }
        ]

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