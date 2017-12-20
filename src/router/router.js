import Vue from 'vue'
import Router from 'vue-router'
import Share from '@/pages/Share'
import Almanac from '@/pages/Almanac'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Share',
      component: Share
    },
    {
      path: '/Almanac',
      name: 'Almanac',
      component: Almanac
    }
  ]
})
