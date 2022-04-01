<template>
  <div ref="el">
    <div class="flex justify-center items-center mx-1 px-2">
      <div @click="itemClicked" class="flex flex-col justify-center items-center cursor-pointer hover:text-blue-400">
        <div ref="icon" class="text-4xl">
          <jt-icon :name="item.icon" />
        </div>
        <div class="text-sm text-white select-none">
          <slot></slot>
        </div>
      </div>

      <div
        v-if="dropdownVisible"
        @click="dropdownClicked"
        class="flex justify-center items-center ml-2 h-full hover:text-blue-400"
      >
        <jt-icon name="arrow-down" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  PropType,
  computed,
  inject,
  onMounted,
  shallowRef
} from 'vue'
import { CesiumRef, CESIUM_REF_KEY } from '@/libs/cesium/cesium-vue'
import { mapActions } from 'vuex'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { ToolbarActionTypes } from '@/store/modules/jt-cesium-vue/modules/toolbar/action-types'
import type { DropdownState } from '@/store/modules/jt-cesium-vue/modules/toolbar/state'
import type {
  Item,
  Content,
  Group,
  ActiveOption,
  ClickHandlerOption,
  OnMounted,
  OnMountedOption,
} from '@/components/jt-toolbar/config/contents/Types'

const store = useStore()
const router = useRouter()
const el = shallowRef<HTMLElement | null>(null)
const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  }
})

const dropdownVisible = computed((): boolean => {
  const { item } = props
  return item.dropdownOnClick ? false : !!item.dropdown
})
const dropdownClicked = () => {
  console.log('asd :>> ', 'dropdownClicked');
}

const cesiumRef = inject<CesiumRef>(CESIUM_REF_KEY)
const itemClicked = (e: MouseEvent) => {
  const { item } = props
  const { viewer } = cesiumRef || {}
  if (!viewer) {
    return
  }
  if (item.dropdownOnClick) {
    e.stopPropagation()
    return
  }
  const option: ClickHandlerOption = {
    viewer: viewer,
    item: item,
    store,
    router,
  }
  const result = item.clickHandler && item.clickHandler(option)
  item.clickHandlerResult = result
}

const icon = shallowRef<HTMLElement | null>(null)
onMounted(() => {
  const { item } = props
  const { viewer } = cesiumRef || {}
  const option: OnMountedOption = {
    viewer: viewer,
    iconEl: icon.value as HTMLElement,
    store,
  }
  item.onMounted && item.onMounted(option)
})
</script>
