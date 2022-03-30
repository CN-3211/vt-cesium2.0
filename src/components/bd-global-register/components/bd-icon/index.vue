<!--
 * @Date: 2022-03-30 20:31:23
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 21:22:18
 * @FilePath: /vt-cesium2.0/src/components/bd-global-register/components/bd-icon/index.vue
-->
<template>
  <svg
    class="bd-icon block overflow-hidden fill-current stroke-current"
    :class="className"
    aria-hidden="true"
  >
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script lang="ts" setup>
const requireAll = (ctx: __WebpackModuleApi.RequireContext) => {
  ctx.keys().map(ctx)
}

requireAll(require.context('./svgs', true, /\.svg$/))

defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  }
})
</script>

<style scoped lang="scss">
.bd-icon {
  width: 1em;
  height: 1em;
}
</style>
