### 简介

dropdown目录下存放着toolbar组件下的所有下拉菜单

### 关于数据组织

区别于toolbar组件的vuex管理模式，所有的dropdown中的数据均在组件内部单独管理

### 如何获取Viewer

在`src/main.ts`中全局`install`后，在根结点调用`provide`方法。（借助`provide/inject`传送）

```typescript
// src/main.ts
import cesiumVue from './libs/cesium/cesium-vue'

const hub = createApp(App)
hub.use(cesiumVue)

// dropdown文件
import { CesiumRef, CESIUM_REF_KEY } from '@/libs/cesium/cesium-vue';
const cesiumRef = inject<CesiumRef>(CESIUM_REF_KEY);
const viewer = cesiumRef.viewer;
```

