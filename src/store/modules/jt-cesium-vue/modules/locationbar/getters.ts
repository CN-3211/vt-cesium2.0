/*
 * @Date: 2022-03-30 16:34:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-02 10:44:30
 * @FilePath: /vt-cesium2.0/src/store/modules/jt-cesium-vue/modules/locationbar/getters.ts
 */
import { GetterTree } from 'vuex'

import { RootState } from '@/store'

import { State } from './state'
import { GetterEnum } from './enum-constant'

export type Getter = {
  [GetterEnum.ALL_SHOW](state: State): boolean
}

export const getters: GetterTree<State, RootState> & Getter = {
  [GetterEnum.ALL_SHOW](state) {
    return state.showCameraLocation || state.showFPS || state.showMouseLocation
  },
}
