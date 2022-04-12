import { ActionTree } from 'vuex'
import { RootState } from '@/store'

import type { State, OverlayDynamicView } from './state'
import { LayoutHandlerEnum } from './enum-constant'

export const actions: ActionTree<State, RootState> = {
  async [LayoutHandlerEnum.RESET_STATE]({ commit }) {
    commit(LayoutHandlerEnum.RESET_STATE)
  },

  async [LayoutHandlerEnum.SET_SHOW_BROWSER_PANEL](
    { commit },
    payload: boolean
  ) {
    commit(LayoutHandlerEnum.SET_SHOW_BROWSER_PANEL, payload)
  },

  async [LayoutHandlerEnum.SET_SHOW_TOOLBAR]({ commit }, payload: boolean) {
    commit(LayoutHandlerEnum.SET_SHOW_TOOLBAR, payload)
  },

  async [LayoutHandlerEnum.SET_SHOW_SETTING_BUTTON](
    { commit },
    payload: boolean
  ) {
    commit(LayoutHandlerEnum.SET_SHOW_SETTING_BUTTON, payload)
  },

  async [LayoutHandlerEnum.SET_TOOLBAR_HEIGHT]({ commit }, payload: number) {
    commit(LayoutHandlerEnum.SET_TOOLBAR_HEIGHT, payload)
  },

  async [LayoutHandlerEnum.ADD_UNIQUE_NAME_OVERLAY_DYNAMIC_VIEW_BY_NAME](
    { commit },
    payload: string
  ) {
    commit(
      LayoutHandlerEnum.ADD_UNIQUE_NAME_OVERLAY_DYNAMIC_VIEW_BY_NAME,
      payload
    )
  },

  async [LayoutHandlerEnum.REMOVE_OVERLAY_DYNAMIC_VIEW_BY_NAME](
    { commit },
    payload: string
  ) {
    commit(LayoutHandlerEnum.REMOVE_OVERLAY_DYNAMIC_VIEW_BY_NAME, payload)
  },
}
