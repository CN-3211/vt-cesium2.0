/*
 * @Date: 2022-03-30 16:34:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-02 10:40:43
 * @FilePath: /vt-cesium2.0/src/store/modules/jt-cesium-vue/modules/toolbar/mutations.ts
 */
import { MutationTree } from 'vuex'
import { defaultState } from './state'
import type { TerrainSamplingState, State, DropdownState } from './state'
import { ToolbarHandlerEnum } from './enum-constant'

export const mutations: MutationTree<State> = {
  [ToolbarHandlerEnum.RESET_STATE](state: State) {
    Object.assign(state, defaultState())
  },

  [ToolbarHandlerEnum.SET_VISIBLE](state: State, payload: boolean) {
    state.visible = payload
  },

  [ToolbarHandlerEnum.SET_DROP_DOWN](state: State, payload: DropdownState) {
    state.dropdown = payload
  },

  [ToolbarHandlerEnum.SET_DROP_DOWN](state: State, payload: DropdownState) {
    state.dropdown = payload
  },

  // elevation contour
  [ToolbarHandlerEnum.SET_ELEVATION_CONTURE_ACTIVE](
    state: State,
    payload: boolean
  ) {
    state.elevationContourActive = payload
  },

  // terrain sampling
  [ToolbarHandlerEnum.SET_TERRAIN_SAMPLING](
    state: State,
    payload: TerrainSamplingState
  ) {
    state.terrainSampling = payload
  },
}
