<!--
 * @Date: 2022-03-30 20:31:23
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-01 13:21:01
 * @FilePath: /vt-cesium2.0/src/components/jt-global-register/components/jt-icon/index.vue
-->
<template>
  <svg
    class="jt-icon block overflow-hidden fill-current stroke-current"
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
.jt-icon {
  width: 1em;
  height: 1em;
}
</style>
