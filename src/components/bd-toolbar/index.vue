<!--
 * @Date: 2022-03-30 13:55:18
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 19:50:23
 * @FilePath: /vt-cesium2.0/src/components/bd-toolbar/index.vue
-->
<template>
  <div ref="el" class="tool-bar relative bg-gray-500 pointer-events-auto" @click="clearDropdown">
    <BdMenus :contents="toolbarConfig" @selectChange="selectChange" />
    <BdGroups :key="currentSelectIndex" :groups="toolbarConfig[currentSelectIndex].groups"/>
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
import tbConfig from './config'
import BdMenus from './components/bd-menus.vue'
import BdGroups from './components/bd-groups.vue'

const toolbarConfig = computed(() => {
  return tbConfig
})
const currentSelectIndex = ref(0)
const selectChange = (val: number) => {
  currentSelectIndex.value = val
}

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
