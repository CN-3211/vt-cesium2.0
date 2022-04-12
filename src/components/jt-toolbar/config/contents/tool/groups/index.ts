/*
 * @Date: 2022-04-06 16:45:35
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-06 16:56:10
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/config/contents/tool/groups/index.ts
 */
import { Group } from '../../Types'

import threeDTiles from './3d-tiles'
import draw from './draw'
import measure from './measure'
import model from './model'

const groups: Array<Group> = [ draw, measure ]
export default groups
