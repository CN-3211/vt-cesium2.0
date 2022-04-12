/*
 * @Date: 2022-04-06 16:45:35
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-06 16:51:03
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/config/contents/tool/groups/model/index.ts
 */
import { Group, ClickHandlerOption } from '../../../Types'

import { LayoutHandlerEnum } from '@/store/modules/jt-cesium-vue/modules/layout/enum-constant'

const view: Group = {
  name: '模型',
  items: [
    {
      name: '剖分',
      icon: 'overlap',

      clickHandler: (option: ClickHandlerOption): void => {
        option.store.dispatch(
          `jtCesiumVue/layout/${LayoutHandlerEnum.ADD_UNIQUE_NAME_OVERLAY_DYNAMIC_VIEW_BY_NAME}`,
          'jt-primitive-clipping-plane'
        )
      },
    },
  ],
}

export default view
