<!--
 * @Date: 2022-03-31 21:01:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-12 10:34:47
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/dropdown/camera-percentage-change-rate/index.vue
-->
<template>
  <div class="w-40">
    <div class="name">采样率(越小越精确)</div>
    <el-slider
      v-model="samplingRate"
      :min="0"
      :max="0.5"
      :step="0.001"
      :show-tooltip="false"
      :format-tooltip="
      (val) => { return ((0.5 - val) * 200).toFixed(0) + '%' }"
      @change="afterChange"
    ></el-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject } from 'vue'
import { CesiumRef, CESIUM_REF_KEY } from '@/libs/cesium/cesium-vue'

import { ElSlider } from 'element-plus'

const samplingRate = ref<number>(0)

const cesiumRef = inject<CesiumRef>(CESIUM_REF_KEY)
const { viewer } = cesiumRef || {}
if (!viewer) {
  throw new Error('Viewer not loaded.')
}

const afterChange = (val: number) => {
  viewer.jt?.percentageChange.set(val)
}

onMounted(() => {
  samplingRate.value = viewer.jt?.percentageChange.get() || 0
})
</script>

<style scoped lang="scss"></style>
