<!--
 * @Date: 2022-03-30 19:58:43
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 20:02:03
 * @FilePath: /vt-cesium2.0/src/components/bd-toolbar/components/bd-items.vue
-->
<template>
  <template v-for="(item, index) in items" :key="index">
    <div class="wrapper" >
      <BdItem v-if="!item.invisible" :item="item">
        {{ item.name }}
      </BdItem>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import type { Item } from '@/components/bd-toolbar/config/contents/Types'
import BdItem from './bd-item.vue'

defineProps({
  items: {
    type: Object as PropType<Item[]>,
    required: true,
  }
})
</script>
