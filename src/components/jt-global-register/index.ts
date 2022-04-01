/*
 * @Date: 2022-03-28 09:56:52
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-31 19:47:38
 * @FilePath: /vt-cesium2.0/src/components/jt-global-register/index.ts
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
    if (!componentName) {
      return
    }
    app.component(componentName, componentConfig.default || componentConfig)
  })
}

export default register
