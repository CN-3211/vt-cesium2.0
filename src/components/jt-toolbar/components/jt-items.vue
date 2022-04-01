<!--
 * @Date: 2022-03-30 19:58:43
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 20:02:03
 * @FilePath: /vt-cesium2.0/src/components/jt-toolbar/components/jt-items.vue
-->
<template>
  <template v-for="(item, index) in items" :key="index">
    <div class="wrapper" >
      <JtItem v-if="!item.invisible" :item="item">
        {{ item.name }}
      </JtItem>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import type { Item } from '@/components/jt-toolbar/config/contents/Types'
import JtItem from './jt-item.vue'

defineProps({
  items: {
    type: Object as PropType<Item[]>,
    required: true,
  }
})
</script>
