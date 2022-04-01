<!--
 * @Date: 2021-06-02 17:39:05
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-31 20:16:06
 * @FilePath: /vt-cesium2.0/src/views/index.vue
-->
<template>
  <div class="index" id="mapContainer">
    <JtToolbar v-if="isMapReady" ref="toolbar" />
    <MapViewer @loaded="onLoaded" ref="mapViewer"></MapViewer>
    <JtLocationbar v-if="isMapReady && locationBarShow" />
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, computed } from 'vue';
import { useStore } from '@/store';
import { LocationBarGetterEnum } from '@/store/modules/jt-cesium-vue/modules/locationbar/getter-enum'

import { CesiumRef, CESIUM_REF_KEY } from '@/libs/cesium/cesium-vue';

import MapViewer from '@/components/viewer/index.vue'
import JtToolbar from '@/components/jt-toolbar/index.vue';
import JtLocationbar from '@/components/jt-locationbar/index.vue';

import type { Viewer } from 'cesium';

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
const locationBarShow = computed((): boolean => {
  return store.getters[`jtCesiumVue/locationbar/${LocationBarGetterEnum.ALL_SHOW}`]
})

</script>
<style lang="scss">
.index {
  width: 100%;
  height: 100vh;
  position: relative;
  .chart_panel {
  width: calc(100% - 220px);
  height: 200px;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  padding: 10px 15px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 4px;
  box-shadow: '0 3px 14px rgb(128 128 128 / 50%)';
  position: absolute;
  top: auto;
  left: 100px;
  right: 100px;
  bottom: 30px;
  .chart_container {
    width: 100%;
    height: 100%;
  }
}
  .toolbar-group {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  #cesiumContainer {
    width: 100%;
    height: 100%;
  }

  .hbtn {
    position: absolute;
    top: 10px;
    right: 120px;
  }
  .hbtn-2 {
    right: 10px;
  }

  .controlsGroup {
    box-sizing: border-box;
    width: 300px;
    padding: 10px;
    border-radius: 3%;
    position: absolute;
    top: 30px;
    left: 120px;
    background-color: rgba($color: #FFFFFF, $alpha: 0.2);
    .control-switch {
      color: #fff;
    }
    .control-alpha {
      width: 80%;
      margin: 0 auto;
      color: #fff;
    }
  }
}
</style>