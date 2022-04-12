/*
 * @Date: 2022-03-30 16:34:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-02 10:47:57
 * @FilePath: /vt-cesium2.0/src/store/modules/jt-cesium-vue/modules/locationbar/mutations.ts
 */
import { MutationTree } from 'vuex'
import { defaultState } from './state'
import type { State } from './state'
import { LocationbarHandlerEnum } from './enum-constant'

export const mutations: MutationTree<State> = {
  [LocationbarHandlerEnum.RESET_STATE](state: State) {
    Object.assign(state, defaultState())
  },

  [LocationbarHandlerEnum.SET_SHOW_CAMERA_LOCATION](
    state: State,
    payload: boolean
  ) {
    state.showCameraLocation = payload
  },

  [LocationbarHandlerEnum.SET_SHOW_MOUSE_LOCATION](
    state: State,
    payload: boolean
  ) {
    state.showMouseLocation = payload
  },

  [LocationbarHandlerEnum.SET_SHOW_FPS](state: State, payload: boolean) {
    state.showFPS = payload
  },
}
