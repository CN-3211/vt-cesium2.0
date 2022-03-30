/*
 * @Date: 2022-03-30 14:29:50
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 21:08:21
 * @FilePath: /vt-cesium2.0/src/store/index.ts
 */
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import { store as template, State as TemplateState } from './modules/template'
import { store as jtCesiumVue, JTCesiumVueState } from './modules/jt-cesium-vue'

export type RootState = {
  template: TemplateState
  jtCesiumVue: JTCesiumVueState
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export function useStore(): Store<RootState> {
  return baseUseStore(key)
}