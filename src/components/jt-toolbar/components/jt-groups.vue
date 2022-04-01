<!--
 * @Date: 2022-03-30 19:45:40
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-31 17:28:42
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/components/jt-groups.vue
-->
<template>
  <div class="flex mt-1.5">
    <div class="content flex py-1">
      <template v-for="(group, gIndex) in groups" :key="gIndex">
        <div class="wrapper">
          <JtGroup v-if="!group.invisible" :key="gIndex">
            <template v-slot:name>{{ group.name }}</template>
            <JtItems :items="group.items" />
          </JtGroup>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import type { Group } from '@/components/jt-toolbar/config/contents/Types'
import JtGroup from './jt-group.vue'
import JtItems from './jt-items.vue'

defineProps({
  groups: {
    type: Object as PropType<Group[]>,
    required: true,
  }
})
</script>
