import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const FindMusic = () => import("views/common/top/FindMusic")
const MyMusic = () => import("views/common/top/MyMusic")
const Friends = () => import("views/common/top/Friends")
const Market = () => import("views/common/top/Market")
const Musican = () => import("views/common/top/Musican")
const DownLoadApp = () => import("views/common/top/DownLoadApp")

const routes = [
  {
    path: '',
    redirect: '/findMusic'
  },
  {
    path: '/findMusic',
    component: FindMusic
  },
  {
    path: '/MyMusic',
    component: MyMusic
  },
  {
    path: '/Friends',
    component: Friends
  },
  {
    path: '/Market',
    component: Market
  },
  {
    path: '/Musican',
    component: Musican
  },
  {
    path: '/DownLoadApp',
    component: DownLoadApp
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
