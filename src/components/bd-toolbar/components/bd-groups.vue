<!--
 * @Date: 2022-03-30 19:45:40
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 20:26:19
 * @FilePath: /vt-cesium2.0/src/components/bd-toolbar/components/bd-groups.vue
-->
<template>
  <div class="flex mt-1.5">
    <div class="content flex py-1">
      <template v-for="(group, gIndex) in groups" :key="gIndex">
        <div class="wrapper">
          <BdGroup v-if="!group.invisible" :key="gIndex">
            <template v-slot:name>{{ group.name }}</template>
            <BdItems :items="group.items" />
          </BdGroup>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import type { Group } from '@/components/bd-toolbar/config/contents/Types'
import BdGroup from './bd-group.vue'
import BdItems from './bd-items.vue'

defineProps({
  groups: {
    type: Object as PropType<Group[]>,
    required: true,
  }
})
</script>
