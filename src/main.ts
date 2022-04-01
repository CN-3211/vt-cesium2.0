/*
 * @Date: 2022-03-29 16:52:36
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-31 17:26:59
 * @FilePath: /vt-cesium2.0/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store';

import ElementPlus from 'element-plus';
import cesiumVue from './libs/cesium/cesium-vue'

import 'cesium/Source/Widgets/widgets.css'
import 'element-plus/dist/index.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/styles/index.css'

import register from './components/jt-global-register'

const hub = createApp(App)

register(hub)

hub.use(store, key).use(router).use(cesiumVue).use(ElementPlus).mount('#app')