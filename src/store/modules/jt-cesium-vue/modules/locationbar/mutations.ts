/*
 * @Date: 2022-03-30 16:34:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-31 20:11:51
 * @FilePath: /vt-cesium2.0/src/store/modules/jt-cesium-vue/modules/locationbar/mutations.ts
 */
import { MutationTree } from 'vuex'
import { defaultState } from './state'
import type { State } from './state'
import { LocationBarMutationEnum } from './mutation-enum'

export const mutations: MutationTree<State> = {
  [LocationBarMutationEnum.RESET_STATE](state: State) {
    Object.assign(state, defaultState())
  },

  [LocationBarMutationEnum.SET_SHOW_CAMERA_LOCATION](
    state: State,
    payload: boolean
  ) {
    console.log('payload :>> ', payload);
    state.showCameraLocation = payload
  },

  [LocationBarMutationEnum.SET_SHOW_MOUSE_LOCATION](
    state: State,
    payload: boolean
  ) {
    state.showMouseLocation = payload
  },

  [LocationBarMutationEnum.SET_SHOW_FPS](state: State, payload: boolean) {
    state.showFPS = payload
  },
}
