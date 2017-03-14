import Goods from './components/goods/Goods.vue'
import Ratings from './components/ratings/Ratings.vue'
import Seller from './components/seller/Seller.vue'
export default[
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/seller',
    component: Seller
  },
  {
    path: '/ratings',
    component: Ratings
  },
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '*',
    redirect: '/goods'
  }
]
