/*
 * @Date: 2022-03-28 09:56:52
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-29 14:43:24
 * @FilePath: /vue3-cesium-typescript-start-up-template/src/@types/shims-window-cesium.d.ts
 */
/* eslint-disable */
declare namespace globalThis {
  import('cesium')
  import * as Cesium from 'cesium'

  interface Window {
    viewer?: Cesium.Viewer
    Cesium?: Cesium
  }
}
