<!--
 * @Date: 2021-06-02 17:39:05
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 22:16:30
 * @FilePath: /vt-cesium2.0/src/views/index copy.vue
-->
<template>
  <div class="index" id="mapContainer">
    <MapViewer @loaded="onLoaded" ref="mapViewer"></MapViewer>
    <ToolbarGroup  v-if="isMapReady" class="toolbar-group" @onEdit3Dtiles="onEdit3Dtiles"></ToolbarGroup>
    <Control3DTiles v-if="selectedTileset" :selectedTileset="selectedTileset"></Control3DTiles>
    <MapInfo v-if="isMapReady"></MapInfo>

   <el-button class="hbtn hbtn-1" @click="flyTo('city')">城市模型</el-button>
   <el-button class="hbtn hbtn-2" @click="flyTo('model')">地质模型</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, onMounted } from 'vue';


import { CesiumRef, CESIUM_REF_KEY } from '@/libs/cesium/cesium-vue';
import MapViewer from '@/components/viewer/index.vue'
import MapInfo from '@/components/mapInfo/mapInfo.vue'
import Control3DTiles from '@/components/ToolInfoControl/control3DTiles.vue';

import ToolbarGroup from '@/components/toolbarGroup/toolbarGroup.vue';
import type { Cesium3DTileset, Viewer } from 'cesium';
import type { Ref } from 'vue'

const cesiumRef = inject<CesiumRef>(CESIUM_REF_KEY);
if (!cesiumRef) {
  throw new Error('No cesium reference exist.')
}
// let tileset:undefined | Cesium.Cesium3DTileset;
// let tileset2:undefined | Cesium.Cesium3DTileset;
// 判断Viewer组件是否准备完毕
const isMapReady = ref(false);

/** selectedTileset赋值开始 */
let selectedTileset: Ref<Cesium3DTileset | undefined> = ref(undefined);
const onEdit3Dtiles = (tileset: Cesium3DTileset | undefined) => {
  selectedTileset.value = tileset;
}
/** selectedTileset赋值结束 */

const mapViewer = ref();
const onLoaded = (viewer: Viewer) => {
  isMapReady.value = true
}
const flyTo = (target:string) => {
  mapViewer?.value.flyTo(target)
}

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