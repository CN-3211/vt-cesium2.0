<!--
 * @Date: 2021-06-05 14:02:53
 * @LastEditors: huangzh873
 * @LastEditTime: 2022-04-08 09:15:27
 * @FilePath: /vt-cesium2.0/src/components/viewer/hViewer.vue
-->

<script lang="ts">
import { onMounted, defineComponent, ExtractPropTypes, h, reactive } from 'vue'
import { Viewer, Ion } from 'cesium';
import "cesium/Source/Widgets/widgets.css"
import defaultViewerProps from './defaultViewerProps';

import { LOADED_EVENT } from './constant';


export default defineComponent({
  props: defaultViewerProps,
  setup(props:ExtractPropTypes<typeof defaultViewerProps>, { emit }) {
    Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNzUyMTRlZS1jOWIzLTQyMGItODhiZC03MjJiNjhkZmM3MTAiLCJpZCI6NDU0MzYsImlhdCI6MTYxNTA4NTMxM30.0lWAcbNda5guP67iQ5OmJ4F9RI8FJEG_CsxyNQOT8I4"
    onMounted(() => {
      const { id, ...options } = reactive(props);
      // @ts-ignore
      const viewer:Viewer = new Viewer(id, options);
      viewer.cesiumWidget.creditContainer.remove();
      emit(LOADED_EVENT, viewer);
    });
    return () => h('div', {
      id: props.id,
      class: "h-viewer"
    }) 

  }
})
</script>

<style lang="scss" scoped>
.h-viewer {
  width: 100%;
  height: 100%;
  cursor: auto !important;
}
</style>