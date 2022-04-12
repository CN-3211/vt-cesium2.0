/*
 * @Date: 2022-03-30 15:49:30
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-06 15:28:29
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/config/contents/view/groups/view/index.ts
 */
import { Group, ClickHandlerOption } from '../../../Types'
import { LayoutHandlerEnum } from '@/store/modules/jt-cesium-vue/modules/layout/enum-constant'

const view: Group = {
  name: '视图',
  items: [
    {
      name: '切换视图',
      icon: 'view-lp',
      dropdownOnClick: true,
      dropdown: {
        componentName: 'select-view-mode',
      },
    },

    {
      name: '相机设置',
      icon: 'setting-config',

      clickHandler: (option: ClickHandlerOption): void => {
        option.store.dispatch(
          `jtCesiumVue/layout/${LayoutHandlerEnum.ADD_UNIQUE_NAME_OVERLAY_DYNAMIC_VIEW_BY_NAME}`,
          'jt-camera-setting'
        )
      },
    },
    {
      name: '范围限制',
      icon: 'rectangle',

      clickHandler: (option: ClickHandlerOption): void => {
        option.store.dispatch(
          `jtCesiumVue/layout/${LayoutHandlerEnum.ADD_UNIQUE_NAME_OVERLAY_DYNAMIC_VIEW_BY_NAME}`,
          'jt-cartographic-limit-rectangle'
        )
      },
    },
  ],
  invisible: false,
  disable: false,
}

export default view
