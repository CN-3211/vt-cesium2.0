/*
 * @Date: 2022-03-28 09:56:52
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 20:30:21
 * @FilePath: /vue3-cesium-typescript-start-up-template/src/components/jt-global-register/index.ts
 */
import { App } from 'vue'

const requireComponent = require.context('./components', true, /index.vue$/)

const register = (app: App<Element>): void => {
  requireComponent.keys().forEach((fullpath) => {
    const componentConfig = requireComponent(fullpath)
    const pathArr = fullpath.split('/')
    pathArr.pop() // pop filename(index.vue)
    let componentName = ''
    if (pathArr) {
      componentName = pathArr.pop() as string
    }
    console.log('componentName :>> ', componentName);
    if (!componentName) {
      return
    }
    app.component(componentName, componentConfig.default || componentConfig)
  })
}

export default register
