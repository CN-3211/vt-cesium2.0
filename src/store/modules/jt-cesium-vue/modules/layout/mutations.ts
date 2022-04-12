import { MutationTree } from 'vuex'
import { defaultState } from './state'
import type { State } from './state'
import type { OverlayDynamicView } from './state'
import { LayoutHandlerEnum } from './enum-constant'
import { uuid } from '@/utils'

export const mutations: MutationTree<State> = {
  [LayoutHandlerEnum.RESET_STATE](state: State) {
    Object.assign(state, defaultState())
  },

  [LayoutHandlerEnum.SET_SHOW_BROWSER_PANEL](state: State, payload: boolean) {
    state.showBrowserPanel = payload
  },

  [LayoutHandlerEnum.SET_SHOW_TOOLBAR](state: State, payload: boolean) {
    state.showToolbar = payload
  },

  [LayoutHandlerEnum.SET_SHOW_SETTING_BUTTON](state: State, payload: boolean) {
    state.showSettingButton = payload
  },

  [LayoutHandlerEnum.SET_TOOLBAR_HEIGHT](state: State, payload: number) {
    state.toolbarHeight = payload
  },

  [LayoutHandlerEnum.ADD_UNIQUE_NAME_OVERLAY_DYNAMIC_VIEW_BY_NAME](
    state: State,
    payload: string
  ) {
    if (!payload) {
      return
    }
    if (state.overlayDynamicViews.find((x) => x.name === payload)) {
      return
    }
    state.overlayDynamicViews.push({
      name: payload,
      uuid: uuid(),
    })
  },

  [LayoutHandlerEnum.REMOVE_OVERLAY_DYNAMIC_VIEW_BY_NAME](
    state: State,
    payload: string
  ) {
    state.overlayDynamicViews = state.overlayDynamicViews.filter(
      (x) => x.name !== payload
    )
  },
}
