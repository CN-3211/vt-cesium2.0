/*
 * @Date: 2022-03-30 16:34:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-31 17:18:21
 * @FilePath: /vt-cesium2.0/src/store/modules/jt-cesium-vue/index.ts
 */
import { Module } from 'vuex'
import { RootState } from '@/store'

import {
  store as locationbar,
  State as LocationbarState,
} from './modules/locationbar'

import { store as layout, State as LayoutState } from './modules/layout'

import type { ToolbarStateAndModule } from './modules/toolbar'
import { store as toolbar } from './modules/toolbar'

import type { CesiumDataStateAndModule } from './modules/cesium-data'
import { store as cesiumData } from './modules/cesium-data'

export type BDCesiumVueState = {
  locationbar: LocationbarState
  layout: LayoutState
  toolbar: ToolbarStateAndModule
  cesiumData: CesiumDataStateAndModule
}

export const store: Module<BDCesiumVueState, RootState> = {
  namespaced: true,
  modules: {
    locationbar,
    layout,
    toolbar,
    cesiumData,
  },
}
