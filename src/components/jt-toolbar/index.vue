<!--
 * @Date: 2022-03-30 13:55:18
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-02 09:37:11
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/index.vue
-->
<template>
  <div ref="el" class="tool-bar relative bg-gray-500 pointer-events-auto" @click="clearDropdown"
    :style="{
      '--dropdown-panel-p-left': dropdown.left + 'px',
      '--dropdown-panel-p-top': dropdown.top + 'px',
    }"
  >
    <JtMenus :contents="toolbarConfig" @selectChange="selectChange" />
    <JtGroups :key="currentSelectIndex" :groups="toolbarConfig[currentSelectIndex].groups"/>
    <div v-if="dropdown.show" @click.stop class="dropdown-panel bg-gray-600 bg-opacity-50 text-white p-4 absolute border-2 border-t-0 border-gray-900 rounded-b z-50">
      <component :is="DropdownComps[dropdownCompsName]"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  defineComponent,
  ref,
  shallowRef,
  computed,
  onMounted,
  watch
} from 'vue'
import { useRoute } from 'vue-router'

import { useStore } from '@/store';
import { ToolbarHandlerEnum } from '@/store/modules/jt-cesium-vue/modules/toolbar/enum-constant'

import tbConfig from './config'
import JtMenus from './components/jt-menus.vue'
import JtGroups from './components/jt-groups.vue'

import DropdownComps from './dropdown';
import { DropdownState } from '@/store/modules/jt-cesium-vue/modules/toolbar/state';


const toolbarConfig = computed(() => {
  return tbConfig
})
const currentSelectIndex = ref(0)
const selectChange = (val: number) => {
  currentSelectIndex.value = val
}


// dropdown
const store = useStore()
const dropdown = computed(() => {
  return store.state.jtCesiumVue.toolbar.dropdown
})
const clearDropdown = () => {
  const val: DropdownState = {
    ...dropdown.value,
    show: false,
    componentName: '',
    iconEl: undefined,
  }
  store.dispatch(
    `jtCesiumVue/toolbar/${ToolbarHandlerEnum.SET_DROP_DOWN}`,
    val
  )
}
// 将aaa-bbb-ccc转化为AaaBbbCcc的格式，供DropdownComps匹配组件。因为script setup模式不允许is传字符串
const dropdownCompsName = computed(() => {
  return dropdown.value.show && dropdown.value.componentName.split('-').map(item => item[0].toUpperCase() + item.substr(1)).join('');
})
console.log('dropdownCompsName :>> ', dropdownCompsName.value);


const el = shallowRef();
onMounted(() => {
  const val: DropdownState = {
    ...dropdown.value,
    top: (el.value as HTMLElement).offsetHeight,
  }
  store.dispatch(
    `jtCesiumVue/toolbar/${ToolbarHandlerEnum.SET_DROP_DOWN}`,
    val
  )
})
</script>

<style scoped lang="scss">
.tool-bar {
  .dropdown-panel {
    left: var(--dropdown-panel-p-left);
    top: var(--dropdown-panel-p-top);
  }
}
</style>
