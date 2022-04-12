/*
 * @Date: 2022-03-30 16:34:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-02 10:47:18
 * @FilePath: /vt-cesium2.0/src/store/modules/jt-cesium-vue/modules/locationbar/actions.ts
 */
import { ActionTree } from 'vuex'
import { RootState } from '@/store'

import type { State } from './state'
import { LocationbarHandlerEnum } from './enum-constant'

export const actions: ActionTree<State, RootState> = {
  async [LocationbarHandlerEnum.RESET_STATE]({ commit }) {
    commit(LocationbarHandlerEnum.RESET_STATE)
  },

  async [LocationbarHandlerEnum.SET_SHOW_CAMERA_LOCATION](
    { commit },
    payload: boolean
  ) {
    commit(LocationbarHandlerEnum.SET_SHOW_CAMERA_LOCATION, payload)
  },

  async [LocationbarHandlerEnum.SET_SHOW_MOUSE_LOCATION](
    { commit },
    payload: boolean
  ) {
    commit(LocationbarHandlerEnum.SET_SHOW_MOUSE_LOCATION, payload)
  },

  async [LocationbarHandlerEnum.SET_SHOW_FPS]({ commit }, payload: boolean) {
    commit(LocationbarHandlerEnum.SET_SHOW_FPS, payload)
  },
}
