<!--
 * @Date: 2021-06-02 17:39:05
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-06 15:37:17
 * @FilePath: /vt-cesium2.0/src/views/index.vue
-->
<template>
  <div class="h-screen" id="mapContainer">
    <JtToolbar v-if="isMapReady" ref="toolbar" />
    <div class="relative" :style="jtCesiumVueContainerStyle">
      <Overlay>
        <template v-for="viewComps in overlayDynamicViews" :key="viewComps.uuid">
          <component :is="viewComps.name" class="z-50"></component>
        </template>
        <JtLocationbar v-if="isMapReady && locationBarShow" />
      </Overlay>
      <MapViewer @loaded="onLoaded" ref="mapViewer"></MapViewer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, computed, ComponentPublicInstance, shallowRef, watch, nextTick } from 'vue';
import { useStore } from '@/store';
import { GetterEnum } from '@/store/modules/jt-cesium-vue/modules/locationbar/enum-constant'

import { CesiumRef, CESIUM_REF_KEY } from '@/libs/cesium/cesium-vue';

import MapViewer from '@/components/viewer/index.vue'
import JtToolbar from '@/components/jt-toolbar/index.vue';
import JtLocationbar from '@/components/jt-locationbar/index.vue';
import Overlay from '@/components/jt-overlay/index.vue'

import type { Viewer } from 'cesium';
import { LayoutHandlerEnum } from '@/store/modules/jt-cesium-vue/modules/layout/enum-constant';

const cesiumRef = inject<CesiumRef>(CESIUM_REF_KEY);
if (!cesiumRef) {
  throw new Error('No cesium reference exist.')
}
// 判断Viewer组件是否准备完毕
const isMapReady = ref(false);
const onLoaded = (viewer: Viewer) => {
  isMapReady.value = true
}

const store = useStore();
/** 叠加视图组件部分 **/ 
const overlayDynamicViews = computed(() => {
  {
    return store.state.jtCesiumVue.layout.overlayDynamicViews
  }
})
/** 叠加视图组件部分 **/ 


/** 右下角坐标组件部分 **/ 
const locationBarShow = computed((): boolean => {
  return store.getters[`jtCesiumVue/locationbar/${GetterEnum.ALL_SHOW}`]
})
/** 右下角坐标组件部分 **/ 



/** 样式配置部分 **/ 
const toolbar = shallowRef();
const calcToolbarHeight = () => {
  const oldH = store.state.jtCesiumVue.layout.toolbarHeight
  const h = toolbar.value
    ? ((toolbar.value as ComponentPublicInstance).$el as HTMLElement)
        .clientHeight
    : 0
  if (oldH !== h) {
    store.dispatch(
      `jtCesiumVue/layout/${LayoutHandlerEnum.SET_TOOLBAR_HEIGHT}`,
      h
    )
  }
}
watch(toolbar, () => {
  calcToolbarHeight()
})

const jtCesiumVueContainerStyle = computed(() => {
  return {
    height: `calc(100% - ${store.state.jtCesiumVue.layout.toolbarHeight}px)`,
  }
})
/** 样式配置部分 **/ 

</script>