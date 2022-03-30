/*
 * @Date: 2022-03-30 14:57:01
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 16:36:14
 * @FilePath: /vt-cesium2.0/src/@types/shims-cesium.d.ts
 */
// 支持在原来的.d.ts下新增自己定义的属性，如jt
declare module 'cesium' {
  import('cesium')
  import { ImageryLayer, Viewer } from 'cesium'
  import Jt from '@/libs/cesium/cesium-jt'
  import ImageryLayerCoordinateTransform from '@/libs/cesium/libs/sus-imagery-layer-coordinate-transform/ImageryLayerCoordinateTransform'
  import PrimitiveManager from '@/libs/cesium/libs/primitive-manager/PrimitiveManager'

  interface ImageryLayer {
    name: string
    uuid: string
    coordinateTransform: ?ImageryLayerCoordinateTransform
  }

  interface Viewer {
    jt?: Jt
  }

  interface Model {
    name: string
    uuid: string
    _PriManagFlag: string
  }

  interface Cesium3DTileset {
    name: string
    uuid: string
    _PriManagFlag: string
  }
}
