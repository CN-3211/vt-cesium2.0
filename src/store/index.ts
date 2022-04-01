/*
 * @Date: 2022-03-30 14:29:50
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-31 14:36:48
 * @FilePath: /vt-cesium2.0/src/store/index.ts
 */
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import { store as template, State as TemplateState } from './modules/template'
import { store as jtCesiumVue, BDCesiumVueState } from './modules/jt-cesium-vue'

export type RootState = {
  template: TemplateState
  jtCesiumVue: BDCesiumVueState
}

/**
 * @description: 传入key作为标志符，唯一化当前useStore
 */
export const key: InjectionKey<Store<RootState>> = Symbol()
export function useStore(): Store<RootState> {
  return baseUseStore(key)
}

export const store = createStore<RootState>({
  modules: {
    template, // template for jtCesiumVue 方便理解
    jtCesiumVue
  }
})

export default store