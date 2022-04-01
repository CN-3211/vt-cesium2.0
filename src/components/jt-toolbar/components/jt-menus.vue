<!--
 * @Date: 2022-03-30 17:21:07
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 21:47:33
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/components/jt-menus.vue
-->
<template>
  <div class="tabs">
    <div class="flex flex-row justify-between">
      <div class="flex m-0 p-0 w-full bg-gray-700 list-none relative select-none">
        <template v-for="(content, index) in contents" :key="index">
          <div :class="{ 'cursor-not-allowed': !!content.disable || !!content.invisible }">
            <div
              v-if="!content.invisible"
              class="text-white py-1 px-6 list-none text-sm font-bold cursor-pointer hover:bg-gray-500"
              :class="{
                'bg-gray-500': index === currentIndex,
                'pointer-events-none': !!content.disable || !!content.invisible,
              }"
              @click="setCurrent(index, content)"
            >
              {{ content.name }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { computed, defineComponent, PropType, ref, watch } from 'vue'
import type { Content } from '@/components/jt-toolbar/config/contents/Types'


const currentIndex = ref(0)

const test = defineEmits(['selectChange'])
watch(currentIndex, () => {
  test('selectChange', currentIndex.value)
})

defineProps({
  contents: {
    type: Object as PropType<Content[]>,
    required: true,
  }
})

const setCurrent = (index: number, content: Content) => {
  if (!!content.invisible || !!content.disable) {
    return
  }
  currentIndex.value = index
}
</script>
