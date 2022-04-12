/*
 * @Date: 2022-04-08 09:44:21
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-08 09:47:12
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/config/contents/effect/groups/other/index.ts
 */
import {
  Group,
  ClickHandlerOption,
  OnMountedOption,
  ActiveOption,
} from '../../../Types'

import { OtherActionTypes } from '@/store/modules/jt-cesium-vue/modules/toolbar/modules/other/action-types'
import { OtherMutationTypes } from '@/store/modules/jt-cesium-vue/modules/toolbar/modules/other/mutation-types'

const view: Group = {
  name: '其他',
  items: [
    {
      name: '深度检测',
      icon: '360',

      clickHandler: (option: ClickHandlerOption): void => {
        option.store.dispatch(
          `jtCesiumVue/toolbar/other/${OtherActionTypes.SWITCH_DEPTH_TEST_AGAINST_TERRAIN}`,
          option
        )
      },

      active: (option: ActiveOption) =>
        option.store.state.jtCesiumVue.toolbar.other.depthTestAgainstTerrain,

      onMounted: (option: OnMountedOption): void => {
        const viewer = option?.viewer
        if (viewer) {
          option.store.commit(
            `jtCesiumVue/toolbar/other/${OtherMutationTypes.SET_DEPTH_TEST_AGAINST_TERRAIN}`,
            viewer.scene.globe.depthTestAgainstTerrain
          )
        }
      },
    },
  ],
}

export default view
