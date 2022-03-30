<!--
 * @Date: 2022-03-29 17:21:47
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-03-30 13:09:42
 * @FilePath: /vt-cesium2.0/src/components/toolbarGroup/tool.vue
-->
<template>
  <div class="tool">
    <div class="iconfont" :class="props.isActive ? `iconfont-active ${props.icon}` : props.icon"></div>
    <div class="tool-name" :class="props.isActive && 'tool-name-active'">{{props.name}}</div>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      name: String,
      icon: String,
      isActive: Boolean
    },
    setup(props) {
      return {
        props
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tool {
    width: 100%;
    height: 85px;
    text-align: center;
    padding-top: 5px;
    .iconfont {
      width: 40px;
      height: 40px;
      background-color: #fff;
      font-size: 20px;
      line-height: 40px;
      border-radius: 10px;
      margin: 0 auto;
      cursor: pointer;
    }
    .iconfont-active {
      background-color: #3B7CFF;
      color: #fff;
    }
    .tool-name {
      line-height: 30px;
    }
    .tool-name-active {
      color: #3B7CFF;
    }
  }
  .tool:hover {
    cursor: pointer;
    color: rgb(8, 166, 187);
  }
</style>