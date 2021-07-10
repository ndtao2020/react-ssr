export default [
  {
    page: 'home',
    title: `Home`,
    url: '/',
    view: import('../src/shared/pages/home')
  },
  {
    page: 'admin',
    title: `Web Admin`,
    url: '/admin*'
  }
]
