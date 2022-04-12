/*
 * @Date: 2022-03-30 16:34:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-01 17:39:18
 * @FilePath: /vt-cesium2.0/src/store/modules/jt-cesium-vue/modules/locationbar/state.ts
 */
export type State = {
  showCameraLocation: boolean
  showMouseLocation: boolean
  showFPS: boolean
  // 要不要把激活状态也放进来
}

/**
 * @description: 为什么要区分defaultState和State
 * @param {*}
 * @return {*} State
 */
export const defaultState = (): State => {
  return {
    showCameraLocation: false,
    showMouseLocation: false,
    showFPS: false,
  }
}
export const state: State = defaultState()
