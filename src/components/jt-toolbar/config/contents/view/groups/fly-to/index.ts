/*
 * @Date: 2022-03-30 15:49:30
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 22:20:51
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/config/contents/view/groups/fly-to/index.ts
 */
import { Group, ClickHandlerOption } from '../../../Types'

const view: Group = {
  name: '快速定位',
  items: [
    {
      name: '全球',
      icon: 'earth',
      clickHandler: (options: ClickHandlerOption | undefined): void => {
        const viewer = options?.viewer
        if (!viewer) {
          return
        }
        viewer.jt?.flyTo.flyToEarth()
      },
    },
    {
      name: '中国',
      icon: 'china_compressed',
      clickHandler: (options: ClickHandlerOption | undefined): void => {
        const viewer = options?.viewer
        if (!viewer) {
          return
        }
        viewer.jt?.flyTo.flyToChina()
      },
    },
  ],
  invisible: false,
  disable: false,
}

export default view
