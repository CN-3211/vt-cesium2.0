<template>
  <div ref="el">
    <div class="flex justify-center items-center mx-1 px-2">
      <div @click="itemClicked" class="flex flex-col justify-center items-center cursor-pointer hover:text-blue-400"
        :class="itemActive ? 'text-blue-400' : ''"
      >
        <div ref="icon" class="text-4xl">
          <jt-icon :name="item.icon" />
        </div>
        <div class="text-sm text-white select-none">
          <slot></slot>
        </div>
      </div>

      <div
        v-if="dropdownVisible"
        @click.stop="dropdownClicked"
        :class="dropdownActive ? 'text-blue-400' : ''"
        class="flex justify-center items-center ml-2 h-full hover:text-blue-400"
      >
        <jt-icon name="arrow-down" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, inject, onMounted, shallowRef, ref } from 'vue'
import { CesiumRef, CESIUM_REF_KEY } from '@/libs/cesium/cesium-vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { ToolbarHandlerEnum } from '@/store/modules/jt-cesium-vue/modules/toolbar/enum-constant'
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
import { isStatement } from '@babel/types'

const store = useStore()
const router = useRouter()
const el = shallowRef<HTMLElement | null>(null)
const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  }
})

/* dropdown部分 */ 
const dropdown = computed(() => {
  return store.state.jtCesiumVue.toolbar.dropdown
})
const dropdownVisible = computed((): boolean => {
  const { item } = props
  return item.dropdownOnClick ? false : !!item.dropdown
})
const dropdownActive = computed((): boolean => {
  const { item } = props;
  if(item.dropdown) {
    return item.dropdown.componentName === dropdown.value.componentName;
  } else {
    return false;
  }
});
const dropdownClicked = () => {
  const { item } = props;
  if (!item || !item.dropdown) {
    return
  }
  const left = (el.value! as HTMLElement).offsetLeft
  const DropdownState:DropdownState = {
    show: true,
    componentName: item.dropdown.componentName,
    top: dropdown.value.top,
    left: left
  }
  store.dispatch(`jtCesiumVue/toolbar/${ToolbarHandlerEnum.SET_DROP_DOWN}`, DropdownState)
}
/* dropdown部分 */ 


/* item部分 */ 
const cesiumRef = inject<CesiumRef>(CESIUM_REF_KEY)
// 配置item激活状态，只有部分图标有激活状态
const itemActive = computed((): boolean => {
  const { item } = props;
  const option = { store }
  return !!item.active && item.active(option)
})
const itemClicked = (e: MouseEvent) => {
  const { item } = props
  const { viewer } = cesiumRef || {}
  if (!viewer) {
    return
  }
  if (item.dropdownOnClick) {
    dropdownClicked()
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
/* item部分 */ 


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
