<!--
 * @Date: 2022-03-31 21:01:56
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-12 10:11:39
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/dropdown/select-view-mode/index.vue
-->
<template>
  <div class>
    <el-radio-group v-model="currentSceneModeType" @change="sceneModeChange">
      <el-radio-button v-for="(item, index) in sceneModeTypes" :key="index" :label="item.name"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, inject } from 'vue'
import { CesiumRef, CESIUM_REF_KEY } from '@/libs/cesium/cesium-vue'
import { ElRadioGroup, ElRadioButton } from 'element-plus'
import changeSceneMode from '@/libs/cesium/libs/scene-mode/index'
import { SceneMode } from 'cesium'

const currentSceneModeType = ref('')

const cesiumRef = inject<CesiumRef>(CESIUM_REF_KEY)
const { viewer } = cesiumRef || {}
if (!viewer || !viewer.jt) {
  throw new Error('Viewer not loaded.')
}


const sceneModeTypes = reactive([
  {
    name: '2D',
    mode: SceneMode.SCENE2D,
  },
  {
    name: '3D',
    mode: SceneMode.SCENE3D,
  },
  {
    name: '哥伦布',
    mode: SceneMode.COLUMBUS_VIEW,
  },
])

const sceneModeChange = (val: any): void => {
  sceneModeTypes.forEach((sceneMode) => {
    if (sceneMode.name === val) {
      changeSceneMode(viewer, sceneMode.mode, 0.5)
      return
    }
  })
}

onMounted(() => {
  const nowMode = viewer.scene.mode
  sceneModeTypes.forEach((mode) => {
    if (mode.mode === nowMode) {
      currentSceneModeType.value = mode.name
    }
  })
})
</script>
