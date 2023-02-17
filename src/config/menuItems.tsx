export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Products',
    url: '/products',
    submenu: [
      {
        title: 'Shoes',
        url: 'shoes',
      },
      {
        title: 'Clothing',
        url: 'clothing',
        submenu: [
          {
            title: 'Kids',
            url: 'kids',
          },
          {
            title: 'Adults',
            url: 'adults',
            submenu: [
              {
                title: 'Men',
                url: 'men',
              },
              {
                title: 'Women',
                url: 'Women',
              },
            ],
          },
        ],
      },
      {
        title: 'Gifts',
        url: 'gifts',
      },
    ],
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'Who we are',
        url: 'who-we-are',
      },
      {
        title: 'Our values',
        url: 'our-values',
      },
    ],
  },
  {
    title: 'Login',
    url: '/login',
  },
]
