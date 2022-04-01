/*
 * @Date: 2022-03-30 16:34:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-31 17:01:15
 * @FilePath: /vt-cesium2.0/src/store/modules/jt-cesium-vue/modules/locationbar/actions.ts
 */
import { ActionTree } from 'vuex'
import { RootState } from '@/store'

import type { State } from './state'
import { LocationBarMutationEnum } from './mutation-enum'
import { LocationBarActionEnum } from './action-types'

export const actions: ActionTree<State, RootState> = {
  async [LocationBarActionEnum.RESET_STATE]({ commit }) {
    commit(LocationBarMutationEnum.RESET_STATE)
  },

  async [LocationBarActionEnum.SET_SHOW_CAMERA_LOCATION](
    { commit },
    payload: boolean
  ) {
    commit(LocationBarMutationEnum.SET_SHOW_CAMERA_LOCATION, payload)
  },

  async [LocationBarActionEnum.SET_SHOW_MOUSE_LOCATION](
    { commit },
    payload: boolean
  ) {
    commit(LocationBarMutationEnum.SET_SHOW_MOUSE_LOCATION, payload)
  },

  async [LocationBarActionEnum.SET_SHOW_FPS]({ commit }, payload: boolean) {
    commit(LocationBarMutationEnum.SET_SHOW_FPS, payload)
  },
}
