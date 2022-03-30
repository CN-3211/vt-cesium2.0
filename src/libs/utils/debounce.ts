/*
 * @Date: 2022-03-30 16:45:49
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 16:46:27
 * @FilePath: /vt-cesium2.0/src/libs/utils/debounce.ts
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const debounce = (fn: any, delay: number) => {
  let timer: any = -1
  function debounced() {
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn()
    }, delay)
  }
  return debounced
}

export default debounce
