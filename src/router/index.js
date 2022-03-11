import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'

import MovieList from '../pages/movieList.vue'
import MovieDetail from '../pages/movieDetail.vue'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/index'], resolve),
      meta: {
        title: 'home'
      }
    },
    {
      path: '/movieList',
      component: MovieList
    },
    {
      path: '/movieDetail',
      component: MovieDetail
    }
  ]
})
