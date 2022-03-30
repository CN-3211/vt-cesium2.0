/*
 * @Date: 2022-03-29 16:52:36
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 22:18:48
 * @FilePath: /vt-cesium2.0/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus';
import cesiumVue from './libs/cesium/cesium-vue'

import 'cesium/Source/Widgets/widgets.css'
import 'element-plus/dist/index.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/styles/index.css'

import register from './components/bd-global-register'

const hub = createApp(App)

register(hub)

hub.use(router).use(cesiumVue).use(ElementPlus).mount('#app')