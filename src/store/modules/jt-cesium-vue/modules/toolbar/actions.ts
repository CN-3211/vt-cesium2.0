/*
 * @Date: 2022-03-30 16:34:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-01 14:04:20
 * @FilePath: /vt-cesium2.0/src/store/modules/jt-cesium-vue/modules/toolbar/actions.ts
 */
import { ActionTree } from 'vuex'
import { RootState } from '@/store'

import type { State, DropdownState, TerrainSamplingState } from './state'
import { ToolbarHandlerEnum } from './enum-constant'

export const actions: ActionTree<State, RootState> = {
  async [ToolbarHandlerEnum.RESET_STATE]({ commit }) {
    commit(ToolbarHandlerEnum.RESET_STATE)
  },

  async [ToolbarHandlerEnum.SET_VISIBLE]({ commit }, payload: boolean) {
    commit(ToolbarHandlerEnum.SET_VISIBLE, payload)
  },

  async [ToolbarHandlerEnum.SET_DROP_DOWN]({ commit }, payload: DropdownState) {
    commit(ToolbarHandlerEnum.SET_DROP_DOWN, payload)
  },

  // elevation contour
  async [ToolbarHandlerEnum.SET_ELEVATION_CONTURE_ACTIVE](
    { commit },
    payload: boolean
  ) {
    commit(ToolbarHandlerEnum.SET_ELEVATION_CONTURE_ACTIVE, payload)
  },

  // terrain sampling
  async [ToolbarHandlerEnum.SET_TERRAIN_SAMPLING](
    { commit },
    payload: TerrainSamplingState
  ) {
    commit(ToolbarHandlerEnum.SET_TERRAIN_SAMPLING, payload)
  },
}
