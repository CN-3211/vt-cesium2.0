/*
 * @Date: 2022-03-30 15:49:30
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-08 09:48:33
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/config/contents/index.ts
 */
import view from './view'
import effect from './effect';
import tool from './tool'

import { Content } from './Types'

const contents: Array<Content> = [
  view,
  effect,
  tool
]

export default contents
