/*
 * @Date: 2022-03-29 16:52:36
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-29 17:17:56
 * @FilePath: /vt-cesium2.0/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Index
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
