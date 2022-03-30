/*
 * @Date: 2022-03-28 09:56:52
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 20:08:23
 * @FilePath: /vt-cesium2.0/src/components/bd-toolbar/config/contents/Types.ts
 */
import type { Viewer } from 'cesium';
import type { RootState } from '@/store'

import { Store } from 'vuex'
import { Router } from 'vue-router'

export type OnMountedOption = {
  viewer?: Viewer
  iconEl?: HTMLElement
  store: Store<RootState>
}

export type OnMounted = (option: OnMountedOption) => void

export type Content = {
  name: string | ((t: T) => string)
  groups: Array<Group>
  invisible?: boolean
  disable?: boolean
}

export type Group = {
  name: string | ((t: T) => string)
  items: Array<Item>
  invisible?: boolean
  disable?: boolean
}

export type ActiveOption = {
  store: Store<RootState>
}

export type Active = (option: ActiveOption) => boolean

export type ClickHandler = (option: ClickHandlerOption) => void | any

export type Item = {
  // string for name, function for i18n convert
  name: string | ((t: T) => string)
  icon: string
  invisible?: boolean
  disable?: boolean
  onMounted?: OnMounted
  clickHandler?: ClickHandler
  clickHandlerResult?: any
  active?: Active
  // if true, clickHandler / clickHandlerResult will not execute, and dropdown arrow will not show
  dropdownOnClick?: boolean
  dropdown?: Dropdown
}

export type T = (key: string | number, defaultMsg?: string) => string

export type ClickHandlerOption = {
  viewer?: Viewer
  item?: Item
  router?: Router
  store: Store<RootState>
}

export type Dropdown = {
  componentName: string
}

const x = {
  name: '视图',
  groups: [
    {
      name: '视角',
      items: [
        {
          name: '全球',
          icon: 'earth',
          clickHandler: undefined,
        },
      ],
    },
  ],
}
