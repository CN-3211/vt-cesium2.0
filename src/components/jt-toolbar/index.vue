<!--
 * @Date: 2022-03-30 13:55:18
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-31 22:23:09
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/index.vue
-->
<template>
  <div ref="el" class="tool-bar relative bg-gray-500 pointer-events-auto" @click="clearDropdown">
    <JtMenus :contents="toolbarConfig" @selectChange="selectChange" />
    <JtGroups :key="currentSelectIndex" :groups="toolbarConfig[currentSelectIndex].groups"/>
    <div v-if="dropdown.show" @click.stop class="dropdown-panel bg-gray-600 bg-opacity-50 text-white p-4 absolute border-2 border-t-0 border-gray-900 rounded-b z-50">
      <component :is="dropdown.componentName"></component>
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
  watch,
} from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store';
import tbConfig from './config'
import JtMenus from './components/jt-menus.vue'
import JtGroups from './components/jt-groups.vue'

import dropdowns from './dropdown'

const toolbarConfig = computed(() => {
  return tbConfig
})
const currentSelectIndex = ref(0)
const selectChange = (val: number) => {
  currentSelectIndex.value = val
}

// dropdown
const store = useStore()
console.log('store :>> ', store);
const dropdown = computed(() => {
  console.log('asdw :>> ', store.state.jtCesiumVue.toolbar.dropdow);
  return store.state.jtCesiumVue.toolbar.dropdown
})
const clearDropdown = () => {
  console.log('123 :>> ', 123);
}
</script>

<style scoped lang="scss">
.tool-bar {
  .dropdown-panel {
    left: var(--dropdown-panel-p-left);
    top: var(--dropdown-panel-p-top);
  }
}
</style>
