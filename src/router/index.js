import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'

import MovieList from '../pages/movieList.vue'
import MovieDetail from '../pages/movieDetail.vue'
import LoginPage from '../pages/loginPage.vue'
import RegisterPage from '../pages/registerPage.vue'
import FindPasswordPage from '../pages/findPasswordPage.vue'
import UserInfo from '../pages/userInfo.vue'

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
    },
    {
      path: '/loginPage',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path:'/findPassword',
      component: FindPasswordPage
    },
    {
      path: '/userInfo',
      component: UserInfo
    }
  ]
})
