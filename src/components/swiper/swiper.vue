<!-- vue 实现轮播图 -->
<template>
  <div>
    阿擦拭
  </div>
</template>

<!-- ts 文件拆分 -->
<script lang="ts">
  // 两种动画背景
  import {
    Component,
    Vue
  } from 'vue-property-decorator'
  import swiper from './ts/swiper'

  @Component({
    mixins: [swiper],
  })
  export default class extends Vue {}
</script>

<!-- 样式文件拆分 -->
<style lang="scss" scoped>
  @import url("./css/swiper.scss");
</style>