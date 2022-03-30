/*
 * @Date: 2022-03-30 16:45:49
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 16:46:11
 * @FilePath: /vt-cesium2.0/src/libs/utils/uuid.ts
 */
const CHARS =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')

const uuid = function (): string {
  const uuid:any[] = []
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
  let r
  for (let i = 0; i < 36; i++) {
    if (!uuid[i]) {
      r = 0 | (Math.random() * 16)
      uuid[i] = CHARS[i === 19 ? (r & 0x3) | 0x8 : r]
    }
  }
  return uuid.join('')
}
export default uuid
