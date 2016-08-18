
export default function (router) {
  router.map({
    'goods': {
      component (resolve) {
        require(['./pages/goods/goodslist'], resolve)
      }
    },
    'goodsedit': {
      component (resolve) {
        require(['./pages/goods/goodsedit'], resolve)
      }
    }
  })
  router.redirect({
    '/': 'goods'
  })
  //  router.redirect({
  //  '/': '/home',
  //  '*': '/home'
  //  })
}

